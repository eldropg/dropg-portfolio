import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ selectedId, setSelectedId, selectedProject }) {
  return (
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}