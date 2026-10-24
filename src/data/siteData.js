export const COMPANY = {
  name: 'Sparklegrid',
  legalName: 'Sparklegrid Inc.',
  tagline: 'Future-Ready Digital Products, AI & Brand Experiences',
  domain: 'sparklegrid.tech',
  email: 'hr@sparklegrid.tech',
  phone: '+234 (708) 983-1124',
  phoneRaw: '+2347089831124',
  socials: [
    { label: 'X / Twitter', href: 'https://twitter.com/thesparklegrid', handle: '@thesparklegrid' },
    { label: 'Facebook', href: 'https://facebook.com/sparklegrid', handle: '/sparklegrid' },
  ],
  metrics: [
    { label: 'Products Shipped', value: '40+', delta: 'Web & Mobile' },
    { label: 'Client Satisfaction', value: '99%', delta: 'Long-term partners' },
    { label: 'Launch Velocity', value: '2x', delta: 'Faster to market' },
    { label: 'Support & Reliability', value: '24/7', delta: 'Always-on care' },
  ],
};

export const SERVICES = [
  {
    id: 'app-systems',
    code: '01',
    title: 'Web & Mobile Applications',
    shortTitle: 'Web & Mobile Apps',
    summary:
      'Custom web platforms, iOS/Android mobile apps, and desktop software designed to feel effortless and fast.',
    description:
      'We take your product from early concept to a polished launch. Whether you are building a new customer app or upgrading an internal platform, we focus on intuitive user journeys and rock-solid reliability.',
    deliverables: [
      'Custom Web Applications & Customer Portals',
      'iOS & Android Mobile Apps',
      'E-Commerce & Booking Platforms',
      'Ongoing Maintenance & Feature Evolution',
    ],
    metrics: 'Fast, responsive & built to scale',
    stack: ['Web Apps', 'Mobile Apps', 'Desktop', 'Portals'],
    steps: ['Discovery', 'Design', 'Build', 'Launch'],
  },
  {
    id: 'ai-automation',
    code: '02',
    title: 'AI & Smart Automation',
    shortTitle: 'AI & Automation',
    summary:
      'Intelligent assistants and automated workflows that save your team hours of repetitive manual work every day.',
    description:
      'Put modern AI to work for your business in practical ways. We connect smart assistants, automated document processing, and custom workflows directly into the tools your team already uses.',
    deliverables: [
      'Custom AI Assistants & Customer Support Bots',
      'Automated Business Workflows & Approvals',
      'Smart Document & Data Processing',
      'Seamless Integration with Your Existing Tools',
    ],
    metrics: 'Cut repetitive tasks by up to 70%',
    stack: ['AI Assistants', 'Workflow Automation', 'Smart Search', 'Integrations'],
    steps: ['Map Workflow', 'Prototype', 'Connect Tools', 'Automate'],
  },
  {
    id: 'product-design',
    code: '03',
    title: 'Product Design & Branding',
    shortTitle: 'Design & Branding',
    summary:
      'Futuristic interfaces, memorable brand identities, and interactive websites that make your company stand out.',
    description:
      'First impressions define trust. We craft distinctive visual identities, clean design systems, and engaging websites that turn visitors into loyal customers.',
    deliverables: [
      'UI/UX Design for Web & Mobile Products',
      'Brand Identity, Logos & Visual Guidelines',
      'High-Impact Marketing & Launch Websites',
      'Interactive Prototypes & Design Systems',
    ],
    metrics: 'Memorable brands & intuitive UX',
    stack: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'Motion'],
    steps: ['Brand Direction', 'Interactive UI', 'Design System', 'Polish'],
  },
  {
    id: 'cloud-data',
    code: '04',
    title: 'Cloud & Data Management',
    shortTitle: 'Cloud & Data',
    summary:
      'Secure data storage, automated backups, and dependable cloud hosting so your business never skips a beat.',
    description:
      'Your data is one of your most valuable assets. We organize, secure, and protect your business databases and cloud infrastructure so everything runs smoothly around the clock.',
    deliverables: [
      'Secure Cloud Setup & Migration',
      'Database Setup, Organization & Speed Tuning',
      'Automated Backups & Recovery Protection',
      'Business Dashboards & Reporting',
    ],
    metrics: '99.98% uptime & protected data',
    stack: ['Cloud Hosting', 'Data Security', 'Automated Backups', 'Analytics'],
    steps: ['Assess', 'Secure', 'Migrate', 'Monitor'],
  },
  {
    id: 'technical-consulting',
    code: '05',
    title: 'Technology Consulting & QA',
    shortTitle: 'Tech Consulting',
    summary:
      'Clear guidance, product roadmaps, and thorough quality testing to align your technology with your business goals.',
    description:
      'Not sure what to build next or how to modernize an older system? We partner with founders and leadership teams to plan smart roadmaps, test software thoroughly, and guide every step.',
    deliverables: [
      'Product Strategy & Technology Roadmaps',
      'End-to-End Software Quality & Usability Testing',
      'System Modernization & Speed Audits',
      'Dedicated Team Extension & Advisory',
    ],
    metrics: 'Clear roadmaps & launch confidence',
    stack: ['Strategy', 'Quality Testing', 'Modernization', 'Advisory'],
    steps: ['Review', 'Plan', 'Test', 'Scale'],
  },
];

export const CASE_STUDIES = [
  {
    id: 'janespices-commerce',
    slug: '01',
    client: 'Janespices Afrokitchen',
    category: 'Digital Ordering & Brand Experience',
    year: '2024',
    liveUrl: 'https://janespicesafrokitchen.com',
    headline: 'Turning a beloved culinary brand into a seamless online ordering and catering experience.',
    challenge:
      'Customers wanted an easy way to browse the menu on their phones, request event catering quotes, and place orders without waiting on phone calls.',
    solution:
      'We designed and launched a vibrant, mobile-friendly website with interactive menu browsing, clear catering packages, and instant order routing.',
    impact: [
      { value: '+210%', label: 'Online catering inquiries' },
      { value: '2x', label: 'Faster mobile browsing' },
      { value: '99.9%', label: 'Peak-hour reliability' },
    ],
    tags: ['Web Platform', 'Brand Experience', 'Mobile Commerce'],
    highlights: [
      { label: 'Interactive Menu', status: 'Mobile-First' },
      { label: 'Catering Planner', status: 'Instant Quotes' },
      { label: 'Kitchen Alerts', status: 'Real-Time' },
    ],
  },
  {
    id: 'aether-settlement',
    slug: '02',
    client: 'AetherPay Business',
    category: 'Fintech & Payments Platform',
    year: '2025',
    liveUrl: null,
    headline: 'A unified dashboard for businesses to track multi-currency payments and payouts in real time.',
    challenge:
      'Finance teams were spending hours matching transactions across different payment providers and spreadsheets.',
    solution:
      'We built a clean, real-time financial dashboard that automatically matches incoming payments, tracks balances, and generates instant reports.',
    impact: [
      { value: '85%', label: 'Less time on manual reports' },
      { value: '100%', label: 'Accurate balance tracking' },
      { value: '10x', label: 'Faster payout processing' },
    ],
    tags: ['Web Application', 'Product Design', 'Automation'],
    highlights: [
      { label: 'Unified Wallet', status: 'Multi-Currency' },
      { label: 'Auto-Matching', status: 'Instant Sync' },
      { label: 'Team Controls', status: 'Role-Based' },
    ],
  },
  {
    id: 'vortex-ops-ai',
    slug: '03',
    client: 'Vortex Logistics',
    category: 'AI Operations Assistant',
    year: '2026',
    liveUrl: null,
    headline: 'Helping operations teams find answers and process shipping documents in seconds with AI.',
    challenge:
      'Support and dispatch teams had to search through ratusan PDFs, emails, and spreadsheets to answer customer delivery questions.',
    solution:
      'We created a smart AI assistant integrated into their workspace that reads shipping documents and drafts accurate responses in one click.',
    impact: [
      { value: '-68%', label: 'Faster customer responses' },
      { value: '15 hrs', label: 'Saved per coordinator weekly' },
      { value: '24/7', label: 'Instant document lookup' },
    ],
    tags: ['AI Assistant', 'Workflow Automation', 'Internal Tools'],
    highlights: [
      { label: 'Document Reader', status: 'Smart Scan' },
      { label: 'Instant Search', status: 'Verified Answers' },
      { label: 'One-Click Reply', status: 'Automated' },
    ],
  },
  {
    id: 'kinetix-db-cloud',
    slug: '04',
    client: 'Kinetix Health Network',
    category: 'Cloud & Patient Portal',
    year: '2025',
    liveUrl: null,
    headline: 'Upgrading clinic scheduling and patient records for speed, privacy, and zero downtime.',
    challenge:
      'Rapid growth across clinics slowed down their booking system and made daily data backups difficult to manage.',
    solution:
      'We modernized their cloud infrastructure, sped up patient record searches, and set up automated daily backups with full peace of mind.',
    impact: [
      { value: '3x', label: 'Faster booking & search' },
      { value: '100%', label: 'Automated daily backups' },
      { value: 'Zero', label: 'Service interruptions' },
    ],
    tags: ['Cloud & Data', 'Web Portal', 'Reliability'],
    highlights: [
      { label: 'Fast Scheduling', status: 'Instant Load' },
      { label: 'Secure Records', status: 'Protected' },
      { label: 'Auto Backups', status: 'Daily Verified' },
    ],
  },
];

export const PRINCIPLES = [
  {
    code: '01',
    title: 'Clarity Over Complexity',
    body: 'Technology should feel simple. We strip away jargon and clutter so your product is a joy for anyone to use.',
  },
  {
    code: '02',
    title: 'Design & Build Together',
    body: 'Great look and great performance go hand in hand. Our designers and developers collaborate closely from day one.',
  },
  {
    code: '03',
    title: 'Built to Last',
    body: 'We create dependable software and clean brand foundations that grow smoothly alongside your business.',
  },
  {
    code: '04',
    title: 'True Partnership',
    body: 'We communicate clearly, share regular visual progress, and support your team long after launch day.',
  },
];

export const TIMELINE = [
  {
    year: '2020',
    title: 'Sparklegrid Launches',
    detail: 'Started with a mission to help businesses stand out online through custom websites, branding, and reliable data systems.',
  },
  {
    year: '2022',
    title: 'Mobile Apps & Cloud Growth',
    detail: 'Expanded into full-scale mobile applications, e-commerce platforms, and managed cloud services for growing brands.',
  },
  {
    year: '2024',
    title: 'Next-Gen Product Design',
    detail: 'Introduced our spatial design system approach—helping clients launch faster with cohesive, high-converting user experiences.',
  },
  {
    year: '2026',
    title: 'AI-Powered Experiences',
    detail: 'Bringing practical AI automation, smart assistants, and futuristic interfaces to ambitious teams everywhere.',
  },
];
