import { Transaction, TransactionType } from "@prisma/client";
import { Badge } from "@/app/_components/ui/badge";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green-600 text-[9px] font-black tracking-widest hover:bg-green-700">
        DEPOSIT
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-600 text-[9px] font-black tracking-widest hover:bg-red-700">
        EXPENSE
      </Badge>
    );
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-amber-500 text-[9px] font-black tracking-widest hover:bg-amber-600">
        INVESTMENT
      </Badge>
    );
  }
  return null;
};

export default TransactionTypeBadge;
