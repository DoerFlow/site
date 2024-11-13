import { DEFAULT_LOCALE, type Locale } from "./config"

/** Map browser language to supported locale. Default: English. */
export function detectLocaleFromNavigator(language?: string): Locale {
  const lang = (language ?? "").toLowerCase()

  if (lang.startsWith("zh")) {
    if (
      lang.includes("tw") ||
      lang.includes("hk") ||
      lang.includes("hant") ||
      lang === "zh-hk" ||
      lang === "zh-mo"
    ) {
      return "zh-TW"
    }
    return "zh-CN"
  }

  if (lang.startsWith("es")) return "es"
  if (lang.startsWith("pt")) return "pt"
  if (lang.startsWith("nl")) return "nl"
  if (lang.startsWith("it")) return "it"
  if (lang.startsWith("ja")) return "ja"
  if (lang.startsWith("ko")) return "ko"

  return DEFAULT_LOCALE
}
