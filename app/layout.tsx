import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title:
    "SONDA AI - Personal Finance Management Powered by Artificial Intelligence",
  description:
    "SONDA AI revolutionizes personal finance management with artificial intelligence, offering personalized insights, real-time monitoring, and tools to optimize your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={`${mulish.className} dark antialiased`}>
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
