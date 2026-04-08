import React, { useState, useEffect } from 'react';
import { Users, Activity, Copy, Check } from 'lucide-react';

export default function ServerMonitor({ t }) {
  const [serverData, setServerData] = useState(null);
  const [serverLoading, setServerLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const serverIP = "play.legacyrealms.net";

  useEffect(() => {
    fetch(`https://api.mcsrvstat.us/3/${serverIP}`)
      .then(response => response.json())
      .then(result => {
        setServerData(result);
        setServerLoading(false);
      })
      .catch(error => {
        console.error("Error connecting to Legacy Realms:", error);
        setServerLoading(false);
      });
  }, [serverIP]);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative shadow-2xl overflow-hidden group">
      
      {/* --- CAPA 1: IMAGEN DE FONDO CON DEGRADADO --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lobby.jpg" 
          alt="Legacy Realms Lobby" 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          onError={(e) => e.target.style.display = 'none'} 
        />
        {/* Degradados (Fade) para que la foto se funda con los bordes oscuros */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-zinc-950/80"></div>
      </div>

      {/* --- CAPA 2: CONTENIDO INTERACTIVO (z-10 para flotar sobre la foto) --- */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h4 className="text-2xl font-bold text-zinc-100 drop-shadow-md">Legacy Realms</h4>
            <p className="text-zinc-300 text-sm mt-1 font-medium">{t.infrastructure.monitorSub}</p>
          </div>
          
          <button 
            onClick={handleCopyIP}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hover:border-violet-500 hover:bg-zinc-800 text-zinc-100 transition-all group/btn"
          >
            <span className="font-mono text-sm tracking-wider">{serverIP}</span>
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-zinc-400 group-hover/btn:text-violet-400" />}
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-inner">
          {serverLoading ? (
            <div className="text-sm text-zinc-400 animate-pulse">{t.infrastructure.connecting}</div>
          ) : serverData ? (
            <div className="flex flex-col gap-6">
              
              {/* ESTADO DE CONEXIÓN */}
              <div className="flex items-center gap-3">
                <div className="relative flex h-4 w-4">
                  {serverData.online ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                  )}
                </div>
                <span className="text-lg font-semibold tracking-tight text-zinc-100">
                  {serverData.online ? t.infrastructure.online : t.infrastructure.offline}
                </span>
              </div>

              {/* MOTD (Message of the Day) */}
              {serverData.online && serverData.motd && serverData.motd.clean && (
                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 font-mono text-sm text-zinc-300 flex flex-col items-center justify-center text-center drop-shadow-md">
                  {serverData.motd.clean.map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </div>
              )}

              {/* JUGADORES Y PROTOCOLO */}
              {serverData.online && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-400 text-sm font-medium">{t.infrastructure.players}</span>
                    {/* Contador de jugadores con efecto Neón */}
                    <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xl drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
                      <Users size={20} />
                      {serverData.players?.online || 0}
                      <span className="text-zinc-600 text-sm drop-shadow-none">/ {serverData.players?.max || 0}</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-400 text-sm font-medium">{t.infrastructure.protocol}</span>
                    <div className="flex items-center gap-2 text-zinc-300 text-sm font-mono uppercase">
                      <Activity size={16} className="text-violet-400" />
                      {serverData.version || 'PaperMC'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-red-400">{t.infrastructure.error}</div>
          )}
        </div>
      </div>
    </div>
  );
}