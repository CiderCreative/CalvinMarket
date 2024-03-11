import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";
//import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../components/Global/ThemeProvider";

export const metadata = {
  title: "Calvin Market",
  description: "A spot to buy and sell items in the Calvin Market!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body suppressHydrationWarning={true}>
          <SessionProvider>{children}</SessionProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
