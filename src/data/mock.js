// Mock data for João Paulo Belatto's portfolio
export const translations = {
  'pt-BR': {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'João Paulo Belatto',
      title: 'Desenvolvedor Senior | Analista de Sistemas',
      subtitle: 'Mais de 20 anos transformando ideias em soluções robustas',
      location: 'Torino, Itália',
      cta: 'Ver Projetos',
      contact: 'Entrar em Contato'
    },
    about: {
      title: 'Sobre Mim',
      description: 'Desenvolvedor e Analista de Sistemas com mais de 20 anos de experiência, especializado em Java e apaixonado por integração contínua. Pós-graduado em Engenharia de Software e Engenharia da Computação.',
      focus: 'Foco Principal',
      focusText: 'Integração Contínua & Arquiteturas Escaláveis'
    },
    experience: {
      title: 'Experiência Profissional',
      projects: 'Projetos',
      challenges: 'Desafios Superados',
      lessons: 'Lições Aprendidas'
    },
    skills: {
      title: 'Tecnologias & Habilidades',
      languages: 'Linguagens',
      databases: 'Bancos de Dados',
      frameworks: 'Frameworks & Ferramentas'
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Pronto para o próximo desafio',
      description: 'Interessado em discutir oportunidades ou projetos? Entre em contato comigo.',
      email: 'Enviar Email',
      linkedin: 'LinkedIn'
    }
  },
  'en': {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'João Paulo Belatto',
      title: 'Senior Developer | Systems Analyst',
      subtitle: '20+ years transforming ideas into robust solutions',
      location: 'Turin, Italy',
      cta: 'View Projects',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      description: 'Developer and Systems Analyst with over 20 years of experience, specialized in Java and passionate about continuous integration. Post-graduate in Software Engineering and Computer Engineering.',
      focus: 'Main Focus',
      focusText: 'Continuous Integration & Scalable Architectures'
    },
    experience: {
      title: 'Professional Experience',
      projects: 'Projects',
      challenges: 'Challenges Overcome',
      lessons: 'Lessons Learned'
    },
    skills: {
      title: 'Technologies & Skills',
      languages: 'Languages',
      databases: 'Databases',
      frameworks: 'Frameworks & Tools'
    },
    contact: {
      title: 'Let\'s Talk',
      subtitle: 'Ready for the next challenge',
      description: 'Interested in discussing opportunities or projects? Get in touch with me.',
      email: 'Send Email',
      linkedin: 'LinkedIn'
    }
  },
  'it': {
    nav: {
      about: 'Chi Sono',
      experience: 'Esperienza',
      skills: 'Competenze',
      contact: 'Contatti'
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'João Paulo Belatto',
      title: 'Sviluppatore Senior | Analista di Sistemi',
      subtitle: 'Oltre 20 anni trasformando idee in soluzioni robuste',
      location: 'Torino, Italia',
      cta: 'Vedi Progetti',
      contact: 'Contattami'
    },
    about: {
      title: 'Chi Sono',
      description: 'Sviluppatore e Analista di Sistemi con oltre 20 anni di esperienza, specializzato in Java e appassionato di integrazione continua. Post-laureato in Ingegneria del Software e Ingegneria Informatica.',
      focus: 'Focus Principale',
      focusText: 'Integrazione Continua & Architetture Scalabili'
    },
    experience: {
      title: 'Esperienza Professionale',
      projects: 'Progetti',
      challenges: 'Sfide Superate',
      lessons: 'Lezioni Apprese'
    },
    skills: {
      title: 'Tecnologie & Competenze',
      languages: 'Linguaggi',
      databases: 'Database',
      frameworks: 'Framework & Strumenti'
    },
    contact: {
      title: 'Parliamo',
      subtitle: 'Pronto per la prossima sfida',
      description: 'Interessato a discutere opportunità o progetti? Contattami.',
      email: 'Invia Email',
      linkedin: 'LinkedIn'
    }
  }
};

export const experiences = [
  {
    id: 1,
    company: 'Claro Brasil',
    role: 'Senior Java Developer',
    period: '2019-2021',
    location: 'São Paulo, Brasil',
    project: 'Sistema de Vendas',
    description: {
      'pt-BR': 'Desenvolvimento de sistema de vendas para operadora de telecomunicações',
      'en': 'Sales system development for telecommunications operator',
      'it': 'Sviluppo sistema vendite per operatore telecomunicazioni'
    },
    challenges: {
      'pt-BR': 'Integração com múltiplos sistemas legados, performance em alta escala',
      'en': 'Integration with multiple legacy systems, high-scale performance',
      'it': 'Integrazione con sistemi legacy multipli, performance ad alta scala'
    },
    lessons: {
      'pt-BR': 'Arquitetura de microserviços, otimização de consultas SQL',
      'en': 'Microservices architecture, SQL query optimization',
      'it': 'Architettura microservizi, ottimizzazione query SQL'
    },
    technologies: ['Java', 'Spring Boot', 'Oracle', 'REST APIs']
  },
  {
    id: 2,
    company: 'Commit (Wolters Kluwer)',
    role: 'Senior Java Developer',
    period: '2021-2023',
    location: 'Torino, Italia',
    project: 'Microservices Platform',
    description: {
      'pt-BR': 'Desenvolvimento de plataforma de microserviços para soluções jurídicas',
      'en': 'Microservices platform development for legal solutions',
      'it': 'Sviluppo piattaforma microservizi per soluzioni legali'
    },
    challenges: {
      'pt-BR': 'Migração de monólito para microserviços, CI/CD pipeline',
      'en': 'Monolith to microservices migration, CI/CD pipeline',
      'it': 'Migrazione da monolite a microservizi, pipeline CI/CD'
    },
    lessons: {
      'pt-BR': 'Docker, Kubernetes, DevOps practices',
      'en': 'Docker, Kubernetes, DevOps practices',
      'it': 'Docker, Kubernetes, pratiche DevOps'
    },
    technologies: ['Java', 'Spring Cloud', 'Docker', 'Kubernetes', 'PostgreSQL']
  },
  {
    id: 3,
    company: 'Technode (Unipol)',
    role: 'Java Batch Developer',
    period: '2020-2021',
    location: 'Bologna, Italia',
    project: 'Insurance Processing System',
    description: {
      'pt-BR': 'Sistema de processamento em lote para seguros',
      'en': 'Batch processing system for insurance',
      'it': 'Sistema elaborazione batch per assicurazioni'
    },
    challenges: {
      'pt-BR': 'Processamento de milhões de registros, otimização de performance',
      'en': 'Processing millions of records, performance optimization',
      'it': 'Elaborazione milioni di record, ottimizzazione performance'
    },
    lessons: {
      'pt-BR': 'Java Batch API, otimização JVM, monitoramento',
      'en': 'Java Batch API, JVM optimization, monitoring',
      'it': 'Java Batch API, ottimizzazione JVM, monitoring'
    },
    technologies: ['Java', 'Spring Batch', 'Oracle', 'JMS']
  },
  {
    id: 4,
    company: 'Stefanini (Cielo)',
    role: 'Full Stack Developer',
    period: '2018-2019',
    location: 'São Paulo, Brasil',
    project: 'Cartão Elo Payment System',
    description: {
      'pt-BR': 'Sistema de pagamentos para cartão de crédito Elo',
      'en': 'Payment system for Elo credit card',
      'it': 'Sistema pagamenti per carta di credito Elo'
    },
    challenges: {
      'pt-BR': 'Segurança PCI DSS, alta disponibilidade, processamento em tempo real',
      'en': 'PCI DSS security, high availability, real-time processing',
      'it': 'Sicurezza PCI DSS, alta disponibilità, elaborazione real-time'
    },
    lessons: {
      'pt-BR': 'Segurança financeira, Spring Batch, JSF',
      'en': 'Financial security, Spring Batch, JSF',
      'it': 'Sicurezza finanziaria, Spring Batch, JSF'
    },
    technologies: ['Java', 'Spring Batch', 'JSF', 'Oracle', 'MongoDB']
  }
];

export const skills = {
  languages: [
    { name: 'Java', level: 95, primary: true },
    { name: 'Python', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Delphi', level: 70 }
  ],
  databases: [
    { name: 'Oracle', level: 90, primary: true },
    { name: 'PostgreSQL', level: 85, primary: true },
    { name: 'MongoDB', level: 80, primary: true },
    { name: 'MySQL', level: 75 }
  ],
  frameworks: [
    { name: 'Spring Boot', level: 95, primary: true },
    { name: 'Spring Batch', level: 90, primary: true },
    { name: 'JSF', level: 85 },
    { name: 'Docker', level: 85, primary: true },
    { name: 'Kubernetes', level: 80 },
    { name: 'Jenkins', level: 85, primary: true }
  ]
};

export const education = {
  'pt-BR': [
    'Pós-graduação em Engenharia de Software',
    'Pós-graduação em Engenharia da Computação'
  ],
  'en': [
    'Post-graduate in Software Engineering',
    'Post-graduate in Computer Engineering'
  ],
  'it': [
    'Post-laurea in Ingegneria del Software',
    'Post-laurea in Ingegneria Informatica'
  ]
};