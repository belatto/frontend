import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { education, languages as languageData } from '../data/mock';
import { Code, Database, Server, GitBranch, GraduationCap, Languages } from 'lucide-react';

const About = () => {
  const { t, currentLanguage } = useLanguage();

  const highlights = [
    {
      icon: <Code className="text-lime-400" size={32} />,
      title: "20+ Anos",
      subtitle: {
        'pt-BR': 'Experiência',
        'en': 'Experience', 
        'it': 'Esperienza'
      }
    },
    {
      icon: <Database className="text-lime-400" size={32} />,
      title: "Java Expert",
      subtitle: {
        'pt-BR': 'Especialista',
        'en': 'Specialist',
        'it': 'Specialista'
      }
    },
    {
      icon: <Server className="text-lime-400" size={32} />,
      title: "Enterprise",
      subtitle: {
        'pt-BR': 'Sistemas',
        'en': 'Systems',
        'it': 'Sistemi'
      }
    },
    {
      icon: <GitBranch className="text-lime-400" size={32} />,
      title: "Microservices",
      subtitle: {
        'pt-BR': 'Arquitetura',
        'en': 'Architecture',
        'it': 'Architettura'
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-lime-400 uppercase tracking-tight mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            
            {/* Focus Area */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-lime-400 mb-4 uppercase tracking-wide">
                {t('about.focus')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.focusText')}
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-lime-400" size={24} />
                <h3 className="text-xl font-bold text-lime-400 uppercase tracking-wide">
                  Formação
                </h3>
              </div>
              <ul className="space-y-3">
                {education[currentLanguage]?.map((edu, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Languages className="text-lime-400" size={24} />
                <h3 className="text-xl font-bold text-lime-400 uppercase tracking-wide">
                  Idiomas
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languageData[currentLanguage]?.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="text-white font-medium">{lang.language}</p>
                      <p className="text-gray-400 text-sm">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:border-lime-400/30"
              >
                <div className="mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 font-medium uppercase tracking-wide text-sm">
                  {highlight.subtitle[currentLanguage] || highlight.subtitle['pt-BR']}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;