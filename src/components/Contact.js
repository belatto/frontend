import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Send, Linkedin, Github, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const messageData = {
        ...formData,
        language: 'pt-BR' // Will be updated with language context later
      };

      await contactAPI.sendMessage(messageData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-lime-400 uppercase tracking-tight mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 font-semibold mb-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-lime-400 mb-6 uppercase tracking-wide">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-lime-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Localização</p>
                    <p className="text-gray-400">Torino, Itália</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-lime-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">joao.belatto@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-lime-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <p className="text-gray-400">+39 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-lime-400 mb-6 uppercase tracking-wide">
                Redes Profissionais
              </h3>
              
              <div className="flex space-x-4">
                <button className="flex items-center justify-center w-12 h-12 bg-lime-400 text-black rounded-full hover:bg-lime-300 transition-colors duration-300">
                  <Linkedin size={24} />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-lime-400 text-black rounded-full hover:bg-lime-300 transition-colors duration-300">
                  <Github size={24} />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-lime-400 text-black rounded-full hover:bg-lime-300 transition-colors duration-300">
                  <Mail size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-lime-400 mb-6 uppercase tracking-wide">
              Envie uma Mensagem
            </h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <p className="text-green-300">Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center space-x-3">
                <AlertCircle className="text-red-400" size={20} />
                <p className="text-red-300">Erro ao enviar mensagem. Tente novamente.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors duration-300 disabled:opacity-50"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors duration-300 disabled:opacity-50"
                    placeholder="seu.email@empresa.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors duration-300 disabled:opacity-50"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition-colors duration-300 resize-none disabled:opacity-50"
                  placeholder="Descreva o projeto ou oportunidade..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lime-400 text-black font-bold py-4 px-6 rounded-full uppercase tracking-wide hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;