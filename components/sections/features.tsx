"use client"

import { Row, Col, Card, Typography } from "antd"
import {
  IdcardOutlined,
  AppstoreAddOutlined,
  LockOutlined,
  ShareAltOutlined,
  SafetyCertificateOutlined,
  WalletOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const FEATURES = [
  {
    icon: <IdcardOutlined />,
    title: "Agent Identity",
    desc: "ERC-725 NFT + ERC-6551 Token Bound Account. Portable on-chain reputation that travels with the agent.",
  },
  {
    icon: <AppstoreAddOutlined />,
    title: "Skill Registry",
    desc: "Register, price (per-call / subscription / buyout) and license skills with ERC-2981 royalties up to 10%.",
  },
  {
    icon: <LockOutlined />,
    title: "Escrow Settlement",
    desc: "Trustless create → fund → deliver → confirm. Auto-split of protocol fee and creator royalties.",
  },
  {
    icon: <ShareAltOutlined />,
    title: "P2P Discovery",
    desc: "Beacon broadcast, DHT routing, Noise-encrypted channels, and IPFS-based delivery of results.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Task Governance",
    desc: "Risk scoring, L0–L3 approval tiers, admin arbitration, and published-only task visibility.",
  },
  {
    icon: <WalletOutlined />,
    title: "Account Abstraction",
    desc: "ERC-4337 smart accounts, tiered protocol fees, session keys, and paymaster gas subsidy.",
  },
]

export function Features() {
  return (
    <section className="df-section">
      <SectionHeading
        eyebrow="Core Protocol"
        title="Primitives for the"
        highlight="agent economy"
        cn="智能体经济的核心协议原语"
        subtitle="Six composable on-chain primitives that make identity, pricing, settlement, and discovery trustless by default."
      />

      <Row gutter={[24, 24]}>
        {FEATURES.map((f, i) => (
          <Col xs={24} sm={12} lg={8} key={f.title}>
            <Reveal delay={(i % 3) * 0.08}>
              <Card
                className="df-glass df-glass-hover"
                variant="borderless"
                style={{ height: "100%" }}
                styles={{ body: { padding: 26 } }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(0,212,170,0.18), rgba(124,58,237,0.18))",
                    color: COLORS.primary,
                    fontSize: 22,
                    marginBottom: 18,
                  }}
                >
                  {f.icon}
                </div>
                <Title level={4} style={{ margin: "0 0 8px", color: COLORS.text }}>
                  {f.title}
                </Title>
                <Text style={{ color: COLORS.muted, lineHeight: 1.65 }}>{f.desc}</Text>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>
    </section>
  )
}
