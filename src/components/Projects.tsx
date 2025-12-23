import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI 영화 추천",
      description: "AI를 활용한 개인 맞춤형 영화 추천 서비스입니다. 사용자의 취향을 분석하여 최적의 영화를 추천하고, 상세한 정보와 리뷰를 제공합니다.",
      image: "https://cdn.pixabay.com/photo/2025/09/10/12/32/tokyo-9826329_1280.jpg",
      technologies: ["React", "AI API", "Movie Database", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://movie-site-six-sandy.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "날씨웹",
      description: "실시간 날씨 정보를 제공하는 웹 애플리케이션입니다. 현재 위치와 다른 도시의 날씨를 확인할 수 있으며, 직관적인 UI로 날씨 정보를 제공합니다.",
      image: "https://pixabay.com/ko/images/download/clouds-8353592_1920.jpg",
      technologies: ["Next.js", "Weather API", "Tailwind CSS", "Vercel"],
      github: "https://github.com",
      demo: "https://nextjs-weather-app-blush.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "온라인 쇼핑몰",
      description: "완전한 기능을 갖춘 온라인 쇼핑몰 플랫폼입니다. 상품 관리, 장바구니, 결제 시스템을 포함한 전자상거래 솔루션을 제공합니다.",
      image: "https://pixabay.com/ko/images/download/cosmetics-9086984_1920.jpg",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://shoppingmall-eta.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "제주도 해변가 소개",
      description: "제주도의 아름다운 해변가를 소개하는 웹사이트입니다. 각 해변의 특징과 정보를 제공하며, 아름다운 사진과 함께 제주도의 매력을 전달합니다.",
      image: "https://pixabay.com/ko/images/download/samcheok-2620056_1280.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com",
      demo: "https://visitkorea-9i3o.vercel.app",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 반응 기능을 제공합니다.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제가 작업한 프로젝트들을 소개합니다
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            주요 프로젝트
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200 font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200 font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
