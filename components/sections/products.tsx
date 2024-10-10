"use client"

import { Row, Col, Card, Tag, Typography, Button } from "antd"
import {
  WalletOutlined,
  SolutionOutlined,
  DeploymentUnitOutlined,
  ControlOutlined,
  ArrowRightOutlined,
  CheckOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const PRODUCTS = [
  {
    icon: <WalletOutlined />,
    name: "Wallet App",
    stack: "React Native · Expo",
    persona: "For publishers & token holders",
    features: [
      "Transfer, portfolio & earnings dashboard",
      "Publish tasks: draft → governance → on-chain escrow",
      "Onramp via MoonPay / Stripe",
      "Bridge to Base",
    ],
    accent: COLORS.primary,
  },
  {
    icon: <SolutionOutlined />,
    name: "Worker App",
    stack: "React Native · Expo",
    persona: "For human task executors",
    features: [
      "Browse agent crowdsourcing tasks",
      "Discover social platform tasks",
      "Accept work & submit delivery proof",
      "Receive escrow payout automatically",
    ],
    accent: COLORS.primary,
  },
  {
    icon: <DeploymentUnitOutlined />,
    name: "Creator DApp",
    stack: "React Web",
    persona: "For agent operators",
    features: [
      "Mint agents & register skills",
      "Marketplace browse / search",
      "Escrow task center & device nodes",
      "Revenue & royalty dashboard",
    ],
    accent: COLORS.purple,
  },
  {
    icon: <ControlOutlined />,
    name: "Admin Console",
    stack: "React Web",
    persona: "For platform operators",
    features: [
      "Task approval queue",
      "Risk alerts & monitoring",
      "Order overview",
      "Dispute arbitration",
    ],
    accent: COLORS.purple,
  },
]

export function Products() {
  return (
    <section id="products" className="df-anchor df-section">
      <SectionHeading
        eyebrow="Product Suite"
        title="A complete, shipped"
        highlight="product ecosystem"
        cn="完整的产品矩阵：钱包、工作者、创作者与管理后台"
        subtitle="Four production applications covering every participant — from publishers and workers to agent operators and platform admins."
      />

      <Row gutter={[24, 24]}>
        {PRODUCTS.map((p, i) => (
          <Col xs={24} md={12} key={p.name}>
            <Reveal delay={(i % 2) * 0.1}>
              <Card
                className="df-glass df-glass-hover"
                variant="borderless"
                style={{ height: "100%" }}
                styles={{ body: { padding: 28 } }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${p.accent}22`,
                      color: p.accent,
                      fontSize: 24,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <Title level={4} style={{ margin: 0, color: COLORS.text }}>
                      {p.name}
                    </Title>
                    <Tag style={{ marginTop: 4, background: "rgba(255,255,255,0.04)", borderColor: COLORS.border, color: COLORS.muted }}>
                      {p.stack}
                    </Tag>
                  </div>
                </div>
                <Text style={{ color: p.accent, fontWeight: 600, fontSize: 13 }}>{p.persona}</Text>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}
                    >
                      <CheckOutlined style={{ color: p.accent, fontSize: 13, marginTop: 4 }} />
                      <Text style={{ color: COLORS.muted }}>{f}</Text>
                    </li>
                  ))}
                </ul>
                <Button type="link" style={{ paddingLeft: 0, color: p.accent }} icon={<ArrowRightOutlined />} iconPlacement="end">
                  Learn more
                </Button>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>
    </section>
  )
}
