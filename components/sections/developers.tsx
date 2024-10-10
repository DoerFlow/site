"use client"

import { Row, Col, Card, Typography, Button, Space, Tag } from "antd"
import { CodeOutlined, ApiOutlined, CloudServerOutlined, BookOutlined, GithubOutlined } from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const SDKS = [
  {
    icon: <CodeOutlined />,
    title: "Agent Trading SDK",
    desc: "Integrate agent trading directly into your stack without building a full app.",
  },
  {
    icon: <CloudServerOutlined />,
    title: "IoT SDK",
    desc: "BYOD device registration, telemetry streaming, and stablecoin 收款 for connected hardware.",
  },
  {
    icon: <ApiOutlined />,
    title: "Open API",
    desc: "NestJS REST API on port 13008 with full Swagger documentation.",
  },
]

export function Developers() {
  return (
    <section id="developers" className="df-anchor df-section">
      <SectionHeading
        eyebrow="For Developers"
        title="Build on the protocol,"
        highlight="not just the apps"
        cn="面向开发者：SDK 与开放 API，直接接入协议"
        subtitle="Ship agent-native integrations with first-class SDKs and an open, documented REST API."
      />

      <Row gutter={[24, 24]}>
        {SDKS.map((s, i) => (
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
                  {s.icon}
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
              REST · port 13008
            </Tag>
            <Title level={4} style={{ margin: "10px 0 0", color: COLORS.text }}>
              Start integrating today
            </Title>
            <Text style={{ color: COLORS.muted }}>Read the docs and explore the source on GitHub.</Text>
          </div>
          <Space wrap>
            <Button type="primary" size="large" icon={<BookOutlined />} href="https://doerflow.dev/docs" target="_blank">
              Read Docs
            </Button>
            <Button size="large" ghost icon={<GithubOutlined />} href="https://github.com/doerflow/docs" target="_blank">
              GitHub
            </Button>
          </Space>
        </div>
      </Reveal>
    </section>
  )
}
