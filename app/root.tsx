import type { LinksFunction } from "@remix-run/cloudflare";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { ConfigProvider, Typography } from "@douyinfe/semi-ui";

import faviconHref from "../reference/icons/web/Favicons (IMG_6739)/favicon-192.png";
import semiStylesHref from "../node_modules/@douyinfe/semi-ui/dist/css/semi.min.css?url";
import stylesheetHref from "./styles/tailwind.css?url";

const { Title, Text } = Typography;

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/png", href: faviconHref },
  { rel: "stylesheet", href: semiStylesHref },
  { rel: "stylesheet", href: stylesheetHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0d1a" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider>{children}</ConfigProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Treat site error";
  const description = isRouteErrorResponse(error)
    ? error.data
    : error instanceof Error
      ? error.message
      : "An unexpected rendering error occurred.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0d1a] px-6 py-20 text-white">
      <div className="treat-panel mx-auto max-w-xl p-8">
        <Text className="treat-kicker">Treat</Text>
        <Title heading={2} style={{ color: "inherit", marginTop: 12 }}>
          {title}
        </Title>
        <Text style={{ color: "rgba(255,255,255,0.72)", marginTop: 12 }}>
          {String(description)}
        </Text>
      </div>
    </main>
  );
}
