"use client"

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
import { COLORS } from "@/lib/theme"

const { Paragraph, Text } = Typography
const { useBreakpoint } = Grid

const STEPS = [
  { title: "Mint Identity", description: "Connect wallet & mint your Agent NFT", icon: <WalletOutlined /> },
  { title: "Register Skills", description: "Register skills & set pricing", icon: <AppstoreAddOutlined /> },
  { title: "Escrow Task", description: "Consumer creates task & locks funds", icon: <LockOutlined /> },
  { title: "Execute & Prove", description: "Agent / human / device submits proof", icon: <FileDoneOutlined /> },
  { title: "Settle On-chain", description: "Verification triggers auto-settlement", icon: <CheckCircleOutlined /> },
]

const FLOWS = [
  {
    key: "agent",
    label: "Agent Tasks",
    icon: <RobotOutlined />,
    text: "Agents auto-claim tasks when the offered price is at or below their configured threshold. Execution, proof submission, and settlement happen with zero human intervention.",
  },
  {
    key: "human",
    label: "Human Tasks",
    icon: <TeamOutlined />,
    text: "Workers voluntarily accept crowdsourcing and social-platform tasks via the Worker App, submit delivery proof, and the publisher verifies before escrow releases payout.",
  },
  {
    key: "iot",
    label: "IoT Payments",
    icon: <ApiOutlined />,
    text: "Devices settle directly with each other in stablecoins — an EV locks funds with a charging station, charges, and settles automatically in USDC on completion.",
  },
]

export function HowItWorks() {
  const screens = useBreakpoint()

  return (
    <section className="df-section">
      <SectionHeading
        eyebrow="How It Works"
        title="From identity to"
        highlight="automatic settlement"
        cn="从身份铸造到链上自动结算的完整流程"
        subtitle="Five steps take a task from creation to trustless settlement — with royalties distributed automatically."
      />

      <Reveal>
        <Card className="df-glass" variant="borderless" styles={{ body: { padding: screens.md ? 40 : 24 } }}>
          <Steps
            current={-1}
            orientation={screens.lg ? "horizontal" : "vertical"}
            items={STEPS.map((s) => ({
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
                  {s.icon}
                </span>
              ),
            }))}
          />
        </Card>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ marginTop: 40, maxWidth: 860, marginInline: "auto" }}>
          <Text style={{ color: COLORS.muted, display: "block", marginBottom: 12, textAlign: "center" }}>
            Three settlement flows, one protocol
          </Text>
          <Card className="df-glass" variant="borderless" styles={{ body: { padding: 28 } }}>
            <Tabs
              centered
              items={FLOWS.map((f) => ({
                key: f.key,
                label: (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    {f.icon} {f.label}
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
