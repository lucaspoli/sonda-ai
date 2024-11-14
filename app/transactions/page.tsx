import { db } from "@/app/_lib/prisma";
import { Button } from "../_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "./_components/data-table";
import { transactionColumns } from "./_components/columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-4 p-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Button className="rounded-full px-6 text-sm">
          <ArrowDownUpIcon />
          Add Transaction
        </Button>
      </div>
      <div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
