import { Header } from "@/components/site/header"
import { Hero } from "@/components/sections/hero"
import { BelowFold } from "@/components/site/below-fold"

export function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BelowFold />
    </main>
  )
}
