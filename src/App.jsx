import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay, Server, Clapperboard, ChevronDown, X, Radio, ArrowUpRight } from 'lucide-react';

const professionalData = {
  name: "DropG",
  tagline: "Software Engineer | UX/UI Designer",
  about: "Estudiante en Inacap y apasionado por la creación de ecosistemas digitales. Transformo líneas de código y espacios en blanco en experiencias inmersivas.",
  projects: [
    {
      id: "streaming",
      title: "Live Streaming & Comunidad",
      shortDesc: "Creación de contenido en tiempo real en Twitch y Kick.",
      longDesc: "Gestión de una comunidad activa mediante transmisiones en vivo. El enfoque principal está en la retención de audiencia, dinámicas interactivas y la integración de alertas personalizadas para una experiencia de usuario única durante el stream.",
      icon: <MonitorPlay size={32} />,
      tech: ["Twitch", "Kick", "OBS Studio", "Comunidad"]
    },
    {
      id: "server",
      title: "Administración de Servidores",
      shortDesc: "Gestión técnica y ecosistemas multijugador.",
      longDesc: "Configuración avanzada de plugins, optimización de rendimiento y diseño de economías virtuales. Experiencia en la creación de mecánicas personalizadas usando YAML y gestión de permisos para garantizar un entorno estable y justo.",
      icon: <Server size={32} />,
      tech: ["Minecraft", "YAML", "Linux", "DevOps"]
    },
    {
      id: "youtube",
      title: "El Ángulo Muerto: Anatomía del Mal",
      shortDesc: "Investigación documental y true crime.",
      longDesc: "Dirección de arte, guionización profunda y edición audiovisual para contenido de misterio. Creación de miniaturas de alto impacto (Photoshop) y narrativa inmersiva (Premiere) diseñada para mantener el suspense y el interés del espectador.",
      icon: <Clapperboard size={32} />,
      tech: ["Premiere", "Photoshop", "Storytelling", "YouTube"]
    }
  ]
};

export default function App() {
  // Estado para controlar qué tarjeta está expandida
  const [selectedId, setSelectedId] = useState(null);

  // Encontrar la información del proyecto seleccionado
  const selectedProject = professionalData.projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-900 selection:text-white">
      
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
              className="p-8 border border-zinc-800/80 rounded-2xl bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800/60 hover:border-violet-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-colors duration-300 group cursor-pointer"
            >
              <motion.div 
                layoutId={`icon-${project.id}`}
                className="mb-6 p-4 inline-block rounded-xl bg-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-violet-600 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
              >
                {project.icon}
              </motion.div>
              <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-semibold mb-3 group-hover:text-violet-100 transition-colors">
                {project.title}
              </motion.h3>
              <motion.p layoutId={`desc-${project.id}`} className="text-zinc-400 mb-6 leading-relaxed text-sm">
                {project.shortDesc}
              </motion.p>
              
              {/* Botón visual para incitar el clic */}
              <div className="flex items-center text-sm font-medium text-violet-500 group-hover:text-violet-400 transition-colors">
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
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors flex items-center gap-2">
                Ir a Twitch
              </button>
              <button className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors">
                Ir a Kick
              </button>
            </div>
          </div>

          {/* Panel de Estado Simulado */}
          <div className="w-full md:w-auto p-6 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
            <div className="flex items-center gap-4 mb-4">
              {/* Círculo con animación de pulso infinito */}
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </div>
              <span className="font-semibold text-zinc-100">DropG está En Vivo</span>
            </div>
            <div className="text-sm text-zinc-400">
              <p><span className="text-zinc-500">Categoría:</span> Desarrollo Web / Chatting</p>
              <p><span className="text-zinc-500">Espectadores:</span> 124</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER MINIMALISTA --- */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-900">
        <p>© 2026 DropG. Construido con React & Tailwind v4.</p>
      </footer>

      {/* --- OVERLAY DE EXPANSIÓN (MODAL INTERACTIVO) --- */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)} // Cierra al hacer clic fuera
          >
            <motion.div 
              layoutId={`card-container-${selectedProject.id}`}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic adentro
            >
              {/* Brillo de fondo en el modal */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 blur-3xl rounded-full"></div>

              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X size={20} />
              </button>

              <motion.div layoutId={`icon-${selectedProject.id}`} className="mb-6 p-4 inline-block rounded-xl bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                {selectedProject.icon}
              </motion.div>
              
              <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-bold mb-2">
                {selectedProject.title}
              </motion.h3>
              
              <motion.p layoutId={`desc-${selectedProject.id}`} className="text-violet-400 font-medium mb-6">
                {selectedProject.shortDesc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-zinc-300 leading-relaxed mb-8"
              >
                {selectedProject.longDesc}
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}