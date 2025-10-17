import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            저에 대해 더 자세히 알아보세요
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl text-center animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              안녕하세요! 👋
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              저는 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하고
              새로운 기술을 배우고 적용하는 것에 열정적이며, 
              항상 더 나은 사용자 경험을 제공하기 위해 노력합니다.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              팀워크를 중시하며, 협업을 통한 시너지 창출을 믿습니다. 
              문제 해결에 대한 열정과 지속적인 학습 의지를 바탕으로 
              프로젝트의 성공에 기여하고 싶습니다.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                창의적 사고
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                협업 능력
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                학습 의지
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                적응력
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
