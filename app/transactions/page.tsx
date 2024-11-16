import { db } from "@/app/_lib/prisma";
import { DataTable } from "./_components/data-table";
import { transactionColumns } from "./_components/columns";
import AddTransactionButton from "../_components/add-transaction-button";
import PageTitle from "../_components/page-title";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="space-y-4 p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Transactions</PageTitle>
          <AddTransactionButton />
        </div>
        <div>
          <DataTable columns={transactionColumns} data={transactions} />
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
