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
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const FEATURE_ICONS = [
  <IdcardOutlined key="identity" />,
  <AppstoreAddOutlined key="registry" />,
  <LockOutlined key="escrow" />,
  <ShareAltOutlined key="p2p" />,
  <SafetyCertificateOutlined key="governance" />,
  <WalletOutlined key="aa" />,
]

export function Features() {
  const { t, tm } = useT()
  const items = tm<Array<{ title: string; desc: string }>>("features.items")

  return (
    <section className="df-section">
      <SectionHeading
        eyebrow={t("features.eyebrow")}
        title={t("features.title")}
        highlight={t("features.highlight")}
        tagline={t("features.tagline")}
        subtitle={t("features.subtitle")}
      />

      <Row gutter={[24, 24]}>
        {items.map((f, i) => (
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
                  {FEATURE_ICONS[i]}
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
