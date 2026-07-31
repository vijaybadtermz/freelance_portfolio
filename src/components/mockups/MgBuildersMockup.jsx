import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, FileSpreadsheet, ArrowRight, ShieldCheck, Database, CheckCircle2, RefreshCw } from 'lucide-react';

export const MgBuildersMockup = () => {
  const [activeStep, setActiveStep] = useState(3); // Default Stock
  const [receivedQty, setReceivedQty] = useState(500);
  const [issuedQty, setIssuedQty] = useState(180);
  const openingStock = 250;
  const closingStock = openingStock + Number(receivedQty) - Number(issuedQty);

  const workflow = [
    { id: 1, label: 'REQUISITION', role: 'Site Manager', icon: '📝' },
    { id: 2, label: 'PURCHASE ORDER', role: 'Procurement Officer', icon: '📑' },
    { id: 3, label: 'RECEIPT / GRN', role: 'Store Keeper', icon: '📦' },
    { id: 4, label: 'STOCK LEDGER', role: 'Inventory Controller', icon: '📊' },
    { id: 5, label: 'SITE ISSUE / TRANSFER', role: 'Site Supervisor', icon: '🚚' },
    { id: 6, label: 'AUDIT REPORT', role: 'Finance / Admin', icon: '📑' }
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden text-slate-200">
      {/* Top Application Window Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400">MGBuilders ERP v2.4 • 13 Active Roles Guard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
            Fiscal Serial: MGB-2026-0842
          </span>
        </div>
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Lifecycle Workflow Visualizer</span>
          <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Real-time Mongoose Ledger
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {workflow.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveStep(item.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                activeStep === item.id
                  ? 'bg-cyan-950/50 border-cyan-400/80 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="text-lg mb-1">{item.icon}</div>
              <div className="font-mono text-[10px] text-cyan-400 font-bold">0{item.id}. {item.label}</div>
              <div className="text-[11px] font-sans font-medium text-slate-300 truncate mt-0.5">{item.role}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Stock Snapshot Ledger Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display font-semibold text-sm text-slate-100 flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              Daily Stock Snapshot Calculation (TMT Steel Bars - 12mm)
            </h4>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
              Audit Verified
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Opening Stock</span>
              <span className="text-slate-200 font-bold text-sm">{openingStock} MT</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
              <span className="text-emerald-400 block text-[10px]">Received (+)</span>
              <input
                type="number"
                value={receivedQty}
                onChange={(e) => setReceivedQty(e.target.value)}
                className="w-full bg-transparent text-emerald-300 font-bold text-sm outline-none border-b border-emerald-500/40"
              />
            </div>
            <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30">
              <span className="text-rose-400 block text-[10px]">Issued / Transfer (-)</span>
              <input
                type="number"
                value={issuedQty}
                onChange={(e) => setIssuedQty(e.target.value)}
                className="w-full bg-transparent text-rose-300 font-bold text-sm outline-none border-b border-rose-500/40"
              />
            </div>
            <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40">
              <span className="text-cyan-400 block text-[10px]">Closing Stock (=)</span>
              <span className="text-cyan-300 font-bold text-sm">{closingStock} MT</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 25+ Mongoose Schemas
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Dynamic Per-User Overrides
            </span>
            <span className="flex items-center gap-1 text-indigo-400">
              <FileSpreadsheet className="w-3.5 h-3.5" /> Auto PDF/Excel Export
            </span>
          </div>
        </div>

        {/* Role Matrix Indicator */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase">Role Permission Scope</span>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Super Admin</span> <span className="text-emerald-400 text-[10px]">FULL (25 Pages)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Store Keeper</span> <span className="text-cyan-400 text-[10px]">GRN & Issue Only</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Site Auditor</span> <span className="text-indigo-400 text-[10px]">Read-Only Reports</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-cyan-400">
            <span>40+ API Routes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
