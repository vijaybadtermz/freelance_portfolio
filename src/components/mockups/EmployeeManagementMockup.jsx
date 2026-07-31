import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckSquare, Calendar, Bell, Shield, User, BarChart2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const EmployeeManagementMockup = () => {
  const [activeRole, setActiveRole] = useState('admin');
  const [activeTab, setActiveTab] = useState('tasks');

  const tasks = [
    { id: 'TSK-104', title: 'Database Index & Atlas Optimization', assignee: 'Vijayakumar K', status: 'Completed', priority: 'High', due: '2026-07-30' },
    { id: 'TSK-108', title: 'Deploy Socket.io Real-Time Server', assignee: 'Ananya Sharma', status: 'In Progress', priority: 'Urgent', due: '2026-08-02' },
    { id: 'TSK-112', title: 'React 18 & MUI 6 Theme Upgrade', assignee: 'Rahul Verma', status: 'Pending', priority: 'Normal', date: '2026-08-05' }
  ];

  const leaves = [
    { id: 'LV-402', employee: 'Vijayakumar K', type: 'Casual Leave', dates: 'Aug 10 - Aug 12', status: 'Approved', admin: 'SuperAdmin' },
    { id: 'LV-405', employee: 'Priya Sundaram', type: 'Medical Leave', dates: 'Aug 04 - Aug 05', status: 'Pending Approval', admin: 'Unassigned' }
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0b0c1b] border border-indigo-500/30 p-4 sm:p-6 shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden text-slate-200">
      {/* Top Header & Role Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-indigo-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-slate-100">Employee Management System</h4>
            <p className="text-[11px] font-mono text-slate-400">Render Hosted • MERN + Redux + Socket.io</p>
          </div>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setActiveRole('admin')}
            className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              activeRole === 'admin'
                ? 'bg-indigo-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Admin View
          </button>
          <button
            onClick={() => setActiveRole('employee')}
            className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              activeRole === 'employee'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" /> Employee View
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 text-[10px] block">TOTAL EMPLOYEES</span>
          <span className="text-slate-100 font-bold text-base">128 Active</span>
        </div>
        <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
          <span className="text-indigo-300 text-[10px] block">PENDING TASKS</span>
          <span className="text-indigo-200 font-bold text-base">14 Assigned</span>
        </div>
        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
          <span className="text-cyan-300 text-[10px] block">LEAVE REQUESTS</span>
          <span className="text-cyan-200 font-bold text-base">5 Pending</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
          <span className="text-emerald-300 text-[10px] block">NOTIFICATIONS</span>
          <span className="text-emerald-200 font-bold text-base flex items-center gap-1">
            <Bell className="w-3.5 h-3.5 animate-pulse" /> 3 Unread
          </span>
        </div>
      </div>

      {/* Main Feature Tabs */}
      <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab('tasks')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
            activeTab === 'tasks' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <CheckSquare className="w-3.5 h-3.5" /> Task Delegation
        </button>
        <button
          onClick={() => setActiveTab('leaves')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
            activeTab === 'leaves' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" /> Leave Management
        </button>
      </div>

      {/* Task & Leave Content Area */}
      {activeTab === 'tasks' ? (
        <div className="space-y-2 font-mono text-xs">
          {tasks.map((t) => (
            <div key={t.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">{t.id}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${
                    t.status === 'Completed' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300' :
                    t.status === 'In Progress' ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300' :
                    'bg-slate-800 border-slate-700 text-slate-300'
                  }`}>
                    {t.status}
                  </span>
                </div>
                <h5 className="font-sans font-semibold text-slate-100">{t.title}</h5>
                <p className="text-[11px] text-slate-400">Assigned To: <span className="text-slate-200">{t.assignee}</span></p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Due: {t.due}</span>
                <span className="text-[10px] text-indigo-400">Socket.io Triggered</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2 font-mono text-xs">
          {leaves.map((l) => (
            <div key={l.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-cyan-400 font-bold">{l.id} • {l.type}</span>
                <h5 className="font-sans font-semibold text-slate-100">{l.employee}</h5>
                <span className="text-[11px] text-slate-400">{l.dates}</span>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs border ${
                l.status === 'Approved' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300' : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
              }`}>
                {l.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" /> Render Cloud Backend Active
        </span>
        <span className="text-slate-500">5 REST Routers • JWT Session Persisted</span>
      </div>
    </div>
  );
};
