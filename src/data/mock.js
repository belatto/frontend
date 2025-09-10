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
      title: 'Systems Analyst | Desenvolvedor Java Senior',
      subtitle: 'Mais de 20 anos de experiência em desenvolvimento de sistemas e análise, especializado em Java e arquiteturas enterprise',
      location: 'Pinerolo (TO), Itália',
      cta: 'Ver Projetos',
      contact: 'Entrar em Contato'
    },
    about: {
      title: 'Sobre Mim',
      description: 'Systems Analyst e Desenvolvedor Java Senior com mais de 20 anos de experiência em desenvolvimento de sistemas enterprise. Especializado em Java, Spring Framework, arquiteturas de microserviços e integração de sistemas complexos. Pós-graduado em Engenharia de Software.',
      focus: 'Especialidades',
      focusText: 'Sistemas Enterprise • Microserviços • Integração de Plataformas • Spring Framework'
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
      title: 'Systems Analyst | Senior Java Developer',
      subtitle: '20+ years of experience in systems development and analysis, specialized in Java and enterprise architectures',
      location: 'Pinerolo (TO), Italy',
      cta: 'View Projects',
      contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      description: 'Systems Analyst and Senior Java Developer with over 20 years of experience in enterprise systems development. Specialized in Java, Spring Framework, microservices architectures and complex systems integration. Post-graduate in Software Engineering.',
      focus: 'Specialties',
      focusText: 'Enterprise Systems • Microservices • Platform Integration • Spring Framework'
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
      title: 'Systems Analyst | Sviluppatore Java Senior',
      subtitle: 'Oltre 20 anni di esperienza nello sviluppo e analisi di sistemi, specializzato in Java e architetture enterprise',
      location: 'Pinerolo (TO), Italia',
      cta: 'Vedi Progetti',
      contact: 'Contattami'
    },
    about: {
      title: 'Chi Sono',
      description: 'Systems Analyst e Sviluppatore Java Senior con oltre 20 anni di esperienza nello sviluppo di sistemi enterprise. Specializzato in Java, Spring Framework, architetture microservizi e integrazione di sistemi complessi. Post-laureato in Ingegneria del Software.',
      focus: 'Specialità',
      focusText: 'Sistemi Enterprise • Microservizi • Integrazione Piattaforme • Spring Framework'
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
    company: 'Commit',
    logo: 'https://logo.clearbit.com/commit.it',
    role: 'Systems Analyst - Java',
    period: '7 anos 2 meses',
    location: 'Torino, Italia',
    project: 'Projetos Bancários e Healthcare',
    hasSubProjects: true,
    subProjects: [
      {
        id: 'commit-wk',
        client: 'Wolters Kluwer',
        project: 'Sistema Bancário',
        duration: '4 anos 3 meses',
        description: {
          'pt-BR': 'Manutenção e evolução de sistema bancário crítico, desenvolvimento de novas funcionalidades e correção de bugs em ambiente de produção. Migração para Java 19 e implementação de alta disponibilidade',
          'en': 'Maintenance and evolution of critical banking system, development of new features and bug fixes in production environment. Migration to Java 19 and high availability implementation',
          'it': 'Manutenzione ed evoluzione del sistema bancario critico, sviluppo di nuove funzionalità e correzione bug in ambiente di produzione. Migrazione a Java 19 e implementazione alta disponibilità'
        },
        challenges: {
          'pt-BR': 'Manutenção de sistema crítico em produção, migração para Java 19, implementação de novas funcionalidades sem interrupção do serviço',
          'en': 'Maintenance of critical production system, migration to Java 19, implementation of new features without service interruption',
          'it': 'Manutenzione di sistema critico in produzione, migrazione a Java 19, implementazione di nuove funzionalità senza interruzione del servizio'
        },
        lessons: {
          'pt-BR': 'Sistemas bancários críticos, Spring Boot avançado, Java 19, ambientes de alta disponibilidade',
          'en': 'Critical banking systems, advanced Spring Boot, Java 19, high availability environments',
          'it': 'Sistemi bancari critici, Spring Boot avanzato, Java 19, ambienti ad alta disponibilità'
        },
        technologies: ['Java 19', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'Oracle Database', 'Jenkins', 'Maven', 'Git']
      },
      {
        id: 'commit-teleconsys',
        client: 'Teleconsys',
        project: 'Sistema de Assistência para Idosos',
        duration: '2 anos 11 meses',
        description: {
          'pt-BR': 'Desenvolvimento de aplicação web e plugins para sistema de assistência a idosos, comunicação entre diversas plataformas: e-commerce, inteligência artificial, serviços de assistência domiciliar',
          'en': 'Development of web applications and plugins for elderly assistance system, communication between various platforms: e-commerce, artificial intelligence, home care services',
          'it': 'Sviluppo di applicazione web e plugins per sistema di assistenza a anziane, comunicazione tra diverse piattaforme: e-commerce, intelligenza artificiale, servizi di assistenza domiciliare'
        },
        challenges: {
          'pt-BR': 'Integração de múltiplas plataformas em arquitetura de microserviços, uso de Rest API, comunicação entre sistemas diversos de saúde e e-commerce',
          'en': 'Integration of multiple platforms in microservices architecture, Rest API usage, communication between diverse health and e-commerce systems',
          'it': 'Integrazione di più piattaforme in architettura microservizi, utilizzo di Rest API, comunicazione tra sistemi diversi di salute ed e-commerce'
        },
        lessons: {
          'pt-BR': 'Arquitetura de microserviços avançada, integração de IA, sistemas de cuidados médicos, Angular avançado',
          'en': 'Advanced microservices architecture, AI integration, medical care systems, advanced Angular',
          'it': 'Architettura microservizi avanzata, integrazione IA, sistemi di assistenza medica, Angular avanzato'
        },
        technologies: ['Java 17/21', 'Spring Boot', 'Spring Data', 'Docker', 'Angular', 'RabbitMQ', 'MS SqlServer', 'Maven', 'Git']
      }
    ],
    description: {
      'pt-BR': 'Desenvolvimento e manutenção de sistemas enterprise para clientes do setor bancário e healthcare. Projetos incluem sistema bancário crítico para Wolters Kluwer e plataforma de assistência para idosos para Teleconsys',
      'en': 'Development and maintenance of enterprise systems for banking and healthcare sector clients. Projects include critical banking system for Wolters Kluwer and elderly assistance platform for Teleconsys',
      'it': 'Sviluppo e manutenzione di sistemi enterprise per clienti del settore bancario e sanitario. I progetti includono sistema bancario critico per Wolters Kluwer e piattaforma assistenza anziani per Teleconsys'
    },
    challenges: {
      'pt-BR': 'Gerenciamento de múltiplos projetos simultâneos, sistemas críticos em produção, integração de tecnologias diversas para diferentes setores',
      'en': 'Management of multiple simultaneous projects, critical production systems, integration of diverse technologies for different sectors',
      'it': 'Gestione di più progetti simultanei, sistemi critici in produzione, integrazione di tecnologie diverse per settori differenti'
    },
    lessons: {
      'pt-BR': 'Gestão de projetos enterprise, Java moderno (17/19/21), arquiteturas híbridas, sistemas multi-cliente',
      'en': 'Enterprise project management, modern Java (17/19/21), hybrid architectures, multi-client systems',
      'it': 'Gestione progetti enterprise, Java moderno (17/19/21), architetture ibride, sistemi multi-cliente'
    },
    technologies: ['Java 17/19/21', 'Spring Boot', 'Spring Security', 'Angular', 'Docker', 'RabbitMQ', 'Oracle Database', 'MS SqlServer', 'Maven', 'Git', 'Jenkins']
  },
  {
    id: 2,
    company: 'Technode (Unipol)',
    logo: 'https://logo.clearbit.com/unipol.it',
    role: 'Java Batch Developer',
    period: '2 anos 4 meses',
    location: 'Bologna, Italia',
    project: 'Sistema de Gerenciamento de Seguros',
    description: {
      'pt-BR': 'Desenvolvimento de sistema de processamento batch para gerenciamento de seguros Unipol, processamento de apólices e cálculos atuariais',
      'en': 'Development of batch processing system for Unipol insurance management, policy processing and actuarial calculations',
      'it': 'Sviluppo di sistema di elaborazione batch per gestione assicurazioni Unipol, elaborazione polizze e calcoli attuariali'
    },
    challenges: {
      'pt-BR': 'Processamento de milhões de apólices, otimização de performance em batch jobs, integração com sistemas legados',
      'en': 'Processing millions of policies, performance optimization in batch jobs, integration with legacy systems',
      'it': 'Elaborazione di milioni di polizze, ottimizzazione performance in batch jobs, integrazione con sistemi legacy'
    },
    lessons: {
      'pt-BR': 'Spring Batch avançado, processamento de grandes volumes, otimização JVM, sistemas de seguros',
      'en': 'Advanced Spring Batch, large volume processing, JVM optimization, insurance systems',
      'it': 'Spring Batch avanzato, elaborazione grandi volumi, ottimizzazione JVM, sistemi assicurativi'
    },
    technologies: ['Java', 'Spring Batch', 'Spring Boot', 'Oracle Database', 'Maven', 'Git', 'JMS', 'Hibernate']
  },
  {
    id: 3,
    company: 'Sysmap (Claro)',
    logo: 'https://logo.clearbit.com/claro.com.br',
    role: 'Desenvolvedor Java Senior',
    period: '1 ano 2 meses',
    location: 'São Paulo, Brasil',
    project: 'Sistema de Vendas Telecom',
    description: {
      'pt-BR': 'Desenvolvimento de sistema de vendas para operadora Claro, criação de APIs REST para vendas online, integração com sistemas de billing e CRM',
      'en': 'Development of sales system for Claro operator, creation of REST APIs for online sales, integration with billing and CRM systems',
      'it': 'Sviluppo sistema vendite per operatore Claro, creazione API REST per vendite online, integrazione con sistemi billing e CRM'
    },
    challenges: {
      'pt-BR': 'Criação de APIs escaláveis, integração com múltiplos sistemas, alta disponibilidade para vendas online',
      'en': 'Creation of scalable APIs, integration with multiple systems, high availability for online sales',
      'it': 'Creazione di API scalabili, integrazione con sistemi multipli, alta disponibilità per vendite online'
    },
    lessons: {
      'pt-BR': 'Desenvolvimento de APIs REST, arquitetura de microserviços, CI/CD com Jenkins, sistemas de telecomunicações',
      'en': 'REST API development, microservices architecture, CI/CD with Jenkins, telecommunications systems',
      'it': 'Sviluppo API REST, architettura microservizi, CI/CD con Jenkins, sistemi telecomunicazioni'
    },
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Oracle Database', 'Maven', 'Git', 'Jenkins', 'REST APIs', 'JPA', 'Hibernate']
  },
  {
    id: 4,
    company: 'Ipse Docet Srl',
    logo: 'https://logo.clearbit.com/ipse-docet.it',
    role: 'Systems Analyst - Java',
    period: '3 meses',
    location: 'Torino / Bologna, Italia',
    project: 'Sistemas para Administração Pública',
    description: {
      'pt-BR': 'Desenvolvimento de aplicações web para administração pública (Umbria, Emilia-Romagna, Vale d\'Aosta) e sistemas batch para processamento de dados governamentais',
      'en': 'Development of web applications for public administration (Umbria, Emilia-Romagna, Vale d\'Aosta) and batch systems for government data processing',
      'it': 'Sviluppo di applicazione web per pubblica amministrazione (Umbria, Emilia-Romagna, Vale d\'Aosta) e sviluppo di sistema batch'
    },
    challenges: {
      'pt-BR': 'Desenvolvimento para múltiplas regiões italianas, integração com sistemas governamentais, compliance com regulamentações públicas',
      'en': 'Development for multiple Italian regions, integration with government systems, compliance with public regulations',
      'it': 'Sviluppo per più regioni italiane, integrazione con sistemi governativi, conformità alle normative pubbliche'
    },
    lessons: {
      'pt-BR': 'Sistemas governamentais, processamento batch complexo, JSF avançado',
      'en': 'Government systems, complex batch processing, advanced JSF',
      'it': 'Sistemi governativi, elaborazione batch complessa, JSF avanzato'
    },
    technologies: ['Java', 'JPA/Hibernate', 'EJB', 'JSF', 'PrimeFaces', 'Maven', 'GIT', 'ChartistJSF', 'JBoss', 'PostgreSQL']
  },
  {
    id: 5,
    company: 'Stefanini (Cielo)',
    logo: 'https://logo.clearbit.com/cielo.com.br',
    role: 'Desenvolvedor Java Senior',
    period: '1 ano 2 meses',
    location: 'São Paulo, Brasil',
    project: 'Sistema de Processamento de Cartões',
    description: {
      'pt-BR': 'Desenvolvimento de aplicação batch para tratamento de arquivos de cartões de crédito e geração de cronograma de pagamentos para operadora Cielo',
      'en': 'Development of batch application for credit card file processing and payment schedule generation for Cielo operator',
      'it': 'Sviluppo di applicazione batch, trattamento file carte di credito per generare la pianificazione di pagamenti'
    },
    challenges: {
      'pt-BR': 'Processamento de grandes volumes de transações, segurança PCI DSS, alta disponibilidade',
      'en': 'Processing large transaction volumes, PCI DSS security, high availability',
      'it': 'Elaborazione di grandi volumi di transazioni, sicurezza PCI DSS, alta disponibilità'
    },
    lessons: {
      'pt-BR': 'Segurança financeira, Spring Batch avançado, processamento de pagamentos',
      'en': 'Financial security, advanced Spring Batch, payment processing',
      'it': 'Sicurezza finanziaria, Spring Batch avanzato, elaborazione pagamenti'
    },
    technologies: ['Java', 'JPA/Hibernate', 'Spring Batch', 'Spring Security', 'Spring Boot', 'EJB', 'JSF', 'PrimeFaces', 'Maven', 'SVN', 'GIT']
  }
];

export const skills = {
  languages: [
    { name: 'Java', level: 95, primary: true },
    { name: 'JavaScript', level: 85, primary: true },
    { name: 'C++', level: 75 },
    { name: 'Delphi', level: 70 },
    { name: 'PHP', level: 65 },
    { name: 'Python', level: 80, primary: true }
  ],
  databases: [
    { name: 'Oracle Database', level: 95, primary: true },
    { name: 'PostgreSQL', level: 90, primary: true },
    { name: 'MS SQL Server', level: 85, primary: true },
    { name: 'MongoDB', level: 80, primary: true },
    { name: 'MySQL', level: 85 },
    { name: 'Firebird', level: 70 }
  ],
  frameworks: [
    { name: 'Spring Boot', level: 95, primary: true },
    { name: 'Spring Batch', level: 95, primary: true },
    { name: 'Spring MVC', level: 90, primary: true },
    { name: 'Spring Data', level: 90, primary: true },
    { name: 'Hibernate/JPA', level: 95, primary: true },
    { name: 'JSF', level: 90, primary: true },
    { name: 'PrimeFaces', level: 85 },
    { name: 'Angular', level: 80, primary: true },
    { name: 'Docker', level: 85, primary: true },
    { name: 'Maven', level: 90, primary: true },
    { name: 'Git', level: 90, primary: true },
    { name: 'JBoss', level: 80 },
    { name: 'SOA', level: 85 },
    { name: 'RabbitMQ', level: 75 }
  ]
};

export const education = {
  'pt-BR': [
    'Pós-graduação em Engenharia da Computaçao - Universidade Pitágoras Unopar (2024)',
    'Pós-graduação em Engenharia de Software - Universidade Pitágoras Unopar (2024)',
    'Especialização em Sistemas Web - UEM (2009-2010)',
    'Processamento de Dados - ESEEI (2001-2003)',
    'Web Programming with Python and Javascript - Harvard University (2024)'
  ],
  'en': [
    'Post-graduate in Computer Engineering - Universidade Pitágoras Unopar (2024)',
    'Post-graduate in Software Engineering - Universidade Pitágoras Unopar (2024)',
    'Specialization in Web Systems - UEM (2009-2010)', 
    'Data Processing - ESEEI (2001-2003)',
    'Web Programming with Python and Javascript - Harvard University (2024)'
  ],
  'it': [
    'Post laurea ingegneria informatica - Universidade Pitágoras Unopar (2024)',
    'Post laurea ingegneria software - Universidade Pitágoras Unopar (2024)',
    'Specializzazione in sistemi web - UEM (2009-2010)',
    'Processamenti di dati - ESEEI (2001-2003)',
    'Web programming with Python and Javascript - Harvard University (2024)'
  ]
};

export const languages = {
  'pt-BR': [
    { language: 'Português', level: 'Nativo', flag: '🇧🇷' },
    { language: 'Italiano', level: 'Intermediário', flag: '🇮🇹' },
    { language: 'Inglês', level: 'Técnico/Leitura', flag: '🇺🇸' },
    { language: 'Francês', level: 'Intermediário', flag: '🇫🇷' }
  ],
  'en': [
    { language: 'Portuguese', level: 'Native', flag: '🇧🇷' },
    { language: 'Italian', level: 'Intermediate', flag: '🇮🇹' },
    { language: 'English', level: 'Technical/Reading', flag: '🇺🇸' },
    { language: 'French', level: 'Intermediate', flag: '🇫🇷' }
  ],
  'it': [
    { language: 'Portoghese', level: 'Madrelingua', flag: '🇧🇷' },
    { language: 'Italiano', level: 'Intermedio', flag: '🇮🇹' },
    { language: 'Inglese', level: 'Tecnici/Lettura', flag: '🇺🇸' },
    { language: 'Francese', level: 'Intermedio', flag: '🇫🇷' }
  ]
};