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
    id: 'nibss-fraud-portal',
    slug: '01',
    client: 'NIBSS Fraud Reporting Portal',
    category: 'Financial Infrastructure & Security Portal',
    year: 'Enterprise',
    liveUrl: 'https://fraudportal.nibss-plc.com.ng/',
    allowIframe: false,
    headline:
      'Centralized electronic fraud reporting, tracking, and inter-bank coordination portal for financial institutions.',
    challenge:
      'Banks and payment service providers needed a unified, secure industry portal to log, track, and coordinate responses to electronic fraud incidents across the payment ecosystem.',
    solution:
      'Delivered a streamlined institutional portal with structured incident workflows, real-time case status tracking, role-based access for authorized stakeholders, and executive reporting.',
    impact: [
      { value: 'Real-Time', label: 'Inter-bank incident logging' },
      { value: 'Unified', label: 'Industry-wide case tracking' },
      { value: '24/7', label: 'Institutional availability' },
    ],
    tags: ['Fintech & Security', 'Enterprise Portal', 'Web Application'],
    highlights: [
      { label: 'Incident Logging', status: 'Structured Flow' },
      { label: 'Case Coordination', status: 'Multi-Bank' },
      { label: 'Audit & Compliance', status: 'Secure Access' },
    ],
  },
  {
    id: 'hairitage-by-rokah',
    slug: '02',
    client: 'Hairitage by Rokah',
    category: 'Beauty Brand, E-Commerce & Booking',
    year: 'Live Product',
    liveUrl: 'https://hairitagebyrokah.co.uk',
    allowIframe: true,
    headline:
      'Elevating natural haircare, protective styling, and culture through a warm, modern digital flagship and booking experience.',
    challenge:
      'Hairitage by Rokah needed an inviting digital home in the UK that celebrates natural hair culture while making it effortless for clients to explore protective styles, book appointments, and shop haircare products.',
    solution:
      'Crafted a brand-forward web experience with seamless style discovery, appointment booking flows, and mobile-first product browsing that reflects over a decade of styling mastery.',
    impact: [
      { value: 'Seamless', label: 'Online style & care discovery' },
      { value: 'Mobile-First', label: 'Booking & shopping journey' },
      { value: 'UK-Wide', label: 'Brand & community reach' },
    ],
    tags: ['Brand Experience', 'E-Commerce', 'Web Platform'],
    highlights: [
      { label: 'Style Showcase', status: 'Visual Gallery' },
      { label: 'Salon Booking', status: 'Easy Scheduling' },
      { label: 'Haircare Shop', status: 'Direct Storefront' },
    ],
  },
  {
    id: 'pickle-pal',
    slug: '03',
    client: 'PicklePal',
    category: 'Sports Community & Match Companion App',
    year: 'Live App',
    liveUrl: 'https://pickle-pal.base44.app/',
    allowIframe: true,
    headline:
      'An interactive companion app for pickleball players to organize games, track live scores, and connect on the court.',
    challenge:
      'Players wanted a fun, zero-friction web app they could pull up right courtside to organize open play rotations, keep score during rallies, and track match history with friends.',
    solution:
      'Built an energetic, mobile-ready web application with instant match setup, interactive scorekeeping, player pairing, and session summaries.',
    impact: [
      { value: 'Instant', label: 'Courtside match setup' },
      { value: 'Interactive', label: 'Live rally & score tracking' },
      { value: 'Mobile UI', label: 'Built for on-court use' },
    ],
    tags: ['Consumer App', 'Interactive UI', 'Web Application'],
    highlights: [
      { label: 'Live Scorekeeper', status: 'Tap-to-Score' },
      { label: 'Player Pairing', status: 'Smart Rotation' },
      { label: 'Match History', status: 'Session Stats' },
    ],
  },
  {
    id: 'janespices-commerce',
    slug: '04',
    client: 'Janespices Afrokitchen',
    category: 'Hospitality & Online Ordering',
    year: 'Live Product',
    liveUrl: 'https://janespicesafrokitchen.com',
    allowIframe: true,
    headline:
      'Turning a beloved culinary brand into a seamless online ordering and event catering platform.',
    challenge:
      'Customers wanted an easy way to browse the restaurant menu on their phones, request event catering quotes, and place orders without waiting on phone calls.',
    solution:
      'Designed and launched a vibrant, mobile-friendly website with interactive menu browsing, clear catering packages, and instant kitchen order routing.',
    impact: [
      { value: '+210%', label: 'Online catering inquiries' },
      { value: '2x', label: 'Faster mobile browsing' },
      { value: '99.9%', label: 'Peak-hour reliability' },
    ],
    tags: ['Web Platform', 'Brand Experience', 'E-Commerce'],
    highlights: [
      { label: 'Interactive Menu', status: 'Mobile-First' },
      { label: 'Catering Planner', status: 'Instant Quotes' },
      { label: 'Kitchen Alerts', status: 'Real-Time' },
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
    title: 'Enterprise & E-Commerce Growth',
    detail: 'Expanded into institutional portals, e-commerce platforms, and mobile-first web applications.',
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
