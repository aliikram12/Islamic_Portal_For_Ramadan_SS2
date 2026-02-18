import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Moon, Sparkles } from 'lucide-react';

const islamicQuotes = [
  "Ramadan is the month of blessings, forgiveness, and mercy",
  "Fast with your body, feed your soul with prayer",
  "In this holy month, hearts unite in worship",
  "The best of you are those who learn the Quran and teach it",
  "Ramadan: A time to purify the soul and refocus on Allah",
  "Give charity without delay, for it stands in the way of calamity",
  "Whoever fasts Ramadan with faith and seeking reward, his past sins are forgiven",
  "The dua of a fasting person is never rejected",
  "In unity we stand, in faith we grow - SS2 together",
  "May this Ramadan bring peace, prosperity, and spiritual growth",
];

const ramadanBlessings = [
  "Ramadan Mubarak",
  "Blessed Ramadan",
  "Kareem Ramadan",
  "Spiritual Renewal",
  "Divine Blessings",
];

export default function AnimatedIntro() {
  const navigate = useNavigate();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showSS2, setShowSS2] = useState(false);
  const [blessingIndex, setBlessingIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto navigation after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Animation phases
  useEffect(() => {
    const phases = [
      { time: 0, action: () => setCurrentPhase(1) },
      { time: 500, action: () => setShowTitle(true) },
      { time: 1500, action: () => setShowSS2(true) },
      { time: 2500, action: () => setCurrentPhase(2) },
    ];

    phases.forEach(({ time, action }) => {
      setTimeout(action, time);
    });
  }, []);

  // Quote rotation
  useEffect(() => {
    if (currentPhase < 2) return;
    
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % islamicQuotes.length);
    }, 2500);

    return () => clearInterval(quoteInterval);
  }, [currentPhase]);

  // Blessing rotation
  useEffect(() => {
    const blessingInterval = setInterval(() => {
      setBlessingIndex((prev) => (prev + 1) % ramadanBlessings.length);
    }, 2000);

    return () => clearInterval(blessingInterval);
  }, []);

  // Generate stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 10,
    drift: `${(Math.random() - 0.5) * 200}px`,
  }));

  // Generate lanterns
  const lanterns = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: `${10 + i * 16}%`,
    top: `${15 + (i % 3) * 25}%`,
    scale: 0.6 + Math.random() * 0.4,
    delay: i * 0.5,
  }));

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a] overflow-hidden z-50"
    >
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-50" />

      {/* Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              '--duration': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              '--duration': `${particle.duration}s`,
              '--delay': `${particle.delay}s`,
              '--drift': particle.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Floating Lanterns */}
      {lanterns.map((lantern) => (
        <motion.div
          key={lantern.id}
          className="absolute lantern"
          style={{
            left: lantern.left,
            top: lantern.top,
            scale: lantern.scale,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: lantern.delay,
            ease: 'easeOut',
          }}
        >
          <div className="relative">
            {/* Lantern Glow */}
            <div className="absolute inset-0 w-16 h-20 bg-amber-500/30 rounded-lg blur-xl" />
            {/* Lantern Body */}
            <div className="relative w-16 h-20 bg-gradient-to-b from-amber-400 to-orange-600 rounded-lg shadow-2xl">
              {/* Lantern Top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-amber-700 rounded-full" />
              {/* Lantern Bottom */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-amber-700 rounded-full" />
              {/* Lantern Pattern */}
              <div className="absolute inset-2 border-2 border-amber-300/50 rounded flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-200" />
              </div>
              {/* Inner Light */}
              <div className="absolute inset-4 bg-amber-300/40 rounded blur-md animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Crescent Moon */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Moon Glow Rings */}
            <div className="absolute inset-0 moon-glow rounded-full" />
            <div className="absolute inset-[-20px] bg-gradient-radial from-amber-400/20 to-transparent rounded-full" />
            
            {/* Crescent Moon SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.8))' }}
            >
              <defs>
                <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4e5c2" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#b8941f" />
                </linearGradient>
              </defs>
              <path
                d="M70 10 A40 40 0 1 0 70 90 A30 30 0 1 1 70 10"
                fill="url(#moonGradient)"
              />
            </svg>

            {/* Sparkles around moon */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-amber-300" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-6"
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Rotating Blessing Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={blessingIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-amber-400/80 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
              {ramadanBlessings[blessingIndex]}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main Title */}
        <AnimatePresence>
          {showTitle && (
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4"
            >
              <span className="gold-gradient-text">Ramadan Mubarak</span>
            </motion.h1>
          )}
        </AnimatePresence>

        {/* SS2 Badge */}
        <AnimatePresence>
          {showSS2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: 'easeOut',
                type: 'spring',
                stiffness: 200
              }}
              className="relative"
            >
              <div className="glass-strong px-8 py-4 rounded-full gold-glow">
                <span className="text-3xl md:text-5xl font-bold gold-gradient-text tracking-wider">
                  SS2
                </span>
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Moon className="w-6 h-6 text-amber-400/60" />
              </motion.div>
              <motion.div
                className="absolute -right-8 top-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Moon className="w-6 h-6 text-amber-400/60" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Islamic Quotes Section */}
        <AnimatePresence>
          {currentPhase >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-12 max-w-2xl mx-auto text-center"
            >
              <div className="glass px-8 py-6 rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentQuote}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl text-amber-100/90 italic leading-relaxed"
                  >
                    &ldquo;{islamicQuotes[currentQuote]}&rdquo;
                  </motion.p>
                </AnimatePresence>
                
                {/* Quote indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {islamicQuotes.slice(0, 5).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentQuote % 5 
                          ? 'bg-amber-400 w-6' 
                          : 'bg-amber-400/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-amber-900/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 30, ease: 'linear' }}
          />
        </motion.div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          onClick={() => navigate('/home')}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-amber-400/60 hover:text-amber-400 text-sm transition-colors"
        >
          Click to skip animation →
        </motion.button>
      </div>
    </div>
  );
}
