import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay, Server, Clapperboard, ChevronDown, X, Radio, ArrowUpRight, Users, Activity } from 'lucide-react';

const professionalData = {
  name: "DropG",
  tagline: "Software Engineer | UX/UI Designer",
  about: "Estudiante en Inacap y apasionado por la creación de ecosistemas digitales. Transformo líneas de código y espacios en blanco en experiencias inmersivas.",
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
      title: "Administración de Servidores",
      shortDesc: "Gestión técnica y ecosistemas multijugador.",
      longDesc: "Configuración avanzada de plugins, optimización de rendimiento y diseño de economías virtuales. Experiencia en la creación de mecánicas personalizadas usando YAML y gestión de permisos para garantizar un entorno estable.",
      icon: <Server size={32} />,
      tech: ["Minecraft", "YAML", "Linux", "DevOps"]
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
};

// --- NUEVO COMPONENTE: MONITOR DE SERVIDOR EN TIEMPO REAL ---
const ServerStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reemplaza 'mc.hypixel.net' con la IP de tu servidor
    const serverIP = "mc.hypixel.net"; 
    
    fetch(`https://api.mcsrvstat.us/3/${serverIP}`)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching server status:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-sm text-zinc-500 animate-pulse mt-4">Conectando al servidor...</div>;
  if (!data) return null;

  return (
    <div className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          {data.online ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          )}
        </div>
        <span className="text-sm font-medium text-zinc-300">
          {data.online ? 'Servidor Operativo' : 'Servidor Offline'}
        </span>
      </div>
      
      {data.online && (
        <div className="flex gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-1">
            <Users size={14} className="text-violet-400" />
            <span>{data.players?.online || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity size={14} className="text-violet-400" />
            <span>{data.protocol?.name || 'Java'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = professionalData.projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-900 selection:text-white overflow-x-hidden">
      
      {/* --- SECCIÓN 1: HERO --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="text-sm tracking-[0.3em] text-violet-500 font-semibold uppercase drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
            Portfolio 2026
          </h2>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            {professionalData.name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-light">
            {professionalData.tagline}
          </p>
          <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed">
            {professionalData.about}
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-zinc-600"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- SECCIÓN 2: GRILLA INTERACTIVA --- */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Áreas de Especialidad</h3>
          <div className="h-1 w-20 bg-violet-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalData.projects.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              whileHover={{ y: -5 }}
              className="p-8 border border-zinc-800/80 rounded-2xl bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800/60 hover:border-violet-500/50 transition-colors duration-300 group cursor-pointer flex flex-col"
            >
              <motion.div 
                layoutId={`icon-${project.id}`}
                className="mb-6 p-4 inline-block rounded-xl bg-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-300 self-start"
              >
                {project.icon}
              </motion.div>
              <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-semibold mb-3 group-hover:text-violet-100 transition-colors">
                {project.title}
              </motion.h3>
              <motion.p layoutId={`desc-${project.id}`} className="text-zinc-400 mb-6 leading-relaxed text-sm flex-grow">
                {project.shortDesc}
              </motion.p>
              
              <div className="flex items-center text-sm font-medium text-violet-500 mt-auto">
                Ver detalles <ArrowUpRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN 3: ECOSISTEMA EN VIVO --- */}
      <section className="px-6 py-24 bg-zinc-900/30 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Radio className="text-violet-500" /> Transmisión en Vivo
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Cuando no estoy escribiendo código o diseñando interfaces, me encuentras creando contenido e interactuando con la comunidad en tiempo real. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors">
                Ir a Twitch
              </button>
              <button className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors">
                Ir a Kick
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto p-6 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </div>
              <span className="font-semibold text-zinc-100">DropG está En Vivo</span>
            </div>
            <div className="text-sm text-zinc-400 space-y-2">
              <p><span className="text-zinc-500">Categoría:</span> Desarrollo Web / Chatting</p>
              <p><span className="text-zinc-500">Espectadores:</span> 124</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-900">
        <p>© 2026 DropG. Construido con React & Tailwind v4.</p>
      </footer>

      {/* --- OVERLAY DE EXPANSIÓN (MODAL) --- */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`card-container-${selectedProject.id}`}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 max-w-2xl w-full relative overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 blur-3xl rounded-full pointer-events-none"></div>

              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto pr-2 custom-scrollbar">
                <motion.div layoutId={`icon-${selectedProject.id}`} className="mb-6 p-4 inline-block rounded-xl bg-violet-600 text-white">
                  {selectedProject.icon}
                </motion.div>
                
                <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-bold mb-2 pr-8">
                  {selectedProject.title}
                </motion.h3>
                
                <motion.p layoutId={`desc-${selectedProject.id}`} className="text-violet-400 font-medium mb-6">
                  {selectedProject.shortDesc}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-zinc-300 leading-relaxed mb-6"
                >
                  {selectedProject.longDesc}
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="text-sm font-medium px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Renderizar el componente de estado SOLAMENTE si es el proyecto de servidor */}
                {selectedProject.id === "server" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <h4 className="text-sm tracking-widest text-zinc-500 uppercase mt-4 mb-2 font-semibold">Monitor de Red</h4>
                    <ServerStatus />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}