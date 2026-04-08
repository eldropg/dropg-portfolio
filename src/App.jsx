import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Radio, ArrowUpRight, Server, MessageCircle } from 'lucide-react';
import { FaGithub, FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa6';
import { translations } from './data/translations';
import ServerMonitor from './components/ServerMonitor';
import ProjectModal from './components/ProjectModal';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-violet-400 font-medium tracking-tight text-sm sm:text-base md:text-xl flex flex-wrap justify-center items-center gap-1 md:gap-2 mt-2 px-4">
      <span className="text-zinc-600 select-none">root@dropg:~$</span>
      <span className="flex items-center">
        <span className="text-zinc-200 text-center">{currentText}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[6px] md:w-[10px] h-[1em] bg-violet-500 ml-1 align-middle translate-y-[-2px]"
        />
      </span>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = t.projects.find(p => p.id === selectedId);

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-900 selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      
      <nav className="absolute top-0 w-full p-4 md:p-6 flex justify-between items-center z-40">
        <div className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-violet-600 rounded-sm rotate-45"></div>
          {t.hero.name}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-2.5 py-1 md:px-3 text-[10px] md:text-xs font-bold tracking-wider rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-violet-500 transition-all cursor-pointer"
          >
            {t.nav.toggleLang}
          </button>
          <div className="w-px h-4 bg-zinc-800 mx-1 md:mx-2"></div>
          <a href="https://github.com/eldropg" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><FaGithub className="text-[16px] md:text-[18px]" /></a>
          <a href="https://www.twitch.tv/eldropg" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-violet-500 transition-colors"><FaTwitch className="text-[16px] md:text-[18px]" /></a>
          <a href="https://www.youtube.com/@AnguloMuertoOficial" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-500 transition-colors"><FaYoutube className="text-[16px] md:text-[18px]" /></a>
          <a href="https://www.instagram.com/_drop.g/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-pink-500 transition-colors"><FaInstagram className="text-[16px] md:text-[18px]" /></a>
        </div>
      </nav>
      
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] md:bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-violet-600/15 md:bg-violet-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6 md:space-y-8 relative z-10 mt-12 md:mt-0 w-full"
        >
          <h2 className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-violet-500 font-semibold uppercase drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] px-4">
            {t.hero.badge}
          </h2>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-violet-200 to-violet-800 pb-2 px-2">
            {t.hero.name}
          </h1>
          
          <Typewriter text={t.hero.tagline} />
          
          <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed text-base md:text-lg pt-4 px-4">
            {t.hero.about}
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 text-zinc-600 cursor-pointer hover:text-zinc-300 transition-colors z-10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 max-w-6xl mx-auto w-full">
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.specialties.title}</h3>
          <div className="h-1 w-16 md:w-20 bg-violet-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.projects.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 border border-zinc-800/80 rounded-2xl bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800/60 hover:border-violet-500/50 transition-colors duration-300 group cursor-pointer flex flex-col"
            >
              <motion.div 
                layoutId={`icon-${project.id}`}
                className="mb-4 md:mb-6 p-3 md:p-4 inline-block rounded-xl bg-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-300 self-start"
              >
                {project.icon}
              </motion.div>
              <motion.h3 layoutId={`title-${project.id}`} className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-violet-100 transition-colors">
                {project.title}
              </motion.h3>
              <motion.p layoutId={`desc-${project.id}`} className="text-zinc-400 mb-4 md:mb-6 leading-relaxed text-sm flex-grow">
                {project.shortDesc}
              </motion.p>
              
              <div className="flex items-center text-sm font-medium text-violet-500 mt-auto">
                {t.specialties.action} <ArrowUpRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 bg-zinc-900/30 border-y border-zinc-800 relative overflow-hidden w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] md:h-[800px] bg-violet-600/5 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8 md:mb-12 text-left md:text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.infrastructure.title}</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{t.infrastructure.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <ServerMonitor t={t} />
            </div>

            <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col">
              <h4 className="text-base md:text-lg font-bold text-zinc-100 mb-4 md:mb-6 flex items-center gap-2">
                <Server size={20} className="text-violet-500 shrink-0" /> {t.infrastructure.stackTitle}
              </h4>
              <p className="text-sm text-zinc-400 mb-6 md:mb-8 leading-relaxed">
                {t.infrastructure.stackDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {t.infrastructure.stackTags.map((tech, index) => (
                  <span key={index} className="text-[10px] md:text-xs font-medium px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href="http://discord.legacyrealms.net/"
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full py-3.5 md:py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-bold flex items-center justify-center gap-2 md:gap-3 transition-all shadow-lg shadow-indigo-500/20 group/discord"
              >
                <MessageCircle size={18} className="group-hover/discord:scale-110 transition-transform md:w-5 md:h-5" />
                {t.infrastructure.btnDiscord}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 md:py-24 bg-zinc-950 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-xl w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 flex items-center gap-3">
              <Radio className="text-violet-500 shrink-0" /> {t.stream.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              {t.stream.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
              <a 
                href="https://www.twitch.tv/eldropg" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors text-center text-sm md:text-base"
              >
                {t.stream.btnTwitch}
              </a>
              <a 
                href="https://kick.com/eldropg" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors text-center text-sm md:text-base"
              >
                {t.stream.btnKick}
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto p-5 md:p-6 rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="relative flex h-3 w-3 md:h-4 md:w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500"></span>
              </div>
              <span className="font-semibold text-zinc-100 text-sm md:text-base">{t.stream.status}</span>
            </div>
            <div className="text-xs md:text-sm text-zinc-400 space-y-1.5 md:space-y-2">
              <p><span className="text-zinc-500">{t.stream.category}</span> {t.stream.catValue}</p>
              <p><span className="text-zinc-500">{t.stream.viewers}</span> 124</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 md:py-8 text-center text-zinc-500 text-xs md:text-sm border-t border-zinc-900 px-4">
        <p>{t.footer}</p>
      </footer>

      <ProjectModal 
        selectedId={selectedId} 
        setSelectedId={setSelectedId} 
        selectedProject={selectedProject} 
      />

    </div>
  );
}