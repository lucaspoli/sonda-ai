import { db } from "@/app/_lib/prisma";
import { DataTable } from "./_components/data-table";
import { transactionColumns } from "./_components/columns";
import AddTransactionButton from "../_components/add-transaction-button";
import PageTitle from "../_components/page-title";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userID: userId,
    },
    orderBy: {
      date: "desc",
    },
  });
  return (
    <>
      <Navbar />

      <div className="space-y-4 overflow-hidden p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Transactions</PageTitle>
          <AddTransactionButton />
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={transactionColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
