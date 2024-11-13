"use client"

import type { ReactNode } from "react"
import { Steps, Tabs, Card, Typography, Grid } from "antd"
import {
  WalletOutlined,
  AppstoreAddOutlined,
  LockOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  RobotOutlined,
  TeamOutlined,
  ApiOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Paragraph, Text } = Typography
const { useBreakpoint } = Grid

const STEP_ICONS = [
  <WalletOutlined key="mint" />,
  <AppstoreAddOutlined key="register" />,
  <LockOutlined key="escrow" />,
  <FileDoneOutlined key="prove" />,
  <CheckCircleOutlined key="settle" />,
]

const FLOW_ICONS: Record<string, ReactNode> = {
  agent: <RobotOutlined />,
  human: <TeamOutlined />,
  iot: <ApiOutlined />,
}

export function HowItWorks() {
  const { t, tm } = useT()
  const screens = useBreakpoint()
  const steps = tm<Array<{ title: string; description: string }>>("howItWorks.steps")
  const flows = tm<Array<{ key: string; label: string; text: string }>>("howItWorks.flows")

  return (
    <section className="df-section">
      <SectionHeading
        eyebrow={t("howItWorks.eyebrow")}
        title={t("howItWorks.title")}
        highlight={t("howItWorks.highlight")}
        tagline={t("howItWorks.tagline")}
        subtitle={t("howItWorks.subtitle")}
      />

      <Reveal>
        <Card className="df-glass" variant="borderless" styles={{ body: { padding: screens.md ? 40 : 24 } }}>
          <Steps
            current={-1}
            orientation={screens.lg ? "horizontal" : "vertical"}
            items={steps.map((s, i) => ({
              title: <span style={{ color: COLORS.text, fontWeight: 600 }}>{s.title}</span>,
              content: <span style={{ color: COLORS.muted }}>{s.description}</span>,
              icon: (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: "rgba(0,212,170,0.14)",
                    color: COLORS.primary,
                  }}
                >
                  {STEP_ICONS[i]}
                </span>
              ),
            }))}
          />
        </Card>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ marginTop: 40, maxWidth: 860, marginInline: "auto" }}>
          <Text style={{ color: COLORS.muted, display: "block", marginBottom: 12, textAlign: "center" }}>
            {t("howItWorks.flowsLabel")}
          </Text>
          <Card className="df-glass" variant="borderless" styles={{ body: { padding: 28 } }}>
            <Tabs
              centered
              items={flows.map((f) => ({
                key: f.key,
                label: (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    {FLOW_ICONS[f.key]} {f.label}
                  </span>
                ),
                children: (
                  <Paragraph style={{ color: COLORS.muted, fontSize: 16, margin: "8px 0 0", lineHeight: 1.7 }}>
                    {f.text}
                  </Paragraph>
                ),
              }))}
            />
          </Card>
        </div>
      </Reveal>
    </section>
  )
}
