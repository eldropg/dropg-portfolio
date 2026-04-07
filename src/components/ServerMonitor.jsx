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
    <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h4 className="text-2xl font-bold text-zinc-100">Legacy Realms</h4>
          <p className="text-zinc-500 text-sm mt-1">{t.infrastructure.monitorSub}</p>
        </div>
        
        <button 
          onClick={handleCopyIP}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-violet-500 hover:bg-zinc-800 text-zinc-300 transition-all group"
        >
          <span className="font-mono text-sm tracking-wider">{serverIP}</span>
          {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-zinc-500 group-hover:text-violet-400" />}
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
        {serverLoading ? (
          <div className="text-sm text-zinc-500 animate-pulse">{t.infrastructure.connecting}</div>
        ) : serverData ? (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-4 w-4">
                {serverData.online ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                )}
              </div>
              <span className="text-lg font-semibold tracking-tight">
                {serverData.online ? t.infrastructure.online : t.infrastructure.offline}
              </span>
            </div>

            {serverData.online && (
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">{t.infrastructure.players}</span>
                  <div className="flex items-center gap-2 text-violet-400 font-mono font-bold text-xl">
                    <Users size={20} />
                    {serverData.players?.online || 0}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">{t.infrastructure.protocol}</span>
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
  );
}