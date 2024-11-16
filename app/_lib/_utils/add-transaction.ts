"use server";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { db } from "../prisma";
import { auth } from "@clerk/nextjs/server";
import { addTransactionSchema } from "./schema-transaction";
import { revalidatePath } from "next/cache";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...params, userID: userId },
  });
  revalidatePath("/transactions");
};
