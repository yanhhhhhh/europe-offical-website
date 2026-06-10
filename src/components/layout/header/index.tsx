'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

/**
 * 头部/导航栏组件（主入口）
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow sticky top-0 z-50 text-white">
      <nav className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          className="h-6 md:h-8 w-auto"
          alt="HiTHIUM Logo"
          height={32}
          priority
        />

        {/* Desktop Navigation and Language Switcher */}
        <HeaderDesktop />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <HeaderMobile
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
