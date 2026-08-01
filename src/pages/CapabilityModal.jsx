import React from 'react';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Database,
  Code
} from 'lucide-react';

export const CapabilityModal = ({ capability, isOpen, onClose, onExploreCategory }) => {
  if (!capability) return null;

  const iconMap = {
    web: Globe,
    android: Smartphone,
    desktop: Monitor,
    ai: Cpu
  };

  const IconComponent = iconMap[capability.id] || Globe;

  // Domain details dictionary
  const domainDetails = {
    web: {
      categoryTab: 'WEB',
      headline: 'Multi-Role Web Systems & Production SaaS Platforms',
      overview: 'Specialized in engineering high-throughput, multi-role web applications built for business workflows, inventory auditing, task orchestration, and automated document generation.',
      architecturalPillars: [
        {
          title: 'Role-Based Authorization & Permission Guards',
          desc: 'Granular route and API controller permissions supporting 13+ distinct user roles with dynamic menu routing and token-based JWT authentication.',
          icon: ShieldCheck
        },
        {
          title: 'Daily Snapshot Ledger & Audit Trail Architecture',
          desc: 'High-precision database schema models designed for snapshot material tracking (Opening + Received - Issued = Closing) with zero balance drift.',
          icon: Database
        },
        {
          title: 'Server-Side Document Stream Rendering',
          desc: 'Automated fiscal-year document serial numbering with PDF receipt generation and multi-sheet styled Excel report exports.',
          icon: Zap
        },
        {
          title: 'Modular Component & REST Controller Design',
          desc: 'Clean MERN stack design featuring 25+ structured schemas, 40+ modular Express routers, and responsive Material UI / Tailwind dashboards.',
          icon: Code
        }
      ],
      featuredProjects: [
        { name: 'MGBuilders ERP', type: 'Construction Inventory ERP', badge: '13 User Roles' },
        { name: 'EasyAudit SaaS', type: 'Tax & Audit Workflow Platform', badge: '40+ App Screens' },
        { name: 'Employee Management', type: 'Task & Leave Portal', badge: 'Socket.io Realtime' },
        { name: 'EduManage Portal', type: 'School Administration Portal', badge: 'Web SaaS' }
      ]
    },
    android: {
      categoryTab: 'MOBILE',
      headline: 'Native Android Mobile Apps in Kotlin & Jetpack Compose',
      overview: 'Engineering modern Android mobile applications focusing on smooth declarative UI, real-time spatial Mapbox turn-by-turn navigation, CameraX scanning, and offline-first Room database sync.',
      architecturalPillars: [
        {
          title: 'Declarative Jetpack Compose UI & MVVM',
          desc: 'Clean reactive state management with Material 3 design tokens, shimmer loading effects, and smooth screen transitions.',
          icon: Code
        },
        {
          title: 'Offline-First Room ↔ Firestore Synchronization',
          desc: 'Local SQLite database caching with background worker threads syncing real-time updates when internet connectivity is restored.',
          icon: Database
        },
        {
          title: 'Mapbox Spatial Navigation & Geohash Radius Queries',
          desc: 'Vector map embedding, geohash spatial indexing for sub-second location proximity search, and voice turn-by-turn navigation.',
          icon: Zap
        },
        {
          title: 'Hardware Hardware & Local Speech Synthesizers',
          desc: 'CameraX barcode/QR scanner integration and native Tamil Text-to-Speech (TTS) patient queue announcements.',
          icon: ShieldCheck
        }
      ],
      featuredProjects: [
        { name: 'Business Map', type: 'Parking & Discovery App', badge: 'Mapbox SDK' },
        { name: 'FormMap', type: 'Multi-Step Business Registration', badge: 'GPS Autofill' },
        { name: 'Receptionist', type: 'Hospital Queue Orchestrator', badge: 'Tamil TTS' },
        { name: 'StoreKeeper', type: 'Supermarket QR & Inventory', badge: 'CameraX Scanner' }
      ]
    },
    desktop: {
      categoryTab: 'DESKTOP',
      headline: 'Cross-Platform Windows Desktop Software (Electron)',
      overview: 'Building local-first Windows desktop applications engineered for high performance, hardware slip printing, local SQLite databases, and offline reliability.',
      architecturalPillars: [
        {
          title: 'Local-First SQLite Engine with C++ Bindings',
          desc: 'Zero-latency local database transactions utilizing native C++ better-sqlite3 bindings inside Electron desktop containers.',
          icon: Database
        },
        {
          title: 'Hardware Dot-Matrix Printing',
          desc: 'Direct serial/LPT ESC/POS raw impact printer slip commands for rapid fuel station drive-by invoice generation.',
          icon: Zap
        },
        {
          title: 'Operational Shift & Financial Tallying',
          desc: 'Shift 1 & Shift 2 teller cash reconciliation, nozzle meter tracking, and automated Google Drive cloud database backup worker.',
          icon: ShieldCheck
        },
        {
          title: 'Native NSIS Windows Executable Builds',
          desc: 'Self-contained offline installer packaging with local file system permission access and background updates.',
          icon: Code
        }
      ],
      featuredProjects: [
        { name: 'FuelStation Billing App', type: 'Fuel Management System', badge: 'Dot-Matrix Printing' },
        { name: 'FaceHelp / CCTVHelper', type: 'Offline Face Recognition', badge: 'Local Neural AI' },
        { name: 'InventoryPro Desktop', type: 'POS Stock Manager', badge: 'Barcode Loop' }
      ]
    },
    ai: {
      categoryTab: 'AI',
      headline: 'AI Workflows, OCR Engines & Document Processing',
      overview: 'Replacing manual business operations with generative AI context assistants, multi-engine OCR document extractors, and legacy font conversion tools.',
      architecturalPillars: [
        {
          title: 'Google Gemini API Prompt Architecture',
          desc: 'Database-aware generative AI prompt engineering for context-rich Q&A document analysis and automated summarizing.',
          icon: Code
        },
        {
          title: 'Multi-Engine Computer Vision OCR',
          desc: 'Dual OCR pipeline using Python PaddleOCR for complex document layouts alongside local Tesseract.js fallback.',
          icon: Zap
        },
        {
          title: 'Legacy Bamini ↔ Unicode Font Converter Engine',
          desc: 'Custom text transformation engine with 200+ rule replacement patterns for legacy Tamil publisher encodings.',
          icon: ShieldCheck
        },
        {
          title: 'Batch Document Translation Pipelines',
          desc: 'Automated side-by-side Microsoft Word (.docx) and PDF document translation editors.',
          icon: Database
        }
      ],
      featuredProjects: [
        { name: 'GK Studio / BigWin', type: 'Tamil AI Document Studio', badge: 'Gemini + PaddleOCR' },
        { name: 'KLS System', type: 'Lottery Dataset Analytics & AI', badge: 'SQLite + Gemini AI' }
      ]
    }
  };

  const detail = domainDetails[capability.id] || domainDetails.web;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan">{capability.title}</Badge>
              <Badge variant="accent">Full Lifecycle Capabilities</Badge>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {detail.headline}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
          {detail.overview}
        </p>

        {/* Tech Stack Chips */}
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Tech Stack & Ecosystem</span>
          <p className="text-xs font-mono text-cyan-300 font-semibold">{capability.tech}</p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> Architectural & Engineering Scope
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {detail.architecturalPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-display font-bold text-slate-200">
                    <PillarIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-[11px] font-sans text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Implementations List */}
        <div className="space-y-3 pt-2 border-t border-slate-800">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Real-World Products Built in this Domain
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {detail.featuredProjects.map((p, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-display font-bold text-slate-200 block">{p.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">{p.type}</span>
                </div>
                <Badge variant="cyan">{p.badge}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          <Button
            onClick={() => {
              onClose();
              if (onExploreCategory) {
                onExploreCategory(detail.categoryTab);
              }
            }}
            variant="primary"
            size="md"
            icon={ArrowRight}
          >
            Explore {capability.title} in Showcase
          </Button>

          <Button onClick={onClose} variant="ghost" size="md">
            Close Overview
          </Button>
        </div>
      </div>
    </Modal>
  );
};
