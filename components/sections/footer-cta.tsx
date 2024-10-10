"use client"

import { Button, Space, Input, Typography, App } from "antd"
import { ArrowRightOutlined, BookOutlined, TeamOutlined } from "@ant-design/icons"
import { useState } from "react"
import { motion } from "framer-motion"
import { COLORS } from "@/lib/theme"

const { Title } = Typography

export function FooterCta() {
  const { message } = App.useApp()
  const [email, setEmail] = useState("")

  const onSubscribe = () => {
    if (!email || !email.includes("@")) {
      message.error("Please enter a valid email address.")
      return
    }
    message.success("Thanks! We'll keep you posted.")
    setEmail("")
  }

  return (
    <section className="df-section" style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="df-glass"
        style={{
          padding: "56px 28px",
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,212,170,0.12), rgba(20,27,45,0.7) 60%)",
          border: "1px solid rgba(0,212,170,0.25)",
        }}
      >
        <Title
          level={2}
          style={{ margin: 0, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.text }}
        >
          Start building on <span className="df-gradient-text">DoerFlow</span>
        </Title>
        <p className="df-cn" style={{ marginTop: 12 }}>
          自主执行体的价值流动协议 — 立即开始构建
        </p>

        <Space size={12} wrap style={{ justifyContent: "center", marginTop: 28 }}>
          <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPlacement="end">
            Launch App
          </Button>
          <Button size="large" ghost icon={<BookOutlined />} href="https://doerflow.dev/docs" target="_blank">
            Read Docs
          </Button>
          <Button size="large" type="text" icon={<TeamOutlined />} style={{ color: COLORS.muted }}>
            Join Community
          </Button>
        </Space>

        <div style={{ maxWidth: 440, margin: "36px auto 0" }}>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              size="large"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onPressEnter={onSubscribe}
              aria-label="Email address"
            />
            <Button size="large" type="primary" onClick={onSubscribe}>
              Subscribe
            </Button>
          </Space.Compact>
        </div>
      </motion.div>
    </section>
  )
}
