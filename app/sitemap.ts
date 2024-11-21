import type { MetadataRoute } from "next"
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config"
import { localePath } from "@/lib/i18n/paths"
import { SITE_URL } from "@/lib/urls"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === DEFAULT_LOCALE ? 1 : 0.8,
  }))
}
