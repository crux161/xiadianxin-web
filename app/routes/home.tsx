import pkg from 'date-fns-tz';
const { zonedTimeToUtc } = pkg;
import type { MetaFunction } from "@remix-run/cloudflare";
import { motion } from "framer-motion";
import { Avatar, Button, Progress, Tag, Typography } from "@douyinfe/semi-ui";
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
    eyebrow: "Voice & Video",
    title: "Crystal clear connections, face-to-face or audio-only.",
    description:
      "Jump into seamless peer-to-peer calls. Whether you are turning on the camera to hang out or dropping in audio-only while you work, the connection is direct, fast, and secure.",
    bullets: [
      "Low-latency, encrypted peer-to-peer routing",
      "Seamless switching between video and audio modes",
      "A gorgeous, distraction-free calling interface",
    ],
    metricLabel: "Call reliability",
    metricValue: 99,
    image: foxOk,
    imageAlt: "Kyu-kun giving an OK sign",
    icon: <IconPhone />,
  },
  {
    id: "locality",
    eyebrow: "Local Discovery",
    title: "Find friends instantly, no setup required.",
    description:
      "Treat uses intelligent mDNS to automatically discover peers on your local network. For everyone else, connect instantly using simple 9-digit calling codes or Quicdial QR scans.",
    bullets: [
      "Zero-config network discovery for local peers",
      "Simple 9-digit direct dialing codes",
      "Instant Quicdial via QR code scanning",
    ],
    metricLabel: "Connection speed",
    metricValue: 94,
    image: foxHanami,
    imageAlt: "Kyu-kun under cherry blossoms",
    icon: <IconSearch />,
  },
  {
    id: "messaging",
    eyebrow: "Chat & Drops",
    title: "Keep the conversation flowing alongside your call.",
    description:
      "Share files, send messages, and drop voicemails without ever leaving the call screen. Everything happens in one continuous, beautifully designed conversation layer.",
    bullets: [
      "Live text chat integrated with active calls",
      "Instant file transfers and download history",
      "Beautiful voicemail recording and playback",
    ],
    metricLabel: "Transfer success",
    metricValue: 98,
    image: pentaro,
    imageAlt: "Pentaro mascot",
    icon: <IconComment />,
  },
  {
    id: "identity",
    eyebrow: "Personalization",
    title: "Express yourself across languages and styles.",
    description:
      "Make your profile your own. Treat is fully localized in English and Chinese, offering customizable avatars, presence states, and a warm, inviting design language.",
    bullets: [
      "Secure, local profile data persistence",
      "Native English and Chinese language support",
      "Customizable avatars and friendly online states",
    ],
    metricLabel: "User satisfaction",
    metricValue: 96,
    image: kenRed,
    imageAlt: "Ken-chan mascot",
    icon: <IconSetting />,
  },
];

const sections = [
  { href: "#features", label: "Features" },
  { href: "#scenes", label: "Themes" },
  { href: "#mascots", label: "Community" },
];

export const meta: MetaFunction = () => [
  { title: "Treat | XiaDianxin" },
  {
    name: "description",
    content:
      "Treat is a peer-to-peer calling and messaging app. Experience crystal clear video, seamless file drops, and effortless local discovery.",
  },
];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="treat-panel flex min-w-[160px] flex-1 flex-col gap-1 px-5 py-4">
      <Text className="treat-kicker">{label}</Text>
      <Text className="text-xl font-semibold text-[var(--treat-text)]">{value}</Text>
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
      {/* Soft Ambient Background */}
      <div className="treat-orb treat-orb-a" />
      <div className="treat-orb treat-orb-b" />
      <div className="treat-noise" />

      {/* Navigation */}
      <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="treat-panel mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={appIcon} alt="Treat logo" className="h-10 w-10 rounded-xl shadow-sm" />
            <div>
              <Text className="block text-lg font-bold text-[var(--treat-text)] leading-none">XiaDianxin</Text>
              <Text className="block text-xs font-medium text-[var(--treat-muted)] mt-1">Communications</Text>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="text-sm font-medium text-[var(--treat-muted)] transition hover:text-[var(--treat-text)]"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full bg-[var(--treat-bg-soft)] p-1 border border-[var(--treat-border)] sm:flex">
               <button 
                 className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${scene === 'paper' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'}`}
                 onClick={() => setScene("paper")}
               >
                 Light
               </button>
               <button 
                 className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${scene === 'midnight' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
                 onClick={() => setScene("midnight")}
               >
                 Dark
               </button>
            </div>
            <Button className="treat-cta treat-cta-primary ml-2">Download App</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-32 px-4 pb-24 pt-16 sm:px-6 lg:px-10">
        
        {/* Hero Section */}
        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="blue" className="treat-tag">v2.0 Available Now</Tag>
              <Tag color="grey" className="treat-tag">HarmonyOS Ready</Tag>
            </div>

            <div className="max-w-2xl">
              <Title className="!mb-4 !mt-2 !text-5xl !leading-[1.1] md:!text-6xl lg:!text-[4.2rem] !text-[var(--treat-text)] font-bold">
                Connect instantly with a touch of <span className="treat-gradient-text">charm.</span>
              </Title>
              <Paragraph className="!text-lg !leading-relaxed !text-[var(--treat-muted)] max-w-xl">
                Experience high-fidelity peer-to-peer calling, seamless local discovery, and beautiful chat integration. Treat is the effortless way to stay close to the people who matter.
              </Paragraph>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="large" className="treat-cta treat-cta-primary px-8" icon={<IconPhone />}>
                Start a Call
              </Button>
              <Button size="large" className="treat-cta px-8" theme="borderless" style={{ border: '1px solid var(--treat-border)' }}>
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <StatPill label="Latency" value="< 50ms" />
              <StatPill label="Encryption" value="End-to-End" />
              <StatPill label="Network" value="Peer-to-Peer" />
            </div>
          </motion.div>

          {/* Hero UI Preview (Animations Smoothed out) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="treat-phone-frame">
              <div className="treat-phone-sheen" />
              <div className="treat-phone-top">
                <div>
                  <Text className="treat-kicker">Active Call</Text>
                  <Text className="block text-lg font-bold text-[var(--treat-text)] mt-1">
                    Design Team Sync
                  </Text>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                {/* Unified subtle floating for the whole group, not individual parts */}
                <div className="treat-panel p-5 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <Text className="text-sm font-semibold text-[var(--treat-muted)]">Connected</Text>
                      <Tag color="green" className="treat-tag bg-green-500/10 text-green-500 border-none">04:22</Tag>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar src={foxHanami} size="extra-large" />
                      <div>
                        <Text className="block text-lg font-semibold text-[var(--treat-text)]">Kyu-kun</Text>
                        <Text className="text-sm text-[var(--treat-muted)]">Local Network</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <div className="treat-inline-icon bg-[var(--treat-accent)] text-white"><IconMicrophone /></div>
                    <div className="treat-inline-icon"><IconCamera /></div>
                    <div className="treat-inline-icon bg-red-500/10 text-red-500"><IconPhone style={{ transform: 'rotate(135deg)' }} /></div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="treat-panel p-5">
                    <Text className="text-xs font-semibold text-[var(--treat-muted)] uppercase tracking-wider">File Transfer</Text>
                    <div className="mt-3 flex items-center justify-between">
                      <Text className="text-sm font-medium text-[var(--treat-text)]">assets.zip</Text>
                      <IconDownload className="text-[var(--treat-accent)]" />
                    </div>
                    <Progress percent={82} showInfo={false} stroke="var(--treat-accent)" className="mt-3" />
                  </div>

                  <div className="treat-panel overflow-hidden p-0 h-full min-h-[100px] relative group">
                    <img src={pentaro} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60 transition group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                       <Text className="text-white text-sm font-medium">Shared Canvas</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 sticky top-32"
          >
            <div>
              <Text className="treat-kicker">Capabilities</Text>
              <Title heading={2} className="!mt-2 !mb-4 font-bold text-[var(--treat-text)]">
                Everything you need to stay connected.
              </Title>
              <Paragraph className="!text-base !leading-relaxed !text-[var(--treat-muted)]">
                Designed for speed and ease of use. Treat combines powerful peer-to-peer technology with a beautiful, distraction-free interface.
              </Paragraph>
            </div>

            <div className="grid gap-2">
              {featureItems.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeature(feature.id)}
                  className={`treat-feature-button ${feature.id === currentFeature.id ? "active" : ""}`}
                >
                  <span className="treat-feature-icon">{feature.icon}</span>
                  <span className="flex flex-col text-left">
                    <span className="text-sm font-bold text-[var(--treat-text)]">{feature.eyebrow}</span>
                    <span className="text-sm text-[var(--treat-muted)] mt-0.5 line-clamp-1">{feature.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="treat-panel overflow-hidden p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="treat-inline-icon bg-[var(--treat-bg)]">{currentFeature.icon}</div>
                 <Title heading={3} className="!m-0 text-[var(--treat-text)]">{currentFeature.title}</Title>
              </div>
              
              <Paragraph className="!text-lg !leading-relaxed !text-[var(--treat-muted)]">
                {currentFeature.description}
              </Paragraph>

              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {currentFeature.bullets.map((bullet) => (
                  <div key={bullet} className="treat-inline-card p-4">
                    <IconSetting className="text-[var(--treat-accent)] flex-shrink-0" />
                    <Text className="text-sm font-medium text-[var(--treat-text)]">{bullet}</Text>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl overflow-hidden border border-[var(--treat-border)] aspect-video relative">
                 <img src={currentFeature.image} alt={currentFeature.imageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Corporate Footer (Huawei / Tencent Style) */}
      <footer className="mt-20 border-t border-[var(--treat-border)] bg-[var(--treat-bg-soft)] py-16 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                  <img src={appIcon} alt="Treat logo" className="h-8 w-8 rounded-lg" />
                  <span className="text-lg font-bold text-[var(--treat-text)]">XiaDianxin</span>
               </div>
               <p className="text-sm text-[var(--treat-muted)] leading-relaxed max-w-xs mb-8">
                 Connecting people with elegance and speed. Peer-to-peer calling, messaging, and file sharing designed for the modern web.
               </p>
               <div className="flex items-center gap-4">
                 {/* Social placeholders */}
                 <div className="w-10 h-10 rounded-full border border-[var(--treat-border)] flex items-center justify-center text-[var(--treat-muted)] hover:text-[var(--treat-accent)] hover:border-[var(--treat-accent)] transition cursor-pointer">
                    <IconComment />
                 </div>
                 <div className="w-10 h-10 rounded-full border border-[var(--treat-border)] flex items-center justify-center text-[var(--treat-muted)] hover:text-[var(--treat-accent)] hover:border-[var(--treat-accent)] transition cursor-pointer">
                    <IconUpload />
                 </div>
               </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-[var(--treat-text)] mb-6">Products</h4>
              <ul className="space-y-4 text-sm text-[var(--treat-muted)]">
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Treat for Web</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Treat for Desktop</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">HarmonyOS App</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Pricing & Plans</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--treat-text)] mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-[var(--treat-muted)]">
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Help Center</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Developer API</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Community Guidelines</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Release Notes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--treat-text)] mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-[var(--treat-muted)]">
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">About Us</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Careers</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Privacy Policy</li>
                <li className="hover:text-[var(--treat-accent)] cursor-pointer transition">Terms of Service</li>
              </ul>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-[var(--treat-border)] flex flex-col md:flex-row items-center justify-between gap-4">
             <Text className="text-xs text-[var(--treat-muted)]">
               © 2026 XiaDianxin Communications. All rights reserved.
             </Text>
             <div className="flex items-center gap-6 text-xs text-[var(--treat-muted)]">
                <span className="hover:text-[var(--treat-text)] cursor-pointer transition">English (US)</span>
                <span className="hover:text-[var(--treat-text)] cursor-pointer transition">简体中文</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

