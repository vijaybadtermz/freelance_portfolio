import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Video, Cpu, Scan, CheckCircle, Search, UserCheck } from 'lucide-react';

export const FaceHelpMockup = () => {
  const [matchStatus, setMatchStatus] = useState('MATCH CONFIRMED');
  const [activeCam, setActiveCam] = useState('CAM-01 Entrance Feed');

  return (
    <div className="w-full rounded-2xl bg-[#060a12] border border-cyan-500/30 p-4 sm:p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden text-slate-200">
      {/* Top HUD Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Scan className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm text-cyan-300 tracking-wide">CCTVHelper Face Recognition System</h4>
            <p className="text-[10px] font-mono text-slate-400">Offline GPU Acceleration • face-api.js Neural Network</p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/40 text-rose-300 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" /> Target Alert
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 hidden sm:inline">
            100% Local / No Cloud
          </span>
        </div>
      </div>

      {/* Main CCTV Feed Scanner Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Live Camera View with Canvas Bounding Box Overlay */}
        <div className="lg:col-span-2 relative aspect-video rounded-xl bg-slate-950 border border-cyan-500/30 overflow-hidden flex items-center justify-center group">
          {/* Simulated Dark Surveillance Feed */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Radar Sweep Animation */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(6,182,212,0.15)_360deg)] animate-radar pointer-events-none" />

          {/* Simulated Bounding Box 1 - Identified Person */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/4 left-1/3 w-32 h-36 border-2 border-cyan-400 rounded-lg p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-[1px]"
          >
            <div className="w-full h-full border border-dashed border-cyan-300/60 rounded flex flex-col justify-between p-1">
              <div className="flex justify-between text-[9px] font-mono text-cyan-300 bg-slate-950/90 px-1 py-0.5 rounded">
                <span>98.4% MATCH</span>
                <span className="text-emerald-400">VIP</span>
              </div>
              <div className="bg-slate-950/90 p-1 rounded text-[9px] font-mono text-cyan-300">
                ID: #E-9402 Vijayakumar
              </div>
            </div>
          </motion.div>

          {/* Simulated Bounding Box 2 - Secondary Face */}
          <div className="absolute top-1/3 right-1/4 w-24 h-28 border border-slate-600 rounded p-1">
            <span className="text-[8px] font-mono text-slate-400 bg-slate-900 px-1 rounded">FACE DETECTED</span>
          </div>

          {/* HUD Camera Status Overlays */}
          <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan-400 bg-slate-950/80 px-2 py-1 rounded border border-cyan-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" /> LIVE HLS: {activeCam}
          </div>

          <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span>FPS: 45.2 • Res: 1080p Stream</span>
            <span className="text-cyan-400">Vector Euclidean Dist: 0.38</span>
          </div>
        </div>

        {/* Right Match Controls & Timeline */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3 font-mono text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase mb-1">Target Classification</span>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-3">
              <span className="p-1.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-center">VIP Employee</span>
              <span className="p-1.5 rounded bg-rose-950/50 border border-rose-500/30 text-rose-300 text-center">Watchlist / Blacklist</span>
            </div>

            <span className="text-[10px] text-slate-400 block uppercase mb-1">Match Timeline Scrubbing</span>
            <div className="space-y-1.5 text-[10px] text-slate-300">
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span>09:42:15 AM</span> <span className="text-cyan-400">Camera #01 Entrance</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span>10:15:30 AM</span> <span className="text-cyan-400">Camera #04 Lobby</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="text-[10px] text-cyan-400 block mb-1">AI Threshold Setting</span>
            <input type="range" min="50" max="99" defaultValue="92" className="w-full accent-cyan-400" />
            <div className="flex justify-between text-[9px] text-slate-500 mt-1">
              <span>Low (Loose)</span>
              <span>Strict 92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
