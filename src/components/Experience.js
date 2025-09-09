import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { experiences } from '../data/mock';
import { Building, MapPin, Calendar, Code, Target, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const { t, currentLanguage } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-lime-400 uppercase tracking-tight mb-6">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Building className="text-lime-400" size={24} />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <h4 className="text-xl text-lime-400 font-semibold mb-3">
                      {exp.role}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleCard(exp.id)}
                    className="mt-4 lg:mt-0 flex items-center space-x-2 text-lime-400 hover:text-lime-300 transition-colors duration-300"
                  >
                    <span className="font-medium">
                      {expandedCard === exp.id ? 'Menos' : 'Mais'} detalhes
                    </span>
                    {expandedCard === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Project Title */}
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h5 className="text-lg font-bold text-lime-400 mb-2 uppercase tracking-wide">
                    {t('experience.projects')}
                  </h5>
                  <p className="text-xl text-white font-semibold">
                    {exp.project}
                  </p>
                  <p className="text-gray-300 mt-2">
                    {exp.description[currentLanguage]}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-lime-400/10 border border-lime-400/30 text-lime-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === exp.id && (
                <div className="border-t border-gray-800 p-8 bg-gray-950">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <Target className="text-lime-400" size={24} />
                        <h6 className="text-xl font-bold text-lime-400 uppercase tracking-wide">
                          {t('experience.challenges')}
                        </h6>
                      </div>
                      <div className="bg-gray-900 rounded-xl p-6">
                        <p className="text-gray-300 leading-relaxed">
                          {exp.challenges[currentLanguage]}
                        </p>
                      </div>
                    </div>

                    {/* Lessons Learned */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <Lightbulb className="text-lime-400" size={24} />
                        <h6 className="text-xl font-bold text-lime-400 uppercase tracking-wide">
                          {t('experience.lessons')}
                        </h6>
                      </div>
                      <div className="bg-gray-900 rounded-xl p-6">
                        <p className="text-gray-300 leading-relaxed">
                          {exp.lessons[currentLanguage]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;