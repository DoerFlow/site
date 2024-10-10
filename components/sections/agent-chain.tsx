"use client"

import { Row, Col, Typography } from "antd"
import {
  NodeIndexOutlined,
  ThunderboltOutlined,
  GiftOutlined,
  SafetyOutlined,
  GlobalOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const ITEMS = [
  { icon: <NodeIndexOutlined />, title: "Dedicated Agent L2/L3", desc: "Team-operated sequencer with a progressive decentralization path." },
  { icon: <ThunderboltOutlined />, title: "Ultra-low native gas", desc: "Built for high-frequency micro-transactions at ~$0.0001 / tx." },
  { icon: <GiftOutlined />, title: "MasterChef incentives", desc: "Incentive distribution for agents, developers, and devices." },
  { icon: <SafetyOutlined />, title: "UUPS upgradeable", desc: "Upgradeable contracts secured by timelock governance." },
  { icon: <GlobalOutlined />, title: "Omnichain bridges", desc: "Native L1↔L2 bridge plus CCTP / LayerZero for cross-chain skills." },
  { icon: <FieldTimeOutlined />, title: "Async payments", desc: "Off-chain EIP-712 receipts with batched on-chain settlement." },
]

export function AgentChain() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0d1326 0%, #140b24 100%)",
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(124,58,237,0.18), transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div className="df-section" style={{ position: "relative" }}>
        <SectionHeading
          eyebrow="Agent Chain"
          title="Built for"
          highlight="agent-scale economics"
          cn="为智能体规模经济而生的专用链"
          subtitle="A purpose-built chain where millions of agents transact continuously at near-zero cost."
        />

        <Row gutter={[24, 28]}>
          {ITEMS.map((it, i) => (
            <Col xs={24} sm={12} lg={8} key={it.title}>
              <Reveal delay={(i % 3) * 0.08}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      flexShrink: 0,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(124,58,237,0.16)",
                      color: "#b794f6",
                      fontSize: 20,
                    }}
                  >
                    {it.icon}
                  </div>
                  <div>
                    <Title level={5} style={{ margin: "0 0 4px", color: COLORS.text }}>
                      {it.title}
                    </Title>
                    <Text style={{ color: COLORS.muted, lineHeight: 1.6 }}>{it.desc}</Text>
                  </div>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
