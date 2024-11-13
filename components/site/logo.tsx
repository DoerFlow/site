"use client"

import { COLORS } from "@/lib/theme"
import { useT } from "@/lib/i18n/context"

export function Logo({ size = 30, withText = true }: { size?: number; withText?: boolean }) {
  const { t } = useT()

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-label={t("logo.ariaLabel")}
        role="img"
      >
        <defs>
          <linearGradient id="df-logo-grad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor={COLORS.primary} />
            <stop offset="100%" stopColor={COLORS.purple} />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#df-logo-grad)" opacity="0.16" />
        <rect x="1" y="1" width="38" height="38" rx="11" stroke="url(#df-logo-grad)" strokeWidth="1.5" />
        <circle cx="13" cy="13" r="3.4" fill={COLORS.primary} />
        <circle cx="27" cy="13" r="3.4" fill={COLORS.purple} />
        <circle cx="20" cy="27" r="3.4" fill={COLORS.primary} />
        <path
          d="M13 13 L27 13 L20 27 Z"
          stroke="url(#df-logo-grad)"
          strokeWidth="1.6"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
      {withText && (
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.01em" }}>
            DoerFlow
          </span>
          <span style={{ fontSize: 10, color: COLORS.muted, letterSpacing: "0.18em" }}>
            {t("logo.tagline")}
          </span>
        </span>
      )}
    </div>
  )
}
