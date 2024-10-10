import { theme, type ThemeConfig } from "antd"

export const COLORS = {
  bg: "#0B1120",
  surface: "#141B2D",
  elevated: "#1A2235",
  primary: "#00D4AA",
  purple: "#7C3AED",
  text: "#E7ECF3",
  muted: "#8B97AD",
  border: "rgba(255,255,255,0.08)",
}

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: COLORS.primary,
    colorBgContainer: COLORS.surface,
    colorBgElevated: COLORS.elevated,
    colorBgLayout: COLORS.bg,
    colorBorder: COLORS.border,
    colorText: COLORS.text,
    colorTextSecondary: COLORS.muted,
    borderRadius: 8,
    fontFamily:
      'var(--font-inter), Inter, "PingFang SC", "Microsoft YaHei", sans-serif',
    fontSize: 15,
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: COLORS.bg,
      footerBg: "transparent",
    },
    Card: {
      colorBgContainer: "rgba(26,34,53,0.55)",
    },
    Steps: {
      colorPrimary: COLORS.primary,
    },
    Tabs: {
      inkBarColor: COLORS.primary,
      itemSelectedColor: COLORS.primary,
    },
    Table: {
      headerBg: COLORS.elevated,
      colorBgContainer: "rgba(20,27,45,0.6)",
    },
  },
}
