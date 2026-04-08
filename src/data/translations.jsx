import React from 'react';
import { MonitorPlay, Server, Brush, Code2 } from 'lucide-react';

export const translations = {
  es: {
    nav: {
      toggleLang: "EN"
    },
    hero: {
      badge: "Portfolio 2026 | Freelance Disponible",
      name: "DropG.",
      tagline: "Software Engineer | CEO Legacy Realms | Diseñador Freelance",
      about: "Construyo y administro ecosistemas digitales. Desde la arquitectura de servidores complejos y programación de bots, hasta el diseño de interfaces web y renders 3D publicitarios. Autónomo y listo para potenciar tu próximo proyecto."
    },
    specialties: {
      title: "Servicios y Especialidades",
      action: "Ver detalles"
    },
    infrastructure: {
      title: "Gestión de Ecosistemas",
      desc: "Diseño, configuración y monitoreo de infraestructura multijugador compleja. Implementación de lógicas personalizadas mediante YAML y optimización de rendimiento.",
      monitorSub: "Mi Servidor Oficial de Minecraft",
      connecting: "Estableciendo conexión con el nodo...",
      online: "Sistema Operativo y En Línea",
      offline: "Sistema Fuera de Línea",
      error: "Error al resolver la IP del servidor.",
      players: "Jugadores Activos",
      protocol: "Protocolo Core",
      stackTitle: "Stack Tecnológico",
      stackDesc: "Gestión de lógicas avanzadas, despliegue de hologramas, creación de entidades complejas y sistemas de economía.",
      stackTags: ["YAML", "MythicMobs", "SuperiorSkyblock", "DecentHolograms", "PaperMC", "Server Config"]
    },
    stream: {
      title: "Transmisión en Vivo",
      desc: "Cuando no estoy escribiendo código, editando videos o configurando servidores, me encuentras creando contenido e interactuando con la comunidad en tiempo real.",
      btnTwitch: "Ir a Twitch",
      btnKick: "Ir a Kick",
      status: "DropG está En Vivo",
      category: "Categoría:",
      catValue: "Desarrollo Web / Chatting",
      viewers: "Espectadores:"
    },
    footer: "© 2026 DropG. Construido con React & Tailwind v4.",
    projects: [
      {
        id: "server",
        title: "CEO & Arquitectura de Servidores",
        shortDesc: "Modalidades 100% custom, gestión de infraestructura y Discord Bots.",
        longDesc: "CEO de Legacy Realms, ex-Admin (CM) en Builders Academy y Helper en MinePiece. Especialista en programar modalidades desde cero (como GENS al 100%, NPCs, hologramas, All One Block). Amplia experiencia en soporte a usuarios, gestión integral de comunidades y programación de bots de tickets automatizados para Discord.",
        icon: <Server size={32} />,
        tech: ["Java", "YAML", "Discord Bots", "Community Management"]
      },
      {
        id: "design",
        title: "Diseño Gráfico & Audiovisual Freelance",
        shortDesc: "Renders 3D de Minecraft, flyers para servidores y edición de video.",
        longDesc: "Diseñador autónomo ofreciendo servicios para creadores y administradores. Especializado en renders 3D para marketing de servidores, flyers de aperturas y descuentos de tienda, miniaturas de alto impacto y edición audiovisual completa (aplicado en proyectos como el canal de True Crime 'El Ángulo Muerto').",
        icon: <Brush size={32} />,
        tech: ["Photoshop", "Premiere", "Renders 3D", "Branding"]
      },
      {
        id: "dev",
        title: "Desarrollo de Software y Web",
        shortDesc: "Programación en Python, Java e interfaces responsivas.",
        longDesc: "Ingeniería de software aplicada (INACAP). Desarrollo de interfaces modernas y optimizadas, como este mismo portafolio interactivo construido con React. Experiencia académica en la creación de lógicas de negocio y plataformas web, incluyendo sistemas de comercio electrónico (e-commerce).",
        icon: <Code2 size={32} />,
        tech: ["Python", "Java", "React", "HTML"]
      },
      {
        id: "streaming",
        title: "Streaming & Comunidad",
        shortDesc: "Creación de contenido e interacción en tiempo real.",
        longDesc: "Gestión de una comunidad activa mediante transmisiones en vivo en Twitch y Kick. El enfoque principal está en la retención de audiencia, dinámicas interactivas y la creación de un espacio de entretenimiento tecnológico y de gaming.",
        icon: <MonitorPlay size={32} />,
        tech: ["Twitch", "Kick", "OBS Studio", "Engagement"]
      }
    ]
  },
  en: {
    nav: {
      toggleLang: "ES"
    },
    hero: {
      badge: "Portfolio 2026 | Available for Freelance",
      name: "DropG.",
      tagline: "Software Engineer | CEO Legacy Realms | Freelance Designer",
      about: "I build and manage digital ecosystems. From complex server architecture and bot programming, to web interface design and 3D marketing renders. Self-employed and ready to boost your next project."
    },
    specialties: {
      title: "Services & Expertise",
      action: "View details"
    },
    infrastructure: {
      title: "Ecosystem Management",
      desc: "Design, configuration, and monitoring of complex multiplayer infrastructure. Implementation of custom logic via YAML and performance optimization.",
      monitorSub: "My Official Minecraft Server",
      connecting: "Establishing connection with the node...",
      online: "System Operational & Online",
      offline: "System Offline",
      error: "Error resolving server IP.",
      players: "Active Players",
      protocol: "Core Protocol",
      stackTitle: "Tech Stack",
      stackDesc: "Advanced logic management, hologram deployment, complex entity creation, and economy systems.",
      stackTags: ["YAML", "MythicMobs", "SuperiorSkyblock", "DecentHolograms", "PaperMC", "Server Config"]
    },
    stream: {
      title: "Live Broadcasting",
      desc: "When I'm not writing code, editing videos, or configuring servers, you can find me creating content and interacting with the community in real-time.",
      btnTwitch: "Go to Twitch",
      btnKick: "Go to Kick",
      status: "DropG is Live",
      category: "Category:",
      catValue: "Web Development / Chatting",
      viewers: "Viewers:"
    },
    footer: "© 2026 DropG. Built with React & Tailwind v4.",
    projects: [
      {
        id: "server",
        title: "CEO & Server Architecture",
        shortDesc: "100% custom gamemodes, infrastructure management, and Discord Bots.",
        longDesc: "CEO of Legacy Realms, former Admin (CM) at Builders Academy, and Helper at MinePiece. Specialist in programming gamemodes from scratch (like 100% GENS, NPCs, holograms, All One Block). Extensive experience in user support, comprehensive community management, and programming automated ticket bots for Discord.",
        icon: <Server size={32} />,
        tech: ["Java", "YAML", "Discord Bots", "Community Management"]
      },
      {
        id: "design",
        title: "Freelance Graphic & Audiovisual Design",
        shortDesc: "Minecraft 3D renders, server flyers, and video editing.",
        longDesc: "Self-employed designer offering services for creators and admins. Specialized in 3D renders for server marketing, opening and store discount flyers, high-impact thumbnails, and complete audiovisual editing (applied in projects like the True Crime channel 'El Ángulo Muerto').",
        icon: <Brush size={32} />,
        tech: ["Photoshop", "Premiere", "3D Renders", "Branding"]
      },
      {
        id: "dev",
        title: "Software & Web Development",
        shortDesc: "Python and Java programming, and responsive web interfaces.",
        longDesc: "Applied software engineering (INACAP). Development of modern and optimized interfaces, like this very interactive portfolio built with React. Academic experience in creating business logics and web platforms, including e-commerce systems.",
        icon: <Code2 size={32} />,
        tech: ["Python", "Java", "React", "HTML"]
      },
      {
        id: "streaming",
        title: "Streaming & Community",
        shortDesc: "Real-time content creation and interaction.",
        longDesc: "Managing an active community through live broadcasts on Twitch and Kick. The main focus is audience retention, interactive dynamics, and creating a technological and gaming entertainment space.",
        icon: <MonitorPlay size={32} />,
        tech: ["Twitch", "Kick", "OBS Studio", "Engagement"]
      }
    ]
  }
};