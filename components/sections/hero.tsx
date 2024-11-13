"use client"

import { Button, Statistic, Space } from "antd"
import { ArrowRightOutlined, BookOutlined, GithubOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { Logo } from "@/components/site/logo"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

export function Hero() {
  const { t, tm } = useT()
  const stats = tm<Array<{ title: string; value: number; prefix?: string; suffix?: string }>>("hero.stats")

  return (
    <section id="top" className="df-anchor" style={{ position: "relative", overflow: "hidden" }}>
      <div className="df-hero-bg">
        <div className="df-grid-overlay" />
      </div>

      <div className="df-section" style={{ paddingTop: 120, paddingBottom: 88, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
        >
          <div
            className="df-glass"
            style={{ padding: "16px 20px", borderRadius: 18, display: "inline-flex" }}
          >
            <Logo size={40} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span className="df-eyebrow">{t("hero.eyebrow")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            margin: "24px auto 0",
            maxWidth: 900,
            fontSize: "clamp(36px, 6vw, 68px)",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: COLORS.text,
          }}
        >
          {t("hero.title")}{" "}
          <span className="df-gradient-text">{t("hero.titleHighlight")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="df-cn"
          style={{ marginTop: 18, fontSize: 17 }}
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          style={{
            margin: "20px auto 0",
            maxWidth: 680,
            fontSize: 18,
            lineHeight: 1.65,
            color: COLORS.muted,
          }}
        >
          {t("hero.body")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{ marginTop: 36 }}
        >
          <Space size={12} wrap style={{ justifyContent: "center" }}>
            <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPlacement="end">
              {t("common.launchApp")}
            </Button>
            <Button size="large" ghost icon={<BookOutlined />} href="https://doerflow.dev/docs" target="_blank">
              {t("common.readDocumentation")}
            </Button>
            <Button
              size="large"
              type="text"
              icon={<GithubOutlined />}
              href="https://github.com/doerflow"
              target="_blank"
              style={{ color: COLORS.muted }}
            >
              {t("common.viewOnGithub")}
            </Button>
          </Space>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="df-glass"
          style={{
            marginTop: 64,
            padding: "28px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 24,
          }}
        >
          {stats.map((s) => (
            <Statistic
              key={s.title}
              title={<span style={{ color: COLORS.muted, fontSize: 13 }}>{s.title}</span>}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              styles={{ content: { color: COLORS.text, fontWeight: 700, fontSize: 28 } }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
