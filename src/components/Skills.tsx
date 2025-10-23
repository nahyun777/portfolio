import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "REST API" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git" },
        { name: "Figma" },
        { name: "VS Code" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제가 사용할 수 있는 기술들
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-slide-up">
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium text-lg">{skill.name}</span>
                    </div>
                    {skillIndex < category.skills.length - 1 && (
                      <div className="w-full h-px bg-gray-200 mt-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
