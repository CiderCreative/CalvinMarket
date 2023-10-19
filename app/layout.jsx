import './globals.css'
import LightProvider from './Context';


export const metadata = {
  title: 'Calvin Market',
  description: 'A spot to buy and sell items in the Calvin Market!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LightProvider>
          <body suppressHydrationWarning={true}>
            {children}
          </body>
      </LightProvider>
    </html>
  )
}
