"use client"

import { Row, Col, Card, Tag, Typography } from "antd"
import { CloudOutlined, TeamOutlined, RobotOutlined, ShopOutlined, UserOutlined, ThunderboltOutlined } from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Text, Title } = Typography

const ERA_ICONS = [<CloudOutlined key="saas" />, <TeamOutlined key="gig" />, <RobotOutlined key="agent" />]
const ROLE_ICONS = [<ShopOutlined key="creators" />, <UserOutlined key="consumers" />, <ThunderboltOutlined key="providers" />]

export function Shift() {
  const { t, tm } = useT()
  const eras = tm<Array<{ era: string; traded: string; captures: string; highlight?: boolean }>>("shift.eras")
  const roles = tm<Array<{ title: string; desc: string }>>("shift.roles")

  return (
    <section id="why" className="df-anchor df-section">
      <SectionHeading
        eyebrow={t("shift.eyebrow")}
        title={t("shift.title")}
        highlight={t("shift.highlight")}
        tagline={t("shift.tagline")}
        subtitle={t("shift.subtitle")}
      />

      <Row gutter={[24, 24]} style={{ marginBottom: 56 }}>
        {eras.map((e, i) => (
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
                  {ERA_ICONS[i]}
                </div>
                <Title level={4} style={{ margin: 0, color: COLORS.text }}>
                  {e.era}
                </Title>
                {e.highlight && (
                  <Tag color="cyan" style={{ marginTop: 8 }}>
                    {t("shift.nowEmerging")}
                  </Tag>
                )}
                <div style={{ marginTop: 18 }}>
                  <Text style={{ color: COLORS.muted, fontSize: 13 }}>{t("shift.whatsTraded")}</Text>
                  <div style={{ color: COLORS.text, fontWeight: 600, marginTop: 2 }}>{e.traded}</div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <Text style={{ color: COLORS.muted, fontSize: 13 }}>{t("shift.whoCaptures")}</Text>
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
        {roles.map((r, i) => (
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
                  {ROLE_ICONS[i]}
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
