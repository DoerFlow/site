"use client"

import { I18nProvider } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/config"
import type { ReactNode } from "react"

export function Providers({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  return <I18nProvider initialLocale={initialLocale}>{children}</I18nProvider>
}
