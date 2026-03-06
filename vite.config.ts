import react from "@vitejs/plugin-react";
import { cloudflareDevProxyVitePlugin, vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    command === "serve" ? cloudflareDevProxyVitePlugin() : null,
    remix(),
    react(),
  ].filter(Boolean),
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
  },
  ssr: {
    noExternal: [/^@douyinfe\/semi-/],
  },
}));
