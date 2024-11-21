import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Home } from "@/components/site/home"
import { Providers } from "@/components/site/providers"
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config"
import { LOCALES } from "@/lib/i18n/config"
import { buildPageMetadata } from "@/lib/i18n/metadata"

export function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return buildPageMetadata(locale)
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound()

  return (
    <Providers initialLocale={locale}>
      <Home />
    </Providers>
  )
}
