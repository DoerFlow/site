"use client"

import { Row, Col, Card, Typography, Tag } from "antd"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const STATUS_COLORS: Record<string, string> = {
  Now: COLORS.primary,
  Next: "#b794f6",
  Planned: COLORS.muted,
}

export function Roadmap() {
  const { t, tm } = useT()
  const phases = tm<Array<{ version: string; name: string; status: string; items: string[] }>>("roadmap.phases")

  return (
    <section className="df-section">
      <SectionHeading
        eyebrow={t("roadmap.eyebrow")}
        title={t("roadmap.title")}
        highlight={t("roadmap.highlight")}
        tagline={t("roadmap.tagline")}
        subtitle={t("roadmap.subtitle")}
      />

      <Row gutter={[24, 24]}>
        {phases.map((p, i) => {
          const statusColor = STATUS_COLORS[p.status] ?? COLORS.muted
          return (
            <Col xs={24} md={8} key={p.version}>
              <Reveal delay={i * 0.1}>
                <Card
                  className="df-glass df-glass-hover"
                  variant="borderless"
                  style={{ height: "100%", borderTop: `3px solid ${statusColor}` }}
                  styles={{ body: { padding: 28 } }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="df-gradient-text" style={{ fontSize: 30, fontWeight: 800 }}>
                      {p.version}
                    </span>
                    <Tag
                      style={{
                        background: `${statusColor}1f`,
                        borderColor: `${statusColor}55`,
                        color: statusColor,
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
                        <span style={{ color: statusColor, marginTop: 7, width: 6, height: 6, borderRadius: 999, background: statusColor, flexShrink: 0 }} />
                        <Text style={{ color: COLORS.muted }}>{it}</Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}
