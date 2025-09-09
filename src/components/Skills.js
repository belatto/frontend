import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { skills } from '../data/mock';
import { Code, Database, Wrench } from 'lucide-react';

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className={`font-semibold ${skill.primary ? 'text-lime-400' : 'text-gray-300'}`}>
          {skill.name}
        </span>
        <span className="text-gray-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-out ${
            skill.primary ? 'bg-lime-400' : 'bg-gray-600'
          }`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: <Code className="text-lime-400" size={32} />,
      skills: skills.languages,
      bgColor: 'bg-gray-900'
    },
    {
      title: t('skills.databases'),
      icon: <Database className="text-lime-400" size={32} />,
      skills: skills.databases,
      bgColor: 'bg-gray-950'
    },
    {
      title: t('skills.frameworks'),
      icon: <Wrench className="text-lime-400" size={32} />,
      skills: skills.frameworks,
      bgColor: 'bg-gray-900'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-lime-400 uppercase tracking-tight mb-6">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} border border-gray-800 rounded-2xl p-8 hover:border-lime-400/30 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                {category.icon}
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Focus Area Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 border border-lime-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-lime-400 mb-4 uppercase tracking-wide">
              Integração Contínua & DevOps
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Especialista em CI/CD pipelines, containerização e orquestração de microserviços
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Jenkins', 'Docker', 'Kubernetes', 'GitLab CI', 'Maven', 'Gradle'].map((tool, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-lime-400 text-black rounded-full font-bold text-sm uppercase tracking-wide"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;