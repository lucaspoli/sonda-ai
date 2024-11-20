"use server";

import { db } from "@/app/_lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";

const generateAiReport = async ({ month }: GenerateAiReportSchema) => {
  generateAiReportSchema.parse({ month });
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await (await clerkClient()).users.getUser(userId);

  const hasPremiumPlan =
    (await (await user).publicMetadata.subscriptionPlan) == "premium";
  if (!hasPremiumPlan) {
    throw new Error("You need premium plan to generate AI reports");
  }

  const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const year = new Date().getFullYear();

  const transactions = await db.transaction.findMany({
    where: {
      userID: userId,
      date: {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${month}-31`),
      },
    },
  });

  const content = `
  Analyze my personal finances based on the transactions listed below and provide a detailed report. Include:
  1. Insights into my current financial health, identifying spending patterns, savings, and investments.
  2. Practical suggestions to improve my financial life, such as areas to reduce expenses or strategies to increase savings.
  3. Comparisons among spending categories to highlight which areas consume most of my budget.
  4. Identify the most used payment methods and analyze their impacts, such as excessive use of credit.
  5. Indicate the percentage of income spent on essential categories (e.g., Health and Housing) and non-essential categories (e.g., Entertainment).
  6. Suggest tips to better balance my expenses based on the trends identified.
  
  The transactions are formatted as: {DATE}-{AMOUNT}-{TYPE}-{CATEGORY}-{PAYMENT_METHOD}. Here are the data:
    ${transactions
      .map(
        (transaction) =>
          `${transaction.date.toLocaleDateString("en-US")}-R$${transaction.amount}-${transaction.type}-${transaction.category}-${transaction.paymentMethod}`,
      )
      .join(";")}.
  Use this information to generate an objective, clear, and actionable report.`;
  const completion = await openAi.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a specialist in personal financial management with deep expertise in data analysis, financial organization, and strategic planning. Your mission is to help individuals understand their finances, identify savings opportunities, reduce unnecessary expenses, and achieve their financial goals through clear insights and actionable guidance.",
      },
      {
        role: "user",
        content,
      },
    ],
  });

  return completion.choices[0].message.content;
};

export default generateAiReport;
