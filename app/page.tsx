import type { Metadata } from "next"
import { Home } from "@/components/site/home"
import { Providers } from "@/components/site/providers"
import { DEFAULT_LOCALE } from "@/lib/i18n/config"
import { buildPageMetadata } from "@/lib/i18n/metadata"

export function generateMetadata(): Metadata {
  return buildPageMetadata(DEFAULT_LOCALE)
}

export default function Page() {
  return (
    <Providers initialLocale={DEFAULT_LOCALE}>
      <Home />
    </Providers>
  )
}
