"use client"

import { LogIn, Menu, X } from "lucide-react"
import { useMemo, useState } from "react"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./language-switcher"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"
import { DOCS_URL } from "@/lib/urls"

const LOGIN_URL = "https://app.doerflow.dev"

export function Header() {
  const { t } = useT()
  const [open, setOpen] = useState(false)

  const nav = useMemo(
    () => [
      { label: t("header.nav.protocol"), href: "#protocol" },
      { label: t("header.nav.products"), href: "#products" },
      { label: t("header.nav.useCases"), href: "#use-cases" },
      { label: t("header.nav.economy"), href: "#economy" },
      { label: t("header.nav.ecosystem"), href: "#ecosystem" },
      { label: t("header.nav.developers"), href: "#developers" },
      { label: t("header.nav.docs"), href: DOCS_URL },
    ],
    [t],
  )

  return (
    <header
      className="df-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        width: "100%",
        background: "rgba(11,17,32,0.72)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div className="df-header-inner">
        <a href="#top" aria-label={t("header.homeAria")} style={{ textDecoration: "none" }}>
          <Logo />
        </a>

        <nav className="df-header-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="df-link" style={{ fontSize: 14, fontWeight: 500 }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="df-header-actions">
          <LanguageSwitcher />
          <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="df-header-login">
            <LogIn size={16} aria-hidden />
            <span>{t("header.login")}</span>
          </a>
          <button
            type="button"
            className="df-header-menu-btn"
            aria-label={t("header.openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="df-header-drawer">
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
            <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="df-btn df-btn-primary df-btn-block">
              <LogIn size={16} aria-hidden />
              {t("header.login")}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
