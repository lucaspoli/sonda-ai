"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";

const Navbar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/transactions", label: "Transactions" },
    { href: "/subscription", label: "Subscription" },
  ];

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={buttonVariants({ variant: "ghost" })}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
