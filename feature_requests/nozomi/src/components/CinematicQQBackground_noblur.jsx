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
        /* NEW: The sweeping light animation */
        @keyframes sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* 2. THE SOFT PASTEL LIGHTS (Aurora Mesh) */}
      <div className="absolute inset-0 z-0 opacity-90" style={{ filter: 'blur(120px)' }}>
        <div 
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[60%] rounded-[100%] bg-[#1E3A8A] mix-blend-screen"
          style={{ animation: 'aurora-1 20s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute top-[-5%] right-[-10%] w-[50%] h-[70%] rounded-[100%] bg-[#06B6D4] mix-blend-screen"
          style={{ animation: 'aurora-2 25s ease-in-out infinite alternate-reverse' }}
        />
        <div 
          className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-[100%] bg-[#7C3AED] mix-blend-screen"
          style={{ animation: 'aurora-3 18s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute bottom-[-15%] left-[5%] w-[90%] h-[50%] rounded-[100%] bg-[#FCA5A5] mix-blend-screen"
          style={{ animation: 'aurora-1 22s ease-in-out infinite alternate-reverse' }}
        />
      </div>

      {/* 3. THE STAINED GLASS SLATS (3D Louvers) */}
      <div className="absolute inset-0 z-10 flex">
        {columns.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full relative"
            style={{
              borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
              borderRight: '1px solid rgba(0, 0, 0, 0.2)',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          />
        ))}
      </div>

      {/* 4. THE SWEEPING SHIMMER OVERLAY (Upgraded) */}
      {/* This creates an angled beam of light that pans across the glass infinitely */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
        style={{ 
          background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 75%, transparent 80%)',
          backgroundSize: '200% 100%',
          animation: 'sweep 12s linear infinite' 
        }}
      />

      {/* 5. CONTENT AREA */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white pointer-events-none">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
          Immersive Canvas
        </h1>
      </div>
    </div>
  );
};

export default CinematicQQBackground;
