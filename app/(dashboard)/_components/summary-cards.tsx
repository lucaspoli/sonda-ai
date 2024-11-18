import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../../_components/ui/card";
import AddTransactionButton from "../../_components/add-transaction-button";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  bg?: "bg";
}

const SummaryCards = ({
  icon,
  title,
  amount,
  size = "small",
  bg,
}: SummaryCardProps) => {
  return (
    <div className="space-y-6">
      <Card className={`${bg === "bg" ? "bg-white bg-opacity-10" : ""}`}>
        <CardHeader className="flex-row items-center gap-4">
          {icon}
          <p
            className={`text-white ${size === "small" ? "opacity-70" : "text-lg opacity-80"}`}
          >
            {title}
          </p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <span
            className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
          >
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount)}
          </span>
          {size === "large" && <AddTransactionButton />}
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
