import type { Metadata } from "next"
import { SITE_URL } from "@/lib/urls"
import type { Locale } from "./config"
import { LOCALES } from "./config"
import { messagesByLocale } from "./messages"
import { localePath } from "./paths"

export function buildPageMetadata(locale: Locale): Metadata {
  const messages = messagesByLocale[locale]
  const languages: Record<string, string> = {}
  for (const code of LOCALES) {
    languages[code] = `${SITE_URL}${localePath(code)}`
  }
  languages["x-default"] = `${SITE_URL}/`

  const url = `${SITE_URL}${localePath(locale)}`

  return {
    metadataBase: new URL(SITE_URL),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url,
      siteName: "DoerFlow",
      locale,
      type: "website",
    },
  }
}
