"use client"

import { useState } from "react"
import { Affix, Button, Drawer, Space, Grid } from "antd"
import { MenuOutlined, GithubOutlined } from "@ant-design/icons"
import { Logo } from "./logo"
import { COLORS } from "@/lib/theme"

const { useBreakpoint } = Grid

const NAV = [
  { label: "Protocol", href: "#protocol" },
  { label: "Products", href: "#products" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Economy", href: "#economy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Developers", href: "#developers" },
  { label: "Docs", href: "https://doerflow.dev/docs" },
]

export function Header() {
  const screens = useBreakpoint()
  const isDesktop = screens.lg
  const [open, setOpen] = useState(false)

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
          <a href="#top" aria-label="DoerFlow home" style={{ textDecoration: "none" }}>
            <Logo />
          </a>

          {isDesktop ? (
            <>
              <nav style={{ display: "flex", gap: 28 }}>
                {NAV.map((item) => (
                  <a key={item.label} href={item.href} className="df-link" style={{ fontSize: 14, fontWeight: 500 }}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <Space size={10}>
                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  href="https://github.com/doerflow"
                  target="_blank"
                  style={{ color: COLORS.muted }}
                >
                  GitHub
                </Button>
                <Button href="https://doerflow.dev/docs" target="_blank" ghost>
                  Read Docs
                </Button>
                <Button type="primary">Launch App</Button>
              </Space>
            </>
          ) : (
            <Button
              type="text"
              aria-label="Open menu"
              icon={<MenuOutlined style={{ color: COLORS.text, fontSize: 20 }} />}
              onClick={() => setOpen(true)}
            />
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
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 16, color: COLORS.text, textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ height: 1, background: COLORS.border, margin: "8px 0" }} />
            <Button block ghost href="https://doerflow.dev/docs" target="_blank">
              Read Docs
            </Button>
            <Button block type="primary">
              Launch App
            </Button>
          </nav>
        </Drawer>
      </header>
    </Affix>
  )
}
