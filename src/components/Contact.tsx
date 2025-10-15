import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "dusmiss@nave.com",
      link: "mailto:dusmiss@nave.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "010-3096-0223",
      link: "tel:+821030960223"
    },
    
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "https://github.com"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            잘부탁드립니다. 감사합니다.
          </p>
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">사용 언어:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              연락처 정보
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 max-w-md mx-auto">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    {info.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                소셜 미디어
              </h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-gray-600 hover:text-primary-600"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
