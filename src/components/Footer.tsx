import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Moon, Instagram, Linkedin, MessageCircle, Heart, Sparkles } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:text-pink-400',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me',
    label: 'WhatsApp',
    color: 'hover:text-green-400',
  },
];

const quickLinks = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/islamic-content', label: 'Islamic Content' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a0a] border-t border-amber-400/10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link to="/home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Moon className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Ramadan</span>
                <span className="text-amber-400 font-bold text-lg ml-1">Portal</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A digital sanctuary for SS2 students to celebrate Ramadan 
              with personalized greetings and spiritual content.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-gray-500 text-sm">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              </motion.div>
              <span className="text-gray-500 text-sm">for SS2</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 ${social.color} transition-all hover:shadow-lg hover:shadow-amber-400/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Follow us for more updates
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-amber-400 font-medium">AliStack</span> — 
            Ramadan Portal. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed with love for SS2 Class
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
    </footer>
  );
}
