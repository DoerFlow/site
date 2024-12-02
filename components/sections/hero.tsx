"use client"

import { ArrowRight, BookOpen } from "lucide-react"
import { Logo } from "@/components/site/logo"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"
import { DOCS_URL } from "@/lib/urls"

export function Hero() {
  const { t, tm } = useT()
  const stats = tm<Array<{ title: string; value: number; prefix?: string; suffix?: string }>>("hero.stats")

  return (
    <section id="top" className="df-anchor" style={{ position: "relative", overflow: "hidden" }}>
      <div className="df-hero-bg">
        <div className="df-grid-overlay" />
      </div>

      <div className="df-section" style={{ paddingTop: 120, paddingBottom: 88, textAlign: "center" }}>
        <div className="df-fade-in" style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div className="df-glass" style={{ padding: "16px 20px", borderRadius: 18, display: "inline-flex" }}>
            <Logo size={40} />
          </div>
        </div>

        <div className="df-fade-in df-delay-1">
          <span className="df-eyebrow">{t("hero.eyebrow")}</span>
        </div>

        <h1
          className="df-fade-in df-delay-2"
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
          {t("hero.title")} <span className="df-gradient-text">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="df-cn df-fade-in df-delay-3" style={{ marginTop: 18, fontSize: 17 }}>
          {t("hero.tagline")}
        </p>

        <p
          className="df-fade-in df-delay-4"
          style={{
            margin: "20px auto 0",
            maxWidth: 680,
            fontSize: 18,
            lineHeight: 1.65,
            color: COLORS.muted,
          }}
        >
          {t("hero.body")}
        </p>

        <div className="df-fade-in df-delay-5" style={{ marginTop: 36 }}>
          <div className="df-hero-actions">
            <a href="https://app.doerflow.dev" className="df-btn df-btn-primary df-btn-lg">
              {t("common.launchApp")}
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="df-btn df-btn-outline df-btn-lg">
              <BookOpen size={18} aria-hidden />
              {t("common.readDocumentation")}
            </a>
            <a
              href="https://github.com/doerflow"
              target="_blank"
              rel="noreferrer"
              className="df-btn df-btn-ghost df-btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z" />
              </svg>
              {t("common.viewOnGithub")}
            </a>
          </div>
        </div>

        <div
          className="df-glass df-fade-in df-delay-6"
          style={{
            marginTop: 64,
            padding: "28px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 24,
          }}
        >
          {stats.map((s) => (
            <div key={s.title}>
              <div style={{ color: COLORS.muted, fontSize: 13, marginBottom: 8 }}>{s.title}</div>
              <div style={{ color: COLORS.text, fontWeight: 700, fontSize: 28, lineHeight: 1.1 }}>
                {s.prefix}
                {s.value.toLocaleString()}
                {s.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
