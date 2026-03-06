import type { MetaFunction } from "@remix-run/cloudflare";
import { motion } from "framer-motion";
import {
  Avatar,
  Button,
  Progress,
  Tag,
  Typography,
} from "@douyinfe/semi-ui";
import {
  IconCamera,
  IconComment,
  IconDownload,
  IconMicrophone,
  IconPhone,
  IconSearch,
  IconSetting,
  IconUpload,
} from "@douyinfe/semi-icons";

import appIcon from "../../reference/icons/web/Favicons (IMG_6739)/favicon-192.png";
import foxHanami from "../../reference/images/kyu-kun/fox-hanami.jpeg";
import foxOk from "../../reference/images/kyu-kun/fox-maru-green-OK.jpeg";
import foxSleeping from "../../reference/images/kyu-kun/fox-sleeping.jpeg";
import kenRed from "../../reference/images/ken-chan/koken-CNY-red.jpeg";
import izakaya from "../../reference/images/izakaya/OIG1.926SucZQi9p5mEil9SD4.jpeg";
import pentaro from "../../reference/images/pentaro-san/OIG2.AB3fp4AoIltcenw1pKtq.jpeg";
import { useTreatSiteStore } from "../lib/site-store";

const { Title, Text, Paragraph } = Typography;

type FeatureItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  metricLabel: string;
  metricValue: number;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
};

const featureItems: FeatureItem[] = [
  {
    id: "calling",
    eyebrow: "Voice + video",
    title: "Treat sells the live call first, not just the interface.",
    description:
      "The website foregrounds the app's real webcam capture, audio-only fallback, and tally-light behavior so the product promise feels immediate.",
    bullets: [
      "Peer-to-peer calling with audio and video modes",
      "Tally-light language borrowed from the app cockpit",
      "Large in-call framing instead of generic dashboard cards",
    ],
    metricLabel: "Camera confidence",
    metricValue: 96,
    image: foxOk,
    imageAlt: "Kyu-kun with an OK card",
    icon: <IconPhone />,
  },
  {
    id: "locality",
    eyebrow: "Neighborhood signal",
    title: "The site explains discovery like a nearby ritual, not a setup chore.",
    description:
      "mDNS discovery, 9-digit calling codes, and Quicdial QR flows become the product story: close by, quick to trust, easy to connect.",
    bullets: [
      "mDNS peer discovery for same-network presence",
      "Nine-digit calling codes for direct dialing",
      "QR display and scan flow inside settings and dial pad",
    ],
    metricLabel: "Nearby match rate",
    metricValue: 88,
    image: foxHanami,
    imageAlt: "Kyu-kun under cherry blossoms",
    icon: <IconSearch />,
  },
  {
    id: "messaging",
    eyebrow: "Chat + drops",
    title: "Messaging rides next to the call instead of hiding in a separate product.",
    description:
      "Treat presents chat, file offers, downloads, and voicemail as one continuous conversation layer because that is how XiaDianxin actually behaves.",
    bullets: [
      "Live chat alongside active calls",
      "File offers, transfers, and download history",
      "Voicemail recording and playback for missed moments",
    ],
    metricLabel: "Message continuity",
    metricValue: 91,
    image: pentaro,
    imageAlt: "Pentaro mascot portrait",
    icon: <IconComment />,
  },
  {
    id: "identity",
    eyebrow: "Profile + language",
    title: "Identity stays warm: profile cards, avatars, English and Chinese.",
    description:
      "The app already invests in profiles, avatar picking, and localization, so the website mirrors that care with a bilingual-ready tone and mascot-led cues.",
    bullets: [
      "Local profile persistence",
      "English and Chinese language support",
      "Avatar picker and friendly contact states",
    ],
    metricLabel: "Profile warmth",
    metricValue: 93,
    image: kenRed,
    imageAlt: "Ken-chan mascot portrait",
    icon: <IconSetting />,
  },
];

const techStack = [
  "Remix + Vite",
  "Semi Design",
  "Tailwind CSS",
  "Framer Motion",
  "Zustand",
  "Cloudflare Pages",
];

const sections = [
  { href: "#features", label: "Features" },
  { href: "#scenes", label: "Scenes" },
  { href: "#mascots", label: "Mascots" },
  { href: "#launch", label: "Launch" },
];

const launchRows = [
  {
    title: "Landing copy",
    description:
      "Product copy tracks the actual app: calling, peer discovery, voicemail, QR dialing, and bilingual UX.",
    icon: <IconComment />,
  },
  {
    title: "Design system",
    description:
      "Midnight glass takes its cues from `src/App.css`, while the paper scene borrows brighter editorial energy from `reference/charm-reference.html`.",
    icon: <IconCamera />,
  },
  {
    title: "Deployment fit",
    description:
      "The build is aimed at Cloudflare Pages on the free tier with a Pages Function for SSR.",
    icon: <IconUpload />,
  },
];

const loungeCards = [
  {
    title: "Greeting card warmth",
    copy: "Mascot art turns product states into mood, not dead space.",
    image: foxOk,
    imageAlt: "Kyu-kun greeting mascot",
  },
  {
    title: "Quiet fallback",
    copy: "Offline, idle, and waiting states stay charming instead of sterile.",
    image: foxSleeping,
    imageAlt: "Sleeping Kyu-kun mascot",
  },
  {
    title: "Izakaya afterglow",
    copy: "Warm wood and lantern hues give the light scene its social pulse.",
    image: izakaya,
    imageAlt: "Izakaya reference artwork",
  },
];

export const meta: MetaFunction = () => [
  { title: "Treat | Website for XiaDianxin" },
  {
    name: "description",
    content:
      "Treat is the English-facing website for XiaDianxin: a Semi Design-powered peer-to-peer calling app with chat, voicemail, file drops, QR dialing, and bilingual identity.",
  },
];

function StatPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="treat-panel flex min-w-[180px] flex-1 flex-col gap-2 px-4 py-4">
      <Text className="treat-kicker">{label}</Text>
      <Text className="text-2xl font-semibold text-[var(--treat-text)]">{value}</Text>
    </div>
  );
}

export default function Index() {
  const scene = useTreatSiteStore((store) => store.scene);
  const setScene = useTreatSiteStore((store) => store.setScene);
  const activeFeature = useTreatSiteStore((store) => store.activeFeature);
  const setActiveFeature = useTreatSiteStore((store) => store.setActiveFeature);

  const currentFeature =
    featureItems.find((feature) => feature.id === activeFeature) ?? featureItems[0];

  return (
    <div id="site-root" data-scene={scene} className="treat-shell">
      <div className="treat-orb treat-orb-a" />
      <div className="treat-orb treat-orb-b" />
      <div className="treat-noise" />

      <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="treat-panel mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={appIcon}
              alt="Treat icon"
              className="h-10 w-10 rounded-2xl border border-white/20 object-cover shadow-glow"
            />
            <div className="flex flex-col">
              <Text className="treat-kicker">Treat for XiaDianxin</Text>
              <Text className="text-sm font-semibold text-[var(--treat-text)]">
                Put a little heart into every connection
              </Text>
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="text-sm text-[var(--treat-muted)] transition hover:text-[var(--treat-text)]"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              theme={scene === "midnight" ? "solid" : "borderless"}
              className="treat-scene-button"
              onClick={() => setScene("midnight")}
            >
              After Dark
            </Button>
            <Button
              theme={scene === "paper" ? "solid" : "borderless"}
              className="treat-scene-button"
              onClick={() => setScene("paper")}
            >
              Paper Day
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Tag color="cyan" className="treat-tag">
                Semi Design language
              </Tag>
              <Tag color="green" className="treat-tag">
                Cloudflare Pages ready
              </Tag>
              <Tag color="orange" className="treat-tag">
                HarmonyOS Sans
              </Tag>
            </div>

            <div className="max-w-3xl">
              <Text className="treat-kicker">Treat</Text>
              <Title className="!mb-0 !mt-3 !text-5xl !leading-[0.92] md:!text-6xl xl:!text-7xl">
                A website that feels like the{" "}
                <span className="treat-gradient-text">XiaDianxin cockpit</span>,
                then opens up into a lighter social stage.
              </Title>
            </div>

            <Paragraph className="max-w-2xl !text-lg !leading-8 !text-[var(--treat-muted)]">
              Treat is the English-facing launch site for XiaDianxin: a
              high-performance peer-to-peer calling app with webcam capture,
              mDNS discovery, nine-digit calling codes, Quicdial QR flows,
              chat, voicemail, downloads, and bilingual identity. The site
              keeps the app&apos;s indigo-glass intensity, then adds a brighter
              editorial contrast inspired by the charm reference.
            </Paragraph>

            <div className="flex flex-wrap gap-3">
              <a href="#features">
                <Button className="treat-cta treat-cta-primary" icon={<IconPhone />}>
                  Inspect the feature deck
                </Button>
              </a>
              <a href="#launch">
                <Button className="treat-cta" icon={<IconUpload />}>
                  Review launch stack
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <StatPill label="Focus" value="P2P calls + chat + voicemail" />
              <StatPill label="Reference DNA" value="App CSS + mascot library" />
              <StatPill label="Deployment" value="Cloudflare Pages free tier" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="treat-phone-frame">
              <div className="treat-phone-sheen" />
              <div className="treat-phone-top">
                <div>
                  <Text className="treat-kicker">Live product vignette</Text>
                  <Title heading={4} style={{ color: "var(--treat-text)", marginTop: 8 }}>
                    Treat markets what the app already does well
                  </Title>
                </div>
                <Avatar src={foxOk} size="large" />
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="treat-panel min-h-[260px] p-5"
                >
                  <div className="flex items-center justify-between">
                    <Text className="treat-kicker">Calling surface</Text>
                    <Tag color="red" className="treat-tag">
                      CAM live
                    </Tag>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <Avatar src={foxHanami} size="extra-large" />
                    <div className="flex flex-col">
                      <Text className="text-lg font-semibold text-[var(--treat-text)]">
                        Nearby peer found
                      </Text>
                      <Text className="text-sm text-[var(--treat-muted)]">
                        418-073-926 · video preferred
                      </Text>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3">
                    <div className="treat-inline-card">
                      <div className="treat-inline-icon">
                        <IconCamera />
                      </div>
                      <div>
                        <Text className="treat-inline-title">Real webcam capture</Text>
                        <Text className="treat-inline-copy">
                          The site previews the same live-call posture as the app.
                        </Text>
                      </div>
                    </div>
                    <div className="treat-inline-card">
                      <div className="treat-inline-icon">
                        <IconMicrophone />
                      </div>
                      <div>
                        <Text className="treat-inline-title">Voicemail fallback</Text>
                        <Text className="treat-inline-copy">
                          Missed call states become message-ready, not dead ends.
                        </Text>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-4">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="treat-panel p-5"
                  >
                    <Text className="treat-kicker">Transfer strip</Text>
                    <div className="mt-4 flex items-center justify-between">
                      <Text className="text-sm font-medium text-[var(--treat-text)]">
                        File + voicemail continuity
                      </Text>
                      <IconDownload className="text-[var(--treat-accent)]" />
                    </div>
                    <div className="mt-4 grid gap-3">
                      <Progress percent={93} showInfo={false} stroke="var(--treat-accent)" />
                      <Progress percent={82} showInfo={false} stroke="var(--treat-contrast)" />
                      <Progress percent={98} showInfo={false} stroke="var(--treat-pop)" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: [0, -1.5, 0, 1.5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="treat-panel overflow-hidden p-0"
                  >
                    <img
                      src={izakaya}
                      alt="Izakaya reference art"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-5">
                      <Text className="treat-kicker">Charm-reference lift</Text>
                      <Text className="mt-2 block text-sm text-[var(--treat-muted)]">
                        The brighter scene borrows warm wood, print-like contrast,
                        and a more editorial rhythm.
                      </Text>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div>
              <Text className="treat-kicker">Feature deck</Text>
              <Title heading={2} style={{ color: "var(--treat-text)", marginTop: 10 }}>
                The marketing story now maps directly onto the app&apos;s React surface.
              </Title>
              <Paragraph className="!mt-4 !text-base !leading-8 !text-[var(--treat-muted)]">
                Each panel is pulled from what the existing codebase already
                proves: live calling, local discovery, messaging, downloads,
                voicemail, QR flows, and bilingual identity.
              </Paragraph>
            </div>

            <div className="grid gap-3">
              {featureItems.map((feature) => {
                const isActive = feature.id === currentFeature.id;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => setActiveFeature(feature.id)}
                    className={`treat-feature-button ${isActive ? "active" : ""}`}
                  >
                    <span className="treat-feature-icon">{feature.icon}</span>
                    <span className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-[var(--treat-text)]">
                        {feature.eyebrow}
                      </span>
                      <span className="text-sm text-[var(--treat-muted)]">
                        {feature.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="treat-panel overflow-hidden p-6 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col gap-5">
                <Tag color="violet" className="treat-tag w-fit">
                  {currentFeature.eyebrow}
                </Tag>
                <Title heading={3} style={{ color: "var(--treat-text)", margin: 0 }}>
                  {currentFeature.title}
                </Title>
                <Paragraph className="!m-0 !text-base !leading-8 !text-[var(--treat-muted)]">
                  {currentFeature.description}
                </Paragraph>

                <div className="grid gap-3">
                  {currentFeature.bullets.map((bullet) => (
                    <div key={bullet} className="treat-inline-card">
                      <div className="treat-inline-icon">{currentFeature.icon}</div>
                      <Text className="treat-inline-copy">{bullet}</Text>
                    </div>
                  ))}
                </div>

                <div className="treat-panel mt-2 p-4">
                  <div className="flex items-center justify-between">
                    <Text className="treat-kicker">{currentFeature.metricLabel}</Text>
                    <Text className="text-sm font-semibold text-[var(--treat-text)]">
                      {currentFeature.metricValue}%
                    </Text>
                  </div>
                  <Progress
                    percent={currentFeature.metricValue}
                    showInfo={false}
                    stroke="var(--treat-accent)"
                    className="mt-4"
                  />
                </div>
              </div>

              <div className="relative flex min-h-[320px] items-center justify-center">
                <div className="treat-image-stage">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="treat-floating-note treat-floating-note-a">
                  <IconPhone />
                  <Text>Calls stay first-class.</Text>
                </div>
                <div className="treat-floating-note treat-floating-note-b">
                  <IconUpload />
                  <Text>Messages and drops remain in reach.</Text>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="scenes" className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="treat-panel p-6 sm:p-8"
          >
            <Text className="treat-kicker">Scene system</Text>
            <Title heading={2} style={{ color: "var(--treat-text)", marginTop: 10 }}>
              Same product voice, two lighting setups.
            </Title>
            <Paragraph className="!mt-4 !text-base !leading-8 !text-[var(--treat-muted)]">
              Midnight mode keeps the app&apos;s gradient-glass pressure. Paper
              Day relaxes into cream, charcoal, coral, and warm wood so the
              website can show range without losing the underlying Semi Design
              geometry.
            </Paragraph>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="treat-scene-card">
                <Text className="treat-kicker">After Dark</Text>
                <Text className="mt-3 block text-lg font-semibold text-[var(--treat-text)]">
                  Indigo surfaces, aurora gradients, glass blur, floating glow.
                </Text>
              </div>
              <div className="treat-scene-card">
                <Text className="treat-kicker">Paper Day</Text>
                <Text className="mt-3 block text-lg font-semibold text-[var(--treat-text)]">
                  Cream stock, editorial framing, warmth from the charm reference.
                </Text>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {loungeCards.map((card, index) => (
              <motion.article
                key={card.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="treat-panel overflow-hidden p-0"
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className={`w-full object-cover ${index === 2 ? "h-56" : "h-52"}`}
                />
                <div className="p-5">
                  <Text className="treat-kicker">{card.title}</Text>
                  <Text className="mt-3 block text-sm leading-7 text-[var(--treat-muted)]">
                    {card.copy}
                  </Text>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="mascots" className="treat-panel p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-5">
              <Text className="treat-kicker">Mascot lounge</Text>
              <Title heading={2} style={{ color: "var(--treat-text)", margin: 0 }}>
                The reference library becomes part of the brand, not a footnote.
              </Title>
              <Paragraph className="!m-0 !text-base !leading-8 !text-[var(--treat-muted)]">
                XiaDianxin already uses mascot artwork in idle cards, stickers,
                profile selection, and soft system moments. Treat uses the same
                approach to keep the site playful while the product stays highly
                technical under the hood.
              </Paragraph>

              <div className="grid gap-3">
                <div className="treat-inline-card">
                  <div className="treat-inline-icon">
                    <IconComment />
                  </div>
                  <Text className="treat-inline-copy">
                    Mascots hold the emotional tone for loading, empty, and
                    fallback states.
                  </Text>
                </div>
                <div className="treat-inline-card">
                  <div className="treat-inline-icon">
                    <IconSetting />
                  </div>
                  <Text className="treat-inline-copy">
                    The avatar-picker idea translates cleanly into landing-page
                    personality blocks.
                  </Text>
                </div>
                <div className="treat-inline-card">
                  <div className="treat-inline-icon">
                    <IconSearch />
                  </div>
                  <Text className="treat-inline-copy">
                    Warm imagery offsets the otherwise infrastructural story of
                    discovery, dialing, and transport.
                  </Text>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="treat-panel overflow-hidden p-0">
                <img src={foxOk} alt="Kyu-kun OK" className="h-56 w-full object-cover" />
              </div>
              <div className="treat-panel overflow-hidden p-0">
                <img
                  src={foxSleeping}
                  alt="Sleeping Kyu-kun"
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="treat-panel overflow-hidden p-0 sm:col-span-2">
                <img src={pentaro} alt="Pentaro" className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="launch" className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-5"
          >
            <Text className="treat-kicker">Launch stack</Text>
            <Title heading={2} style={{ color: "var(--treat-text)", margin: 0 }}>
              The requested stack is wired into the build, not just listed.
            </Title>
            <Paragraph className="!m-0 !text-base !leading-8 !text-[var(--treat-muted)]">
              Remix handles routing and SSR, Vite compiles the site, Semi Design
              supplies the UI primitives, Tailwind drives layout, Framer Motion
              handles motion, Zustand drives scene state, and HarmonyOS Sans
              keeps the typography consistent with the app.
            </Paragraph>
            <div className="flex flex-wrap gap-3">
              {techStack.map((item) => (
                <Tag key={item} color="light-blue" className="treat-tag">
                  {item}
                </Tag>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {launchRows.map((row) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                className="treat-panel flex gap-4 p-5"
              >
                <div className="treat-inline-icon mt-1">{row.icon}</div>
                <div className="flex flex-col gap-2">
                  <Text className="text-lg font-semibold text-[var(--treat-text)]">
                    {row.title}
                  </Text>
                  <Text className="text-sm leading-7 text-[var(--treat-muted)]">
                    {row.description}
                  </Text>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
