import { DEFAULT_LOCALE, type Locale } from "./config"

export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`
}
