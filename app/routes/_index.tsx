import { motion } from "framer-motion";
import { Button, Typography, Space } from "@douyinfe/semi-ui";
import { IconArrowRight, IconMoon, IconSun } from "@douyinfe/semi-icons";
import { Link } from "@remix-run/react";

import appIcon from "../../reference/icons/web/Favicons (IMG_6739)/favicon-192.png";
import kenChanImg from "../../reference/images/ken-chan/koken-CNY-red.jpeg";
import { useTreatSiteStore } from "../lib/site-store";

const { Title, Text, Paragraph } = Typography;

export default function LandingPage() {
  const scene = useTreatSiteStore((store) => store.scene);
  const setScene = useTreatSiteStore((store) => store.setScene);

  return (
    <div id="site-root" data-scene={scene} className="qq-landing-body">

      {/* Huawei Iridescent / Twilight Vertical Light Beams */}
      <div className="shimmer-container">
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
      </div>

      {/* Glass Navigation */}
      <nav className="glass-nav sticky top-0 flex items-center justify-between px-10 py-5 z-20 transition-all duration-500">
        <div className="flex items-center gap-4">
          <img src={appIcon} className="h-10 w-10 rounded-[14px] shadow-sm" alt="Koken" />
          <Text className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-main)' }}>
            koken.dev
          </Text>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="font-bold transition-opacity hover:opacity-100" style={{ color: 'var(--text-main)', opacity: 0.6 }}>Products</a>
          <a href="#" className="font-bold transition-opacity hover:opacity-100" style={{ color: 'var(--text-main)', opacity: 0.6 }}>Community</a>
        </div>

        <div className="flex gap-4 items-center">
          {/* Theme Toggle for Pearlescent vs Twilight */}
          <button
            onClick={() => setScene(scene === 'paper' ? 'midnight' : 'paper')}
            className="w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-black/5 dark:hover:bg-white/10"
            style={{ color: 'var(--text-main)' }}
          >
            {scene === 'paper' ? <IconMoon size="large" /> : <IconSun size="large" />}
          </button>

          <Link to="/home">
            <Button
              className="!rounded-full !px-8 !py-5 !font-bold shadow-lg"
              style={{
                backgroundColor: scene === 'paper' ? '#000' : '#fff',
                color: scene === 'paper' ? '#fff' : '#000'
              }}
            >
              Enter Hub
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass-card border-[var(--glass-border)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Text className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>
              Koken Beta v2.0
            </Text>
          </div>

          <div className="relative inline-block mb-6">
            {/* The Pink-to-Peach Watercolor Splash */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#ff7eb3] to-[#ffb380] blur-[50px] rounded-full pointer-events-none transition-opacity duration-700"
              style={{
                opacity: scene === 'paper' ? 0.45 : 0,
                transform: 'scale(1.4) translateY(10%)'
              }}
            />

            <Title className="!text-7xl md:!text-[6rem] !font-black !m-0 tracking-tighter relative z-10" style={{ color: 'var(--text-main)' }}>
              Hello, <span className="hero-gradient-text">小小</span>.
            </Title>
          </div>

          <Paragraph className="!text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
            Step into the next generation of personal connection.
            Designed exclusively for the <span style={{ color: 'var(--text-main)' }}>黄犬</span> community.
          </Paragraph>

          <Link to="/home">
            <Button
              size="large"
              className="!h-16 !px-12 !rounded-full !text-lg font-bold shadow-2xl transition-transform hover:scale-105"
              style={{ backgroundColor: '#0052d9', color: '#fff', border: 'none' }}
              icon={<IconArrowRight />}
              iconPosition="right"
            >
              Get Started
            </Button>
          </Link>

          {/* Dreamy Floating Mascot Array */}
          <div className="mt-28 relative">
            {/* The soft glowing shadow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-300 rounded-[50px] blur-3xl opacity-30"></div>

            <motion.div className="relative glass-card p-3 inline-block float-element">
              <img
                src={kenChanImg}
                className="h-80 w-80 rounded-[35px] object-cover"
                alt="Ken-chan (小小)"
              />

              {/* Cute "Space Milk" style floating badge */}
              <div className="absolute -bottom-8 -right-8 glass-card p-5 rounded-3xl flex flex-col items-start gap-1">
                <Text className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Assistant</Text>
                <Text className="text-lg font-bold" style={{ color: 'var(--text-main)' }}>Ken-chan Online</Text>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 px-10 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6" style={{ color: 'var(--text-muted)' }}>
          <Text className="text-xs font-bold tracking-widest uppercase" style={{ color: 'inherit' }}>
            Koken Communications · 2026
          </Text>
          <div className="flex gap-8 text-xs font-bold">
            <span className="cursor-pointer hover:opacity-70 transition-opacity">PRC ICP 备 000000号</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Privacy & Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}