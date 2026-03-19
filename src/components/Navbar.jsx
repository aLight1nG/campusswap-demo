import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Repeat2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: '痛点', href: '#pain' },
    { label: '方案', href: '#solution' },
    { label: '流程', href: '#how' },
    { label: '功能', href: '#features' },
    { label: '数据', href: '#data' },
    { label: '体验', href: '#demo' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scrolled ? 'bg-primary' : 'bg-white/20'}`}>
            <Repeat2 className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <span className={`font-bold text-lg ${scrolled ? 'text-text' : 'text-white'}`}>
            校易与
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition-colors ${
                scrolled ? 'text-text-secondary hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          className={`hidden sm:inline-flex px-4 py-2 rounded-full text-sm font-semibold no-underline transition-all ${
            scrolled
              ? 'bg-primary text-white hover:bg-primary-light'
              : 'bg-white text-primary hover:bg-white/90'
          }`}
        >
          体验Demo
        </a>
      </div>
    </motion.nav>
  );
}
