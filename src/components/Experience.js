import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { experiences } from '../data/mock';
import { MapPin, Calendar, Code, Target, Lightbulb, ChevronDown, ChevronUp, Building2, Clock } from 'lucide-react';

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
              className={`bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all duration-300 cursor-pointer ${
                expandedCard === exp.id ? 'border-lime-400/50' : ''
              }`}
              onClick={() => toggleCard(exp.id)}
            >
              {/* Card Header - Always Visible */}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 flex-1">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback logo */}
                        <div 
                          className="w-full h-full bg-lime-400 rounded-lg items-center justify-center text-black font-black text-sm hidden"
                          style={{ display: 'none' }}
                        >
                          {exp.company.charAt(0)}
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {exp.company}
                          </h3>
                          <h4 className="text-xl text-lime-400 font-semibold mb-3">
                            {exp.role}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="flex items-center space-x-2 text-lime-400">
                      <span className="font-medium hidden sm:block">
                        {expandedCard === exp.id ? 'Menos' : 'Mais'} detalhes
                      </span>
                      {expandedCard === exp.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                </div>

                {/* Technologies - Always Visible */}
                <div className="mt-6 flex flex-wrap gap-3">
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

              {/* Expanded Content - Only shown when expanded */}
              {expandedCard === exp.id && (
                <div className="border-t border-gray-800 bg-gray-950">
                  <div className="p-8">
                    {/* Main Project Description */}
                    <div className="mb-8 bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <h5 className="text-lg font-bold text-lime-400 mb-2 uppercase tracking-wide">
                        {t('experience.projects')}
                      </h5>
                      <p className="text-xl text-white font-semibold mb-2">
                        {exp.project}
                      </p>
                      <p className="text-gray-300">
                        {exp.description[currentLanguage]}
                      </p>
                    </div>

                    {/* Sub Projects - Only for experiences that have them */}
                    {exp.hasSubProjects && exp.subProjects && (
                      <div className="mb-8">
                        <h6 className="text-xl font-bold text-lime-400 mb-6 uppercase tracking-wide flex items-center">
                          <Building2 className="mr-3" size={24} />
                          Projetos por Cliente
                        </h6>
                        <div className="grid gap-6">
                          {exp.subProjects.map((subProject, subIndex) => (
                            <div key={subProject.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                              {/* Sub Project Header */}
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                                    <h7 className="text-lg font-bold text-white uppercase">
                                      {subProject.client}
                                    </h7>
                                  </div>
                                  <p className="text-lime-400 font-semibold mb-2">
                                    {subProject.project}
                                  </p>
                                  <p className="text-gray-400 text-sm flex items-center">
                                    <Clock size={14} className="mr-2" />
                                    {subProject.duration}
                                  </p>
                                </div>
                              </div>

                              {/* Sub Project Description */}
                              <p className="text-gray-300 mb-4 leading-relaxed">
                                {subProject.description[currentLanguage]}
                              </p>

                              {/* Sub Project Technologies */}
                              <div className="flex flex-wrap gap-2">
                                {subProject.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-lime-400/5 border border-lime-400/20 text-lime-400 rounded-full text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Challenges */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <Target className="text-lime-400" size={24} />
                          <h6 className="text-xl font-bold text-lime-400 uppercase tracking-wide">
                            {t('experience.challenges')}
                          </h6>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
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
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                          <p className="text-gray-300 leading-relaxed">
                            {exp.lessons[currentLanguage]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-8 pt-6 border-t border-gray-800">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="text-lime-400 font-bold text-lg mb-1">
                            {exp.technologies.length}
                          </div>
                          <div className="text-gray-400 text-sm uppercase tracking-wide">
                            Tecnologias
                          </div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="text-lime-400 font-bold text-lg mb-1">
                            {exp.hasSubProjects ? exp.subProjects.length : '1'}
                          </div>
                          <div className="text-gray-400 text-sm uppercase tracking-wide">
                            Projetos
                          </div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="text-lime-400 font-bold text-lg mb-1">
                            {exp.location.includes('Brasil') ? 'BR' : 
                             exp.location.includes('Italia') ? 'IT' : 'INT'}
                          </div>
                          <div className="text-gray-400 text-sm uppercase tracking-wide">
                            Local
                          </div>
                        </div>
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