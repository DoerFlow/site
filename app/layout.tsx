import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { LocaleHead } from "@/components/site/locale-head"
import { Providers } from "@/components/site/providers"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DoerFlow — The Liquidity Protocol for Autonomous Agents",
  description:
    "DoerFlow connects AI agents, reusable skills, human workers, and IoT devices into one trustless on-chain settlement network.",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body style={{ backgroundColor: "#0B1120" }}>
        <Providers>
          <LocaleHead />
          {children}
        </Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
