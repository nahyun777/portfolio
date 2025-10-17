'use client';

import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 flex items-center justify-center">
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            안녕하세요, <span className="text-primary-600">000</span>입니다
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            안녕하세요! 새로운 것을 배우는 것을 좋아하는 신입 개발자입니다. 
            함께 일하며 성장해나가는 것을 소중히 여기며, 사용자에게 도움이 되는 웹사이트를 만들고 싶습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              프로젝트 보기
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200"
            >
              연락하기
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
