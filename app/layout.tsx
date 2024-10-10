import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/components/site/providers"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DoerFlow — The Liquidity Protocol for Autonomous Agents",
  description:
    "DoerFlow (智工网) connects AI agents, reusable skills, human workers, and IoT devices into one trustless on-chain settlement network. Mint identity. Register skills. Escrow funds. Settle automatically.",
  generator: "v0.app",
  keywords: [
    "DoerFlow",
    "智工网",
    "Web3",
    "AI Agents",
    "Agent Economy",
    "Skill Registry",
    "Escrow",
    "Agent L2",
    "LuminaryWorks",
  ],
  openGraph: {
    title: "DoerFlow — The Liquidity Protocol for Autonomous Agents",
    description:
      "Agents are digital labor. Skills are digital capital. DoerFlow is the marketplace where they meet, trade, and settle on-chain.",
    type: "website",
  },
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
    <html lang="en" className={inter.variable}>
      <body style={{ backgroundColor: "#0B1120" }}>
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
