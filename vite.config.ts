import react from "@vitejs/plugin-react";
import { cloudflareDevProxyVitePlugin, vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    command === "serve" ? cloudflareDevProxyVitePlugin() : null,
    remix(),
    react(),
  ].filter(Boolean),

  // This ensures the date-fns-tz package is bundled correctly for the browser
  optimizeDeps: {
    include: ["date-fns-tz", "@douyinfe/semi-ui", "@douyinfe/semi-icons"],
  },

  server: {
    host: true,
    port: 3000,
  },

  preview: {
    host: true,
  },

  // This is the CRITICAL fix for the error you are seeing. 
  // It forces Vite to process Semi UI and its date dependencies 
  // on the server side so the "named export" error disappears.
  ssr: {
    noExternal: [
      "@douyinfe/semi-ui",
      "@douyinfe/semi-icons",
      "@douyinfe/semi-foundation",
      "date-fns-tz",
    ],
  },
}));
