import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Users, BookOpen, Heart, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import studentsData from '../data/students.json';

export default function HomePortal() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);

    if (!searchQuery.trim()) {
      setError('Please enter your roll number');
      setIsSearching(false);
      return;
    }

    const student = studentsData.find(
      (s) => s.rollNumber.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (student) {
      setTimeout(() => {
        navigate(`/profile/${student.rollNumber}`);
      }, 500);
    } else {
      setError('Roll number not found. Please try again.');
      setIsSearching(false);
    }
  };

  // Generate background particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

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
        {/* Islamic Pattern */}
        <div className="absolute inset-0 islamic-pattern opacity-30" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm">Welcome to SS2 Ramadan Portal</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gold-gradient-text">Find Your Ramadan</span>
              <br />
              <span className="text-white">Greeting </span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Enter your roll number to discover a personalized Ramadan message 
              crafted with love and blessings for you and your family.
            </motion.p>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl mx-auto"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter your Roll Number..."
                    className="w-full search-input text-white placeholder-gray-500 px-6 py-5 pr-36 rounded-2xl text-lg"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 -translate-y-1/2 btn-gold text-black font-semibold px-6 py-3 rounded-xl flex items-center gap-2 disabled:opacity-70"
                  >
                    {isSearching ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        <span>Search</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: error ? 1 : 0, 
                  height: error ? 'auto' : 0 
                }}
                className="overflow-hidden"
              >
                <div className="mt-4 glass border-red-500/30 bg-red-500/10 px-4 py-3 rounded-xl">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </motion.div>

              {/* Hint */}
              <p className="mt-4 text-gray-500 text-sm">
                Example: BSSE51F25S049
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What Awaits You
              </h2>
              <p className="text-gray-400">Discover the blessings of this portal</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Personalized Greetings',
                  description: 'Receive a heartfelt Ramadan message tailored just for you.',
                  color: 'from-pink-500/20 to-rose-500/20',
                },
                {
                  icon: BookOpen,
                  title: 'Islamic Wisdom',
                  description: 'Read inspiring quotes and spiritual reminders for Ramadan.',
                  color: 'from-amber-500/20 to-orange-500/20',
                },
                {
                  icon: Users,
                  title: 'Class Unity',
                  description: 'Connect with your SS2 family in this blessed month.',
                  color: 'from-emerald-500/20 to-teal-500/20',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass card-hover p-6 rounded-2xl"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '45+', label: 'Students' },
                { value: '30', label: 'Days of Ramadan' },
                { value: '∞', label: 'Blessings' },
                { value: '1', label: 'SS2 Family' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-400 mb-8">
              Scroll up and enter your roll number to receive your personalized Ramadan greeting.
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold text-black font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2"
            >
              <span>Get My Greeting</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
