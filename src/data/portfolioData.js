import Resume from "../assets/cv/Vijayakumar_K_Freelancer_CV.pdf";
export const PERSONAL_INFO = {
  name: "Vijayakumar K",
  brand: "VK.",
  title: "Full-Stack & Application Developer",
  subtitle: "Freelance Software Developer",
  location: "India",
  coreMessage: "I don't just build websites. I build complete software products.",
  heroEyebrow: "FULL-STACK • ANDROID • DESKTOP • AI",
  heroHeadline: "I build software that solves real-world problems.",
  heroAltHeadline: "Building software from idea → interface → production.",
  heroDescription: "I'm Vijayakumar K, a Full-Stack & Application Developer building production-focused web platforms, Android applications, desktop software, business systems, and AI-powered tools.",
  availability: "Available for freelance projects & opportunities",
  email: "vijayakumar.dev.tech@gmail.com", // Professional placeholder email
  github: "https://github.com/vijayakumar-kumaran",
  linkedin: "https://www.linkedin.com/in/vijayakumar-k-78ab2134b",
  resumeUrl: Resume
};

export const TECH_STRIP = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Kotlin",
  "Jetpack Compose",
  "Electron",
  "Firebase",
  "SQLite",
  "Tailwind CSS",
  "Material UI",
  "Gemini AI",
  "Python",
  "Mapbox"
];

export const CAPABILITIES = [
  {
    id: "web",
    title: "Web Applications",
    tech: "React, Vite, MUI, Tailwind, Node.js, Express, MongoDB",
    desc: "Production-ready, multi-role web portals, ERPs, and complex administrative SaaS platforms built with modular frontend architecture and robust REST APIs."
  },
  {
    id: "android",
    title: "Android Development",
    tech: "Kotlin, Jetpack Compose, Firebase, Room, Mapbox",
    desc: "Modern native Android applications featuring real-time offline sync, spatial Mapbox navigation, hardware integrations, and Tamil text-to-speech."
  },
  {
    id: "desktop",
    title: "Desktop Applications",
    tech: "Electron, React, SQLite, native packaging and local workflows",
    desc: "Cross-platform Windows desktop applications with local-first databases, dot-matrix hardware printing, native installer builds (NSIS), and background workers."
  },
  {
    id: "ai",
    title: "AI & Automation",
    tech: "Gemini AI, OCR, document processing, translation and automation",
    desc: "Intelligent workflow enhancements combining LLMs, computer vision, local OCR engines, and automated document conversion to replace repetitive tasks."
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "mg-builders",
    slug: "mg-builders",
    name: "MGBuilders ERP",
    title: "Construction Material ERP System",
    badge: "Most Complex Build",
    platform: "Web Platform",
    category: "Web Applications",
    shortDesc: "A comprehensive role-driven ERP platform managing the complete construction-material lifecycle from request and procurement through stock movement and reporting.",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS"],
    highlights: [
      "25+ application pages with complex relational views",
      "13 granular user roles with dynamic route permissions",
      "End-to-end workflow: Request → Purchase Order → Receipt → Stock → Issue → Return → Transfer",
      "Daily stock snapshot architecture for instant ledger auditing",
      "Opening / received / issued / transferred / closing stock mathematical precision",
      "Fiscal-year serial numbering & automated document generation",
      "Export capabilities to styled PDF and multi-sheet Excel reports",
      "25+ Mongoose models with 40+ modular backend route controllers"
    ],
    workflowSteps: [
      { step: "REQUEST", label: "Site Material Requisition" },
      { step: "PURCHASE ORDER", label: "Vendor PO Generation" },
      { step: "RECEIPT", label: "Goods Received Note" },
      { step: "STOCK", label: "Daily Snapshot Ledger" },
      { step: "ISSUE / TRANSFER", label: "Site Dispatch & Returns" },
      { step: "REPORTING", label: "Audit PDF & Excel Export" }
    ],
    liveUrl: "https://erpbuilders.onrender.com",
    caseStudy: {
      problem: "Construction companies struggle with fragmented inventory tracking across multiple job sites, leading to unaccounted material loss, duplicate purchasing, and manual spreadsheet delays.",
      solution: "Engineered a central 13-role web ERP with strict permission controls. Every material transaction recalculates opening, received, issued, transferred, and closing balances in a daily snapshot database model.",
      architecture: "Built on a MERN stack foundation with 25+ structured Mongoose schemas, token-based auth with dynamic route guards, and server-side PDF stream rendering for print-ready site receipts."
    }
  },
  {
    id: "easy-audit",
    slug: "easy-audit",
    name: "EasyAudit",
    title: "Audit Workflow & Document Tracking Platform",
    badge: "Enterprise SaaS",
    platform: "Web Platform",
    category: "Web Applications",
    shortDesc: "A multi-role audit management platform designed to organize client registration, tax assessments, notices, communication, documents, and complete activity history.",
    techStack: ["React", "Vite", "Material UI", "Node.js", "Express", "MongoDB"],
    highlights: [
      "40+ responsive screens designed for accounting & auditing professionals",
      "Multi-role access hierarchy: Admin / SuperUser / AuditUser",
      "Multi-step client registration wizard with verification state",
      "Tax assessment tracking and IT notice filing management",
      "Integrated in-app messaging and secure client file uploads",
      "Immutable transaction and audit trail activity history log",
      "Dashboard analytics with real-time notification polling",
      "42 RESTful API endpoints powering client data workflows"
    ],
    liveUrl: "https://easyaudit.onrender.com", // Exposes live application link button
    caseStudy: {
      problem: "Audit firms deal with hundreds of client tax notices, missing compliance deadlines, and scattered email attachments across multiple team members.",
      solution: "Created an intuitive 40-screen portal that centralizes tax assessments, notice deadlines, document attachments, and client communications into a timeline.",
      architecture: "React + Material UI frontend backed by an Express/MongoDB architecture featuring file attachment indexing, audit trail logging, and polling notifications."
    }
  },
  {
    id: "employee-management",
    slug: "employee-management",
    name: "Employee Management System",
    title: "Role-Based Task, Leave & Communication Platform",
    badge: "Full-Stack MERN SaaS",
    platform: "Web Platform",
    category: "Web Applications",
    shortDesc: "A full-stack enterprise web application providing distinct role-based interfaces for Administrators and Employees to manage workforce records, delegate tasks, process leave requests, and communicate via real-time Socket.io notifications.",
    techStack: ["React 18", "Vite 6", "Material UI (MUI 6)", "Redux Toolkit", "React Router 7", "Chart.js", "Recharts", "Socket.io", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
    highlights: [
      "Dual role-based interfaces (Administrator vs. Employee dashboard)",
      "Task delegation & progress tracking with automated status notifications",
      "Leave request management with week/month/year historical filters",
      "Real-time notifications powered by Socket.io client & REST triggers",
      "Interactive data visualization with Chart.js and Recharts analytics",
      "5 dedicated REST API routers: Employees, Users, Tasks, Leaves, and Notifications",
      "JWT authentication & bcryptjs password hashing with persisted session state",
      "Hosted production backend on Render with MongoDB Atlas database cluster"
    ],
    liveUrl: "https://employeemanagement-qni6.onrender.com",
    caseStudy: {
      problem: "Organizations face difficulty coordinating employee tasks, tracking leave approvals, and maintaining transparent communication across separate departments without an integrated portal.",
      solution: "Engineered a role-based MERN web application with dedicated Admin and Employee views, real-time notification socket updates, and task/leave management dashboards.",
      architecture: "React 18 + MUI 6 + Redux Toolkit frontend connected to an Express/MongoDB REST backend on Render featuring 5 dedicated routers (Employee, User, Task, Leave, Notification) and JWT auth."
    }
  },

  {
    id: "fuel-station",
    slug: "fuel-station",
    name: "FuelStationBillingApp",
    title: "Fuel Station Billing & Management System",
    badge: "Desktop Business Software",
    platform: "Windows Desktop",
    category: "Desktop Applications",
    shortDesc: "Desktop billing and operations software designed around real fuel-station workflows.",
    techStack: ["Electron", "React", "Node.js", "Express", "MongoDB", "NSIS"],
    highlights: [
      "Regular & GST invoice generation with dynamic tax split (CGST / SGST / IGST)",
      "Pump nozzle opening & closing meter reading tracking per nozzle",
      "Shift 1 and Shift 2 operational workflow and teller reconciliation",
      "Automated Daybook accounting with Cash, Debit, and Credit tracking",
      "Comprehensive monthly GST summary reports for tax filing",
      "Hardware integration for Dot-Matrix impact slip printers",
      "Automated Google Drive cloud database backup utility",
      "Financial-year rollover management & offline NSIS desktop executable"
    ],
    caseStudy: {
      problem: "Fuel station managers need fast invoice printing for drive-by vehicles, shift-wise nozzle meter reconciliation, and reliable offline operation without relying on constant internet.",
      solution: "Packaged a lightweight local Electron application with custom dot-matrix printer commands, dual-shift teller cash tallying, and automatic background cloud backups.",
      architecture: "React interface inside Electron container communicating with local MongoDB/Express services, optimized for rapid keyboard shortcuts during peak billing hours."
    }
  },
  {
    id: "facehelp",
    slug: "facehelp",
    name: "FaceHelp / CCTVHelper",
    title: "Offline CCTV Face Recognition System",
    badge: "AI & Surveillance",
    platform: "Windows Desktop",
    category: "Desktop Applications",
    shortDesc: "Privacy-oriented desktop software for searching and monitoring CCTV footage using local face-recognition processing.",
    techStack: ["Electron", "React", "face-api.js", "HLS Video", "HTML5 Canvas"],
    highlights: [
      "100% local/offline video stream scanning with privacy enforcement",
      "Real-time facial detection powered by face-api.js web neural networks",
      "Target Search mode to locate specific faces across continuous footage",
      "Free Roam clustering to automatically group unique faces detected",
      "Interactive video match timeline for instant frame scrubbing",
      "Live CCTV stream parsing via HLS and webcam integration",
      "Classification system for Suspects, Employees, VIPs, and Blacklists",
      "Configurable AI match confidence thresholds and local canvas bounding boxes"
    ],
    caseStudy: {
      problem: "Security personnel manually review hours of recorded CCTV footage to find target individuals, wasting time while facing privacy risks from cloud video processing.",
      solution: "Engineered an offline Electron desktop tool that scans live or recorded HLS feeds locally, drawing real-time bounding boxes around detected individuals.",
      architecture: "Combines face-api.js neural networks running in Electron GPU acceleration with custom HTML5 Canvas overlays and timestamped timeline markers."
    }
  },

  {
    id: "gk-studio",
    slug: "gk-studio",
    name: "GK Studio / BigWin",
    title: "Tamil Document Processing & AI Studio",
    badge: "AI & Document Studio",
    platform: "Windows Desktop",
    category: "AI / Automation",
    shortDesc: "Desktop productivity software combining Tamil encoding conversion, translation, OCR and generative AI document workflows.",
    techStack: ["Electron", "React", "Gemini AI", "Tesseract.js", "PaddleOCR", "Python"],
    highlights: [
      "Legacy Bamini ↔ Unicode text encoding conversion engine with 200+ replacement rules",
      "High-accuracy English → Tamil & Tamil → English machine translation engine",
      "Multi-engine OCR pipeline using Tesseract.js and Python PaddleOCR integration",
      "Generative AI document enhancement powered by Google Gemini API",
      "Interactive Q&A document assistant for contextual content analysis",
      "Batch document translation supporting Microsoft Word (.docx) and PDF files",
      "Integrated productivity Command Palette for quick multi-tool execution",
      "Side-by-side document comparison editor with live preview"
    ],
    caseStudy: {
      problem: "Regional Tamil publishers and offices struggle with old legacy font encodings (Bamini) that break on modern systems, combined with manual translation and physical document scanning.",
      solution: "Developed an all-in-one desktop studio uniting legacy font rule transformations, AI text refinement, multi-language OCR, and batch file export.",
      architecture: "Electron app executing Python subprocesses for PaddleOCR engine alongside node-based Tesseract.js fallback and Gemini AI REST API calls."
    }
  },
  {
    id: "kls-system",
    slug: "kls-system",
    name: "KLS System",
    title: "KeralaLotteryHelper Analytics & AI",
    badge: "Data Analytics",
    platform: "Windows Desktop",
    category: "AI / Automation",
    shortDesc: "Data analytics & software engineering platform featuring historical trend frequency engines, OCR ticket scanning, and a database-aware AI assistant.",
    techStack: ["Electron", "React", "SQLite", "better-sqlite3", "Gemini AI"],
    highlights: [
      "Engineered purely as an analytical & software engineering dataset study",
      "Embedded SQLite database with native better-sqlite3 Electron bindings",
      "External API synchronization & automated database upsert pipeline",
      "Frequency distribution engines and historical pattern metrics",
      "Weighted suggestion algorithms incorporating temporal-decay logic",
      "OCR ticket scanner to extract number combinations from uploaded images",
      "Database-aware Gemini AI assistant with direct SQL query context",
      "Bilingual English/Tamil interface with light/dark theme customization"
    ],
    caseStudy: {
      problem: "Analyzing historical statistical datasets requires efficient local database indexing, fast queries, and intuitive pattern visualization without complex setup.",
      solution: "Built a high-performance desktop analytics application using native SQLite C++ bindings, interactive charts, and an AI chat interface connected to dataset statistics.",
      architecture: "Electron app with custom native-module rebuilds for `better-sqlite3`, combined with structured SQL querying and Gemini API prompt engineering."
    }
  }
];

export const ANDROID_PROJECTS = [
  {
    id: "business-map",
    name: "Business Map",
    title: "Parking / Business Discovery & Navigation",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Mapbox Maps", "Firebase Firestore", "Room"],
    highlights: [
      "MVVM clean architecture with Jetpack Compose declarative UI",
      "Mapbox SDK integration for custom vector maps & turn-by-turn voice navigation",
      "Firestore ↔ Room offline-first database synchronization pipeline",
      "Geohash geo-querying for high-speed spatial proximity search",
      "Place autocomplete, voice search, and dynamic distance radius filtering"
    ],
    mockupType: "map"
  },
  {
    id: "form-map",
    name: "FormMap",
    title: "Multi-Step Business Registration",
    tech: ["Kotlin", "Jetpack Compose", "Firebase Firestore", "GPS Location"],
    highlights: [
      "Multi-step registration workflow with GPS coordinate autofill",
      "Dynamic custom form fields with real-time validation feedback",
      "Interactive preview & submit sequence with shimmer loading states",
      "Searchable business directory with instant filter & persistent form state"
    ],
    mockupType: "form"
  },
  {
    id: "receptionist",
    name: "Receptionist",
    title: "Hospital Token / Queue Management",
    tech: ["Kotlin", "Jetpack Compose", "Firebase Realtime DB", "Tamil TTS"],
    highlights: [
      "Real-time daily token generation and FIFO queue orchestration",
      "Tamil Text-to-Speech (TTS) integration for automated patient announcements",
      "Returning-patient lookup and missed-call queue position reordering",
      "Cross-date historical patient search with instant status updates"
    ],
    mockupType: "queue"
  },
  {
    id: "store-keeper",
    name: "StoreKeeper",
    title: "Supermarket Inventory & QR System",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "CameraX / QR"],
    highlights: [
      "High-speed QR code generation & scanning using CameraX API",
      "Hierarchical storage model: Shelf → Rack → Item organizational structure",
      "On-device image compression prior to cloud bucket storage",
      "Bilingual English/Tamil user settings and session access security"
    ],
    mockupType: "qr"
  }
];

export const ALL_PROJECTS = [
  ...FEATURED_PROJECTS,
  {
    id: "school-portal",
    slug: "school-portal",
    name: "EduManage Portal",
    title: "School Administration & Student Management",
    badge: "Web Portal",
    platform: "Web Platform",
    category: "Web Applications",
    shortDesc: "Web portal for student records, attendance tracking, fee payments, and academic report generation.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Student registration and grade records management",
      "Attendance reporting with monthly summaries",
      "Fee payment receipt generation and ledger tracking"
    ]
  },
  {
    id: "inventory-pro",
    slug: "inventory-pro",
    name: "InventoryPro Desktop",
    title: "Retail Point of Sale & Stock Manager",
    badge: "Desktop Software",
    platform: "Windows Desktop",
    category: "Desktop Applications",
    shortDesc: "Offline retail stock management software with barcode scanning and receipt printer support.",
    techStack: ["Electron", "React", "SQLite", "Tailwind CSS"],
    highlights: [
      "Fast barcode barcode scanner input loop",
      "Local SQLite transactions for zero-latency checkout",
      "Low stock alerts and purchase order generation"
    ]
  }
];

export const EXPERTISE_MATRIX = [
  {
    category: "Frontend",
    items: ["React", "Vite", "JavaScript", "Material UI", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Recharts"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose", "JWT Auth", "Session Auth", "Role Permissions"]
  },
  {
    category: "Android",
    items: ["Kotlin", "Jetpack Compose", "Material 3", "Room Database", "Firebase", "Mapbox Maps", "CameraX", "Tamil TTS"]
  },
  {
    category: "Desktop",
    items: ["Electron", "SQLite", "IPC Communications", "NSIS Packaging", "Native Modules", "Dot-Matrix Printing", "Local-First"]
  },
  {
    category: "AI & Automation",
    items: ["Gemini AI", "OCR", "Tesseract.js", "PaddleOCR", "Python Subprocess", "Document Automation", "Translation Workflows"]
  },
  {
    category: "Additional Engineering",
    items: ["RBAC Access Control", "Dynamic Permissions", "PDF Generation", "Excel Exports", "Google Drive API", "Realtime DB", "Mapbox Nav"]
  }
];

export const PROCESS_TIMELINE = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into business requirements, user roles, operational bottlenecks, and technical constraints."
  },
  {
    step: "02",
    title: "Architect",
    description: "Design clean data schemas, application routing permissions, state management, and UI component hierarchy."
  },
  {
    step: "03",
    title: "Build",
    description: "Develop robust frontend interfaces, scalable backend APIs, database models, and platform-native logic."
  },
  {
    step: "04",
    title: "Refine",
    description: "Rigorous testing across roles, mobile responsiveness polish, keyboard navigation, and performance optimization."
  },
  {
    step: "05",
    title: "Deliver",
    description: "Deploy web platforms to cloud servers or package desktop NSIS installers and Android APK builds."
  }
];

export const PROOF_METRICS = [
  { value: "40+", label: "Screens in a Single Web Platform", detail: "Built for complex multi-role audit management in EasyAudit" },
  { value: "13", label: "User Roles Handled", detail: "Dynamic route permissions & access control in MGBuilders ERP" },
  { value: "40+", label: "Backend Route Controllers", detail: "Modular Express route architecture in flagship web builds" },
  { value: "3", label: "Application Platforms", detail: "Native engineering expertise across Web, Android, and Desktop" }
];

export const SERVICES = [
  {
    id: "web-apps",
    title: "Custom Web Applications",
    desc: "Admin dashboards, business portals, multi-role workflow platforms, and complete management systems engineered with React, Node.js, and MongoDB.",
    icon: "Globe"
  },
  {
    id: "android-apps",
    title: "Android Applications",
    desc: "Modern native Android applications built using Kotlin and Jetpack Compose, featuring Mapbox spatial navigation, Room offline sync, and Firebase.",
    icon: "Smartphone"
  },
  {
    id: "desktop-software",
    title: "Desktop Software",
    desc: "Cross-platform Windows desktop software using Electron and React, designed for offline hardware printing, local SQLite databases, and business billing.",
    icon: "Monitor"
  },
  {
    id: "automation-ai",
    title: "Business Automation & AI",
    desc: "Replace repetitive manual operations with automated document parsing, OCR pipelines, Gemini AI integration, font encoding converters, and translation engines.",
    icon: "Cpu"
  },
  {
    id: "system-improvements",
    title: "Existing System Improvements",
    desc: "Modernize outdated user interfaces, add new operational features, fix performance bottlenecks, restructure databases, and upgrade application workflows.",
    icon: "Wrench"
  }
];
