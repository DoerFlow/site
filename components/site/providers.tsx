"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import enUS from "antd/locale/en_US"
import esES from "antd/locale/es_ES"
import itIT from "antd/locale/it_IT"
import jaJP from "antd/locale/ja_JP"
import koKR from "antd/locale/ko_KR"
import nlNL from "antd/locale/nl_NL"
import ptBR from "antd/locale/pt_BR"
import zhCN from "antd/locale/zh_CN"
import zhTW from "antd/locale/zh_TW"
import { ConfigProvider, App as AntdApp } from "antd"
import { I18nProvider, useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/config"
import { darkTheme } from "@/lib/theme"
import type { ReactNode } from "react"

const ANTD_LOCALES: Record<Locale, typeof enUS> = {
  en: enUS,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  es: esES,
  pt: ptBR,
  nl: nlNL,
  it: itIT,
  ja: jaJP,
  ko: koKR,
}

function AntdLocaleBridge({ children }: { children: ReactNode }) {
  const { locale } = useI18n()
  return (
    <ConfigProvider theme={darkTheme} locale={ANTD_LOCALES[locale]}>
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  )
}

export function Providers({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  return (
    <I18nProvider initialLocale={initialLocale}>
      <AntdRegistry>
        <AntdLocaleBridge>{children}</AntdLocaleBridge>
      </AntdRegistry>
    </I18nProvider>
  )
}
