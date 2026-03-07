import React from 'react';

const CinematicQQBackground = () => {
  const columnCount = 24; 
  const columns = Array.from({ length: columnCount });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050B14]">
      
      {/* 1. THE ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, 10%) scale(1.1); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, -10%) scale(1.2); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, -5%) scale(1.05); }
        }
        @keyframes sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* 2. THE SOFT PASTEL LIGHTS (Aurora Mesh) */}
      <div className="absolute inset-0 z-0 opacity-90" style={{ filter: 'blur(120px)' }}>
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[60%] rounded-[100%] bg-[#1E3A8A] mix-blend-screen" style={{ animation: 'aurora-1 20s ease-in-out infinite alternate' }} />
        <div className="absolute top-[-5%] right-[-10%] w-[50%] h-[70%] rounded-[100%] bg-[#06B6D4] mix-blend-screen" style={{ animation: 'aurora-2 25s ease-in-out infinite alternate-reverse' }} />
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-[100%] bg-[#7C3AED] mix-blend-screen" style={{ animation: 'aurora-3 18s ease-in-out infinite alternate' }} />
        <div className="absolute bottom-[-15%] left-[5%] w-[90%] h-[50%] rounded-[100%] bg-[#FCA5A5] mix-blend-screen" style={{ animation: 'aurora-1 22s ease-in-out infinite alternate-reverse' }} />
      </div>

      {/* 3. THE STAINED GLASS SLATS */}
      <div className="absolute inset-0 z-10 flex">
        {columns.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full relative"
            style={{
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
              borderRight: '1px solid rgba(0, 0, 0, 0.2)',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)',
              backdropFilter: 'blur(8px)', // Reduced blur so the lights shine through better
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      {/* 4. EDGE-TO-EDGE LIQUID GLASS PANE */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          // A very subtle white tint to create the "glass" body
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          // The crucial "just enough" blur
          backdropFilter: 'blur(6px) saturate(110%)',
          WebkitBackdropFilter: 'blur(6px) saturate(110%)',
          // Inner glow to give the edges of the screen a physical glass rim
          boxShadow: 'inset 0 0 40px rgba(255,255,255,0.05)',
        }}
      >
        {/* The Sweeping Shimmer - now applied across the whole glass pane */}
        <div 
          className="absolute inset-0 mix-blend-overlay"
          style={{ 
            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.05) 75%, transparent 80%)',
            backgroundSize: '200% 100%',
            animation: 'sweep 12s linear infinite' 
          }}
        />
      </div>

      {/* 5. CONTENT AREA */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl">
          Edge-to-Edge
        </h1>
        <p className="text-white/80 tracking-widest uppercase text-sm font-medium">
          Unified Glass Canvas
        </p>
      </div>

    </div>
  );
};

export default CinematicQQBackground;
