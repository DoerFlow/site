"use client"

import { GlobalOutlined } from "@ant-design/icons"
import { Select } from "antd"
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useT()

  return (
    <Select<Locale>
      value={locale}
      onChange={setLocale}
      size={compact ? "small" : "middle"}
      aria-label={t("lang.label")}
      suffixIcon={<GlobalOutlined style={{ color: COLORS.muted }} />}
      popupMatchSelectWidth={false}
      options={LOCALES.map((code) => ({
        value: code,
        label: LOCALE_LABELS[code],
      }))}
      style={{ minWidth: compact ? 120 : 140 }}
    />
  )
}
