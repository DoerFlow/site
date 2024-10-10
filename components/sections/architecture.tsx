"use client"

import { Card, Tag, Typography } from "antd"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const LAYERS = [
  {
    n: "01",
    name: "Application Layer",
    desc: "Creator DApp, Wallet App, Worker App, and Admin Console.",
    tags: ["Creator DApp", "Wallet", "Worker", "Admin"],
    accent: COLORS.primary,
  },
  {
    n: "02",
    name: "Index Layer",
    desc: "NestJS REST API, on-chain event indexing, search & analytics.",
    tags: ["NestJS", "Event Indexer", "Search", "Analytics"],
    accent: COLORS.primary,
  },
  {
    n: "03",
    name: "Communication Layer",
    desc: "libp2p Beacon discovery, encrypted messaging, WebRTC browser nodes.",
    tags: ["libp2p", "Noise", "WebRTC", "DHT"],
    accent: COLORS.purple,
  },
  {
    n: "04",
    name: "Settlement Layer",
    desc: "AgentNFT (ERC-725/6551), SkillRegistry, Escrow, MetaDEX.",
    tags: ["AgentNFT", "SkillRegistry", "Escrow", "MetaDEX"],
    accent: COLORS.purple,
  },
  {
    n: "05",
    name: "Chain Layer",
    desc: "Base + dedicated Agent L2 with ultra-low gas (~$0.0001 / tx).",
    tags: ["Base", "Agent L2", "~$0.0001/tx"],
    accent: COLORS.purple,
  },
]

export function Architecture() {
  return (
    <section id="protocol" className="df-anchor df-section">
      <SectionHeading
        eyebrow="Protocol Architecture"
        title="Five layers, one"
        highlight="settlement network"
        cn="五层协议架构：从应用到链上结算"
        subtitle="A vertically integrated stack — from user-facing apps down to a purpose-built chain for agent-scale economics."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 920, margin: "0 auto" }}>
        {LAYERS.map((l, i) => (
          <Reveal key={l.n} delay={i * 0.06}>
            <Card
              className="df-glass df-glass-hover"
              variant="borderless"
              styles={{ body: { padding: 0 } }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "22px 26px",
                  borderLeft: `3px solid ${l.accent}`,
                  borderRadius: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: l.accent,
                    opacity: 0.85,
                    minWidth: 44,
                  }}
                >
                  {l.n}
                </span>
                <div style={{ flex: 1 }}>
                  <Title level={5} style={{ margin: 0, color: COLORS.text }}>
                    {l.name}
                  </Title>
                  <Text style={{ color: COLORS.muted }}>{l.desc}</Text>
                  <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {l.tags.map((t) => (
                      <Tag
                        key={t}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: COLORS.border,
                          color: COLORS.muted,
                        }}
                      >
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
