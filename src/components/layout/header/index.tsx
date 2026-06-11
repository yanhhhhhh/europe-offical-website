'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

/**
 * 头部/导航栏组件（主入口）
 */
export default function Header() {
  return (
    <header className="bg-black shadow sticky top-0 z-50 text-white">
      <nav className="container mx-auto px-[36px] lg:px-4 h-[80px] lg:h-[64px] flex justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          className="h-[38px] lg:h-[32px] w-auto"
          alt="HiTHIUM Logo"
          height={32}
          priority
        />

        {/* Desktop Navigation and Language Switcher */}
        <HeaderDesktop />

        {/* Mobile Menu Button & Menu Content */}
        <HeaderMobile />
      </nav>
    </header>
  );
}
