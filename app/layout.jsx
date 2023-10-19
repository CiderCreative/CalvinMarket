import './globals.css'
import LightProvider from './Context';
import { Lato } from "@next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
});


export const metadata = {
  title: 'Calvin Market',
  description: 'A spot to buy and sell items in the Calvin Market!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <LightProvider>
          <body suppressHydrationWarning={true}>
            {children}
          </body>
      </LightProvider>
    </html>
  )
}
