'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    // Refined, elegant timing sequence
    const timers = [
      setTimeout(() => setAnimationPhase(1), 400),   // Gentle backdrop
      setTimeout(() => setAnimationPhase(2), 800),   // Icon appears
      setTimeout(() => setAnimationPhase(3), 1400),  // Text flows in
      setTimeout(() => setAnimationPhase(4), 2200),  // Final polish
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 8800), // Quick, elegant exit
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  // Ultra-smooth easing curves for premium feel
  const elegantEase = [0.25, 0.46, 0.45, 0.94];
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: elegantEase }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 overflow-hidden"
      >
        {/* Subtle Background Texture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationPhase >= 1 ? 0.03 : 0 }}
          transition={{ duration: 2, ease: elegantEase }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(52, 211, 153, 0.08) 0%, transparent 50%)`,
          }}
        />

        {/* Main Content Container */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Elegant Backdrop Glow - Single Layer */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: animationPhase >= 1 ? 1 : 0.8,
              opacity: animationPhase >= 1 ? 0.12 : 0,
            }}
            transition={{ duration: 1.8, ease: luxuryEase }}
            className="absolute w-80 h-80 rounded-full bg-gradient-radial from-emerald-400/20 via-emerald-500/10 to-transparent blur-2xl"
          />

          {/* Refined Rotating Ring - Single, Subtle */}
          <motion.div
            initial={{ scale: 0.9, rotate: -45, opacity: 0 }}
            animate={{ 
              scale: animationPhase >= 1 ? 1 : 0.9,
              rotate: animationPhase >= 1 ? 0 : -45,
              opacity: animationPhase >= 1 ? 0.2 : 0,
            }}
            transition={{ 
              scale: { duration: 1.5, ease: luxuryEase },
              rotate: { duration: 1.5, ease: luxuryEase },
              opacity: { duration: 1.5, ease: luxuryEase },
            }}
            className="absolute w-64 h-64 border border-emerald-300/30 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.1), transparent)',
            }}
          />

          {/* Premium Icon with Gentle Float */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ 
              scale: animationPhase >= 2 ? 1 : 0.7,
              opacity: animationPhase >= 2 ? 1 : 0,
              y: animationPhase >= 2 ? 0 : 20,
            }}
            transition={{ 
              duration: 1.2, 
              ease: luxuryEase,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative z-10 mb-8"
          >
            <motion.div
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Subtle Icon Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.2)',
                    '0 0 30px rgba(16, 185, 129, 0.3)',
                    '0 0 20px rgba(16, 185, 129, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full"
              />

              <Image
                src="/icon.png"
                alt="Egy Herbs Global"
                width={96}
                height={96}
                className="relative z-10 drop-shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Elegant Typography - Clean & Refined */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: animationPhase >= 3 ? 1 : 0,
              y: animationPhase >= 3 ? 0 : 15,
            }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ 
                opacity: animationPhase >= 3 ? 1 : 0,
                letterSpacing: animationPhase >= 3 ? '0.05em' : '0.3em',
              }}
              transition={{ duration: 1.5, ease: elegantEase }}
              className="text-4xl md:text-5xl font-bold text-white tracking-wide font-inter"
            >
              <span className="font-light text-emerald-100">Egy</span>
              <span className="font-bold text-emerald-300 mx-2">Herbs</span>
              <span className="font-light text-emerald-100">Global</span>
            </motion.h1>
            
            {/* Minimalist Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: animationPhase >= 3 ? '120px' : 0,
                opacity: animationPhase >= 3 ? 0.6 : 0,
              }}
              transition={{ duration: 1.2, delay: 0.3, ease: elegantEase }}
              className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mx-auto"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ 
                opacity: animationPhase >= 3 ? 0.9 : 0,
                y: animationPhase >= 3 ? 0 : 8,
              }}
              transition={{ duration: 1, delay: 0.6, ease: elegantEase }}
              className="text-lg text-emerald-200 font-light tracking-[0.15em] uppercase font-inter"
            >
              Premium Egyptian Herbs
            </motion.p>
          </motion.div>

          {/* Refined Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animationPhase >= 4 ? 0.7 : 0 }}
            transition={{ duration: 0.8, ease: elegantEase }}
            className="flex space-x-2 mt-12"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-1 h-1 bg-emerald-300 rounded-full"
              />
            ))}
          </motion.div>

          {/* Subtle Final Glow */}
          {animationPhase >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.08, scale: 1.1 }}
              transition={{ duration: 1, ease: elegantEase }}
              className="absolute inset-0 bg-gradient-radial from-emerald-400/15 via-emerald-500/5 to-transparent rounded-full blur-3xl"
            />
          )}
        </div>

        {/* Minimal Floating Particles - Performance Optimized */}
        {animationPhase >= 2 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: `${20 + (i * 15)}%`,
                  y: `${30 + (i * 10)}%`,
                }}
                animate={{ 
                  opacity: [0, 0.2, 0],
                  scale: [0, 1, 0],
                  y: [`${30 + (i * 10)}%`, `${10 + (i * 10)}%`],
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                className="absolute w-0.5 h-0.5 bg-emerald-300/60 rounded-full"
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}