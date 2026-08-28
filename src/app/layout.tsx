import { Hanken_Grotesk, Inter } from "next/font/google"

import "./globals.css"

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const display = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-display" })

export const metadata = {
  title: "Andrew Magdy — Developer & Designer",
  description: "Portfolio of Andrew Magdy, full-stack developer and designer.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${display.variable}`}><body>{children}</body></html>
}
