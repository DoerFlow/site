"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider, App as AntdApp } from "antd"
import { darkTheme } from "@/lib/theme"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={darkTheme}>
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  )
}
