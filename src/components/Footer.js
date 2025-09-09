import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const { currentLanguage } = useLanguage();

  const footerText = {
    'pt-BR': 'Desenvolvido com',
    'en': 'Built with',
    'it': 'Realizzato con'
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <div className="text-3xl font-black text-lime-400 mb-2">
              JPB
            </div>
            <p className="text-gray-400">
              João Paulo Belatto
            </p>
            <p className="text-gray-500 text-sm">
              Senior Developer & Systems Analyst
            </p>
          </div>

          {/* Center - Built with love */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>{footerText[currentLanguage]}</span>
              <Heart className="text-red-500" size={16} />
              <span>&</span>
              <Code className="text-lime-400" size={16} />
            </div>
            <p className="text-gray-500 text-sm mt-2">
              React • FastAPI • MongoDB
            </p>
          </div>

          {/* Right - Copyright */}
          <div className="text-right md:text-right text-center">
            <p className="text-gray-400">
              © {currentYear} João Paulo Belatto
            </p>
            <p className="text-gray-500 text-sm">
              Torino, Italia
            </p>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {currentLanguage === 'pt-BR' && 'Transformando ideias em soluções robustas há mais de 20 anos'}
            {currentLanguage === 'en' && 'Transforming ideas into robust solutions for over 20 years'}
            {currentLanguage === 'it' && 'Trasformando idee in soluzioni robuste da oltre 20 anni'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;