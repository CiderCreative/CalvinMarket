import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";
//import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../components/Global/ThemeProvider";
import { Suspense } from "react";

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
          <SessionProvider>
            <Suspense fallback={LoadingSpinner}>{children}</Suspense>
          </SessionProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

async function LoadingSpinner() {
  "use server";
  return (
    <div className="flex h-screen items-center justify-center">
      <svg
        className="text-gray-500 h-10 w-10 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c3.042 0 5.824-1.135 7.938-3l-2.647-3A7.962 7.962 0 0112 16v4zm5.291-10H20c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0116 12h4zM12 4c-3.042 0-5.824 1.135-7.938 3l2.647 3A7.962 7.962 0 0112 8V4zm-2.709 5.291l-3 2.647A7.962 7.962 0 014 12h4c0-1.657.51-3.19 1.382-4.459z"
        ></path>
      </svg>
    </div>
  );
}
