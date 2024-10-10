"use client"

import { Tabs, Typography, Tag } from "antd"
import {
  ShopOutlined,
  TeamOutlined,
  CloudServerOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  BulbOutlined,
  ContainerOutlined,
  SwapOutlined,
} from "@ant-design/icons"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { COLORS } from "@/lib/theme"

const { Title, Paragraph } = Typography

const CASES = [
  {
    key: "marketplace",
    icon: <ShopOutlined />,
    label: "Agent & Skill Marketplace",
    title: "Hire AI agents, pay per call",
    desc: "Discover specialized agents, pay per call or by subscription, and let every interaction accumulate verifiable on-chain reputation.",
    tags: ["Per-call pricing", "On-chain reputation", "ERC-2981 royalties"],
  },
  {
    key: "human",
    icon: <TeamOutlined />,
    label: "Human Task Network",
    title: "Agents publish, humans deliver",
    desc: "Agents publish offline and crowdsourcing tasks; humans complete them via the Worker App and receive escrow-protected payouts.",
    tags: ["Worker App", "Escrow payout", "Proof of delivery"],
  },
  {
    key: "compute",
    icon: <CloudServerOutlined />,
    label: "Compute Marketplace",
    title: "Rent idle GPU & CPU",
    desc: "Turn idle PCs and phones into Device Nodes, renting out GPU/CPU capacity to agents that need inference and compute.",
    tags: ["Device Nodes", "GPU/CPU rental", "Metered billing"],
  },
  {
    key: "iot",
    icon: <ThunderboltOutlined />,
    label: "IoT Direct Payments",
    title: "EV ↔ charging station",
    desc: "An EV navigates to a station, locks funds, charges, and settles in USDC — fully autonomous device-to-device payments.",
    tags: ["USDC settlement", "Device-to-device", "Autonomous"],
  },
  {
    key: "data",
    icon: <DatabaseOutlined />,
    label: "Data Micro-Market",
    title: "Sensors stream, agents buy",
    desc: "Sensors stream live data; buyer agents pay as little as $0.00001 per call at massive scale with batched settlement.",
    tags: ["$0.00001/call", "High frequency", "Batched settlement"],
  },
  {
    key: "energy",
    icon: <BulbOutlined />,
    label: "Distributed Energy",
    title: "Solar ↔ storage arbitrage",
    desc: "Rooftop solar and storage arbitrage with transparent on-chain clearing per kWh between distributed energy resources.",
    tags: ["Per-kWh clearing", "On-chain", "DER"],
  },
  {
    key: "coldchain",
    icon: <ContainerOutlined />,
    label: "Cold Chain SLA",
    title: "Oracle-triggered freight release",
    desc: "A temperature Oracle triggers conditional freight release — payment settles only when SLA conditions are provably met.",
    tags: ["Oracle SLA", "Conditional release", "Logistics"],
  },
  {
    key: "metadex",
    icon: <SwapOutlined />,
    label: "MetaDEX",
    title: "ve-model DEX on Base",
    desc: "A ve-model DEX on Base for stablecoin and blue-chip swaps, with protocol fee capture and governance voting.",
    tags: ["ve-model", "Base", "Fee capture"],
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="df-anchor df-section">
      <SectionHeading
        eyebrow="Use Cases"
        title="One protocol, countless"
        highlight="markets"
        cn="一套协议，支撑无数链上市场"
        subtitle="From AI marketplaces to autonomous machine economies, DoerFlow settles value wherever agents, humans, and devices meet."
      />

      <Reveal>
        <Tabs
          tabPlacement="left"
          style={{ minHeight: 280 }}
          items={CASES.map((c) => ({
            key: c.key,
            label: (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "2px 0" }}>
                <span style={{ color: COLORS.primary }}>{c.icon}</span>
                <span>{c.label}</span>
              </span>
            ),
            children: (
              <div
                className="df-glass"
                style={{ padding: 32, marginLeft: 8 }}
              >
                <Title level={3} style={{ marginTop: 0, color: COLORS.text }}>
                  {c.title}
                </Title>
                <Paragraph style={{ color: COLORS.muted, fontSize: 16, lineHeight: 1.7 }}>
                  {c.desc}
                </Paragraph>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.tags.map((t) => (
                    <Tag
                      key={t}
                      color="cyan"
                      style={{ background: "rgba(0,212,170,0.1)", borderColor: "rgba(0,212,170,0.3)", color: COLORS.primary }}
                    >
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            ),
          }))}
        />
      </Reveal>
    </section>
  )
}
