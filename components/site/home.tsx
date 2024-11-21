import { Header } from "@/components/site/header"
import { Hero } from "@/components/sections/hero"
import { Shift } from "@/components/sections/shift"
import { Architecture } from "@/components/sections/architecture"
import { Features } from "@/components/sections/features"
import { Products } from "@/components/sections/products"
import { HowItWorks } from "@/components/sections/how-it-works"
import { UseCases } from "@/components/sections/use-cases"
import { Economy } from "@/components/sections/economy"
import { AgentChain } from "@/components/sections/agent-chain"
import { Ecosystem } from "@/components/sections/ecosystem"
import { Developers } from "@/components/sections/developers"
import { Governance } from "@/components/sections/governance"
import { Roadmap } from "@/components/sections/roadmap"
import { FooterCta } from "@/components/sections/footer-cta"
import { Footer } from "@/components/sections/footer"

function Divider() {
  return <div className="df-section-divider" />
}

export function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Shift />
      <Divider />
      <Architecture />
      <Features />
      <Divider />
      <Products />
      <HowItWorks />
      <Divider />
      <UseCases />
      <Economy />
      <AgentChain />
      <Ecosystem />
      <Divider />
      <Developers />
      <Governance />
      <Roadmap />
      <FooterCta />
      <Footer />
    </main>
  )
}
