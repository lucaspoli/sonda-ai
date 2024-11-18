//app\(dashboard)\page.tsx
import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import PageTitle from "../_components/page-title";
import TimeSelect from "./_components/time-select";
import { redirect } from "next/navigation";
import Balance from "./_components/balance";
import { isMatch } from "date-fns";

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

  return (
    <>
      <Navbar />
      <div className="space-y-4 p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Dashboard</PageTitle>
          <TimeSelect />
        </div>
        <Balance month={month} />
      </div>
    </>
  );
};

export default HomePage;
