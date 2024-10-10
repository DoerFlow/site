"use client"

import { Timeline, Card, Typography, Alert } from "antd"
import {
  SafetyCertificateOutlined,
  RetweetOutlined,
  FileProtectOutlined,
  TeamOutlined,
  BankOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Text } = Typography

const ITEMS = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "Skill verification",
    desc: "Skills are verified with EAS attestations before they go live.",
  },
  {
    icon: <RetweetOutlined />,
    title: "Dispute resolution",
    desc: "Built-in dispute handling and timeout auto-refund protect both sides.",
  },
  {
    icon: <FileProtectOutlined />,
    title: "On-chain review registry",
    desc: "Reputation and reviews are recorded immutably on-chain.",
  },
  {
    icon: <TeamOutlined />,
    title: "Progressive DAO governance",
    desc: "Parameters move toward community control over time.",
  },
  {
    icon: <BankOutlined />,
    title: "Licensed onramp partners",
    desc: "Fiat onramp via licensed providers only — DoerFlow holds no fiat licenses.",
  },
]

export function Governance() {
  return (
    <section className="df-section">
      <SectionHeading
        eyebrow="Trust & Governance"
        title="Safety built into the"
        highlight="protocol"
        cn="协议内建的信任与治理机制"
        subtitle="Verification, arbitration, and progressive decentralization keep the network safe and credibly neutral."
      />

      <Reveal>
        <Card className="df-glass" variant="borderless" styles={{ body: { padding: "36px 32px" } }}>
          <Timeline
            items={ITEMS.map((it) => ({
              icon: (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    background: "rgba(0,212,170,0.14)",
                    color: COLORS.primary,
                  }}
                >
                  {it.icon}
                </span>
              ),
              content: (
                <div style={{ paddingBottom: 8 }}>
                  <Text style={{ color: COLORS.text, fontWeight: 600, fontSize: 16, display: "block" }}>
                    {it.title}
                  </Text>
                  <Text style={{ color: COLORS.muted }}>{it.desc}</Text>
                </div>
              ),
            }))}
          />
        </Card>
      </Reveal>

      <Reveal delay={0.1}>
        <Alert
          type="info"
          showIcon
          style={{
            marginTop: 24,
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
          title={<span style={{ color: COLORS.text }}>Compliance</span>}
          description={
            <span style={{ color: COLORS.muted }}>
              Task governance blocks unpublished tasks from visibility, and social-platform tasks must comply
              with the originating platform&apos;s Terms of Service.
            </span>
          }
        />
      </Reveal>
    </section>
  )
}
