"use client"

import { Row, Col, Table, Card, Typography, Tag, Statistic } from "antd"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text, Paragraph } = Typography

const columns = [
  { title: "Fee type", dataIndex: "fee", key: "fee", render: (v: string) => <span style={{ color: COLORS.text, fontWeight: 600 }}>{v}</span> },
  { title: "Rate", dataIndex: "rate", key: "rate", render: (v: string) => <span style={{ color: COLORS.primary, fontWeight: 600 }}>{v}</span> },
  { title: "Recipient", dataIndex: "recipient", key: "recipient", render: (v: string) => <span style={{ color: COLORS.muted }}>{v}</span> },
]

const data = [
  { key: "1", fee: "Protocol fee", rate: "2.5% (DAO adjustable)", recipient: "Treasury" },
  { key: "2", fee: "Skill royalty", rate: "0–10%", recipient: "Skill Creator" },
  { key: "3", fee: "L2 gas", rate: "~$0.0001 / tx", recipient: "Network" },
  { key: "4", fee: "Data market fee", rate: "per-call bps", recipient: "Protocol" },
  { key: "5", fee: "Energy clearing", rate: "per kWh bps", recipient: "Protocol" },
]

const SPLIT = [
  { label: "Provider", value: 0.925, color: COLORS.primary },
  { label: "Skill royalty", value: 0.05, color: COLORS.purple },
  { label: "Protocol fee", value: 0.025, color: "#5b6b8c" },
]

export function Economy() {
  return (
    <section id="economy" className="df-anchor df-section">
      <SectionHeading
        eyebrow="Economy & Fees"
        title="Transparent, on-chain"
        highlight="economics"
        cn="透明的链上经济模型与费用结构"
        subtitle="Payment in ETH, USDC and USDT — no platform token at launch, for lower compliance friction."
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={14}>
          <Reveal>
            <Card className="df-glass" variant="borderless" styles={{ body: { padding: 8 } }}>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="middle"
                style={{ background: "transparent" }}
              />
            </Card>
          </Reveal>
        </Col>

        <Col xs={24} lg={10}>
          <Reveal delay={0.1}>
            <Card className="df-glass" variant="borderless" style={{ height: "100%" }} styles={{ body: { padding: 28 } }}>
              <Text style={{ color: COLORS.muted, fontSize: 13 }}>Example settlement</Text>
              <Title level={4} style={{ margin: "4px 0 18px", color: COLORS.text }}>
                Consumer pays <span className="df-gradient-text">1 ETH</span>
              </Title>

              <div style={{ display: "flex", height: 12, borderRadius: 999, overflow: "hidden", marginBottom: 20 }}>
                {SPLIT.map((s) => (
                  <div key={s.label} style={{ width: `${s.value * 100}%`, background: s.color }} />
                ))}
              </div>

              {SPLIT.map((s) => (
                <div
                  key={s.label}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color }} />
                    <Text style={{ color: COLORS.muted }}>{s.label}</Text>
                  </span>
                  <Text style={{ color: COLORS.text, fontWeight: 600 }}>{s.value} ETH</Text>
                </div>
              ))}

              <div style={{ height: 1, background: COLORS.border, margin: "16px 0" }} />
              <Tag color="purple" style={{ background: "rgba(124,58,237,0.12)", borderColor: "rgba(124,58,237,0.35)", color: "#b794f6" }}>
                Future: AgentFi
              </Tag>
              <Paragraph style={{ color: COLORS.muted, marginTop: 10, marginBottom: 0 }}>
                Skill-collateralized lending and income-stream tokenization for agent operators.
              </Paragraph>
            </Card>
          </Reveal>
        </Col>
      </Row>
    </section>
  )
}
