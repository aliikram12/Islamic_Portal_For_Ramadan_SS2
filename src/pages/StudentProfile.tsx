import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Heart, BookOpen, Moon, Star, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import studentsData from '../data/students.json';

const islamicQuotes = [
  {
    text: "The best of you are those who learn the Quran and teach it.",
    source: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Ramadan is the month whose beginning is mercy, whose middle is forgiveness, and whose end is freedom from fire.",
    source: "Prophet Muhammad (PBUH)",
  },
  {
    text: "When Ramadan begins, the gates of paradise are opened, the gates of hell are closed, and the devils are chained.",
    source: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Whoever fasts Ramadan with faith and seeking reward, his past sins are forgiven.",
    source: "Prophet Muhammad (PBUH)",
  },
  {
    text: "The dua of a fasting person is never rejected.",
    source: "Prophet Muhammad (PBUH)",
  },
];

const ramadanWishes = [
  "May this Ramadan bring you peace, prosperity, and countless blessings.",
  "Wishing you a month filled with joy, reflection, and spiritual growth.",
  "May Allah accept your fasts and prayers in this blessed month.",
  "May your heart be filled with faith and your home with happiness.",
  "Wishing you strength, patience, and abundant rewards this Ramadan.",
];

export default function StudentProfile() {
  const { rollNumber } = useParams<{ rollNumber: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<typeof studentsData[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const foundStudent = studentsData.find(
      (s) => s.rollNumber.toLowerCase() === rollNumber?.toLowerCase()
    );

    if (foundStudent) {
      setStudent(foundStudent);
    }
    setLoading(false);
  }, [rollNumber]);

  // Rotate quotes
  useEffect(() => {
    if (!student) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % islamicQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [student]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-12 h-12 text-amber-400" />
        </motion.div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-8 rounded-2xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">😔</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Student Not Found</h2>
          <p className="text-gray-400 mb-6">
            We couldn&apos;t find a student with roll number: {rollNumber}
          </p>
          <button
            onClick={() => navigate('/home')}
            className="btn-gold text-black font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    );
  }

  const randomWish = ramadanWishes[student.rollNumber.charCodeAt(0) % ramadanWishes.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0f] to-[#0a0a0a]"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" />
        
        {/* Decorative Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/home')}
            className="mb-6 text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 md:p-12 mb-8 text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Moon className="w-8 h-8 text-amber-400/30" />
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Star className="w-6 h-6 text-amber-400/30" />
              </motion.div>
            </div>

            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm">Best Wishes</span>
            </motion.div>

            {/* Student Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">Ramadan Mubarak, </span>
              <span className="gold-gradient-text">{student.name}</span>
            </motion.h1>

            {/* Student Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-6"
            >
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-gray-400 text-sm">Roll: </span>
                <span className="text-amber-400 text-sm font-medium">{student.rollNumber}</span>
              </div>
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-gray-400 text-sm">Father: </span>
                <span className="text-emerald-400 text-sm font-medium">{student.fatherName}</span>
              </div>
            </motion.div>

            {/* Personal Wish */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6 mt-6"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-rose-400" />
                <span className="text-rose-400 font-medium">A Special Wish for You</span>
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <p className="text-lg text-gray-200 italic">
                &ldquo;{randomWish}&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Islamic Quotes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Islamic Wisdom</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {islamicQuotes.slice(0, 4).map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`quote-card glass p-6 rounded-xl ${
                    index === currentQuote ? 'border-amber-400/50' : ''
                  }`}
                >
                  <p className="text-gray-200 mb-3 leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="text-amber-400/70 text-sm">
                    — {quote.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-rose-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Special Message</h2>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <p className="text-gray-300 mb-4 text-center">
                Please watch this video completely
              </p>
              <div className="video-frame rounded-2xl overflow-hidden aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KF3LieKoKm0?autoplay=1&mute=1&rel=0"
                  title="Ramadan Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Blessing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: '🌙', label: 'Blessed Ramadan' },
              { icon: '🤲', label: 'Accepted Dua' },
              { icon: '✨', label: 'Endless Rewards' },
              { icon: '❤️', label: 'Family Unity' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
