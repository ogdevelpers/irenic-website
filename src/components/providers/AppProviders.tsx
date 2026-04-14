"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import type { ReactNode } from "react";
import { BRAND } from "@/lib/constants";

/** Ant Design dark theme aligned with black + orange brand */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: BRAND.accent,
            colorBgBase: BRAND.bg,
            colorBgContainer: BRAND.surfaceElevated,
            colorText: BRAND.text,
            colorTextSecondary: BRAND.textMuted,
            colorBorder: BRAND.border,
            borderRadius: 10,
            fontFamily:
              'var(--font-outfit), system-ui, -apple-system, "Segoe UI", sans-serif',
            controlOutline: `rgba(255, 91, 0, 0.45)`,
          },
          components: {
            Button: {
              primaryShadow: "0 4px 20px rgba(255, 91, 0, 0.35)",
              defaultBorderColor: "rgba(255,255,255,0.18)",
              defaultColor: BRAND.text,
              defaultHoverBg: "rgba(255,255,255,0.06)",
            },
            Input: {
              colorBgContainer: BRAND.surfaceElevated,
              hoverBorderColor: BRAND.accent,
              activeBorderColor: BRAND.accent,
            },
            Drawer: {
              colorBgElevated: BRAND.surface,
            },
            Tag: {
              defaultBg: BRAND.surfaceElevated,
            },
            Tabs: {
              inkBarColor: BRAND.accent,
              itemActiveColor: BRAND.accent,
              itemSelectedColor: BRAND.accent,
              itemHoverColor: BRAND.accentHover,
              itemColor: BRAND.textMuted,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
