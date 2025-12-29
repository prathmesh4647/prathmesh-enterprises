'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AMC Plans', href: '/amc-plans' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700 dark:text-blue-400 leading-none group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">Prathmesh</span>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-[0.2em] group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">ENTERPRISES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="tel:9423219727"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold flex items-center transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col space-y-3">
                <a
                  href="tel:9423219727"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
