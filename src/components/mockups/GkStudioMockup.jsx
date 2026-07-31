import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, Sparkles, FileText, ArrowRightLeft, Cpu, Terminal, Copy } from 'lucide-react';

export const GkStudioMockup = () => {
  const [direction, setDirection] = useState('Bamini -> Unicode');
  const [legacyText, setLegacyText] = useState('jkq;fs; mhptpk;G');
  const [convertedText, setConvertedText] = useState('உங்கள் அறிவிப்பு');

  return (
    <div className="w-full rounded-2xl bg-[#0a0d18] border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden text-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Languages className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100">GK Studio / BigWin Tamil AI & OCR Studio</h4>
            <p className="text-[10px] font-mono text-slate-400">200+ Replacement Rules Engine • Gemini AI & PaddleOCR</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/30 font-mono text-[11px] text-amber-300">
          Command Palette [Ctrl + K]
        </span>
      </div>

      {/* Converter Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Legacy Input Window */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Legacy Font Encoding (Bamini)</span>
            <button
              onClick={() => {
                setDirection(direction === 'Bamini -> Unicode' ? 'Unicode -> Bamini' : 'Bamini -> Unicode');
              }}
              className="text-amber-400 flex items-center gap-1 hover:underline"
            >
              <ArrowRightLeft className="w-3 h-3" /> Swap Direction
            </button>
          </div>
          <textarea
            rows={3}
            value={legacyText}
            onChange={(e) => setLegacyText(e.target.value)}
            className="w-full bg-slate-950 p-2.5 rounded-lg font-mono text-xs text-amber-300 border border-slate-800 outline-none focus:border-amber-500"
          />
        </div>

        {/* Converted Output Window */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-400 font-bold">Standard Tamil Unicode Output</span>
            <span className="text-[10px] text-slate-500">200+ Rules Processed</span>
          </div>
          <div className="w-full bg-slate-950 p-2.5 rounded-lg font-sans text-sm text-slate-100 border border-slate-800 min-h-[76px] flex items-center">
            {convertedText}
          </div>
        </div>
      </div>

      {/* AI & OCR Document Processing Pipeline */}
      <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Gemini AI Q&A Assistant Integrated</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span>• Tesseract.js OCR</span>
          <span>• Python PaddleOCR</span>
          <span>• DOCX & PDF Export</span>
        </div>
      </div>
    </div>
  );
};
