"use client"

import { useEffect } from "react"
import { useT } from "@/lib/i18n/context"

export function LocaleHead() {
  const { t, locale } = useT()

  useEffect(() => {
    document.title = t("meta.title")
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", t("meta.description"))
    document.documentElement.lang = locale
  }, [t, locale])

  return null
}
