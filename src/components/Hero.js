import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9fb06' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Hero Content */}
      <div className="container max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-gray-400 text-lg mb-4 font-medium tracking-wide">
            {t('hero.greeting')}
          </p>
          
          {/* Name - Large Impact Typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-lime-400 uppercase leading-none mb-6 tracking-tight">
            {t('hero.name').split(' ').map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-4 max-w-4xl mx-auto">
            {t('hero.title')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-2 mb-10">
            <MapPin className="text-lime-400" size={20} />
            <span className="text-gray-300 font-medium">{t('hero.location')}</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('experience')}
              className="btn-primary bg-lime-400 text-black hover:bg-lime-300 px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>{t('hero.contact')}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;