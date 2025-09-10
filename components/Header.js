// Swastik Shetty
// This is the Header component. It's used across all pages.
// I've updated it to match the new, cleaner design from the screenshot.
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // State to manage the visibility of the mobile menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Main navigation links - updated to point to actual project pages.
  const navLinks = [
    { name: 'Buy', href: '/start' },
    { name: 'About', href: '/about-us' },
    { name: 'Rates', href: '/mortgage-calculator' },
    { name: 'Home', href: '/' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Better
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                  {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone icon is now just a visual element. */}
            <div className="p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <Link href="#" className="text-gray-600 font-semibold hover:text-green-600 transition-colors">
              Sign in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                  {link.name}
              </Link>
            ))}
            <Link href="#" className="text-gray-600 font-semibold hover:text-green-600 transition-colors">
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

