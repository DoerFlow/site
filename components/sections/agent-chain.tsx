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
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const ITEM_ICONS = [
  <NodeIndexOutlined key="l2" />,
  <ThunderboltOutlined key="gas" />,
  <GiftOutlined key="chef" />,
  <SafetyOutlined key="uups" />,
  <GlobalOutlined key="bridge" />,
  <FieldTimeOutlined key="async" />,
]

export function AgentChain() {
  const { t, tm } = useT()
  const items = tm<Array<{ title: string; desc: string }>>("agentChain.items")

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
          eyebrow={t("agentChain.eyebrow")}
          title={t("agentChain.title")}
          highlight={t("agentChain.highlight")}
          tagline={t("agentChain.tagline")}
          subtitle={t("agentChain.subtitle")}
        />

        <Row gutter={[24, 28]}>
          {items.map((it, i) => (
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
                    {ITEM_ICONS[i]}
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
