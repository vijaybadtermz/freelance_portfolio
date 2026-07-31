import React from 'react';
import { Smartphone, MapPin, Navigation, QrCode, Volume2, CheckCircle2, ShieldCheck, Search } from 'lucide-react';

export const AndroidAppMockups = ({ project }) => {
  const renderContent = () => {
    switch (project.id) {
      case 'business-map':
        return (
          <div className="h-full bg-slate-950 p-3 flex flex-col justify-between font-mono text-xs">
            {/* Top Navigation HUD */}
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-cyan-400">
                <span className="flex items-center gap-1 font-bold"><Navigation className="w-3 h-3 animate-pulse" /> Mapbox Voice Nav</span>
                <span className="text-emerald-400">GPS Locked</span>
              </div>
              <p className="text-slate-200 font-sans text-xs font-semibold">Turn Right on Anna Salai Road in 200m</p>
              <div className="flex justify-between text-[9px] text-slate-400">
                <span>Dist: 1.4 km</span>
                <span>Speed: 32 km/h</span>
              </div>
            </div>

            {/* Simulated Map vector grid */}
            <div className="my-2 flex-1 rounded-xl bg-[#09101d] border border-cyan-500/30 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 animate-ping" />
              <div className="absolute z-10 p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-[10px] text-cyan-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" /> Parking Hub #04
              </div>
            </div>

            <div className="p-2 rounded-lg bg-slate-900 text-[10px] text-slate-400 flex justify-between">
              <span>Geohash: tzy38f</span>
              <span className="text-emerald-400">Firestore ↔ Room Sync</span>
            </div>
          </div>
        );

      case 'form-map':
        return (
          <div className="h-full bg-slate-950 p-3 flex flex-col justify-between font-mono text-xs space-y-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold text-center border-b border-slate-800 pb-1">
              FormMap Jetpack Compose
            </div>

            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[9px]">Business Name</span>
                <div className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-200">
                  Apex Tech Solutions
                </div>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px]">GPS Coordinates (Autofilled)</span>
                <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex justify-between">
                  <span>13.0827° N, 80.2707° E</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-cyan-500 text-slate-950 text-center font-bold text-xs">
              Preview & Submit Form
            </div>
          </div>
        );

      case 'receptionist':
        return (
          <div className="h-full bg-slate-950 p-3 flex flex-col justify-between font-mono text-xs text-center">
            <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-[10px]">
              Hospital Token & Queue Engine
            </div>

            <div className="py-4 my-auto">
              <span className="text-[10px] text-slate-400 block">CURRENT TOKEN</span>
              <span className="font-display font-extrabold text-4xl text-amber-400 block">#A-042</span>
              <span className="text-xs text-slate-300 mt-1 block">Dr. Ramesh Kumar • Room 102</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-300 flex items-center justify-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Tamil TTS Announcement Active</span>
            </div>
          </div>
        );

      case 'store-keeper':
      default:
        return (
          <div className="h-full bg-slate-950 p-3 flex flex-col justify-between font-mono text-xs">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold text-center border-b border-slate-800 pb-1">
              StoreKeeper QR & Hierarchy
            </div>

            <div className="my-auto p-4 rounded-xl bg-slate-900 border border-cyan-500/30 flex flex-col items-center justify-center text-center">
              <QrCode className="w-16 h-16 text-cyan-400 mb-2" />
              <span className="text-xs font-bold text-slate-200">SKU-90214-RACK2</span>
              <span className="text-[10px] text-slate-400">Shelf #03 → Rack #02 → Item</span>
            </div>

            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-[10px] text-cyan-300 text-center">
              CameraX Scanner Ready
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative mx-auto w-[220px] sm:w-[240px] h-[400px] sm:h-[440px] rounded-[36px] bg-slate-900 border-4 border-slate-800 shadow-2xl p-2.5 overflow-hidden flex flex-col group hover:border-cyan-500/50 transition-all duration-300">
      {/* Phone Camera Notch / Speaker Bar */}
      <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center">
        <div className="w-3 h-1.5 rounded-full bg-slate-800" />
      </div>

      {/* Screen Display Area */}
      <div className="w-full h-full rounded-[24px] overflow-hidden border border-slate-800">
        {renderContent()}
      </div>
    </div>
  );
};
