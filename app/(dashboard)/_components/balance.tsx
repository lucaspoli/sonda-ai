import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCards from "./summary-cards";

interface BalanceProps {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const Balance = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: BalanceProps) => {
  return (
    <div className="space-y-6">
      <SummaryCards
        icon={<WalletIcon size={16} />}
        title="Balance"
        amount={balance}
        size={"large"}
        bg="bg"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCards
          icon={<PiggyBankIcon size={14} className="text-yellow-500" />}
          title="Invested"
          amount={investmentsTotal}
          size={"small"}
          bg="bg"
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
