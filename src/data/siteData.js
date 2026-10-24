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
    screenshotUrl:
      'https://iad.microlink.io/WOsIDlRZ_OJcrBPaxdPmaepZF--hQU3EgoIeBRk4AlIU_nxXEoZxfdKjFaFHYBl7BXyEiTB4dwuJFOnuDHn60w.png',
    headline:
      'Centralized electronic fraud reporting, tracking, and inter-bank coordination portal for licensed Nigerian financial institutions.',
    challenge:
      'Deposit Money Banks (DMBs), Microfinance Banks, Mobile Money Operators, and Payment Service Providers needed a unified CBN-aligned industry portal to log, track, and coordinate responses to electronic fraud incidents.',
    solution:
      'Delivered a secure institutional Angular web portal for the NIBSS Industry Fraud Desk with authorized officer authentication, structured incident logging, inter-bank recovery requests, and quarterly analytics.',
    impact: [
      { value: 'Real-Time', label: 'Inter-bank incident logging' },
      { value: 'DMBs & PSPs', label: 'Ecosystem-wide coverage' },
      { value: '24/7', label: 'Industry Fraud Desk availability' },
    ],
    tags: ['Fintech & Security', 'Enterprise Portal', 'Web Application'],
    highlights: [
      { label: 'Incident Logging', status: 'Structured Flow' },
      { label: 'Case Coordination', status: 'Multi-Bank' },
      { label: 'Audit & Compliance', status: 'CBN Aligned' },
    ],
  },
  {
    id: 'hairitage-by-rokah',
    slug: '02',
    client: 'Hairitage by Rokah',
    category: 'Beauty Brand, E-Commerce & Studio Booking',
    year: 'Live Product',
    liveUrl: 'https://hairitagebyrokah.co.uk',
    screenshotUrl:
      'https://iad.microlink.io/br00Z0a8w7mgeDUrMCFka88gHh9-WrOd1PjYQgdzC42IVq6hpRIeCZi5TgjFeb0nUaFov9pAGtGSoi0x00irOQ.png',
    headline:
      'Microlocs, locs, and natural hair styling studio in Mansfield, UK paired with an online haircare and bulk hair extension storefront.',
    challenge:
      'Hairitage by Rokah needed a welcoming UK digital flagship for its private studio in Mansfield—combining tiered appointment scheduling (Microlocs, natural twists, and steam treatments) with direct e-commerce for bulk hair and haircare products.',
    solution:
      'Built an integrated Shopify & Acuity Scheduling web experience featuring promo campaigns (BULK5), same-day Mansfield delivery, transparent duration/pricing tiers, and a 16-product haircare & extension catalog.',
    impact: [
      { value: '16+ SKU', label: 'Haircare & bulk hair storefront' },
      { value: 'Mansfield UK', label: 'Private studio & same-day delivery' },
      { value: 'Automated', label: 'Deposit & consultation booking' },
    ],
    tags: ['Brand Experience', 'E-Commerce', 'Web Platform'],
    highlights: [
      { label: 'Microlocs Studio', status: 'Online Scheduling' },
      { label: 'HH Bulk Hair Shop', status: 'Direct Storefront' },
      { label: 'Trustpilot Verified', status: 'UK Brand' },
    ],
  },
  {
    id: 'pickle-pal',
    slug: '03',
    client: 'PicklePal',
    category: 'Sports Community & Match Companion App',
    year: 'Live App',
    liveUrl: 'https://pickle-pal.base44.app/',
    screenshotUrl:
      'https://iad.microlink.io/wq1c2xRIuI2NbTYSH4_6SdMjNUKd7LjXC8HRIOizJ8p7gfQpl8u-5BpOTUUGzH4XTL6RaL26ZRg0VAdu4YF1uQ.png',
    headline:
      'The Stonebridge pickleball companion for tracking wins, losses, live court queues, tournaments, and dominating the court.',
    challenge:
      'The Stonebridge pickleball community needed a dedicated web app to manage courtside live queues, record match results, run bracket tournaments, and track head-to-head player stats and weekly leaderboards.',
    solution:
      'Created a full-featured community sports platform with 20+ integrated modules including Live Game, Live Queue, Record Match, Leaderboard, Head-to-Head analytics, Tournaments, and Year-in-Review summaries.',
    impact: [
      { value: '20+ Modules', label: 'Live queue, stats & tournaments' },
      { value: 'Real-Time', label: 'Leaderboard & H2H tracking' },
      { value: 'Mobile UI', label: 'Built for Stonebridge courts' },
    ],
    tags: ['Consumer App', 'Sports Community', 'Web Application'],
    highlights: [
      { label: 'Live Queue & Game', status: 'Courtside Ready' },
      { label: 'Leaderboard & H2H', status: 'Player Analytics' },
      { label: 'Tournament Engine', status: 'Bracket & Bookings' },
    ],
  },
  {
    id: 'janespices-commerce',
    slug: '04',
    client: 'Janespice’s Afro Kitchen',
    category: 'Hospitality, Authentic Afro Cuisine & Catering',
    year: 'Live Product',
    liveUrl: 'https://janespicesafrokitchen.co.uk',
    screenshotUrl:
      'https://iad.microlink.io/x226hXfiAgMwNITN3ZshvbPBPx3rDLqib9UwzklgRD1xbce-x4MbLgcaSfnYhdoO9UiZjUbKVuKJLOKHSaowMg.png',
    headline:
      '“Taste the Heart of Africa” — bringing authentic Nigerian and African cuisine, spice blends, and event catering to the UK West Midlands.',
    challenge:
      'Operating across Willenhall, West Bromwich, and Birmingham, Janespice’s Afro Kitchen needed an inviting digital presence where customers could explore authentic African dishes, small chops, and catering options online.',
    solution:
      'Launched a warm, brand-led culinary website showcasing signature rice dishes, traditional soups and swallows, peppered small chops, direct customer inquiries, and integrated online ordering.',
    impact: [
      { value: 'West Midlands', label: 'Willenhall & Birmingham reach' },
      { value: 'Mobile-First', label: 'Menu & spice blend discovery' },
      { value: 'Direct', label: 'Catering & takeaway inquiries' },
    ],
    tags: ['Web Platform', 'Brand Experience', 'E-Commerce'],
    highlights: [
      { label: 'Signature Menu', status: 'Jollof, Soups & Grill' },
      { label: 'Small Chops & Asun', status: 'Event Catering' },
      { label: 'Direct Inquiries', status: 'Online Channel' },
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
