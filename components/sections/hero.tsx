"use client"

import { ArrowRightOutlined, BookOutlined, GithubOutlined } from "@ant-design/icons"
import { Button, Space, Statistic } from "antd"
import { Logo } from "@/components/site/logo"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"
import { DOCS_URL } from "@/lib/urls"

export function Hero() {
  const { t, tm } = useT()
  const stats = tm<Array<{ title: string; value: number; prefix?: string; suffix?: string }>>("hero.stats")

  return (
    <section id="top" className="df-anchor df-hero">
      <div className="df-hero-bg">
        <div className="df-grid-overlay" />
      </div>

      <div className="df-section df-hero-section">
        <div className="df-fade-in df-hero-logo-wrap">
          <div className="df-glass df-hero-logo-card">
            <Logo size={40} />
          </div>
        </div>

        <div className="df-fade-in df-delay-1">
          <span className="df-eyebrow">{t("hero.eyebrow")}</span>
        </div>

        <h1 className="df-fade-in df-delay-2 df-hero-title">
          {t("hero.title")} <span className="df-gradient-text">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="df-cn df-fade-in df-delay-3 df-hero-tagline">{t("hero.tagline")}</p>

        <p className="df-fade-in df-delay-4 df-hero-body">{t("hero.body")}</p>

        <div className="df-fade-in df-delay-5 df-hero-actions">
          <Space size={12} wrap style={{ justifyContent: "center" }}>
            <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPlacement="end">
              {t("common.launchApp")}
            </Button>
            <Button
              size="large"
              variant="outlined"
              icon={<BookOutlined />}
              href={DOCS_URL}
              target="_blank"
              style={{
                color: COLORS.text,
                borderColor: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
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
        </div>

        <div className="df-glass df-fade-in df-delay-6 df-hero-stats">
          {stats.map((s) => (
            <Statistic
              key={s.title}
              title={<span className="df-hero-stat-label">{s.title}</span>}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              styles={{ content: { color: COLORS.text, fontWeight: 700, fontSize: 28 } }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
