'use client';

import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary-600 cursor-pointer">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-black transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-black transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-black transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-black transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-black transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              aria-label="메뉴 열기" 
              className="text-gray-700 hover:text-primary-600"
            >
              <span className="sr-only">메뉴 열기</span>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="group flex items-center w-full px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-3 text-lg">🏠</span>
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group flex items-center w-full px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-3 text-lg">👋</span>
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="group flex items-center w-full px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-3 text-lg">⚡</span>
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center w-full px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-3 text-lg">💼</span>
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center w-full px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="mr-3 text-lg">📧</span>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
