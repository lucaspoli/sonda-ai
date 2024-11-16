"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/app/_components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            src="/logo-sonda.svg"
            width={123}
            height={30}
            alt="Sonda AI"
            className="mr-5"
          />
        </Link>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? `${buttonVariants({ variant: "secondary" })} font-extrabold`
              : buttonVariants({ variant: "ghost" })
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={`${
            pathname === "/transactions"
              ? `${buttonVariants({ variant: "secondary" })} font-extrabold`
              : buttonVariants({ variant: "ghost" })
          }`}
        >
          Transactions
        </Link>
        <Link
          href="/subscription"
          className={`${
            pathname === "/subscription"
              ? `${buttonVariants({ variant: "secondary" })} font-extrabold`
              : buttonVariants({ variant: "ghost" })
          }`}
        >
          Subscription
        </Link>
      </div>

      <div>
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
