import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, MessageSquare, Bell, UserCheck, Clock, Download, Search } from 'lucide-react';

export const EasyAuditMockup = () => {
  const [activeTab, setActiveTab] = useState('notices');

  const notices = [
    { id: 'NT-2026-091', client: 'Apex Technologies Pvt Ltd', type: 'IT Sec 143(1) Notice', status: 'In Review', priority: 'High', date: '2026-07-28' },
    { id: 'NT-2026-088', client: 'Vanguard Retail Systems', type: 'GST Audit Assessment', status: 'Completed', priority: 'Normal', date: '2026-07-25' },
    { id: 'NT-2026-082', client: 'Horizon Builders Ltd', type: 'Tax Deduction Audit', status: 'Pending Upload', priority: 'Urgent', date: '2026-07-22' }
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090e1a] border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden text-slate-200">
      {/* Top Header Navigation Mockup */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-slate-100">EasyAudit Enterprise Hub</h4>
            <p className="text-[11px] font-mono text-slate-400">40+ Active Screens • Role: Audit SuperUser</p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" /> 3 Unread Notices
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/40 text-indigo-300">
            42 API Endpoints Active
          </span>
        </div>
      </div>

      {/* Audit Navigation Tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
        {['notices', 'assessments', 'messages', 'history'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
              activeTab === tab
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Area - Notice Tracker Grid */}
      <div className="space-y-3">
        {notices.map((n) => (
          <div key={n.id} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-indigo-400">{n.id}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  n.priority === 'Urgent' ? 'bg-rose-950/60 border-rose-500/40 text-rose-300' :
                  n.priority === 'High' ? 'bg-amber-950/60 border-amber-500/40 text-amber-300' :
                  'bg-slate-800 border-slate-700 text-slate-300'
                }`}>
                  {n.priority}
                </span>
              </div>
              <h5 className="font-sans text-sm font-semibold text-slate-100">{n.client}</h5>
              <p className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-indigo-400" /> {n.type}
              </p>
            </div>

            <div className="flex items-center gap-3 justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-400 block">{n.date}</span>
                <span className="text-xs font-mono text-emerald-400 font-medium">{n.status}</span>
              </div>
              <button className="p-2 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Audit Highlights Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1"><UserCheck className="w-3.5 h-3.5 text-indigo-400" /> Multi-Step Client Onboarding</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" /> Real-time Notification Polling</span>
        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> In-App Auditor Messaging</span>
      </div>
    </div>
  );
};
