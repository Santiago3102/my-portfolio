"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else { 
        setIsVisible(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed  w-2/3  md:w-1/3 md:left-1/3  top-5 py-4 rounded bg-emerald-900 text-white shadow-lg z-50 flex items-center justify-center"
    >
      <div className="flex justify-between items-center">
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-green-400 transition-colors duration-300">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-green-400 transition-colors duration-300">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-green-400 transition-colors duration-300">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;