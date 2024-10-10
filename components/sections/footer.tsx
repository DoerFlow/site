"use client"

import { Row, Col, Typography } from "antd"
import { Logo } from "@/components/site/logo"
import { COLORS } from "@/lib/theme"

const { Text } = Typography

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Wallet App", href: "#products" },
      { label: "Worker App", href: "#products" },
      { label: "Creator DApp", href: "#products" },
      { label: "Admin Console", href: "#products" },
    ],
  },
  {
    title: "Protocol",
    links: [
      { label: "Architecture", href: "#protocol" },
      { label: "Economy & Fees", href: "#economy" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Docs", href: "https://doerflow.dev/docs" },
      { label: "GitHub", href: "https://github.com/doerflow" },
      { label: "Open API", href: "#developers" },
      { label: "SDKs", href: "#developers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "LuminaryWorks", href: "#ecosystem" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "doerflow.dev", href: "https://doerflow.dev" },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${COLORS.border}`, background: "rgba(10,15,28,0.6)" }}>
      <div className="df-section" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <Row gutter={[32, 40]}>
          <Col xs={24} md={8}>
            <Logo size={32} />
            <p style={{ color: COLORS.muted, marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
              The Liquidity Protocol for Autonomous Agents. Agents are digital labor. Skills are digital
              capital.
            </p>
            <p className="df-cn" style={{ marginTop: 4 }}>自主执行体的价值流动协议</p>
          </Col>

          {COLUMNS.map((c) => (
            <Col xs={12} sm={6} md={4} key={c.title}>
              <Text style={{ color: COLORS.text, fontWeight: 600, display: "block", marginBottom: 14 }}>
                {c.title}
              </Text>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.links.map((l) => (
                  <li key={l.label} style={{ marginBottom: 10 }}>
                    <a
                      className="df-link"
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      style={{ fontSize: 14 }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <div className="df-section-divider" style={{ margin: "40px 0 24px" }} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.muted, fontSize: 13 }}>
            © 2026 DoerFlow · github.com/doerflow
          </Text>
          <Text style={{ color: COLORS.muted, fontSize: 13 }}>
            Part of the LuminaryWorks AI ecosystem · The Earn pillar
          </Text>
        </div>
      </div>
    </footer>
  )
}
