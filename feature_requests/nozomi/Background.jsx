import React from 'react';
import { motion } from 'framer-motion';

const QQBackground = () => {
  // We create an array for the vertical "slats"
  const columnCount = 20; 
  const columns = Array.from({ length: columnCount });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      
      {/* LAYER 1: The Animated Gradient Blobs */}
      <div className="absolute inset-0 z-0">
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-500/40 blur-[120px]"
        />
        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/30 blur-[100px]"
        />
        {/* Blob 3 */}
        <motion.div
          animate={{
            x: [0, 50, -100, 0],
            y: [0, 80, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/20 blur-[110px]"
        />
      </div>

      {/* LAYER 2: The Vertical "Ribbon" Overlay */}
      <div className="absolute inset-0 z-10 flex">
        {columns.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full border-r border-white/5 last:border-r-0"
            style={{
              // This creates the subtle "glass" effect on each slat
              backdropFilter: 'blur(4px)',
              backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
            }}
          />
        ))}
      </div>

      {/* LAYER 3: Content (Optional) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold tracking-tight mb-4 drop-shadow-2xl">
          Welcome to the Future
        </h1>
        <p className="text-lg text-white/60 max-w-md text-center">
          A high-performance background inspired by modern interactive design.
        </p>
      </div>
    </div>
  );
};

export default QQBackground;
