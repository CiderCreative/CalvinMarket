import "./globals.css";
import LightProvider from "./Context";
import { GeistSans } from "geist/font/sans";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";
//import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Calvin Market",
  description: "A spot to buy and sell items in the Calvin Market!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <LightProvider>
        <body suppressHydrationWarning={true}>
          <SessionProvider>{children}</SessionProvider>
        </body>
      </LightProvider>
    </html>
  );
}
