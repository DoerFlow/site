"use client"

import { Typography } from "antd"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { COLORS } from "@/lib/theme"

const { Title } = Typography

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  cn,
  align = "center",
}: {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: ReactNode
  cn?: string
  align?: "center" | "left"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 760 : undefined,
        margin: align === "center" ? "0 auto 56px" : "0 0 48px",
      }}
    >
      {eyebrow && <span className="df-eyebrow">{eyebrow}</span>}
      <Title
        level={2}
        style={{
          margin: "20px 0 0",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: COLORS.text,
        }}
      >
        {title} {highlight && <span className="df-gradient-text">{highlight}</span>}
      </Title>
      {cn && <p className="df-cn" style={{ marginTop: 10, marginBottom: 0 }}>{cn}</p>}
      {subtitle && (
        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            fontSize: 17,
            lineHeight: 1.7,
            color: COLORS.muted,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  )
}
