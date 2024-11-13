import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2 p-7">
      <div className="relative h-full w-full">
        <Image
          src="/background-login.png"
          alt="Background login page"
          fill
          className="rounded-3xl object-cover"
          draggable="false"
        />
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <Card className="w-full max-w-[450px]">
          <CardHeader>
            <Image
              src="/logo-sonda.svg"
              alt="Sonda AI"
              width={123}
              height={30}
              className="mb-9"
              draggable="false"
            />
            <CardTitle>Welcome</CardTitle>
            <CardDescription className="text-base">
              Sonda AI is an intelligent financial platform that monitors your
              transactions and provides personalized insights, making budget
              control and financial decision-making easier.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInButton>
              <Button variant={"secondary"} className="w-full p-6 text-base">
                <LogInIcon />
                Log In or Create Account
              </Button>
            </SignInButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
