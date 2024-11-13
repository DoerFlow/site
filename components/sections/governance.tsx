"use client"

import { Timeline, Card, Typography, Alert } from "antd"
import {
  SafetyCertificateOutlined,
  RetweetOutlined,
  FileProtectOutlined,
  TeamOutlined,
  BankOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Text } = Typography

const ITEM_ICONS = [
  <SafetyCertificateOutlined key="verify" />,
  <RetweetOutlined key="dispute" />,
  <FileProtectOutlined key="review" />,
  <TeamOutlined key="dao" />,
  <BankOutlined key="onramp" />,
]

export function Governance() {
  const { t, tm } = useT()
  const items = tm<Array<{ title: string; desc: string }>>("governance.items")

  return (
    <section className="df-section">
      <SectionHeading
        eyebrow={t("governance.eyebrow")}
        title={t("governance.title")}
        highlight={t("governance.highlight")}
        tagline={t("governance.tagline")}
        subtitle={t("governance.subtitle")}
      />

      <Reveal>
        <Card className="df-glass" variant="borderless" styles={{ body: { padding: "36px 32px" } }}>
          <Timeline
            items={items.map((it, i) => ({
              icon: (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    background: "rgba(0,212,170,0.14)",
                    color: COLORS.primary,
                  }}
                >
                  {ITEM_ICONS[i]}
                </span>
              ),
              content: (
                <div style={{ paddingBottom: 8 }}>
                  <Text style={{ color: COLORS.text, fontWeight: 600, fontSize: 16, display: "block" }}>
                    {it.title}
                  </Text>
                  <Text style={{ color: COLORS.muted }}>{it.desc}</Text>
                </div>
              ),
            }))}
          />
        </Card>
      </Reveal>

      <Reveal delay={0.1}>
        <Alert
          type="info"
          showIcon
          style={{
            marginTop: 24,
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
          title={<span style={{ color: COLORS.text }}>{t("governance.compliance.title")}</span>}
          description={
            <span style={{ color: COLORS.muted }}>
              {t("governance.compliance.description")}
            </span>
          }
        />
      </Reveal>
    </section>
  )
}
