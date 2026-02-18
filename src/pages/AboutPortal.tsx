import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles, Target, Lightbulb, Star, Moon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: Heart,
    title: 'Personalized Experience',
    description: 'Every student receives a unique, personalized Ramadan greeting tailored just for them.',
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    icon: Users,
    title: 'Class Unity',
    description: 'Strengthen the bond between SS2 students through shared spiritual experiences.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: BookOpen,
    title: 'Islamic Learning',
    description: 'Access to curated Islamic content, lectures, and reminders for spiritual growth.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Sparkles,
    title: 'Blessed Moments',
    description: 'Create memorable moments of joy and reflection during the holy month.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

const benefits = [
  'Strengthen connection with Allah',
  'Learn about Ramadan traditions',
  'Access quality Islamic content',
  'Feel part of a caring community',
  'Receive spiritual motivation',
  'Share blessings with classmates',
];

export default function AboutPortal() {
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
        
        {/* Floating Elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-3 h-3 text-amber-400/30" />
            ) : i % 3 === 1 ? (
              <Moon className="w-3 h-3 text-emerald-400/30" />
            ) : (
              <Sparkles className="w-3 h-3 text-rose-400/30" />
            )}
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm">About This Portal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="gold-gradient-text">Our Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              This Ramadan Portal was created with love and dedication to bring the SS2 class 
              together in celebration of the blessed month. It&apos;s more than just a greeting 
              platform—it&apos;s a digital sanctuary for spiritual connection and class unity.
            </motion.p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-strong rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <Star className="w-16 h-16 text-amber-400" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <Moon className="w-12 h-12 text-emerald-400" />
              </motion.div>
            </div>

            <div className="relative z-10 text-center">
              <Lightbulb className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                To create a meaningful digital experience that combines the beauty of Islamic 
                traditions with modern technology, fostering a sense of community and spiritual 
                growth among SS2 students during the holy month of Ramadan.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              What Makes This Portal Special
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass card-hover p-6 rounded-2xl"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Benefits for Students
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-center gap-3 glass p-4 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Creator Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-4"
            >
              <Heart className="w-12 h-12 text-rose-400" />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Created with Love
            </h2>

            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This portal was crafted with dedication and care to make this Ramadan 
              special for every SS2 student. May Allah accept our efforts and bless 
              us all in this holy month.
            </p>

            <div className="glass inline-block px-6 py-3 rounded-full">
              <span className="text-amber-400 font-medium">Made for SS2 with </span>
              <span className="text-rose-400">❤</span>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 italic mb-4">
                &ldquo;The best of people are those who are most beneficial to people.&rdquo;
              </p>
              <p className="text-amber-400 text-sm">
                — Prophet Muhammad (PBUH)
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
