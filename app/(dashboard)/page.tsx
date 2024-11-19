//app\(dashboard)\page.tsx
import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import PageTitle from "../_components/page-title";
import TimeSelect from "./_components/time-select";
import { redirect } from "next/navigation";
import Balance from "./_components/balance";
import { isMatch } from "date-fns";
import TransactionPieChart from "./_components/transaction-pie-charts";
import getDashboard from "../_lib/_data/get-dashboard";

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

  return (
    <>
      <Navbar />
      <div className="space-y-4 p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Dashboard</PageTitle>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <Balance month={month} {...dashboard} />

            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionPieChart {...dashboard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
