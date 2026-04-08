import React, { useState, useEffect } from 'react';
import { Users, Activity, Copy, Check, Server } from 'lucide-react';

export default function ServerMonitor({ t }) {
  const [serverData, setServerData] = useState(null);
  const [serverLoading, setServerLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const serverIP = "legacyrealms.net";

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
    <div className="p-5 md:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative shadow-2xl overflow-hidden group w-full">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/lobby.jpg" 
          alt="Legacy Realms Lobby" 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          onError={(e) => e.target.style.display = 'none'} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-zinc-950/80"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4 w-full">
          <div className="w-full sm:w-auto">
            <h4 className="text-xl md:text-2xl font-bold text-zinc-100 drop-shadow-md">{t.infrastructure.title}</h4>
            <p className="text-zinc-300 text-xs md:text-sm mt-1 font-medium">{t.infrastructure.monitorSub}</p>
          </div>
          
          <button 
            onClick={handleCopyIP}
            className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto px-3 md:px-4 py-2 rounded-lg bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hover:border-violet-500 hover:bg-zinc-800 text-zinc-100 transition-all group/btn cursor-pointer"
          >
            <span className="font-mono text-xs md:text-sm tracking-wider truncate max-w-[200px] sm:max-w-none">{serverIP}</span>
            {copied ? <Check size={16} className="text-emerald-500 shrink-0" /> : <Copy size={16} className="text-zinc-400 group-hover/btn:text-violet-400 shrink-0" />}
          </button>
        </div>

        <div className="p-4 md:p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-inner w-full">
          {serverLoading ? (
            <div className="text-xs md:text-sm text-zinc-400 animate-pulse">{t.infrastructure.connecting}</div>
          ) : serverData ? (
            <div className="flex flex-col gap-4 md:gap-6">
              
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative flex h-3 w-3 md:h-4 md:w-4">
                  {serverData.online ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                  )}
                </div>
                <span className="text-base md:text-lg font-semibold tracking-tight text-zinc-100">
                  {serverData.online ? t.infrastructure.online : t.infrastructure.offline}
                </span>
              </div>

              {serverData.online && (
                <div className="p-3 md:p-4 rounded-xl bg-black/80 border border-zinc-800 flex flex-col sm:flex-row items-center gap-3 md:gap-4 drop-shadow-md text-center sm:text-left">
                  {serverData.icon ? (
                    <img 
                      src={serverData.icon} 
                      alt="Server Logo" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-md shadow-lg shrink-0"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Server size={24} className="text-zinc-700 md:w-8 md:h-8" />
                    </div>
                  )}

                  <div className="flex-1 overflow-hidden font-mono text-xs md:text-sm leading-relaxed md:leading-snug tracking-tight w-full break-words">
                    {serverData.motd?.html ? (
                      serverData.motd.html.map((line, index) => (
                        <div 
                          key={index} 
                          dangerouslySetInnerHTML={{ __html: line }} 
                          style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}
                        />
                      ))
                    ) : (
                      <span className="text-zinc-500">Motd no disponible</span>
                    )}
                  </div>
                </div>
              )}

              {serverData.online && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-400 text-xs md:text-sm font-medium">{t.infrastructure.players}</span>
                    <div className="flex items-center gap-1.5 md:gap-2 text-emerald-400 font-mono font-bold text-lg md:text-xl drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
                      <Users size={16} className="md:w-5 md:h-5" />
                      {serverData.players?.online || 0}
                      <span className="text-zinc-600 text-xs md:text-sm drop-shadow-none">/ {serverData.players?.max || 0}</span>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl bg-black/50 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-400 text-xs md:text-sm font-medium">{t.infrastructure.protocol}</span>
                    <div className="flex items-center gap-1.5 md:gap-2 text-zinc-300 text-xs md:text-sm font-mono uppercase">
                      <Activity size={14} className="text-violet-400 md:w-4 md:h-4" />
                      {serverData.version || 'PaperMC'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs md:text-sm text-red-400">{t.infrastructure.error}</div>
          )}
        </div>
      </div>
    </div>
  );
}