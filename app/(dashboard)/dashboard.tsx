import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCards from "./_components/summary-cards";

const DashboardPage = () => {
  return (
    <div className="space-y-6 p-6">
      <SummaryCards
        icon={<WalletIcon size={16} />}
        title="Balance"
        amount={0}
        size={"large"}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCards
          icon={<PiggyBankIcon size={14} className="text-yellow-500" />}
          title="Invested"
          amount={0}
          size={"small"}
        />
        <SummaryCards
          icon={<TrendingUpIcon size={14} className="text-green-600" />}
          title="Income"
          amount={0}
          size={"small"}
        />
        <SummaryCards
          icon={<TrendingDownIcon size={14} className="text-red-600" />}
          title="Expenses"
          amount={0}
          size={"small"}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
