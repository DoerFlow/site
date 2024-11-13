"use client"

import { Row, Col, Card, Typography, Button, Space, Tag } from "antd"
import { CodeOutlined, ApiOutlined, CloudServerOutlined, BookOutlined, GithubOutlined } from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const SDK_ICONS = [<CodeOutlined key="trading" />, <CloudServerOutlined key="iot" />, <ApiOutlined key="api" />]

export function Developers() {
  const { t, tm } = useT()
  const sdks = tm<Array<{ title: string; desc: string }>>("developers.sdks")

  return (
    <section id="developers" className="df-anchor df-section">
      <SectionHeading
        eyebrow={t("developers.eyebrow")}
        title={t("developers.title")}
        highlight={t("developers.highlight")}
        tagline={t("developers.tagline")}
        subtitle={t("developers.subtitle")}
      />

      <Row gutter={[24, 24]}>
        {sdks.map((s, i) => (
          <Col xs={24} md={8} key={s.title}>
            <Reveal delay={i * 0.08}>
              <Card className="df-glass df-glass-hover" variant="borderless" style={{ height: "100%" }} styles={{ body: { padding: 28 } }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,212,170,0.14)",
                    color: COLORS.primary,
                    fontSize: 22,
                    marginBottom: 16,
                  }}
                >
                  {SDK_ICONS[i]}
                </div>
                <Title level={4} style={{ margin: "0 0 8px", color: COLORS.text }}>
                  {s.title}
                </Title>
                <Text style={{ color: COLORS.muted, lineHeight: 1.65 }}>{s.desc}</Text>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>

      <Reveal delay={0.2}>
        <div
          className="df-glass"
          style={{
            marginTop: 28,
            padding: 28,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Tag color="cyan" style={{ background: "rgba(0,212,170,0.12)", borderColor: "rgba(0,212,170,0.3)", color: COLORS.primary }}>
              {t("developers.restTag")}
            </Tag>
            <Title level={4} style={{ margin: "10px 0 0", color: COLORS.text }}>
              {t("developers.startIntegrating")}
            </Title>
            <Text style={{ color: COLORS.muted }}>{t("developers.startIntegratingDesc")}</Text>
          </div>
          <Space wrap>
            <Button type="primary" size="large" icon={<BookOutlined />} href="https://doerflow.dev/docs" target="_blank">
              {t("common.readDocs")}
            </Button>
            <Button size="large" ghost icon={<GithubOutlined />} href="https://github.com/doerflow/docs" target="_blank">
              {t("common.github")}
            </Button>
          </Space>
        </div>
      </Reveal>
    </section>
  )
}
