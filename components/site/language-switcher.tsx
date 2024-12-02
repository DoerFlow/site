"use client"

import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { LOCALE_LABELS, LOCALE_SHORT, LOCALES, type Locale } from "@/lib/i18n/config"
import { localePath } from "@/lib/i18n/paths"
import { useT } from "@/lib/i18n/context"
import { COLORS } from "@/lib/theme"

export function LanguageSwitcher() {
  const router = useRouter()
  const { locale, t } = useT()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [open])

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <button
        type="button"
        aria-label={t("lang.label")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 10px",
          border: "none",
          borderRadius: 8,
          background: open ? "rgba(255,255,255,0.06)" : "transparent",
          color: COLORS.muted,
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        <Globe size={15} aria-hidden />
        <span>{LOCALE_SHORT[locale]}</span>
      </button>
      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            minWidth: 168,
            padding: 6,
            borderRadius: 10,
            border: `1px solid ${COLORS.border}`,
            background: COLORS.elevated,
            boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
            zIndex: 40,
          }}
        >
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false)
                router.push(localePath(code as Locale))
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "8px 12px",
                border: "none",
                borderRadius: 8,
                background: code === locale ? "rgba(0,212,170,0.12)" : "transparent",
                color: code === locale ? COLORS.primary : COLORS.text,
                fontSize: 14,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {LOCALE_LABELS[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
