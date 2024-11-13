"use client"

import { useMemo, useState } from "react"
import { Affix, Button, Drawer, Space, Grid } from "antd"
import { MenuOutlined, GithubOutlined } from "@ant-design/icons"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./language-switcher"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { useBreakpoint } = Grid

export function Header() {
  const { t } = useT()
  const screens = useBreakpoint()
  const isDesktop = screens.lg
  const [open, setOpen] = useState(false)

  const nav = useMemo(
    () => [
      { label: t("header.nav.protocol"), href: "#protocol" },
      { label: t("header.nav.products"), href: "#products" },
      { label: t("header.nav.useCases"), href: "#use-cases" },
      { label: t("header.nav.economy"), href: "#economy" },
      { label: t("header.nav.ecosystem"), href: "#ecosystem" },
      { label: t("header.nav.developers"), href: "#developers" },
      { label: t("header.nav.docs"), href: "https://doerflow.dev/docs" },
    ],
    [t],
  )

  return (
    <Affix offsetTop={0}>
      <header
        style={{
          width: "100%",
          background: "rgba(11,17,32,0.72)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="#top" aria-label={t("header.homeAria")} style={{ textDecoration: "none" }}>
            <Logo />
          </a>

          {isDesktop ? (
            <>
              <nav style={{ display: "flex", gap: 28 }}>
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="df-link"
                    style={{ fontSize: 14, fontWeight: 500 }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Space size={10}>
                <LanguageSwitcher compact />
                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  href="https://github.com/doerflow"
                  target="_blank"
                  style={{ color: COLORS.muted }}
                >
                  {t("common.github")}
                </Button>
                <Button href="https://doerflow.dev/docs" target="_blank" ghost>
                  {t("common.readDocs")}
                </Button>
                <Button type="primary">{t("common.launchApp")}</Button>
              </Space>
            </>
          ) : (
            <Space>
              <LanguageSwitcher compact />
              <Button
                type="text"
                aria-label={t("header.openMenu")}
                icon={<MenuOutlined style={{ color: COLORS.text, fontSize: 20 }} />}
                onClick={() => setOpen(true)}
              />
            </Space>
          )}
        </div>

        <Drawer
          title={<Logo />}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          styles={{ body: { background: COLORS.bg }, header: { background: COLORS.bg }, wrapper: { width: 300 } }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 16, color: COLORS.text, textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ height: 1, background: COLORS.border, margin: "8px 0" }} />
            <Button block ghost href="https://doerflow.dev/docs" target="_blank">
              {t("common.readDocs")}
            </Button>
            <Button block type="primary">
              {t("common.launchApp")}
            </Button>
          </nav>
        </Drawer>
      </header>
    </Affix>
  )
}
