import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Bot, Cpu, Search, CheckCircle } from 'lucide-react';

export const KlsSystemMockup = () => {
  const [selectedDigit, setSelectedDigit] = useState('Digit #3 Frequency');

  return (
    <div className="w-full rounded-2xl bg-[#080b14] border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden text-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100">KLS Analytics System & AI Engine</h4>
            <p className="text-[10px] font-mono text-slate-400">Embedded SQLite • better-sqlite3 Native Rebuild • Temporal-Decay Logic</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-[11px] text-emerald-400">
          SQL Database Synchronized
        </span>
      </div>

      {/* Analytics Visualization Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Frequency Distribution Chart Bars */}
        <div className="md:col-span-2 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-semibold">Temporal Frequency Distribution Matrix</span>
            <span className="text-emerald-400">10,000+ Record Dataset</span>
          </div>

          <div className="grid grid-cols-10 gap-1.5 items-end h-24 pt-4 border-b border-slate-800 pb-2">
            {[45, 82, 30, 95, 60, 40, 75, 88, 52, 68].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 group">
                <div
                  style={{ height: `${val}%` }}
                  className="w-full rounded-t bg-gradient-to-t from-emerald-600 to-cyan-400 group-hover:from-emerald-400 group-hover:to-cyan-300 transition-all"
                />
                <span className="font-mono text-[9px] text-slate-500">{idx}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-slate-400">
            * Weighted algorithms apply exponential temporal decay so recent historical occurrences carry higher mathematical weight.
          </p>
        </div>

        {/* Database AI Assistant Chat Preview */}
        <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-cyan-400 mb-2">
              <Bot className="w-4 h-4" /> Gemini SQL Query Assistant
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 mb-2">
              <span className="text-emerald-400">User:</span> Show top 3 recurring 4-digit combinations for 2026 Q2 dataset.
            </div>
            <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-[10px] text-cyan-300">
              <span className="text-cyan-400">AI Engine:</span> Querying SQLite table `history_records` via better-sqlite3... Found 3 clusters with &gt; 92.4% temporal correlation.
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span>OCR Ticket Scan Ready</span>
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
