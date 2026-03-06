import { motion } from "framer-motion";
import { Button, Dropdown, Typography } from "@douyinfe/semi-ui";
import { IconChevronDown, IconDownload, IconArrowRight } from "@douyinfe/semi-icons";
import { Link } from "@remix-run/react";
import appIcon from "../../reference/icons/web/Favicons (IMG_6739)/favicon-192.png";
import kenChanImg from "../../reference/images/ken-chan/koken-CNY-red.jpeg";

const { Title, Text, Paragraph } = Typography;

export default function LandingPage() {
  return (
    <div className="qq-landing-body min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Shimmering Breeze Background */}
      <div className="breeze-bg">
        <div className="orb" style={{ background: 'rgba(0, 164, 255, 0.12)', top: '-5%', left: '5%' }} />
        <div className="orb" style={{ background: 'rgba(255, 177, 27, 0.1)', bottom: '0%', right: '5%', animationDelay: '-4s' }} />
        <div className="orb" style={{ background: 'rgba(254, 123, 112, 0.08)', top: '40%', right: '-10%', animationDelay: '-8s' }} />
      </div>

      {/* Glass Navigation */}
      <nav className="flex items-center justify-between px-10 py-6 z-20">
        <div className="flex items-center gap-3">
          <img src={appIcon} className="h-9 w-9 rounded-xl" alt="Koken" />
          <Text className="text-xl font-bold tracking-tight text-black">koken.dev</Text>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Dropdown
            render={
              <Dropdown.Menu>
                <Dropdown.Item>Treat v2.0</Dropdown.Item>
                <Dropdown.Item>Desktop Client</Dropdown.Item>
                <Dropdown.Item>Mobile Hub</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <span className="nav-link cursor-pointer flex items-center gap-1 text-sm">
              Products <IconChevronDown size="small" />
            </span>
          </Dropdown>
          <a href="#" className="nav-link text-sm">Masvots</a>
          <a href="#" className="nav-link text-sm">Community</a>
        </div>

        <div className="flex gap-4">
          <Button theme="borderless" className="!rounded-full font-bold !text-gray-600">Login</Button>
          <Link to="/home">
            <Button 
              style={{ backgroundColor: '#0052d9', color: '#fff' }} 
              className="!rounded-full !px-6 font-bold"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Title className="!text-7xl !font-black !mb-6 tracking-tighter text-black">
            Meet <span style={{ color: '#0052d9' }}>小小</span>
          </Title>
          <Paragraph className="!text-2xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            The next generation of personal connection for the <span className="text-black">黄犬</span> community.
          </Paragraph>

          <Link to="/home">
            <Button 
              size="large" 
              className="!h-16 !px-12 !rounded-2xl !text-lg font-bold shadow-2xl shadow-blue-200"
              style={{ backgroundColor: '#0052d9', color: '#fff' }}
              icon={<IconArrowRight />}
              iconPosition="right"
            >
              Enter Koken
            </Button>
          </Link>

          {/* Floating Ken-chan */}
          <div className="mt-20 relative">
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <img 
                src={kenChanImg} 
                className="h-72 w-72 rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[12px] border-white"
                alt="Ken-chan"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                <Text className="font-bold text-blue-600">Active Beta v2</Text>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="py-10 px-10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
          <Text className="text-xs font-bold tracking-widest uppercase">Koken Communications · 2026</Text>
          <div className="flex gap-6 text-xs font-bold">
            <span className="cursor-pointer">PRC ICP 备 000000号</span>
            <span className="cursor-pointer">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
