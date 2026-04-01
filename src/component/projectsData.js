export const projects = [


{
  id: "wristly",
  name: "Wristly",
  desc: "Premium watch e-commerce app built with React.js and TailwindCSS.",
  longDesc: "A production-grade premium watch e-commerce application built with React, showcasing modern frontend practices, state management, and performance optimization.",
  tech: ["React.js", "JavaScript (ES6+)", "Redux", "TailwindCSS", "Vite", "React Router DOM", "Local Storage","Vite PWA","Lucid-react", "react-toastify","swiper-slider","Skeleton-loading", "Vercel"],
  features: [
    "Filter, Search, and Sort products (combined logic)",
    "Product detail page with image gallery",
    "Cart with quantity management",
    "Wishlist toggle (single action)",
    "Authentication (localStorage-based)",
    "Checkout flow with order confirmation",
    "Skeleton loading UI",
    "Theme Toggler",
    "Prop Types",
    "Error Boundary",
    "PWA support",
    "React Lazy + Suspense",
  ],
  appFlow: [
    { text: "Browse Products → Filter / Search / Sort" },
    { text: "↓ Add to Wishlist (saves across refresh)", arrow: true },
    { text: "Add to Cart → quantity selected" },
    { text: "↓ Proceed to Checkout", arrow: true },
    { text: "Not logged in → Login Wall → Login / Signup" },
    { text: "↓ Fill Delivery Address + Select Payment", arrow: true },
    { text: "placeOrder() → Cart Clears → Order Confirmed ✓" },
  ],
  routes: [
    { icon: "🏠", label: "Home" },
    { icon: "🔍", label: "Browse Products" },
    { icon: "🛍️", label: "Product Details" },
    { icon: "❤️", label: "Wishlist" },
    { icon: "🛒", label: "Cart" },
    { icon: "💳", label: "Checkout" },
    { icon: "✅", label: "Order Confirm" },
    { icon: "👤", label: "My Account" },
    { icon: "🔐", label: "Login / Signup" },
    { icon: "ℹ️", label: "About" },
    { icon: "❓", label: "FAQ" },
    { icon: "📞", label: "Contact" },
    { icon: "⚠️", label: "404 Page" },
  ],
  techStack: [
    { name: "React 18", desc: "Hooks, lazy, Suspense for code splitting" },
    { name: "Redux Toolkit", desc: "createSlice, createAsyncThunk, store.subscribe for persistence" },
    { name: "React Router v6", desc: "Client-side routing with protected routes" },
    { name: "TailwindCSS", desc: "Utility-first styling with custom CSS variables" },
    { name: "Vite", desc: "Fast build tool and dev server" },
    { name: "localStorage", desc: "Cart, wishlist and auth persistence across refresh" },
    { name: "lucide-react", desc: "Icons — Heart, Cart, User, Menu, Trash etc." },
    { name: "react-toastify", desc: "Toast notifications for user actions" },
    { name: "swiper", desc: "Hero slider and related products carousel" },
    { name: "react-loading-skeleton", desc: "Skeleton loading UI for better UX" },
    {name:"Vite PWA" , desc:"PWA installation"}
  ],
  highlights: [
    { label: "Dark Mode", desc: "CSS variables + .dark on <html>, persists via localStorage, no flash on load" },
    { label: "PWA Support", desc: "Installable on mobile and desktop, works offline via Service Worker" },
    { label: "Redux Architecture", desc: "Centralized state, no prop drilling, store.subscribe for localStorage sync" },
    { label: "Performance", desc: "React.lazy + Suspense, React.memo, useCallback, useMemo to minimize re-renders" },
    { label: "PropTypes", desc: "Runtime prop validation on all components, catches bugs during development" },
    { label: "Error Boundary", desc: "Prevents full app crash, shows fallback UI on component errors" },
    {label:"Sliders", desc:"swiper slider enhanced UI/UX"},
    {label:"Skeleton-Loading" , desc:"enhanced UI/UX"},
  
    { label: "Auth Flow", desc: "Signup / Login stored in localStorage, logout clears session only" },
    {label:"Localstorage" , desc:"data remains after refresh"},
    {label:"toast", desc:"Toast alerts using Toastify"},
      { label: "Responsive Design", desc: "320px to desktop, Tailwind + custom CSS, mobile-first layout" },
  ],
  errorFlows: [
    {
      title: "Invalid product ID",
      steps: [
        { text: "User visits /ProductDetails/999" },
        { text: "product = undefined", type: "trigger" },
        { text: "if (!product) check fires" },
        { text: "'Product not found' UI shown", type: "ok" },
      ],
    },
    {
      title: "Undefined specs crash",
      steps: [
        { text: "product.specs is undefined" },
        { text: "Object.entries(undefined)", type: "trigger" },
        { text: "Error Boundary catches it" },
        { text: "Fallback UI shown", type: "ok" },
      ],
    },
    {
      title: "Unknown route",
      steps: [
        { text: "User visits /randompage" },
        { text: "No matching route", type: "trigger" },
        { text: "Wildcard (*) catches it" },
        { text: "404 Page shown", type: "ok" },
      ],
    },
  ],
  github: "https://github.com/mayurpanchal-12/Wristly_React-Project",
  live: "https://wristy-react-project.vercel.app/",
  status: "Completed",
},
    {
      id: "Finance Tracker",
      name: "Advanced Finance Tracker",
      desc: " helps users manage Transactions , future transactions, analytics, and financial news",
      longDesc:"A full-featured Finance Tracker web application that helps users manage income, expenses, future transactions, analytics, and financial news — all in one place.The app supports voice-to-text input, search functionality , advanced filtering, interactive charts, and CSV/PDF exports with real-time balance updates.",
      tech: [
  "React",
  "Context API",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Browser Speech API",
  "Chart library",
  "CSV / PDF export utilities",
  "Finance News API",
  "Localstorage"
],
      features: ["Transaction Management , Filter & Search , Download-Csv & PDF" , "Schedule Transactions " , "Charts & Analytics" , "Summary" , "notes" , "News"],
     
       appFlow: [
  { text: "Open App → View Transaction Tracker (Home)" },
  { text: "↓ Add / Edit / Delete Transactions", arrow: true },
  { text: "Set future-dated transaction → Scheduled Transactions table" },
  { text: "↓ On scheduled date → auto-moves to main Tracker", arrow: true },
  { text: "Filter by Month / Type / Category / Search" },
  { text: "↓ View filtered results in table + Summary", arrow: true },
  { text: "Download data → CSV or PDF via DownloadDropdown" },
  { text: "↓ View Charts → Line chart + Income/Expense pie charts", arrow: true },
  { text: "View Notes → all transactions with notes listed" },
  { text: "↓ View News → Finance headlines from Alpha Vantage API", arrow: true },
  { text: "News loader fails → NewsErrorPage shown ✓" },
],

routes: [
  { icon: "📋", label: "Tracker (Home)" },
  { icon: "➕", label: "Set Transaction" },
  { icon: "📊", label: "Charts" },
  { icon: "📝", label: "Notes" },
  { icon: "📰", label: "News" },
  { icon: "⚠️", label: "News Error" },
  { icon: "❓", label: "404 Wildcard" },
],

techStack: [
  { name: "React 18", desc: "Hooks, lazy, Suspense for code-split page loading" },
  { name: "React Router v6", desc: "createBrowserRouter, loader, errorElement, wildcard route" },
  { name: "Context API + useReducer", desc: "TransactionContext — centralized state, no prop drilling" },
  { name: "TailwindCSS v4", desc: "Utility-first styling with custom CSS variables and @layer" },
  { name: "Chart.js", desc: "Dynamic line + pie charts for income/expense analysis" },
  { name: "Alpha Vantage API", desc: "Live finance news fetched via route loader" },
  { name: "localStorage", desc: "Transactions, filters and balance persisted across refresh" },
  {name:"browser speech Api " , desc:"voice input"},
  { name: "Inter (Google Fonts)", desc: "Primary typeface across the entire UI" },
  { name: "Vite", desc: "Fast build tool with import.meta.env for API key" },
],

highlights: [
  { label: "Scheduled Transactions", desc: "Future-dated entries sit in a separate table and auto-promote to main tracker on their date" },
  { label: "Context + useReducer", desc: "Two reducers (transactions + filters) in one provider — clean dispatch pattern, no Redux needed" },
  { label: "Code Splitting", desc: "All pages are React.lazy with Suspense + PageLoader fallback — only loads what's needed" },
  { label: "Error Boundary", desc: "Wraps complex pages — prevents full app crash, shows fallback UI on render errors" },
    { label: "CSV + PDF Export", desc: "DownloadDropdown lets users export transaction data in two formats" },
      { label: "Charts", desc: "analytics with Overall balance - Line chart & Income- Expense with Pie chart" },
  { label: "Route-level Error Handling", desc: "News route uses errorElement: <NewsErrorPage /> for loader failures separate from ErrorBoundary" },
  {label:"Locatstorage" , desc:"Localstorage support"},
  { label: "Speech Input", desc: "useSpeechInput hook enables voice-to-text in the transaction form" },
  { label: "Responsive Design", desc: "Mobile-first layout using Tailwind, max-w-[1200px] centered root, flex-col gap structure" },
  { label: "Running Balance", desc: "Each filtered transaction gets a live-computed balance column via useMemo" },
],

errorFlows: [
  {
    title: "News API fails",
    steps: [
      { text: "User navigates to /news" },
      { text: "newsLoader() throws", type: "trigger" },
      { text: "React Router catches loader error" },
      { text: "errorElement: <NewsErrorPage /> shown", type: "ok" },
    ],
  },
  {
    title: "Page render crash",
    steps: [
      { text: "ChartPage / NotesPage / etc renders" },
      { text: "Unexpected JS error thrown", type: "trigger" },
      { text: "ErrorBoundary catches it" },
      { text: "Fallback UI + Try Again shown", type: "ok" },
    ],
  },
  {
    title: "Unknown route",
    steps: [
      { text: "User visits /randompage" },
      { text: "No matching route found", type: "trigger" },
      { text: "Wildcard (*) catches it" },
      { text: "404 Page shown", type: "ok" },
    ],
  },
  {
    title: "No transactions with notes",
    steps: [
      { text: "User opens /notes" },
      { text: "transactionsWithNotes.length === 0", type: "trigger" },
      { text: "Empty state check fires" },
      { text: "'No notes yet' message shown", type: "ok" },
    ],
  },
],
      github: "https://github.com/mayurpanchal-12/FinanceTracker_Reactjs.git",
      live: "https://finance-tracker-reactjs-sandy.vercel.app/",
      status: "Completed",
      
    },
    {
      id: "Advance Todo Manager",
      name: "Advanced Todo Manager",
      desc: "Production-grade React task manager with sidebar navigation, Kanban board, analytics dashboard, calendar view, drag-and-drop, voice input, and full WCAG 2.x accessibility.",
      // longDesc: "A feature-rich React SPA for task management, built with a collapsible sidebar (focus mode, Notion-style projects, pinned tasks, tag collections, analytics). Supports full CRUD with priority, categories, file attachments, deadlines, subtasks, and markdown notes. Includes a Kanban board with drag-and-drop (Todo → In Progress → Done), a GitHub-style activity heatmap, per-category completion analytics, a calendar view for due dates, and a creative activity history log (added, edited, deleted). Additional features: voice input via Web Speech API, debounced search with inline highlight, CSV/PDF export, dark/light theme persistence via localStorage, and an Error Boundary for render crash recovery. The entire UI is built to WCAG 2.x standards with a full design token system, mobile-first responsive layout, and purpose-driven animations.",
     longDesc: "Feature-rich React SPA for task management with Notion-style UI, Kanban board (drag-and-drop), analytics, calendar, and activity tracking. Supports full CRUD with priorities, tags, deadlines, subtasks, attachments, and markdown notes. Includes voice input, smart search, CSV/PDF export, theme persistence, and WCAG-compliant responsive design.", 
      tech: [
  "React 18",
  "Vite",
  "Context API",
  "JavaScript (ES6+)",
  "HTML &  CSS",
  "CSS Custom Properties (Design Tokens)",
   "Drag and Drop API",
  "localStorage",
  "Vercel",
   "Web Speech API",
   "FileReader API ",
   "jsPDF",
  "GitHub",
  "UI/UX Design"

],

 
features: [
  "CRUD",
  "Sidebar",
  "Project workspaces",
  "Pinned tasks",
  "Tag collections",
  "Analytics dashboard",
  "Kanban board",
  "Activity history",
  "Calendar view",
  "Subtasks",
  "Markdown notes",
  "Priority & Category",
  "Due date & time",
  "Repeat tasks",
  "Filters",
  "Search",
  "Voice input",
  "Attachments",
  "Export",
  "Pomodoro timer",
  "Persistent storage",
  "Dark / Light mode",
  "Error Boundary"
],
appFlow: [
    { text: "Open app → sidebar shows focus tasks, today's tasks, projects, pinned, tags, analytics, theme, history" },
    { text: "↓ Click Focus → see today's high-priority tasks only", arrow: true },
    { text: "Click Projects → create Notion-style project, assign tasks to it with color label" },
    { text: "↓ Add task → text + date + time + priority + category + voice input option", arrow: true },
    { text: "Attach images (max 2MB) or files (max 5MB), up to 5 per task; add subtasks and markdown notes" },
    { text: "↓ Task saved → grouped by due date, sorted by priority within group", arrow: true },
    { text: "Switch to Board view → drag tasks across Todo / In Progress / Done columns" },
    { text: "↓ Switch to Calendar view → tasks plotted on calendar by due date", arrow: true },
    { text: "Click Analytics → completion rate, GitHub heatmap, category chart, status overview" },
    { text: "↓ Click History → creative log of every add / edit / delete event with timestamps", arrow: true },
    { text: "Filter by status or category; debounced search highlights matching text inline" },
    { text: "↓ Export filtered todos as CSV or PDF; toggle dark/light mode (persists via localStorage)", arrow: true }
  ],

routes: [
  { icon: "📋", label: "Todo List (Single Page App)" },
],


  techStack: [
    { name: "React 18", desc: "useState, useEffect, useRef, useContext, Error Boundary — no routing needed" },
    { name: "Context API", desc: "TodoContext — centralized todos, filters, theme, projects, history, all CRUD" },
    { name: "CSS Custom Properties", desc: "Full design token system — spacing scale, color palette, typography, radius, shadows" },
    { name: "Web Speech API", desc: "SpeechRecognition for voice-to-text input in TodoForm" },
    { name: "Drag and Drop API", desc: "Native browser DnD for Kanban board column transitions" },
    { name: "FileReader API", desc: "Reads image and file attachments as base64 data URLs" },
    { name: "jsPDF", desc: "Dynamic CDN import — generates landscape PDF export of filtered tasks" },
    { name: "localStorage", desc: "Todos, theme, projects, history persisted across refresh via useEffect sync" },
    { name: "Vite", desc: "Fast dev server and optimized production build tool" }
  ],

 highlights: [
    { label: "Sidebar Navigation", desc: "Collapsible sidebar with focus mode, project workspaces, pinned tasks, tag browser, analytics, theme toggle, and activity history — all from one panel" },
    { label: "Kanban Board", desc: "Drag-and-drop across Todo / In Progress / Done columns using native Drag and Drop API" },
    { label: "Analytics Dashboard", desc: "Completion rate card, GitHub-style daily entry heatmap, category-wise completion chart, and status overview panel" },
    { label: "Calendar View", desc: "Tasks plotted on a date-picker calendar by due date — click a date to see tasks due that day" },
    { label: "Activity History", desc: "Creative chronological log of every add, edit, and delete event with timestamps and diff display" },
    { label: "Design Token System", desc: "4px spacing scale, semantic color palette with -soft variants, typography scale, and radius tokens via CSS custom properties" },
    { label: "WCAG 2.x Accessibility", desc: "Skip nav, focus rings, 40px touch targets, ARIA semantics, prefers-reduced-motion, high contrast mode" },
    { label: "Date Grouping", desc: "Tasks grouped by due date with Today / Tomorrow labels, sorted chronologically" },
    { label: "Priority Sorting", desc: "Within each date group, high → mid → low priority order applied automatically" },
    { label: "Overdue Detection", desc: "isOverdue() checks dueDate < now for incomplete tasks — red card accent applied" },
    { label: "Subtasks & Notes", desc: "Nested subtask checklist with progress bar; per-task markdown notes editor with bold, italic, code rendering" },
    { label: "Voice Input", desc: "Web Speech API with continuous and interim results, stops on form submit or manually" },
    { label: "Debounced Search", desc: "300ms debounce on search input via useRef timer, highlights matches inline" },
    { label: "Attachment System", desc: "Images (max 2MB) and files (max 5MB), up to 5 per task, stored as base64 in localStorage" },
    { label: "Dark Mode", desc: "All CSS tokens fully remapped for dark — not inverted. Persists via localStorage." },
    { label: "Error Boundary", desc: "Wraps TodoList — catches render crashes, shows fallback UI with refresh prompt" },
    { label: "Responsive Design", desc: "Mobile-first breakpoints at 480/640/768/900px; Pomodoro becomes bottom sheet, tabs collapse to icons" },
    { label: "Export", desc: "CSV and PDF export of filtered todos; blocked when category filter active to avoid partial data" },
    { label: "localStorage Persistence", desc: "All data, theme, projects, and history survive page refresh" }
  ],

errorFlows: [
    {
      title: "Todo render crash",
      steps: [
        { text: "TodoItem throws during render" },
        { text: "JS error fires", type: "trigger" },
        { text: "ErrorBoundary catches it" },
        { text: "'Something went wrong' fallback shown", type: "ok" }
      ]
    },
    {
      title: "Attachment too large",
      steps: [
        { text: "User selects file > 5MB or image > 2MB" },
        { text: "file.size > maxSize check fires", type: "trigger" },
        { text: "File skipped silently" },
        { text: "Other valid files still attach", type: "ok" }
      ]
    },
    {
      title: "PDF generation fails",
      steps: [
        { text: "User clicks Download PDF" },
        { text: "jsPDF import or generation throws", type: "trigger" },
        { text: "try/catch catches it" },
        { text: "'PDF download failed' alert shown", type: "ok" }
      ]
    },
    {
      title: "Empty download attempt",
      steps: [
        { text: "User clicks Download with no visible tasks" },
        { text: "filteredTodos.length === 0", type: "trigger" },
        { text: "Early guard fires" },
        { text: "'No visible todos to download' alert shown", type: "ok" }
      ]
    }
  ],
 
      github: "https://github.com/mayurpanchal-12/ReactTodo.git",
      live: "https://react-todo-sage-phi.vercel.app/",
      status: "Completed",
    },
     {
      id: "Password Generator",
      name: "Advanced Password Generator",
      desc: "Secure password generator with strength insights, history tracking, and  guidance",
      longDesc: "Developed a feature-rich password generator with customizable settings, real-time strength indicators, password history management, and PWA support, along with clipboard functionality and security best-practice guidance.",
      tech: [
  "React 18",
  "Context API",
  "React Router",
  "Vite",
  "PWA (Progressive Web App)",
  "React Toastify",
  "JavaScript (ES6+)",
  "HTML & Tailwind CSS",
  "LocalStorage",
  "Web Clipboard API",
  "Vercel",
  "GitHub"
],
      features: [
  "Password length selector",
  "Include digits",
  "Include letters",
  "PWA support",
  "Copy to clipboard",
  "Theme toggle",
  "Localstorage",
  "Password strength indicator",
  "Recent passwords",
  "Password history",
  "Clear all",
  "Delete individual password",
  "Password guide"
],appFlow: [
  { text: "Open App → Password auto-generated on load" },
  { text: "↓ Adjust length (4–32) via range slider", arrow: true },
  { text: "Toggle Special Characters and/or Numbers" },
  { text: "↓ Strength score updates live (Weak / Medium / Strong)", arrow: true },
  { text: "Copy password → toast confirms 'Copied to clipboard! ✅'" },
  { text: "↓ Every generated password saved to History (max 10)", arrow: true },
  { text: "View History page → see all saved passwords with strength badge" },
  { text: "↓ Copy or delete individual passwords from History", arrow: true },
  { text: "Clear All → confirmation toast before wiping history" },
  { text: "↓ View Guide page → password security tips and best practices", arrow: true },
  { text: "Install as PWA → 📲 Install button appears in Navbar if installable" },
],

routes: [
  { icon: "🔑", label: "Generator (Home)" },
  { icon: "🕐", label: "History" },
  { icon: "📖", label: "Guide" },
  { icon: "⚠️", label: "404 Wildcard" },
],

techStack: [
  { name: "React 18", desc: "useState, useEffect, useCallback, useRef, useId — no Redux needed" },
  { name: "React Router v6", desc: "BrowserRouter, Routes, Route, NavLink, wildcard (*) route" },
  { name: "Context API", desc: "PasswordContext — password state, history, strength, PWA install prompt" },
  { name: "react-hot-toast", desc: "Toast notifications + inline confirmation dialogs for delete and clear" },
  { name: "TailwindCSS v4", desc: "@custom-variant dark — dark mode via .dark class on <html>" },
  { name: "Vite PWA Plugin", desc: "registerSW() in main.jsx — installable on mobile and desktop, works offline" },
  { name: "Web Clipboard API", desc: "navigator.clipboard.writeText() for one-click copy" },
  { name: "localStorage", desc: "passlength, char, num toggles, and full password history persisted" },
],

highlights: [
  { label: "PWA Support", desc: "registerSW({ immediate: true }) + beforeinstallprompt event — Install button appears automatically when browser detects installability" },
  { label: "Strength Calculator", desc: "calculateStrength() scores length (8+, 12+) and enabled options — returns Weak / Medium / Strong live as settings change" },
  { label: "Inline Confirm Toasts", desc: "react-hot-toast used as a modal replacement — delete and clear show Cancel + Confirm inside the toast itself" },
  { label: "Auto-generate on Change", desc: "generatePassword wrapped in useCallback, fires automatically via useEffect whenever length, char, or num changes" },
  { label: "History Cap", desc: "History sliced to last 10 entries on every generate — prevents unbounded localStorage growth" },
  { label: "Dark Mode", desc: "Theme component toggles .dark on <html>, Tailwind @custom-variant dark applies — no flash, no persistence bug (note: theme resets on refresh)" },
  {label:"Copy" , desc:"Copy password to Clipboard"},
  {label:"Localstorage" , desc:"Localstorage support"},
  { label: "Responsive Install Button", desc: "Two separate install buttons in Navbar — full pill button on sm+, icon-only circle on mobile" },
  { label: "Error Boundary", desc: "Wraps each route individually — Generator, History, Guide all isolated so one crash doesn't break the others" },
  { label: "404 Page", desc: "Wildcard route with Go Home + Go Back buttons, gradient 404 heading, glass card style matching app theme" },
],

errorFlows: [
  {
    title: "Both options unchecked",
    steps: [
      { text: "User unchecks Special and Numbers" },
      { text: "!char && !num check fires", type: "trigger" },
      { text: "generatePassword() sets currentPass to ''" },
      { text: "Empty password shown, no crash", type: "ok" },
    ],
  },
  {
    title: "Route render crash",
    steps: [
      { text: "PassGen / History / Guide throws during render" },
      { text: "Unexpected JS error fires", type: "trigger" },
      { text: "Per-route ErrorBoundary catches it" },
      { text: "'Something went wrong ⚠️' fallback shown", type: "ok" },
    ],
  },
  {
    title: "Unknown route",
    steps: [
      { text: "User visits /randompage" },
      { text: "No matching route found", type: "trigger" },
      { text: "Wildcard (*) route catches it" },
      { text: "404 page with Go Home / Go Back shown", type: "ok" },
    ],
  },
  {
    title: "PWA already installed",
    steps: [
      { text: "User installs the PWA" },
      { text: "appinstalled event fires", type: "trigger" },
      { text: "isInstallable set to false" },
      { text: "Install button removed from Navbar", type: "ok" },
    ],
  },
],
      github: "https://github.com/mayurpanchal-12/Password-Generator.git",
      live: "https://password-generator-three-ashen.vercel.app/",
      status: "Completed",
    },


{
  id: "portfolio",
  name: "Portfolio Website",
  desc: "Personal dev portfolio with a code-editor aesthetic built in React.",
  longDesc: "A fully responsive personal portfolio built from scratch using React, React Router and TailwindCSS. Features a dark code-editor aesthetic with syntax-highlighted UI cards, animated code blocks, dynamic project detail pages driven by a single data file, EmailJS contact form with no backend, and a downloadable resume.",
  tech: ["React 18", "React Router v6", "TailwindCSS v4", "EmailJS", "Fira Code", "Lucid-react","Vite", "Vercel"],
  features: [
    "Dark code-editor theme with syntax colours",
    "Syntax-highlighted project cards",
    "Dynamic project detail pages",
    "EmailJS contact form — no backend",
    "Downloadable resume via reloadDocument",
    "React.lazy + Suspense on ProjectDetail",
    "Per-route Error Boundary",
    "404 wildcard page",
    "Fully responsive — 320px to desktop",
  ],
  appFlow: [
    { text: "Land on Home → code card + skills intro" },
    { text: "↓ Scroll down → About intro + Projects + Contact all on Home", arrow: true },
    { text: "Visit /about → full profile, education timeline, projects grid" },
    { text: "↓ Click 'view details' → navigates to /projects/:id", arrow: true },
    { text: "ProjectDetail loads lazily → PageLoader spinner shown" },
    { text: "↓ Detail page shows flow, routes, tech, highlights, error flows", arrow: true },
    { text: "Visit /contact → fill name, email, message → send()" },
    { text: "↓ EmailJS sends email → success/error feedback shown inline", arrow: true },
    { text: "Visit unknown route → 404 Wildcard page" },
  ],
  routes: [
    { icon: "🏠", label: "Home" },
    { icon: "👤", label: "About" },
    { icon: "💻", label: "Projects" },
    { icon: "🔍", label: "Project Detail (/projects/:id)" },
    { icon: "📞", label: "Contact" },
    { icon: "🪪", label: "Intro" },
    { icon: "⚠️", label: "404 Wildcard" },
  ],
  techStack: [
    { name: "React 18", desc: "lazy, Suspense, useState, useNavigate — no Redux needed" },
    { name: "React Router v6", desc: "createBrowserRouter, createRoutesFromElements, nested routes under Layout" },
    { name: "TailwindCSS v4", desc: "@custom-variant dark, utility classes mixed with custom CSS files per page" },
    { name: "EmailJS", desc: "fetch() to api.emailjs.com — sends emails from browser, free tier 200/month" },
    { name: "Custom CSS modules", desc: "Per-page CSS files for BEM-style component classes alongside Tailwind" },
    { name: "Fira Code", desc: "Monospace font giving the code-editor aesthetic throughout" },
    { name: "Vite", desc: "Fast dev server, reloadDocument for resume PDF download" },
    { name: "Vercel", desc: "Deployment with automatic preview on push" },
  ],
  highlights: [
    { label: "Single Data File", desc: "All project info lives in projectsData.js — update one file, every page (Home, About, Projects, ProjectDetail) reflects it automatically" },
    { label: "Dynamic Detail Pages", desc: "ProjectDetail reads :id from URL, finds the matching project object, and renders appFlow, routes, techStack, highlights and errorFlows sections conditionally" },
    { label: "Code-editor Aesthetic", desc: "Syntax colours (c-keyword, c-string, c-bool, c-fn) applied via CSS classes — cards look like real JS objects with bracket syntax" },
    { label: "EmailJS — No Backend", desc: "Contact form POSTs directly to EmailJS API with fetch() — no server, no env variables exposed, works on free Vercel deployment" },
    { label: "Lazy + Suspense", desc: "ProjectDetail is the only lazy-loaded page since it's data-heavy — others are small enough to not need it" },
    { label: "Per-route Error Boundary", desc: "Projects and ProjectDetail each have their own ErrorBoundary — a crash in one doesn't affect the rest of the app" },
    { label: "Resume Download", desc: "reloadDocument on the resume Link forces a full browser download of /resume.pdf without React Router intercepting it" },
    { label: "Responsive Navbar", desc: "Sticky top navbar with NavLink active state, gradient underline decoration, Code2 icon from lucide-react" },
  ],
  errorFlows: [
    {
      title: "Invalid project ID",
      steps: [
        { text: "User visits /projects/unknownid" },
        { text: "projects.find() returns undefined", type: "trigger" },
        { text: "if (!project) check fires" },
        { text: "throw 'project not found' UI shown", type: "ok" },
      ],
    },
    {
      title: "ProjectDetail render crash",
      steps: [
        { text: "ProjectDetail throws during render" },
        { text: "Unexpected JS error fires", type: "trigger" },
        { text: "ErrorBoundary on /projects/:id catches it" },
        { text: "'Something went wrong ⚠️' + Try Again shown", type: "ok" },
      ],
    },
    {
      title: "Contact form send fails",
      steps: [
        { text: "User submits contact form" },
        { text: "EmailJS fetch() rejects or returns non-ok", type: "trigger" },
        { text: ".catch() / else branch fires" },
        { text: "status = 'error' → '✗ something went wrong' shown", type: "ok" },
      ],
    },
    {
      title: "Unknown route",
      steps: [
        { text: "User visits /randompage" },
        { text: "No matching route found", type: "trigger" },
        { text: "Wildcard (*) route catches it" },
        { text: "404 page with Go Home button shown", type: "ok" },
      ],
    },
  ],
  github: "https://github.com/mayurpanchal-12/Personal_portfolio_React.js.git",
  live: "https://personal-portfolio-react-js-psi.vercel.app/",
  status: "Completed",
},
  ];





  