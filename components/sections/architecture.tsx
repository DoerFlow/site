"use client"

import { Card, Tag, Typography } from "antd"
import { SectionHeading, Reveal } from "@/components/site/section-heading"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

const { Title, Text } = Typography

const LAYER_ACCENTS = [COLORS.primary, COLORS.primary, COLORS.purple, COLORS.purple, COLORS.purple]

export function Architecture() {
  const { t, tm } = useT()
  const layers = tm<Array<{ n: string; name: string; desc: string; tags: string[] }>>("architecture.layers")

  return (
    <section id="protocol" className="df-anchor df-section">
      <SectionHeading
        eyebrow={t("architecture.eyebrow")}
        title={t("architecture.title")}
        highlight={t("architecture.highlight")}
        tagline={t("architecture.tagline")}
        subtitle={t("architecture.subtitle")}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 920, margin: "0 auto" }}>
        {layers.map((l, i) => (
          <Reveal key={l.n} delay={i * 0.06}>
            <Card
              className="df-glass df-glass-hover"
              variant="borderless"
              styles={{ body: { padding: 0 } }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "22px 26px",
                  borderLeft: `3px solid ${LAYER_ACCENTS[i]}`,
                  borderRadius: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: LAYER_ACCENTS[i],
                    opacity: 0.85,
                    minWidth: 44,
                  }}
                >
                  {l.n}
                </span>
                <div style={{ flex: 1 }}>
                  <Title level={5} style={{ margin: 0, color: COLORS.text }}>
                    {l.name}
                  </Title>
                  <Text style={{ color: COLORS.muted }}>{l.desc}</Text>
                  <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {l.tags.map((tag) => (
                      <Tag
                        key={tag}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: COLORS.border,
                          color: COLORS.muted,
                        }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
