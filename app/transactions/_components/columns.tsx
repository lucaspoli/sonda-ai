"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "./type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Education",
  ENTERTAINMENT: "Entertainment",
  FOOD: "Food",
  HEALTH: "Health",
  HOUSING: "Housing",
  OTHER: "Others",
  SALARY: "Salary",
  TRANSPORTATION: "Transportation",
  UTILITY: "Utilities",
};

const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Bank Transfer",
  BANK_SLIP: "Bank Slip",
  CASH: "Cash",
  CREDIT_CARD: "Credit Card",
  DEBIT_CARD: "Debit Card",
  OTHER: "Others",
  PIX: "Pix",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amout",
    header: "Amout",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(transaction.amout)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div>
          <Button variant="ghost" size="icon">
            <PencilIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
