import './globals.css'
import LightProvider from './Context';
import { Lato } from "@next/font/google"
import { getServerSession } from "next-auth";
import SessionProvider from "../components/Backend/SessionProvider.jsx"


const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
});


export const metadata = {
  title: 'Calvin Market',
  description: 'A spot to buy and sell items in the Calvin Market!',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();
  console.log(session)
  return (
    <html lang="en" className={lato.className}>

      <LightProvider>
          <body suppressHydrationWarning={true}>
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </body>
      </LightProvider>
    </html>
  )
}
