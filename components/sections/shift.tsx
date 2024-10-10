"use client"

import { Row, Col, Card, Tag, Typography } from "antd"
import { CloudOutlined, TeamOutlined, RobotOutlined, ShopOutlined, UserOutlined, ThunderboltOutlined } from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Text, Title } = Typography

const ERAS = [
  {
    icon: <CloudOutlined />,
    era: "SaaS",
    traded: "Software subscriptions",
    captures: "Platforms",
    color: COLORS.muted,
  },
  {
    icon: <TeamOutlined />,
    era: "Web2 Gig",
    traded: "Human time",
    captures: "Platforms (high fees)",
    color: COLORS.muted,
  },
  {
    icon: <RobotOutlined />,
    era: "Agent Economy",
    traded: "Agents / Skills / Compute",
    captures: "Creators & Providers",
    color: COLORS.primary,
    highlight: true,
  },
]

const ROLES = [
  {
    icon: <ShopOutlined />,
    title: "Creators",
    desc: "Monetize private models and domain skills as on-chain assets with programmable royalties.",
  },
  {
    icon: <UserOutlined />,
    title: "Consumers",
    desc: "Discover, hire, and pay agents with escrow protection — no trust assumptions required.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Providers",
    desc: "Monetize idle GPU/CPU, complete human tasks, and connect IoT devices to earn on-chain.",
  },
]

export function Shift() {
  return (
    <section id="why" className="df-anchor df-section">
      <SectionHeading
        eyebrow="The Shift"
        title="Value is moving from platforms to"
        highlight="participants"
        cn="价值正在从平台转移到创造者与提供者"
        subtitle="Every computing era redefined what gets traded and who captures the value. The agent economy puts it back in the hands of those who create and provide."
      />

      <Row gutter={[24, 24]} style={{ marginBottom: 56 }}>
        {ERAS.map((e, i) => (
          <Col xs={24} md={8} key={e.era}>
            <Reveal delay={i * 0.08}>
              <Card
                className="df-glass df-glass-hover"
                variant="borderless"
                style={{
                  height: "100%",
                  borderColor: e.highlight ? "rgba(0,212,170,0.4)" : COLORS.border,
                }}
                styles={{ body: { padding: 28 } }}
              >
                <div
                  style={{
                    fontSize: 26,
                    color: e.highlight ? COLORS.primary : COLORS.muted,
                    marginBottom: 16,
                  }}
                >
                  {e.icon}
                </div>
                <Title level={4} style={{ margin: 0, color: COLORS.text }}>
                  {e.era}
                </Title>
                {e.highlight && (
                  <Tag color="cyan" style={{ marginTop: 8 }}>
                    Now emerging
                  </Tag>
                )}
                <div style={{ marginTop: 18 }}>
                  <Text style={{ color: COLORS.muted, fontSize: 13 }}>What&apos;s traded</Text>
                  <div style={{ color: COLORS.text, fontWeight: 600, marginTop: 2 }}>{e.traded}</div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <Text style={{ color: COLORS.muted, fontSize: 13 }}>Who captures value</Text>
                  <div
                    style={{
                      color: e.highlight ? COLORS.primary : COLORS.text,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {e.captures}
                  </div>
                </div>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        {ROLES.map((r, i) => (
          <Col xs={24} md={8} key={r.title}>
            <Reveal delay={i * 0.08}>
              <div style={{ padding: "8px 4px" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,212,170,0.12)",
                    color: COLORS.primary,
                    fontSize: 20,
                    marginBottom: 14,
                  }}
                >
                  {r.icon}
                </div>
                <Title level={5} style={{ margin: "0 0 6px", color: COLORS.text }}>
                  {r.title}
                </Title>
                <Text style={{ color: COLORS.muted, lineHeight: 1.65 }}>{r.desc}</Text>
              </div>
            </Reveal>
          </Col>
        ))}
      </Row>
    </section>
  )
}
