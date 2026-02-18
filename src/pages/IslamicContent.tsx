import { motion } from 'framer-motion';
import { Play, BookOpen, Users, Heart, Sparkles, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const playlists = [
  {
    id: 1,
    title: 'Youth Club Pakistan - Ramadan Series',
    description: 'Inspiring lectures and reminders specifically for youth during the blessed month of Ramadan.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLw5r8GmCnILG1z2Kg3EVqX1lX1I2C8v4v',
    thumbnail: 'youth-club',
    category: 'Youth Lectures',
    icon: Users,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Maulana Tariq Jamil - Ramadan Bayan',
    description: 'Spiritual discourses by Maulana Tariq Jamil on the essence and blessings of Ramadan.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLlKj-KSk2YB3fK1Pem6zH3JdC3z3zZ3z',
    thumbnail: 'tariq-jamil',
    category: 'Spiritual Talks',
    icon: BookOpen,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'Ramadan Reminders - Daily Dose',
    description: 'Short daily reminders to keep your heart connected with Allah throughout Ramadan.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLQ8J1X1fZQ3z3z3z3z3z3z3z3z3z3z3z',
    thumbnail: 'reminders',
    category: 'Daily Reminders',
    icon: Heart,
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    id: 4,
    title: 'Islamic History - Ramadan Special',
    description: 'Learn about the historical significance of Ramadan and its impact on Islamic civilization.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLQ8J1X1fZQ3z3z3z3z3z3z3z3z3z3z3z',
    thumbnail: 'history',
    category: 'Islamic History',
    icon: BookOpen,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 5,
    title: 'Quran Recitation - Ramadan Nights',
    description: 'Beautiful Quran recitations to soothe your heart during the blessed nights of Ramadan.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLQ8J1X1fZQ3z3z3z3z3z3z3z3z3z3z3z',
    thumbnail: 'quran',
    category: 'Quran Recitation',
    icon: Sparkles,
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    id: 6,
    title: 'Youth Motivation - Islamic Perspective',
    description: 'Motivational talks for young Muslims to stay strong in their faith and purpose.',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLQ8J1X1fZQ3z3z3z3z3z3z3z3z3z3z3z',
    thumbnail: 'motivation',
    category: 'Motivation',
    icon: Users,
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

const externalLinks = [
  {
    title: 'Youth Club Pakistan',
    url: 'https://www.youtube.com/@YouthClubPK',
    description: 'Official YouTube Channel',
  },
  {
    title: 'Tariq Jamil Official',
    url: 'https://www.youtube.com/@TariqJamilOfficial',
    description: 'Official YouTube Channel',
  },
  {
    title: 'Islamic Relief',
    url: 'https://www.islamic-relief.org/',
    description: 'Charity & Donations',
  },
];

export default function IslamicContent() {
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
        
        {/* Floating Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm">Islamic Content Library</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gold-gradient-text">Enrich Your Soul</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Explore curated Islamic lectures, reminders, and spiritual content 
              to make your Ramadan more meaningful and blessed.
            </motion.p>
          </motion.div>

          {/* Playlists Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass card-hover rounded-2xl overflow-hidden group"
              >
                {/* Video Thumbnail/Player */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${playlist.color} opacity-30`} />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center cursor-pointer group-hover:bg-amber-400 transition-colors"
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="glass px-3 py-1 rounded-full text-xs text-amber-300">
                      {playlist.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${playlist.color} flex items-center justify-center`}>
                      <playlist.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {playlist.description}
                  </p>
                </div>

                {/* Video Embed (Hidden by default, can be expanded) */}
                <div className="px-5 pb-5">
                  <div className="video-frame rounded-xl overflow-hidden aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={playlist.embedUrl}
                      title={playlist.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* External Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Recommended Channels
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {externalLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass card-hover p-5 rounded-xl flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-white font-medium group-hover:text-amber-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Daily Reminder Section */}
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
              <Sparkles className="w-12 h-12 text-amber-400" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Daily Reminder
            </h2>
            
            <p className="text-lg text-gray-300 italic max-w-2xl mx-auto mb-6">
              &ldquo;The Messenger of Allah (PBUH) said: &apos;Whoever provides the food for a fasting person 
              to break his fast with, then for him is the same reward as his (the fasting person&apos;s), 
              without anything being diminished from the reward of the fasting person.&apos;&rdquo;
            </p>
            
            <p className="text-amber-400 text-sm">
              — Tirmidhi
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
