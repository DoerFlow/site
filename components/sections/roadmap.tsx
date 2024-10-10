"use client"

import { Row, Col, Card, Typography, Tag } from "antd"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const PHASES = [
  {
    version: "v0.1",
    name: "MVP",
    status: "Now",
    statusColor: COLORS.primary,
    items: ["Agent NFT & Skill Registry", "Escrow settlement on Base", "Wallet, Worker & Creator apps"],
  },
  {
    version: "v0.2",
    name: "P2P Network",
    status: "Next",
    statusColor: "#b794f6",
    items: ["libp2p Beacon discovery", "Noise-encrypted channels", "WebRTC browser nodes"],
  },
  {
    version: "v0.7",
    name: "Agent L2",
    status: "Planned",
    statusColor: COLORS.muted,
    items: ["Dedicated Agent L2", "Ultra-low gas micro-tx", "Omnichain skill routing"],
  },
]

export function Roadmap() {
  return (
    <section className="df-section">
      <SectionHeading
        eyebrow="Roadmap"
        title="The path to an"
        highlight="autonomous economy"
        cn="迈向自主经济的路线图"
        subtitle="From an escrow-secured MVP today to a fully P2P, agent-scale settlement chain."
      />

      <Row gutter={[24, 24]}>
        {PHASES.map((p, i) => (
          <Col xs={24} md={8} key={p.version}>
            <Reveal delay={i * 0.1}>
              <Card
                className="df-glass df-glass-hover"
                variant="borderless"
                style={{ height: "100%", borderTop: `3px solid ${p.statusColor}` }}
                styles={{ body: { padding: 28 } }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="df-gradient-text" style={{ fontSize: 30, fontWeight: 800 }}>
                    {p.version}
                  </span>
                  <Tag
                    style={{
                      background: `${p.statusColor}1f`,
                      borderColor: `${p.statusColor}55`,
                      color: p.statusColor,
                      margin: 0,
                    }}
                  >
                    {p.status}
                  </Tag>
                </div>
                <Title level={4} style={{ margin: "10px 0 16px", color: COLORS.text }}>
                  {p.name}
                </Title>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {p.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: p.statusColor, marginTop: 7, width: 6, height: 6, borderRadius: 999, background: p.statusColor, flexShrink: 0 }} />
                      <Text style={{ color: COLORS.muted }}>{it}</Text>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>
    </section>
  )
}
