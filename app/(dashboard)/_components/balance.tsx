import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCards from "./summary-cards";
import { db } from "@/app/_lib/prisma";

interface BalanceProps {
  month: string;
}

const Balance = async ({ month }: BalanceProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryCards
        icon={<WalletIcon size={16} />}
        title="Balance"
        amount={balance}
        size={"large"}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCards
          icon={<PiggyBankIcon size={14} className="text-yellow-500" />}
          title="Invested"
          amount={investmentsTotal}
          size={"small"}
        />
        <SummaryCards
          icon={<TrendingUpIcon size={14} className="text-green-600" />}
          title="Income"
          amount={depositsTotal}
          size={"small"}
        />
        <SummaryCards
          icon={<TrendingDownIcon size={14} className="text-red-600" />}
          title="Expenses"
          amount={expensesTotal}
          size={"small"}
        />
      </div>
    </div>
  );
};

export default Balance;
