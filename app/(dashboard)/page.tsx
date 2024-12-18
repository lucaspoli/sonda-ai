import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import PageTitle from "../_components/page-title";
import TimeSelect from "./_components/time-select";
import { redirect } from "next/navigation";
import Balance from "./_components/balance";
import { isMatch } from "date-fns";
import TransactionPieChart from "./_components/transaction-pie-charts";
import getDashboard from "../_lib/_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_lib/_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";

interface HomePageProps {
  searchParams: { month?: string };
}

const HomePage = async ({ searchParams: { month } }: HomePageProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) {
    const currentMonth = new Date().toISOString().slice(5, 7);
    redirect(`/?month=${currentMonth}`);
  }

  const dashboard = await getDashboard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  const user = await (await clerkClient()).users.getUser(userId);
  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-4 overflow-hidden p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Dashboard</PageTitle>
          <div className="flex items-center gap-3">
            <AiReportButton
              month={month}
              hasPremiumPlan={
                user.publicMetadata.subscriptionPlan === "premium"
              }
            />
            <TimeSelect />
          </div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <Balance
              month={month}
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />

            <div className="grid grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
