"use client"

import { Row, Col, Card, Typography, Tag } from "antd"
import {
  EyeOutlined,
  ReadOutlined,
  ApiOutlined,
  ControlOutlined,
  VideoCameraOutlined,
  DollarOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const PRODUCT_ICONS = [
  <EyeOutlined key="see" />,
  <ReadOutlined key="learn" />,
  <ApiOutlined key="connect" />,
  <ControlOutlined key="control" />,
  <VideoCameraOutlined key="vision" />,
  <DollarOutlined key="earn" />,
]

export function Ecosystem() {
  const { t, tm } = useT()
  const products = tm<Array<{ name: string; pillar: string; highlight?: boolean }>>("ecosystem.products")

  return (
    <section id="ecosystem" className="df-anchor df-section">
      <SectionHeading
        eyebrow={t("ecosystem.eyebrow")}
        title={t("ecosystem.title")}
        highlight={t("ecosystem.highlight")}
        tagline={t("ecosystem.tagline")}
        subtitle={t("ecosystem.subtitle")}
      />

      <Row gutter={[20, 20]}>
        {products.map((p, i) => (
          <Col xs={12} sm={8} lg={4} key={p.name}>
            <Reveal delay={(i % 6) * 0.06}>
              <Card
                className="df-glass df-glass-hover"
                variant="borderless"
                style={{
                  height: "100%",
                  textAlign: "center",
                  borderColor: p.highlight ? "rgba(0,212,170,0.45)" : COLORS.border,
                  background: p.highlight
                    ? "linear-gradient(180deg, rgba(0,212,170,0.14), rgba(20,27,45,0.7))"
                    : undefined,
                }}
                styles={{ body: { padding: 20 } }}
              >
                <div
                  style={{
                    fontSize: 26,
                    color: p.highlight ? COLORS.primary : COLORS.muted,
                    marginBottom: 10,
                  }}
                >
                  {PRODUCT_ICONS[i]}
                </div>
                <Title level={5} style={{ margin: "0 0 6px", fontSize: 15, color: COLORS.text }}>
                  {p.name}
                </Title>
                {p.highlight ? (
                  <Tag color="cyan" style={{ margin: 0, background: "rgba(0,212,170,0.14)", borderColor: "rgba(0,212,170,0.4)", color: COLORS.primary }}>
                    {p.pillar}
                  </Tag>
                ) : (
                  <Text style={{ color: COLORS.muted, fontSize: 12 }}>{p.pillar}</Text>
                )}
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>
    </section>
  )
}
