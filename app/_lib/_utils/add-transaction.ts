"use server";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { db } from "../prisma";
import { auth } from "@clerk/nextjs/server";
import { upsertTransactionSchema } from "./schema-transaction";
import { revalidatePath } from "next/cache";

interface upsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: upsertTransactionParams) => {
  upsertTransactionSchema.parse(params);

  const { userId: userID } = await auth();

  if (!userID) {
    throw new Error("Unauthorized");
  }

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, userID },
    create: { ...params, userID },
  });

  revalidatePath("/transactions");
};
