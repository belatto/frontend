import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-lime-400">
            JPB
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300"
            >
              {t('nav.contact')}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-lime-400 hover:text-lime-300 transition-colors duration-300"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl min-w-32">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        currentLanguage === lang.code ? 'bg-gray-800 text-lime-400' : 'text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-lime-400 hover:text-lime-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300 text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300 text-left"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300 text-left"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link text-lime-400 hover:text-lime-300 transition-colors duration-300 text-left"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        currentLanguage === lang.code 
                          ? 'bg-lime-400 text-black' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;