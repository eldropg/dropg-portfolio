import React from 'react';
import { MonitorPlay, Server, Clapperboard } from 'lucide-react';

export const translations = {
  es: {
    nav: {
      toggleLang: "EN"
    },
    hero: {
      badge: "Portfolio 2026",
      name: "DropG.",
      tagline: "Software Engineer | UX/UI Designer",
      about: "Estudiante en Inacap y apasionado por la creación de ecosistemas digitales. Transformo líneas de código y espacios en blanco en experiencias inmersivas."
    },
    specialties: {
      title: "Áreas de Especialidad",
      action: "Ver detalles"
    },
    infrastructure: {
      title: "Gestión de Ecosistemas",
      desc: "Diseño, configuración y monitoreo de infraestructura multijugador compleja. Implementación de lógicas personalizadas mediante YAML y optimización de rendimiento.",
      monitorSub: "Servidor Principal de Producción",
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
      desc: "Cuando no estoy escribiendo código o configurando servidores, me encuentras creando contenido e interactuando con la comunidad en tiempo real.",
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
        id: "streaming",
        title: "Live Streaming & Comunidad",
        shortDesc: "Creación de contenido en tiempo real en Twitch y Kick.",
        longDesc: "Gestión de una comunidad activa mediante transmisiones en vivo. El enfoque principal está en la retención de audiencia, dinámicas interactivas y la integración de alertas personalizadas.",
        icon: <MonitorPlay size={32} />,
        tech: ["Twitch", "Kick", "OBS Studio", "Comunidad"]
      },
      {
        id: "server",
        title: "Arquitectura de Servidores",
        shortDesc: "Gestión técnica y ecosistemas multijugador.",
        longDesc: "Diseño y despliegue de servidores a gran escala. Especialización en balanceo de cargas, gestión de bases de datos para economías virtuales y resolución de conflictos de red en entornos Linux.",
        icon: <Server size={32} />,
        tech: ["Linux", "DevOps", "Bases de Datos", "Redes"]
      },
      {
        id: "youtube",
        title: "El Ángulo Muerto: Anatomía del Mal",
        shortDesc: "Investigación documental y true crime.",
        longDesc: "Dirección de arte, guionización profunda y edición audiovisual para contenido de misterio. Creación de miniaturas de alto impacto y narrativa inmersiva.",
        icon: <Clapperboard size={32} />,
        tech: ["Premiere", "Photoshop", "Storytelling", "YouTube"]
      }
    ]
  },
  en: {
    nav: {
      toggleLang: "ES"
    },
    hero: {
      badge: "Portfolio 2026",
      name: "DropG.",
      tagline: "Software Engineer | UX/UI Designer",
      about: "Inacap student and passionate about creating digital ecosystems. I transform lines of code and blank spaces into immersive experiences."
    },
    specialties: {
      title: "Areas of Expertise",
      action: "View details"
    },
    infrastructure: {
      title: "Ecosystem Management",
      desc: "Design, configuration, and monitoring of complex multiplayer infrastructure. Implementation of custom logic via YAML and performance optimization.",
      monitorSub: "Main Production Server",
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
      desc: "When I'm not writing code or configuring servers, you can find me creating content and interacting with the community in real-time.",
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
        id: "streaming",
        title: "Live Streaming & Community",
        shortDesc: "Real-time content creation on Twitch and Kick.",
        longDesc: "Managing an active community through live broadcasts. The main focus is audience retention, interactive dynamics, and custom alert integration.",
        icon: <MonitorPlay size={32} />,
        tech: ["Twitch", "Kick", "OBS Studio", "Community"]
      },
      {
        id: "server",
        title: "Server Architecture",
        shortDesc: "Technical management and multiplayer ecosystems.",
        longDesc: "Design and deployment of large-scale servers. Specialization in load balancing, database management for virtual economies, and network troubleshooting in Linux environments.",
        icon: <Server size={32} />,
        tech: ["Linux", "DevOps", "Databases", "Networking"]
      },
      {
        id: "youtube",
        title: "El Ángulo Muerto: Anatomy of Evil",
        shortDesc: "Documentary research and true crime.",
        longDesc: "Art direction, deep scriptwriting, and audiovisual editing for mystery content. Creation of high-impact thumbnails and immersive narratives.",
        icon: <Clapperboard size={32} />,
        tech: ["Premiere", "Photoshop", "Storytelling", "YouTube"]
      }
    ]
  }
};