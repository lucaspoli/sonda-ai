import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import PageTitle from "../_components/page-title";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-4 overflow-hidden p-8">
        <div className="flex w-full items-center justify-between">
          <PageTitle>Subscription</PageTitle>
        </div>
        <div className="flex gap-6">
          <Card className="w-[350px] p-6">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                PLANO GRÁTIS
              </h2>
              <div className="flex items-end justify-center">
                <span className="self-start text-2xl font-black">$</span>
                <span className="text-7xl font-black">0</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <p>
                  <del> Relatórios de IA </del>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[350px] p-6">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">PREMIUM</h2>
              <div className="flex items-end justify-center">
                <span className="self-start text-2xl font-black">$</span>
                <span className="text-7xl font-black">19</span>
                <div className="self-end text-xl text-muted-foreground">
                  /mo
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" />
                <p>Transações Ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
            <CardFooter>
              <AcquirePlanButton />
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
