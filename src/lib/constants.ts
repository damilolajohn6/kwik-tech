
export const SITE_CONFIG = {
  name: "Qwik Multi Services",
  description:
    "Lightning-fast digital solutions for modern businesses. We deliver web development, mobile apps, UI/UX design, digital marketing, cloud solutions, and AI integration.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://qwikmultiservices.com",
  ogImage: "/images/og-image.jpg",
  creator: "@qwikmulti",
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital marketing",
    "cloud solutions",
    "AI integration",
    "software development",
    "Abuja",
    "Nigeria",
  ],
} as const;

export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@qwikmultiservices.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+2348141646357",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+2348141646357",
  address:
    process.env.NEXT_PUBLIC_ADDRESS || "B96 Sahara Estate, Gwarimpa,, Abuja, Nigeria",
} as const;

export const SOCIAL_LINKS = {
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/qwikmulti",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://linkedin.com/company/qwikmulti",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/qwikmulti",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/qwikmulti",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

// Hero section images
export const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
  secondary: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  accent: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
} as const;

export const SERVICES = [
  {
    id: 1,
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    shortDescription:
      "Custom web and mobile applications built with cutting-edge technologies.",
    description:
      "We build lightning-fast, scalable web applications and native mobile apps that deliver exceptional user experiences. Our team specializes in React, Next.js, React Native, and Flutter.",
    icon: "Code",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: [
      "Progressive Web Apps (PWA)",
      "Native iOS & Android Apps",
      "Cross-platform Development",
      "API Development & Integration",
      "Real-time Applications",
      "E-commerce Platforms",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "Flutter",
    ],
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design & Branding",
    shortDescription:
      "Beautiful, intuitive designs that convert visitors into customers.",
    description:
      "Our design team creates stunning user interfaces and seamless user experiences. We focus on accessibility, usability, and visual excellence to make your brand stand out.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Brand Identity",
      "Motion Design",
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Principle", "After Effects"],
  },
  {
    id: 3,
    slug: "digital-marketing-seo",
    title: "Digital Marketing & SEO",
    shortDescription:
      "Data-driven marketing strategies that drive growth and visibility.",
    description:
      "We help businesses grow their online presence through strategic SEO, content marketing, social media management, and paid advertising campaigns.",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "HubSpot",
      "Mailchimp",
    ],
  },
  {
    id: 4,
    slug: "cloud-solutions-devops",
    title: "Cloud Solutions & DevOps",
    shortDescription:
      "Scalable cloud infrastructure and automated deployment pipelines.",
    description:
      "We design and implement robust cloud architectures on AWS, Azure, and GCP. Our DevOps practices ensure continuous integration, delivery, and monitoring.",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    features: [
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security & Compliance",
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    id: 5,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDescription:
      "Intelligent solutions powered by artificial intelligence and ML.",
    description:
      "We integrate AI and machine learning capabilities into your applications. From chatbots to predictive analytics, we help you leverage the power of AI.",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: [
      "Custom AI Solutions",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "Hugging Face",
    ],
  },
  {
    id: 6,
    slug: "ecommerce-solutions",
    title: "E-commerce & Custom Software",
    shortDescription:
      "End-to-end e-commerce platforms and custom software solutions.",
    description:
      "We build powerful e-commerce platforms and custom software solutions tailored to your business needs. From inventory management to payment processing, we've got you covered.",
    icon: "ShoppingCart",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Custom E-commerce Platforms",
      "Shopify Development",
      "Payment Integration",
      "Inventory Management",
      "Order Management Systems",
      "Custom CRM/ERP Solutions",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: 7,
    slug: "technology-solutions",
    title: "Technology Solutions & Consulting",
    shortDescription:
      "Comprehensive technology solutions to modernize and transform your business operations.",
    description:
      "We provide end-to-end technology solutions including IT consulting, system integration, cybersecurity, and digital transformation services to help businesses stay competitive in the digital age.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    features: [
      "IT Strategy & Consulting",
      "System Integration",
      "Cybersecurity Solutions",
      "Digital Transformation",
      "Legacy System Modernization",
      "Enterprise Software Solutions",
    ],
    technologies: [
      "Enterprise Architecture",
      "Microservices",
      "API Gateway",
      "Zero Trust Security",
      "ServiceNow",
      "Salesforce",
    ],
  },
  {
    id: 8,
    slug: "real-estate-technology",
    title: "Real Estate Technology Solutions",
    shortDescription:
      "PropTech solutions revolutionizing property management, sales, and real estate operations.",
    description:
      "We build innovative real estate technology solutions including property management systems, virtual tours, smart building IoT integration, and real estate marketplaces.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    features: [
      "Property Management Systems",
      "Virtual Property Tours (VR/AR)",
      "Real Estate Marketplaces",
      "Smart Building IoT",
      "Tenant Management Portals",
      "Real Estate Analytics",
    ],
    technologies: [
      "Three.js",
      "WebXR",
      "IoT Platforms",
      "Blockchain",
      "GIS Mapping",
      "BIM Integration",
    ],
  },
  {
    id: 9,
    slug: "agricultural-technology",
    title: "Agricultural Technology (AgriTech)",
    shortDescription:
      "Smart farming solutions leveraging IoT, AI, and data analytics for modern agriculture.",
    description:
      "We develop cutting-edge agricultural technology solutions including precision farming, crop monitoring, supply chain management, and farm management systems to boost productivity and sustainability.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    features: [
      "Precision Farming Solutions",
      "Crop Monitoring & Analytics",
      "Farm Management Systems",
      "Supply Chain Traceability",
      "IoT Sensor Networks",
      "Agricultural Marketplaces",
    ],
    technologies: [
      "IoT Sensors",
      "Drone Technology",
      "Machine Learning",
      "Satellite Imaging",
      "Blockchain",
      "Mobile Apps",
    ],
  },
  {
    id: 10,
    slug: "health-technology",
    title: "Health Technology (HealthTech)",
    shortDescription:
      "Digital health solutions transforming patient care, medical operations, and healthcare delivery.",
    description:
      "We create innovative healthcare technology solutions including telemedicine platforms, electronic health records, medical IoT devices, and AI-powered diagnostics to improve patient outcomes.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    features: [
      "Telemedicine Platforms",
      "Electronic Health Records (EHR)",
      "Medical IoT Integration",
      "AI-Powered Diagnostics",
      "Patient Engagement Apps",
      "Healthcare Analytics",
    ],
    technologies: [
      "HL7 FHIR",
      "HIPAA Compliance",
      "Medical IoT",
      "AI/ML Diagnostics",
      "Wearable Integration",
      "Telehealth APIs",
    ],
  },
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "A comprehensive financial analytics dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "D3.js"],
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "E-commerce",
    description: "Modern e-commerce solution with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Telemedicine platform connecting patients with doctors.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 4,
    title: "SaaS Analytics Tool",
    category: "Cloud Solutions",
    description: "Enterprise analytics platform with advanced reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["AWS", "Python", "Machine Learning"],
    link: "#",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "UI/UX Design",
    description: "Complete brand overhaul for a luxury fashion brand.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    tags: ["Figma", "Branding", "Motion"],
    link: "#",
  },
  {
    id: 6,
    title: "AI Chatbot Platform",
    category: "AI & ML",
    description: "Intelligent customer service automation solution.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    tags: ["OpenAI", "LangChain", "Python"],
    link: "#",
  },
  {
    id: 7,
    title: "Smart Farm Management",
    category: "AgriTech",
    description: "Precision farming platform with IoT sensors and AI-powered crop recommendations.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    tags: ["IoT", "Machine Learning", "React Native"],
    link: "#",
  },
  {
    id: 8,
    title: "Telemedicine Platform",
    category: "HealthTech",
    description: "HIPAA-compliant video consultation platform connecting patients with specialists.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["WebRTC", "Node.js", "HIPAA"],
    link: "#",
  },
  {
    id: 9,
    title: "PropTech Marketplace",
    category: "Real Estate",
    description: "Real estate platform with virtual tours and AI-powered property matching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Three.js", "React", "PostgreSQL"],
    link: "#",
  },
  {
    id: 10,
    title: "Enterprise IT Transformation",
    category: "Technology",
    description: "Complete digital transformation for a Fortune 500 manufacturing company.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["Azure", "Microservices", "DevOps"],
    link: "#",
  },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Countries Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Oluwaseun Adeyemi",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "10+ years in software development and digital strategy.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    bio: "Award-winning designer with expertise in UX and branding.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Full-stack developer specializing in React and Node.js.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Amara Nwosu",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Digital marketing expert with a data-driven approach.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "Qwik Multi Services delivered our platform 2 weeks ahead of schedule. Their attention to detail and technical expertise is exceptional. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Obi",
    role: "Founder",
    company: "AgriGrow Nigeria",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    content:
      "They transformed our agricultural business with a custom mobile app. Our farmers can now track yields and access market prices in real-time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Global Retail Co.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    content:
      "Our e-commerce sales increased by 300% after Qwik rebuilt our online store. The new design is beautiful and the site is incredibly fast.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Okafor",
    role: "CEO",
    company: "HealthFirst Clinics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    content:
      "The telemedicine platform they built for us has helped us reach patients across Nigeria. Their team understood our needs perfectly.",
    rating: 5,
  },
] as const;

export const CLIENT_LOGOS = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
] as const;

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to edge computing.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    author: {
      name: "Ibrahim Musa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    publishedAt: "2024-01-15",
    readingTime: 5,
    category: "Technology",
  },
  {
    id: 2,
    slug: "ux-design-principles-modern-apps",
    title: "UX Design Principles for Modern Applications",
    excerpt: "Learn the fundamental UX principles that make applications intuitive and delightful to use.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    author: {
      name: "Chioma Okonkwo",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
    publishedAt: "2024-01-10",
    readingTime: 7,
    category: "Design",
  },
  {
    id: 3,
    slug: "scaling-startups-with-cloud",
    title: "Scaling Your Startup with Cloud Infrastructure",
    excerpt: "A comprehensive guide to building scalable infrastructure for growing businesses.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: {
      name: "Oluwaseun Adeyemi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    publishedAt: "2024-01-05",
    readingTime: 8,
    category: "Cloud",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We craft a tailored strategy and roadmap for your project.",
    icon: "Lightbulb",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create stunning visuals and intuitive user experiences.",
    icon: "Palette",
  },
  {
    step: "04",
    title: "Development",
    description: "We build your solution using cutting-edge technologies.",
    icon: "Code",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing ensures a flawless, bug-free product.",
    icon: "CheckCircle",
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your project and provide ongoing support.",
    icon: "Rocket",
  },
] as const;

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with 2-week sprints. This includes discovery, design, development, testing, and deployment phases with regular client check-ins.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer various support and maintenance packages to keep your application running smoothly after launch, including updates, bug fixes, and feature additions.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern technologies including React, Next.js, Node.js, Python, AWS, and more. We choose the best tech stack based on your project requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We use Slack for daily communication, weekly video calls for updates, and project management tools like Linear or Jira for task tracking. You'll always know what's happening.",
  },
  {
    question: "Do you specialize in any particular industries?",
    answer:
      "Yes, we have deep expertise in healthcare (HealthTech), agriculture (AgriTech), real estate (PropTech), and general enterprise technology. We understand the unique challenges and regulations in these sectors and build solutions accordingly.",
  },
  {
    question: "Can you build IoT solutions for agriculture or healthcare?",
    answer:
      "Absolutely! We have extensive experience with IoT implementations including agricultural sensors, smart irrigation systems, wearable health devices, and remote patient monitoring equipment. We handle everything from device integration to cloud backend and analytics.",
  },
  {
    question: "Do you help with regulatory compliance in healthcare?",
    answer:
      "Yes, all our healthcare solutions are built with regulatory compliance in mind. We're experienced with HIPAA, GDPR, HL7 FHIR interoperability standards, and local healthcare regulations. We can also help you navigate the compliance process.",
  },
  {
    question: "What's your experience with AI in healthcare and agriculture?",
    answer:
      "We've built AI solutions for medical image analysis, crop disease detection, yield prediction, and clinical decision support. Our AI models are trained on relevant datasets and validated for accuracy before deployment.",
  },
  
] as const;

// Add these to your existing constants.ts file

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "AI & ML" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "technology", label: "Technology Solutions" },
  { id: "realestate", label: "Real Estate Tech" },
  { id: "agritech", label: "Agricultural Tech" },
  { id: "healthtech", label: "Health Technology" },
] as const;

// Enhanced services with more details
export const SERVICES_DETAILED = [
  {
    id: 1,
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    shortDescription: "Custom web and mobile applications built with cutting-edge technologies.",
    description: "We build lightning-fast, scalable web applications and native mobile apps that deliver exceptional user experiences. Our team specializes in React, Next.js, React Native, and Flutter, ensuring your application performs flawlessly across all platforms.",
    longDescription: `Our web and mobile development services are designed to help businesses create powerful digital products that scale. We combine cutting-edge technologies with battle-tested development practices to deliver solutions that not only look great but perform exceptionally well.

Whether you need a progressive web app, a native mobile application, or a complex enterprise system, our team has the expertise to bring your vision to life. We focus on clean, maintainable code and follow industry best practices to ensure your application is built to last.`,
    icon: "Code",
    category: "development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    ],
    features: [
      {
        title: "Progressive Web Apps (PWA)",
        description: "Fast, reliable, and engaging web apps that work offline and feel like native apps.",
        icon: "Globe",
      },
      {
        title: "Native iOS & Android Apps",
        description: "High-performance native applications built with Swift, Kotlin, or cross-platform frameworks.",
        icon: "Smartphone",
      },
      {
        title: "Cross-platform Development",
        description: "Build once, deploy everywhere with React Native or Flutter for maximum efficiency.",
        icon: "Layers",
      },
      {
        title: "API Development & Integration",
        description: "Robust RESTful and GraphQL APIs that power your applications and integrate seamlessly.",
        icon: "Plug",
      },
      {
        title: "Real-time Applications",
        description: "Live chat, notifications, and collaborative features powered by WebSockets.",
        icon: "Zap",
      },
      {
        title: "E-commerce Platforms",
        description: "Custom online stores with secure payments, inventory management, and analytics.",
        icon: "ShoppingBag",
      },
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    benefits: [
      "Faster time-to-market with agile development",
      "Scalable architecture that grows with your business",
      "Cross-platform compatibility for maximum reach",
      "Ongoing support and maintenance",
    ],
    caseStudies: [
      {
        title: "FinTech Dashboard",
        description: "Built a real-time financial analytics dashboard processing 1M+ transactions daily.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        results: ["300% faster data processing", "99.9% uptime", "50K+ daily users"],
      },
      {
        title: "Healthcare Mobile App",
        description: "Developed a telemedicine platform connecting patients with doctors across Nigeria.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        results: ["100K+ app downloads", "4.8 star rating", "40% reduced wait times"],
      },
    ],
    pricing: {
      starting: "$5,000",
      note: "Final pricing depends on project scope and requirements",
    },
    faqs: [
      {
        question: "How long does it take to build a web application?",
        answer: "Timeline varies based on complexity. A simple web app takes 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our discovery phase.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes! We offer various maintenance packages including bug fixes, security updates, feature additions, and 24/7 monitoring.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer: "Absolutely. We can audit, refactor, and enhance existing applications. We'll assess your current code and provide recommendations.",
      },
    ],
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX Design & Branding",
    shortDescription: "Beautiful, intuitive designs that convert visitors into customers.",
    description: "Our design team creates stunning user interfaces and seamless user experiences. We focus on accessibility, usability, and visual excellence to make your brand stand out in the digital landscape.",
    longDescription: `Great design is more than just aesthetics—it's about creating meaningful experiences that resonate with your users. Our UI/UX design services combine research-driven insights with creative excellence to deliver designs that not only look beautiful but also drive real business results.

From initial research and wireframing to final visual design and prototyping, we follow a comprehensive design process that ensures every pixel serves a purpose. We believe in designing with empathy, understanding your users' needs, and creating interfaces that feel intuitive and delightful to use.`,
    icon: "Palette",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=800&q=80",
    ],
    features: [
      {
        title: "User Interface Design",
        description: "Pixel-perfect interfaces that are both beautiful and functional across all devices.",
        icon: "Layout",
      },
      {
        title: "User Experience Research",
        description: "Data-driven insights through user interviews, surveys, and usability testing.",
        icon: "Users",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive prototypes that bring your ideas to life before development begins.",
        icon: "PenTool",
      },
      {
        title: "Design Systems",
        description: "Scalable component libraries that ensure consistency across your digital products.",
        icon: "Component",
      },
      {
        title: "Brand Identity",
        description: "Comprehensive branding including logos, color palettes, typography, and guidelines.",
        icon: "Star",
      },
      {
        title: "Motion Design",
        description: "Engaging micro-interactions and animations that delight users.",
        icon: "Play",
      },
    ],
    technologies: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
      { name: "Framer", icon: "https://www.vectorlogo.zone/logos/fraboringcom/fraboringcom-icon.svg" },
    ],
    benefits: [
      "Increased user engagement and retention",
      "Higher conversion rates",
      "Reduced development costs through clear specifications",
      "Consistent brand experience across all touchpoints",
    ],
    caseStudies: [
      {
        title: "E-commerce Redesign",
        description: "Complete UX overhaul for a fashion retailer, improving the shopping experience.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        results: ["150% increase in conversions", "40% lower bounce rate", "4.9 user satisfaction"],
      },
      {
        title: "Banking App Design",
        description: "Designed an intuitive mobile banking experience for a leading Nigerian bank.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
        results: ["200K+ active users", "60% task completion improvement", "Best Banking App 2023"],
      },
    ],
    pricing: {
      starting: "$3,000",
      note: "Pricing varies based on project scope and deliverables",
    },
    faqs: [
      {
        question: "What deliverables will I receive?",
        answer: "You'll receive all design files (Figma), design system documentation, interactive prototypes, and asset exports ready for development.",
      },
      {
        question: "How do you ensure designs are user-friendly?",
        answer: "We conduct user research, create personas, perform usability testing, and iterate based on real user feedback throughout the design process.",
      },
      {
        question: "Can you redesign our existing product?",
        answer: "Yes! We specialize in product redesigns. We'll audit your current design, identify pain points, and create an improved experience.",
      },
    ],
  },
  {
    id: 3,
    slug: "digital-marketing-seo",
    title: "Digital Marketing & SEO",
    shortDescription: "Data-driven marketing strategies that drive growth and visibility.",
    description: "We help businesses grow their online presence through strategic SEO, content marketing, social media management, and paid advertising campaigns that deliver measurable results.",
    longDescription: `In today's competitive digital landscape, having a great product isn't enough—you need to be found. Our digital marketing services are designed to increase your visibility, drive qualified traffic, and convert visitors into customers.

We take a data-driven approach to marketing, using analytics and insights to continuously optimize your campaigns. From SEO and content marketing to paid advertising and social media, we create comprehensive strategies that work together to achieve your business goals.`,
    icon: "TrendingUp",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    features: [
      {
        title: "Search Engine Optimization",
        description: "Improve your rankings and drive organic traffic with technical and content SEO.",
        icon: "Search",
      },
      {
        title: "Content Marketing",
        description: "Engaging content that attracts, educates, and converts your target audience.",
        icon: "FileText",
      },
      {
        title: "Social Media Marketing",
        description: "Build community and drive engagement across all major social platforms.",
        icon: "Share2",
      },
      {
        title: "PPC Advertising",
        description: "Targeted paid campaigns on Google, Facebook, LinkedIn, and more.",
        icon: "Target",
      },
      {
        title: "Email Marketing",
        description: "Automated email campaigns that nurture leads and drive conversions.",
        icon: "Mail",
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive dashboards and reports to track ROI and optimize performance.",
        icon: "BarChart",
      },
    ],
    technologies: [
      { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
      { name: "SEMrush", icon: "https://cdn.worldvectorlogo.com/logos/semrush.svg" },
      { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
      { name: "Mailchimp", icon: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg" },
      { name: "Google Ads", icon: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" },
      { name: "Meta Ads", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
    ],
    benefits: [
      "Increased organic search visibility",
      "Higher quality leads and conversions",
      "Improved brand awareness and authority",
      "Measurable ROI on marketing spend",
    ],
    caseStudies: [
      {
        title: "E-commerce SEO Success",
        description: "Helped an online retailer achieve first-page rankings for 500+ keywords.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80",
        results: ["400% organic traffic increase", "First page for 500+ keywords", "200% revenue growth"],
      },
      {
        title: "B2B Lead Generation",
        description: "Comprehensive digital strategy for a SaaS company targeting enterprise clients.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        results: ["10X lead generation", "50% lower cost per lead", "$2M pipeline generated"],
      },
    ],
    pricing: {
      starting: "$2,000/month",
      note: "Monthly retainer based on scope and channels",
    },
    faqs: [
      {
        question: "How long before I see SEO results?",
        answer: "SEO is a long-term investment. You'll typically start seeing improvements in 3-6 months, with significant results in 6-12 months.",
      },
      {
        question: "What's included in your marketing packages?",
        answer: "Our packages include strategy development, content creation, campaign management, optimization, and monthly reporting. Specific deliverables depend on your chosen channels.",
      },
      {
        question: "Do you guarantee specific results?",
        answer: "We don't guarantee specific rankings (no one ethically can), but we do guarantee our expertise, effort, and transparent reporting on progress.",
      },
    ],
  },
  {
    id: 4,
    slug: "cloud-solutions-devops",
    title: "Cloud Solutions & DevOps",
    shortDescription: "Scalable cloud infrastructure and automated deployment pipelines.",
    description: "We design and implement robust cloud architectures on AWS, Azure, and GCP. Our DevOps practices ensure continuous integration, delivery, and monitoring for reliable, scalable systems.",
    longDescription: `Modern applications require modern infrastructure. Our cloud and DevOps services help businesses build, deploy, and scale their applications with confidence. We design cloud architectures that are secure, cost-effective, and built for growth.

From initial cloud migration to ongoing optimization, we handle all aspects of your infrastructure. Our DevOps practices automate repetitive tasks, reduce deployment risks, and enable your team to ship features faster while maintaining high reliability.`,
    icon: "Cloud",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    ],
    features: [
      {
        title: "Cloud Architecture Design",
        description: "Scalable, secure architectures on AWS, Azure, or GCP tailored to your needs.",
        icon: "Cloud",
      },
      {
        title: "Infrastructure as Code",
        description: "Reproducible infrastructure with Terraform, CloudFormation, or Pulumi.",
        icon: "FileCode",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated testing and deployment pipelines for faster, safer releases.",
        icon: "GitBranch",
      },
      {
        title: "Container Orchestration",
        description: "Docker and Kubernetes for scalable, portable containerized applications.",
        icon: "Box",
      },
      {
        title: "Monitoring & Logging",
        description: "Comprehensive observability with real-time alerts and dashboards.",
        icon: "Activity",
      },
      {
        title: "Security & Compliance",
        description: "Security best practices and compliance for GDPR, HIPAA, SOC2, and more.",
        icon: "Shield",
      },
    ],
    technologies: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Faster deployment cycles",
      "Improved system reliability",
      "Enhanced security posture",
    ],
    caseStudies: [
      {
        title: "Cloud Migration",
        description: "Migrated a legacy monolith to a microservices architecture on AWS.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
        results: ["70% cost reduction", "99.99% uptime", "10x faster deployments"],
      },
      {
        title: "DevOps Transformation",
        description: "Implemented CI/CD and infrastructure as code for a fintech startup.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        results: ["Daily deployments", "90% fewer incidents", "50% faster development"],
      },
    ],
    pricing: {
      starting: "$4,000",
      note: "Project-based or monthly retainer options available",
    },
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer: "It depends on your specific needs, existing infrastructure, and budget. We'll assess your requirements and recommend the best fit—whether that's AWS, Azure, GCP, or a multi-cloud approach.",
      },
      {
        question: "Can you help migrate our existing infrastructure?",
        answer: "Yes! We specialize in cloud migrations. We'll assess your current setup, plan the migration, and execute it with minimal downtime.",
      },
      {
        question: "Do you provide 24/7 support?",
        answer: "Yes, we offer 24/7 monitoring and support packages to ensure your infrastructure runs smoothly around the clock.",
      },
    ],
  },
  {
    id: 5,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDescription: "Intelligent solutions powered by artificial intelligence and ML.",
    description: "We integrate AI and machine learning capabilities into your applications. From chatbots to predictive analytics, we help you leverage the power of AI to transform your business.",
    longDescription: `Artificial Intelligence is no longer just for tech giants—it's accessible to businesses of all sizes. Our AI and machine learning services help you harness the power of intelligent systems to automate processes, gain insights, and create personalized experiences.

Whether you need a custom AI model, a conversational chatbot, or predictive analytics, our team has the expertise to deliver solutions that drive real business value. We work with the latest technologies including OpenAI, TensorFlow, and PyTorch to build AI systems that are accurate, scalable, and ethical.`,
    icon: "Brain",
    category: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    ],
    features: [
      {
        title: "Custom AI Solutions",
        description: "Bespoke AI models trained on your data for your specific use cases.",
        icon: "Cpu",
      },
      {
        title: "Machine Learning Models",
        description: "Predictive models for forecasting, classification, and recommendations.",
        icon: "TrendingUp",
      },
      {
        title: "Natural Language Processing",
        description: "Text analysis, sentiment detection, and language understanding.",
        icon: "MessageSquare",
      },
      {
        title: "Computer Vision",
        description: "Image recognition, object detection, and visual analysis.",
        icon: "Eye",
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven predictions for business intelligence and decision making.",
        icon: "LineChart",
      },
      {
        title: "AI Chatbots",
        description: "Intelligent conversational agents for customer support and engagement.",
        icon: "Bot",
      },
    ],
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenAI", icon: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
    benefits: [
      "Automated repetitive tasks",
      "Data-driven decision making",
      "Personalized customer experiences",
      "Competitive advantage through innovation",
    ],
    caseStudies: [
      {
        title: "AI Customer Support",
        description: "Built an AI chatbot handling 80% of customer inquiries automatically.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
        results: ["80% inquiries automated", "24/7 availability", "60% cost reduction"],
      },
      {
        title: "Predictive Maintenance",
        description: "ML system predicting equipment failures for a manufacturing company.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        results: ["90% prediction accuracy", "50% fewer breakdowns", "$1M+ saved annually"],
      },
    ],
    pricing: {
      starting: "$10,000",
      note: "AI projects vary significantly based on complexity and data requirements",
    },
    faqs: [
      {
        question: "Do we need our own data to get started?",
        answer: "While having your own data is ideal, we can work with you to collect data, use transfer learning, or leverage pre-trained models depending on your use case.",
      },
      {
        question: "How long does it take to build an AI solution?",
        answer: "Simple AI integrations (like chatbots) can take 4-8 weeks. Custom ML models typically take 3-6 months including data preparation and training.",
      },
      {
        question: "How do you ensure AI ethics and fairness?",
        answer: "We follow AI ethics best practices, including bias testing, explainability, and transparency. We ensure your AI systems are fair and compliant with regulations.",
      },
    ],
  },
  {
    id: 6,
    slug: "ecommerce-solutions",
    title: "E-commerce & Custom Software",
    shortDescription: "End-to-end e-commerce platforms and custom software solutions.",
    description: "We build powerful e-commerce platforms and custom software solutions tailored to your business needs. From inventory management to payment processing, we've got you covered.",
    longDescription: `E-commerce success requires more than just an online store—it requires a seamless experience that converts visitors into loyal customers. Our e-commerce solutions are designed to maximize conversions, streamline operations, and scale with your business.

Beyond e-commerce, we build custom software solutions for unique business challenges. Whether you need an inventory management system, a CRM, or a completely custom application, our team can design and build software that perfectly fits your workflow.`,
    icon: "ShoppingCart",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    features: [
      {
        title: "Custom E-commerce Platforms",
        description: "Bespoke online stores built for performance, scalability, and conversions.",
        icon: "Store",
      },
      {
        title: "Shopify Development",
        description: "Custom Shopify themes, apps, and integrations for your online store.",
        icon: "ShoppingBag",
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with Stripe, PayPal, Paystack, and more.",
        icon: "CreditCard",
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking across multiple channels and locations.",
        icon: "Package",
      },
      {
        title: "Order Management Systems",
        description: "Streamlined order processing, fulfillment, and tracking.",
        icon: "ClipboardList",
      },
      {
        title: "Custom CRM/ERP Solutions",
        description: "Tailored business management systems for your unique workflows.",
        icon: "Database",
      },
    ],
    technologies: [
      { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
      { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
      { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
    benefits: [
      "Increased online sales and conversions",
      "Streamlined business operations",
      "Better customer experience",
      "Scalable infrastructure for growth",
    ],
    caseStudies: [
      {
        title: "Fashion E-commerce Platform",
        description: "Built a multi-vendor marketplace for African fashion brands.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
        results: ["$5M+ GMV in year 1", "500+ vendors", "100K+ customers"],
      },
      {
        title: "Custom Inventory System",
        description: "Developed an inventory management system for a retail chain.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
        results: ["50% reduced stockouts", "30% lower carrying costs", "Real-time visibility"],
      },
    ],
    pricing: {
      starting: "$8,000",
      note: "E-commerce and custom software projects vary based on features and complexity",
    },
    faqs: [
      {
        question: "Should I use Shopify or a custom platform?",
        answer: "Shopify is great for getting started quickly with lower upfront costs. Custom platforms are better for unique requirements, complex integrations, or when you've outgrown Shopify's limitations.",
      },
      {
        question: "Can you migrate my existing store?",
        answer: "Yes! We handle migrations from any platform. We'll preserve your data, SEO rankings, and minimize downtime during the transition.",
      },
      {
        question: "What payment methods can you integrate?",
        answer: "We can integrate virtually any payment gateway including Stripe, PayPal, Paystack, Flutterwave, bank transfers, and more. We'll recommend the best options for your market.",
      },
    ],
  },
  {
    id: 7,
    slug: "technology-solutions",
    title: "Technology Solutions & Consulting",
    shortDescription: "Comprehensive technology solutions to modernize and transform your business operations.",
    description: "We provide end-to-end technology solutions including IT consulting, system integration, cybersecurity, and digital transformation services to help businesses stay competitive in the rapidly evolving digital landscape.",
    longDescription: `In today's fast-paced digital world, technology is not just a support function—it's a strategic differentiator. Our Technology Solutions & Consulting services help organizations navigate complex technology decisions, modernize legacy systems, and build robust digital foundations for sustainable growth.

We bring together deep technical expertise with business acumen to deliver solutions that drive real value. Whether you're looking to optimize existing systems, implement new technologies, or completely transform your digital infrastructure, our team provides the guidance and hands-on support you need.

Our approach combines strategic consulting with practical implementation, ensuring that technology investments align with business objectives and deliver measurable results. We work with organizations of all sizes, from startups to large enterprises, across various industries.`,
    icon: "Cpu",
    category: "technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
    features: [
      {
        title: "IT Strategy & Consulting",
        description: "Strategic technology roadmaps aligned with your business goals and industry best practices.",
        icon: "Compass",
      },
      {
        title: "System Integration",
        description: "Seamless integration of disparate systems, applications, and data sources for unified operations.",
        icon: "Link",
      },
      {
        title: "Cybersecurity Solutions",
        description: "Comprehensive security assessments, implementation, and managed security services.",
        icon: "Shield",
      },
      {
        title: "Digital Transformation",
        description: "End-to-end digital transformation initiatives that revolutionize business processes.",
        icon: "Sparkles",
      },
      {
        title: "Legacy System Modernization",
        description: "Upgrade and modernize outdated systems while preserving critical business logic.",
        icon: "RefreshCw",
      },
      {
        title: "Enterprise Software Solutions",
        description: "Custom enterprise applications including ERP, CRM, and business intelligence platforms.",
        icon: "Building",
      },
      {
        title: "Cloud Migration & Strategy",
        description: "Strategic cloud adoption, migration planning, and multi-cloud management.",
        icon: "Cloud",
      },
      {
        title: "IT Infrastructure Management",
        description: "Proactive monitoring, maintenance, and optimization of IT infrastructure.",
        icon: "Server",
      },
    ],
    technologies: [
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "ServiceNow", icon: "https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg" },
      { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
      { name: "SAP", icon: "https://www.vectorlogo.zone/logos/sap/sap-icon.svg" },
    ],
    benefits: [
      "Reduced operational costs through automation and optimization",
      "Enhanced security posture and regulatory compliance",
      "Improved business agility and faster time-to-market",
      "Seamless integration across all business systems",
      "Future-proof technology foundation for growth",
      "24/7 expert support and monitoring",
    ],
    caseStudies: [
      {
        title: "Enterprise Digital Transformation",
        description: "Led a comprehensive digital transformation for a major financial institution, modernizing core banking systems and implementing AI-driven customer service.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
        results: ["60% faster transaction processing", "40% reduction in IT costs", "99.99% system uptime"],
      },
      {
        title: "Cybersecurity Overhaul",
        description: "Implemented zero-trust security architecture for a healthcare provider, protecting sensitive patient data across 50+ locations.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
        results: ["Zero security breaches", "100% HIPAA compliance", "70% faster threat detection"],
      },
      {
        title: "Legacy Modernization",
        description: "Migrated a 20-year-old monolithic system to microservices architecture for a logistics company.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        results: ["10x faster deployments", "50% infrastructure cost savings", "300% improved scalability"],
      },
    ],
    pricing: {
      starting: "$15,000",
      note: "Consulting engagements typically start with an assessment phase. Ongoing managed services available.",
    },
    faqs: [
      {
        question: "How do you approach digital transformation projects?",
        answer: "We start with a comprehensive assessment of your current state, business objectives, and technology landscape. We then develop a phased roadmap that prioritizes quick wins while building toward long-term transformation goals. Our approach minimizes disruption while maximizing value delivery.",
      },
      {
        question: "Can you work with our existing IT team?",
        answer: "Absolutely! We often work alongside internal IT teams, providing specialized expertise and additional capacity. We can also provide training and knowledge transfer to ensure your team can maintain and evolve solutions independently.",
      },
      {
        question: "What industries do you specialize in?",
        answer: "We have deep expertise in financial services, healthcare, manufacturing, retail, and logistics. However, our technology solutions are adaptable to virtually any industry, and we bring cross-industry best practices to every engagement.",
      },
      {
        question: "How do you ensure security during system integrations?",
        answer: "Security is embedded in everything we do. We follow security-by-design principles, conduct thorough risk assessments, implement encryption and access controls, and ensure compliance with relevant regulations. All integrations undergo rigorous security testing.",
      },
    ],
  },
  {
    id: 8,
    slug: "real-estate-technology",
    title: "Real Estate Technology Solutions (PropTech)",
    shortDescription: "PropTech solutions revolutionizing property management, sales, and real estate operations.",
    description: "We build innovative real estate technology solutions including property management systems, virtual tours, smart building IoT integration, and real estate marketplaces that transform how properties are bought, sold, managed, and experienced.",
    longDescription: `The real estate industry is undergoing a massive digital transformation. From virtual property tours to AI-powered property valuations, technology is reshaping every aspect of real estate. Our PropTech solutions help real estate professionals, property managers, and developers leverage cutting-edge technology to stay competitive and deliver exceptional experiences.

We understand the unique challenges of the real estate industry—complex transactions, multiple stakeholders, physical assets that need digital representation, and the critical importance of location-based data. Our solutions address these challenges while creating new opportunities for efficiency, engagement, and revenue growth.

Whether you're a property management company looking to streamline operations, a real estate agency wanting to offer immersive virtual tours, or a developer planning smart buildings, we have the expertise and technology to bring your vision to life.`,
    icon: "Building2",
    category: "realestate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
    features: [
      {
        title: "Property Management Systems",
        description: "Comprehensive platforms for managing properties, tenants, leases, maintenance, and financials.",
        icon: "ClipboardList",
      },
      {
        title: "Virtual Property Tours (VR/AR)",
        description: "Immersive 3D virtual tours and augmented reality experiences for remote property viewing.",
        icon: "View",
      },
      {
        title: "Real Estate Marketplaces",
        description: "Custom property listing platforms with advanced search, filtering, and lead management.",
        icon: "Store",
      },
      {
        title: "Smart Building IoT",
        description: "IoT integration for building automation, energy management, and predictive maintenance.",
        icon: "Wifi",
      },
      {
        title: "Tenant & Owner Portals",
        description: "Self-service portals for tenants to pay rent, request maintenance, and communicate.",
        icon: "Users",
      },
      {
        title: "Real Estate Analytics & AI",
        description: "AI-powered property valuations, market analysis, and investment insights.",
        icon: "TrendingUp",
      },
      {
        title: "Document Management",
        description: "Digital lease management, e-signatures, and secure document storage.",
        icon: "FileText",
      },
      {
        title: "GIS & Location Intelligence",
        description: "Advanced mapping, geospatial analysis, and location-based property insights.",
        icon: "MapPin",
      },
    ],
    technologies: [
      { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    benefits: [
      "Increased property visibility and faster sales cycles",
      "Reduced operational costs through automation",
      "Enhanced tenant satisfaction and retention",
      "Data-driven investment and pricing decisions",
      "24/7 property showcase with virtual tours",
      "Streamlined compliance and documentation",
    ],
    caseStudies: [
      {
        title: "Luxury Real Estate Marketplace",
        description: "Built a premium property marketplace for high-end real estate with 3D virtual tours and AI-powered matching.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        results: ["500+ luxury properties listed", "40% faster sales cycle", "$50M+ in transactions"],
      },
      {
        title: "Smart Property Management Platform",
        description: "Developed an integrated property management system for a company managing 10,000+ units across Nigeria.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        results: ["80% reduction in manual tasks", "95% on-time rent collection", "4.8 tenant satisfaction"],
      },
      {
        title: "Smart Building IoT Integration",
        description: "Implemented IoT sensors and automation for a commercial building complex, optimizing energy and security.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
        results: ["35% energy cost reduction", "Real-time occupancy insights", "Predictive maintenance alerts"],
      },
    ],
    pricing: {
      starting: "$12,000",
      note: "Custom PropTech solutions are priced based on features, scale, and integration complexity.",
    },
    faqs: [
      {
        question: "Can you integrate with existing property management software?",
        answer: "Yes, we specialize in integrations with popular systems like Yardi, AppFolio, Buildium, and custom legacy systems. We use APIs and middleware to ensure seamless data flow between systems.",
      },
      {
        question: "How do virtual tours work?",
        answer: "We create immersive 3D virtual tours using a combination of 360° photography, LiDAR scanning, and 3D modeling. Tours can be viewed on any device and optionally experienced in VR headsets for fully immersive walkthroughs.",
      },
      {
        question: "Do you support blockchain for real estate transactions?",
        answer: "Yes, we can implement blockchain solutions for property tokenization, smart contracts for lease agreements, and transparent transaction records. This is particularly useful for fractional ownership and international transactions.",
      },
      {
        question: "How do you handle data security for tenant information?",
        answer: "We implement bank-level security including encryption at rest and in transit, role-based access controls, regular security audits, and compliance with data protection regulations like GDPR and local privacy laws.",
      },
    ],
  },
  {
    id: 9,
    slug: "agricultural-technology",
    title: "Agricultural Technology (AgriTech)",
    shortDescription: "Smart farming solutions leveraging IoT, AI, and data analytics for modern agriculture.",
    description: "We develop cutting-edge agricultural technology solutions including precision farming, crop monitoring, supply chain management, and farm management systems to boost productivity, sustainability, and profitability for modern farmers.",
    longDescription: `Agriculture is the backbone of many economies, and technology is revolutionizing how we grow food. Our AgriTech solutions help farmers, agribusinesses, and agricultural organizations harness the power of IoT, artificial intelligence, satellite imagery, and data analytics to make smarter decisions and achieve better outcomes.

From small-scale farmers looking to optimize irrigation to large agricultural enterprises managing thousands of hectares, our solutions are designed to scale and adapt to diverse agricultural contexts. We understand the unique challenges of agriculture—unpredictable weather, pest management, market volatility, and the need for sustainable practices.

Our team combines deep agricultural domain knowledge with cutting-edge technology expertise to deliver solutions that are not only innovative but also practical and easy to use in field conditions. We're committed to helping feed the world more efficiently and sustainably.`,
    icon: "Sprout",
    category: "agritech",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      "https://images.unsplash.com/photo-1592982537447-6e3c4c4c9a21?w=800&q=80",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
    ],
    features: [
      {
        title: "Precision Farming Solutions",
        description: "Variable rate application, GPS-guided operations, and site-specific crop management.",
        icon: "Target",
      },
      {
        title: "Crop Monitoring & Analytics",
        description: "Real-time crop health monitoring using drones, satellites, and ground sensors.",
        icon: "Activity",
      },
      {
        title: "Farm Management Systems",
        description: "Comprehensive platforms for planning, tracking, and optimizing farm operations.",
        icon: "ClipboardList",
      },
      {
        title: "Supply Chain Traceability",
        description: "Blockchain-powered traceability from farm to fork for transparency and compliance.",
        icon: "Link",
      },
      {
        title: "IoT Sensor Networks",
        description: "Soil moisture, weather, and environmental sensors for data-driven decisions.",
        icon: "Wifi",
      },
      {
        title: "Agricultural Marketplaces",
        description: "Digital platforms connecting farmers with buyers, suppliers, and service providers.",
        icon: "ShoppingCart",
      },
      {
        title: "Smart Irrigation Systems",
        description: "AI-powered irrigation scheduling and automation for water conservation.",
        icon: "Droplets",
      },
      {
        title: "Livestock Management",
        description: "Animal tracking, health monitoring, and breeding management solutions.",
        icon: "Heart",
      },
    ],
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "AWS IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
    benefits: [
      "Up to 30% increase in crop yields through precision farming",
      "40% reduction in water usage with smart irrigation",
      "Real-time visibility into crop health and field conditions",
      "Reduced input costs through optimized resource application",
      "Better market access and fairer prices for farmers",
      "Full traceability for premium market positioning",
    ],
    caseStudies: [
      {
        title: "Smart Farming Platform - Nigeria",
        description: "Deployed a comprehensive precision farming solution for 5,000+ smallholder farmers across Northern Nigeria.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
        results: ["35% yield improvement", "50,000+ hectares covered", "₦2B+ farmer income generated"],
      },
      {
        title: "Agricultural Marketplace",
        description: "Built a B2B marketplace connecting farmers directly with food processors and exporters.",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
        results: ["10,000+ registered farmers", "30% better prices for farmers", "100K+ tons traded annually"],
      },
      {
        title: "Livestock Monitoring System",
        description: "Implemented IoT-based cattle tracking and health monitoring for a large-scale ranch operation.",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
        results: ["25% reduction in cattle mortality", "Real-time GPS tracking", "Early disease detection"],
      },
    ],
    pricing: {
      starting: "$8,000",
      note: "AgriTech solutions are customized based on farm size, crops, and specific needs. Hardware costs may be additional.",
    },
    faqs: [
      {
        question: "Do your solutions work for smallholder farmers?",
        answer: "Absolutely! We design solutions that are accessible and affordable for smallholder farmers. Our mobile-first approach means farmers only need a smartphone to access powerful insights. We also offer shared equipment models and cooperative-based implementations.",
      },
      {
        question: "What types of crops do your solutions support?",
        answer: "Our platform supports a wide range of crops including grains (maize, rice, wheat), cash crops (cocoa, coffee, cotton), vegetables, fruits, and specialty crops. We customize crop models and recommendations based on local conditions and practices.",
      },
      {
        question: "How do IoT sensors work in areas with poor connectivity?",
        answer: "We design for offline-first operation. Sensors store data locally and sync when connectivity is available. We also support satellite connectivity for remote areas and optimize data transmission to work on 2G networks when necessary.",
      },
      {
        question: "Can you integrate with government agricultural programs?",
        answer: "Yes, we have experience integrating with government extension services, subsidy programs, and agricultural databases. Our platform can generate reports required for compliance and program participation.",
      },
    ],
  },
  {
    id: 10,
    slug: "health-technology",
    title: "Health Technology (HealthTech)",
    shortDescription: "Digital health solutions transforming patient care, medical operations, and healthcare delivery.",
    description: "We create innovative healthcare technology solutions including telemedicine platforms, electronic health records, medical IoT devices, and AI-powered diagnostics to improve patient outcomes, streamline operations, and make healthcare more accessible.",
    longDescription: `Healthcare is being transformed by technology, and we're at the forefront of this revolution. Our HealthTech solutions help healthcare providers, hospitals, clinics, and health startups leverage digital tools to deliver better care, reach more patients, and operate more efficiently.

From telemedicine platforms that connect patients with doctors across vast distances to AI systems that help diagnose diseases earlier, we build technology that literally saves lives. We understand the critical importance of reliability, security, and compliance in healthcare, and we design every solution with these principles at the core.

Our team includes healthcare technology specialists who understand clinical workflows, regulatory requirements like HIPAA and GDPR, and the unique challenges of implementing technology in healthcare settings. We work closely with healthcare professionals to ensure our solutions truly meet the needs of both providers and patients.`,
    icon: "HeartPulse",
    category: "healthtech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    ],
    features: [
      {
        title: "Telemedicine Platforms",
        description: "HIPAA-compliant video consultations, chat, and remote patient monitoring solutions.",
        icon: "Video",
      },
      {
        title: "Electronic Health Records (EHR)",
        description: "Custom EHR systems with interoperability, clinical decision support, and analytics.",
        icon: "FileText",
      },
      {
        title: "Medical IoT Integration",
        description: "Integration with wearables, medical devices, and remote monitoring equipment.",
        icon: "Wifi",
      },
      {
        title: "AI-Powered Diagnostics",
        description: "Machine learning models for medical imaging analysis, risk prediction, and clinical insights.",
        icon: "Brain",
      },
      {
        title: "Patient Engagement Apps",
        description: "Mobile apps for appointment booking, health tracking, medication reminders, and education.",
        icon: "Smartphone",
      },
      {
        title: "Healthcare Analytics",
        description: "Population health management, operational analytics, and clinical quality reporting.",
        icon: "BarChart",
      },
      {
        title: "Hospital Management Systems",
        description: "Comprehensive systems for patient flow, resource management, and revenue cycle.",
        icon: "Building",
      },
      {
        title: "Mental Health Solutions",
        description: "Digital therapeutics, therapy platforms, and mental wellness applications.",
        icon: "Heart",
      },
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
    benefits: [
      "Improved patient access to healthcare services",
      "Reduced administrative burden on healthcare staff",
      "Better clinical outcomes through data-driven insights",
      "Enhanced care coordination across providers",
      "Increased operational efficiency and cost savings",
      "Full regulatory compliance (HIPAA, GDPR, HL7 FHIR)",
    ],
    caseStudies: [
      {
        title: "National Telemedicine Platform",
        description: "Built a telemedicine platform connecting patients in rural Nigeria with specialists in urban centers.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        results: ["200,000+ consultations delivered", "50+ healthcare facilities connected", "40% reduced patient travel"],
      },
      {
        title: "AI Diagnostic Assistant",
        description: "Developed an AI system for early detection of diabetic retinopathy from retinal images.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
        results: ["95% diagnostic accuracy", "10x faster screening", "Early detection for 15,000+ patients"],
      },
      {
        title: "Hospital Management System",
        description: "Implemented a comprehensive HMS for a 500-bed hospital, digitizing all operations.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
        results: ["60% reduction in wait times", "Paperless operations", "30% improvement in bed utilization"],
      },
    ],
    pricing: {
      starting: "$20,000",
      note: "HealthTech solutions require significant compliance and security measures. Pricing varies based on scale and regulatory requirements.",
    },
    faqs: [
      {
        question: "How do you ensure HIPAA compliance?",
        answer: "HIPAA compliance is built into our development process from day one. We implement encryption at rest and in transit, access controls, audit logging, BAA agreements with cloud providers, regular security assessments, and staff training. We can also help you develop policies and procedures required for HIPAA compliance.",
      },
      {
        question: "Can you integrate with existing hospital systems?",
        answer: "Yes, we have extensive experience integrating with EHR systems like Epic, Cerner, and AllScripts using HL7 FHIR, HL7 v2, and other healthcare interoperability standards. We can also integrate with laboratory systems, imaging systems (PACS), and medical devices.",
      },
      {
        question: "Do you support telemedicine across international borders?",
        answer: "Yes, but cross-border telemedicine requires careful consideration of medical licensing, data protection laws, and liability issues. We design solutions that can handle multi-jurisdictional requirements and can advise on regulatory considerations.",
      },
      {
        question: "How accurate are your AI diagnostic tools?",
        answer: "Our AI models are trained on large, diverse datasets and validated against clinical gold standards. Accuracy varies by use case, but our diagnostic tools typically achieve 90-95%+ accuracy. Importantly, our AI is designed to assist clinicians, not replace them—final decisions always rest with qualified healthcare professionals.",
      },
      {
        question: "Can you help with FDA or regulatory approval for medical devices?",
        answer: "While we don't directly handle regulatory submissions, we design and develop solutions with regulatory requirements in mind (FDA, CE marking, etc.). We can help prepare technical documentation, implement quality management systems (ISO 13485), and work with regulatory consultants to support your approval process.",
      },
    ],
  },
] as const;

// Related services for cross-linking
export const RELATED_SERVICES: Record<string, string[]> = {
  "web-mobile-development": ["ui-ux-design", "cloud-solutions-devops", "ecommerce-solutions"],
  "ui-ux-design": ["web-mobile-development", "digital-marketing-seo", "ecommerce-solutions"],
  "digital-marketing-seo": ["ui-ux-design", "web-mobile-development", "ecommerce-solutions"],
  "cloud-solutions-devops": ["web-mobile-development", "ai-machine-learning", "ecommerce-solutions"],
  "ai-machine-learning": ["web-mobile-development", "cloud-solutions-devops", "digital-marketing-seo"],
  "ecommerce-solutions": ["web-mobile-development", "ui-ux-design", "digital-marketing-seo"],
  "technology-solutions": ["cloud-solutions-devops", "ai-machine-learning", "web-mobile-development"],
  "real-estate-technology": ["web-mobile-development", "ai-machine-learning", "ui-ux-design"],
  "agricultural-technology": ["ai-machine-learning", "cloud-solutions-devops", "web-mobile-development"],
  "health-technology": ["ai-machine-learning", "cloud-solutions-devops", "web-mobile-development"],
};


export const COMPANY_INFO = {
  name: "Qwik Multi Services",
  tagline: "Lightning-Fast Digital Solutions",
  founded: 2018,
  headquarters: "Abuja, Nigeria",
  employees: "50+",
  description: `Qwik Multi Services is a leading digital agency specializing in web development, mobile applications, UI/UX design, and digital transformation. Founded in 2018, we've grown from a small team of passionate developers to a full-service digital agency serving clients across 12+ countries.

Our mission is to help businesses thrive in the digital age by delivering fast, reliable, and innovative solutions. We combine technical excellence with creative thinking to build products that make a real impact.`,
} as const;

export const COMPANY_VALUES = [
  {
    title: "Innovation First",
    description: "We embrace new technologies and creative solutions to stay ahead of the curve and deliver cutting-edge products.",
    icon: "Lightbulb",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to understanding your goals and exceeding your expectations.",
    icon: "Target",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Quality Excellence",
    description: "We never compromise on quality. Every line of code, every pixel, and every interaction is crafted with care.",
    icon: "Award",
    color: "from-cyan-500 to-cyan-400",
  },
  {
    title: "Transparency",
    description: "Open communication and honest feedback are the foundation of our client relationships.",
    icon: "Eye",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. Our team is always learning and improving.",
    icon: "BookOpen",
    color: "from-cyan-500 to-cyan-500",
  },
  {
    title: "Team Collaboration",
    description: "Great products are built by great teams. We foster a culture of collaboration and mutual respect.",
    icon: "Users",
    color: "from-cyan-500 to-cyan-400",
  },
] as const;

export const COMPANY_MILESTONES = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a team of 3 passionate developers in a small Abuja office.",
    icon: "Rocket",
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Landed our first enterprise client and expanded the team to 10 members.",
    icon: "Briefcase",
  },
  {
    year: "2020",
    title: "Remote-First Transition",
    description: "Successfully transitioned to remote work and expanded our talent pool globally.",
    icon: "Globe",
  },
  {
    year: "2021",
    title: "50+ Projects Milestone",
    description: "Celebrated delivering 50+ successful projects across multiple industries.",
    icon: "Trophy",
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Opened satellite offices and started serving clients in 10+ countries.",
    icon: "MapPin",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI/ML services and integrated cutting-edge AI into our solutions.",
    icon: "Brain",
  },
  {
    year: "2024",
    title: "150+ Projects",
    description: "Reached 150+ projects delivered with 99% client satisfaction rate.",
    icon: "Star",
  },
] as const;

export const TEAM_MEMBERS_FULL = [
  {
    id: 1,
    name: "Christian Kayan",
    role: "Founder & CEO",
    department: "Leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "Oluwaseun has over 15 years of experience in software development and digital strategy. He founded Qwik Multi Services with a vision to help African businesses compete globally through technology.",
    expertise: ["Strategic Planning", "Business Development", "Technology Vision"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    role: "Head of Design",
    department: "Design",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    bio: "Chioma is an award-winning designer with expertise in UX research, interface design, and brand identity. She leads our design team in creating beautiful, user-centered experiences.",
    expertise: ["UI/UX Design", "Brand Identity", "Design Systems"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    role: "Lead Developer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    bio: "Ibrahim is a full-stack developer with 10+ years of experience building scalable web applications. He specializes in React, Node.js, and cloud architecture.",
    expertise: ["React/Next.js", "Node.js", "Cloud Architecture"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "Amara Nwosu",
    role: "Marketing Director",
    department: "Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    bio: "Amara brings 8 years of digital marketing experience, specializing in SEO, content strategy, and growth marketing for tech companies.",
    expertise: ["SEO", "Content Strategy", "Growth Marketing"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "David Okafor",
    role: "Senior Mobile Developer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    bio: "David specializes in native iOS and Android development, as well as cross-platform solutions with React Native and Flutter.",
    expertise: ["React Native", "iOS Development", "Flutter"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 6,
    name: "Fatima Hassan",
    role: "UX Researcher",
    department: "Design",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    bio: "Fatima leads user research initiatives, conducting interviews, usability tests, and data analysis to inform design decisions.",
    expertise: ["User Research", "Usability Testing", "Data Analysis"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 7,
    name: "Emmanuel Kalu",
    role: "DevOps Engineer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    bio: "Emmanuel ensures our infrastructure runs smoothly with expertise in AWS, Docker, Kubernetes, and CI/CD pipelines.",
    expertise: ["AWS", "Kubernetes", "CI/CD"],
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 8,
    name: "Grace Adebayo",
    role: "Project Manager",
    department: "Operations",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80",
    bio: "Grace keeps our projects on track with her excellent organizational skills and client communication abilities.",
    expertise: ["Agile/Scrum", "Client Relations", "Resource Planning"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
] as const;

export const OFFICE_LOCATIONS = [
  {
    city: "Abuja",
    country: "Nigeria",
    type: "Headquarters",
    address: "B96 Sahara Estate, Gwarimpa, Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800&q=80",
    phone: "+2348141646357",
    email: "Abuja@qwikmultiservices.com",
  },
  {
    city: "London",
    country: "United Kingdom",
    type: "Regional Office",
    address: "456 Tech Hub, London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    phone: "+44 20 1234 5678",
    email: "london@qwikmultiservices.com",
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "Regional Office",
    address: "789 Business Bay, Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    phone: "+971 4 123 4567",
    email: "dubai@qwikmultiservices.com",
  },
] as const;

export const AWARDS = [
  {
    title: "Best Digital Agency",
    organization: "Nigeria Tech Awards",
    year: "2023",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80",
  },
  {
    title: "Top Web Development Company",
    organization: "Clutch",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    title: "Excellence in Innovation",
    organization: "African Tech Summit",
    year: "2022",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
  },
  {
    title: "Best Startup to Watch",
    organization: "Forbes Africa",
    year: "2021",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
  },
] as const;

export const PARTNERS = [
  { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
  { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Microsoft", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
  { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
  { name: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png" },
] as const;


export const CONTACT_REASONS = [
  { id: "web-development", label: "Web Development" },
  { id: "mobile-app", label: "Mobile App Development" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "digital-marketing", label: "Digital Marketing & SEO" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "ecommerce", label: "E-commerce Solutions" },
  { id: "consulting", label: "Consulting" },
  { id: "other", label: "Other" },
] as const;

export const BUDGET_RANGES = [
  { id: "under-5k", label: "Under $5,000" },
  { id: "5k-10k", label: "$5,000 - $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-50k", label: "$25,000 - $50,000" },
  { id: "50k-100k", label: "$50,000 - $100,000" },
  { id: "over-100k", label: "Over $100,000" },
  { id: "not-sure", label: "Not sure yet" },
] as const;

export const PROJECT_TIMELINES = [
  { id: "asap", label: "ASAP" },
  { id: "1-month", label: "Within 1 month" },
  { id: "1-3-months", label: "1-3 months" },
  { id: "3-6-months", label: "3-6 months" },
  { id: "6-months-plus", label: "6+ months" },
  { id: "flexible", label: "Flexible" },
] as const;

export const CONTACT_METHODS = [
  {
    id: "email",
    title: "Email Us",
    description: "Send us an email anytime",
    value: "hello@qwikmultiservices.com",
    href: "mailto:hello@qwikmultiservices.com",
    icon: "Mail",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "phone",
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+2348141646357",
    href: "tel:+2348141646357",
    icon: "Phone",
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Quick response guaranteed",
    value: "+2348141646357",
    href: "https://wa.me/2348141646357",
    icon: "MessageCircle",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: "location",
    title: "Visit Us",
    description: "Come say hello",
    value: "123 Victoria Island, Lagos, Nigeria",
    href: "https://maps.google.com/?q=Victoria+Island+Lagos",
    icon: "MapPin",
    color: "bg-cyan-500/10 text-cyan-500",
  },
] as const;

export const SOCIAL_PLATFORMS = [
  {
    name: "Twitter",
    href: "https://twitter.com/qwikmulti",
    icon: "Twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/qwikmulti",
    icon: "Linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/qwikmulti",
    icon: "Instagram",
  },
  {
    name: "GitHub",
    href: "https://github.com/qwikmulti",
    icon: "Github",
  },
] as const;


export const BLOG_CATEGORIES = [
  { id: "all", label: "All Posts", slug: "all" },
  { id: "technology", label: "Technology", slug: "technology" },
  { id: "design", label: "Design", slug: "design" },
  { id: "development", label: "Development", slug: "development" },
  { id: "marketing", label: "Marketing", slug: "marketing" },
  { id: "business", label: "Business", slug: "business" },
  { id: "ai", label: "AI & ML", slug: "ai" },
] as const;

export const BLOG_AUTHORS = {
  "christain-kayan": {
    id: "christian-kayan",
    name: "Christian Kayan",
    role: "Founder & CEO",
    bio: "Tech entrepreneur with 15+ years of experience in software development and digital strategy. Passionate about helping African businesses succeed globally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  "chioma-okonkwo": {
    id: "chioma-okonkwo",
    name: "Chioma Okonkwo",
    role: "Head of Design",
    bio: "Award-winning designer with expertise in UX research, interface design, and brand identity. Believer in design that makes a difference.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  "damilola-john": {
    id: "damilolajohn",
    name: "Damilola John",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in React, Node.js, ReactNAtive, and cloud architecture. Open source contributor and tech community builder.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  "amara-nwosu": {
    id: "amara-nwosu",
    name: "Amara Nwosu",
    role: "Marketing Director",
    bio: "Digital marketing expert with 8 years of experience in SEO, content strategy, and growth marketing for tech companies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
} as const;

export const BLOG_POSTS_DATA = [
  {
    id: 1,
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development in 2024: Trends You Need to Know",
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration and edge computing to new JavaScript frameworks and WebAssembly.",
    content: `
## Introduction

The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several transformative trends are reshaping how we build and deploy web applications. In this comprehensive guide, we'll explore the technologies and practices that are defining the future of web development.

## 1. AI-Powered Development Tools

Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From GitHub Copilot to ChatGPT-powered coding assistants, AI is helping developers write better code faster.

### Key AI Tools for Developers:
- **GitHub Copilot**: AI pair programmer that suggests code in real-time
- **Cursor**: AI-first code editor with deep integration
- **v0 by Vercel**: AI-powered UI component generation
- **Claude & ChatGPT**: General-purpose AI assistants for debugging and architecture

## 2. Edge Computing Goes Mainstream

Edge computing is revolutionizing how we think about server infrastructure. By running code closer to users, we're seeing dramatic improvements in latency and user experience.

\`\`\`javascript
// Example: Edge function with Vercel
export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  return new Response(
    JSON.stringify({ message: 'Hello from the edge!' }),
    { headers: { 'content-type': 'application/json' } }
  );
}
\`\`\`

## 3. The Rise of React Server Components

React Server Components (RSC) represent a paradigm shift in how we build React applications. With frameworks like Next.js 14+ embracing RSC, we're seeing:

- **Reduced JavaScript bundles**: Components render on the server
- **Better SEO**: Content is available immediately
- **Improved performance**: Less work for the client

## 4. TypeScript is Now the Standard

TypeScript adoption has reached a tipping point. In 2024, it's no longer optional—it's the expected choice for professional web development.

## Conclusion

The future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, you'll be well-positioned to build the next generation of web applications.
    `,
    coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    author: "ibrahim-musa",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readingTime: 8,
    category: "development",
    tags: ["Web Development", "JavaScript", "React", "AI", "Trends"],
    featured: true,
  },
  {
    id: 2,
    slug: "ux-design-principles-modern-apps",
    title: "10 UX Design Principles Every Modern App Should Follow",
    excerpt:
      "Learn the fundamental UX principles that make applications intuitive and delightful to use. From consistency to feedback, master the art of user-centered design.",
    content: `
## The Foundation of Great UX

User Experience (UX) design is the invisible force that determines whether users love or abandon your application. In this guide, we'll explore the ten essential principles that separate good apps from great ones.

## 1. Clarity Over Cleverness

The best interfaces are invisible. Users shouldn't need to think about how to use your app—the path forward should be obvious.

### Tips for Clarity:
- Use familiar patterns and conventions
- Write clear, concise copy
- Make primary actions prominent
- Reduce cognitive load

## 2. Consistency is Key

Consistency builds trust and reduces learning curves. When elements behave predictably, users feel confident.

## 3. Feedback is Essential

Every action should have a reaction. Users need to know their input was received and understand the outcome.

## 4. Accessibility is Not Optional

Design for everyone. Accessibility isn't just ethical—it's good business.

## 5. Mobile-First Thinking

With mobile traffic dominating, designing for smaller screens first ensures a solid foundation.

## Conclusion

Great UX design is iterative. Test with real users, gather feedback, and continuously improve. The principles outlined here provide a framework, but true mastery comes from practice and empathy.
    `,
    coverImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
    author: "chioma-okonkwo",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-12",
    readingTime: 6,
    category: "design",
    tags: ["UX Design", "UI Design", "User Experience", "Product Design"],
    featured: true,
  },
  {
    id: 3,
    slug: "scaling-startups-with-cloud",
    title: "Scaling Your Startup with Cloud Infrastructure: A Complete Guide",
    excerpt:
      "A comprehensive guide to building scalable infrastructure for growing businesses. Learn how to leverage AWS, Azure, and GCP effectively.",
    content: `
## Why Cloud Matters for Startups

In the modern tech landscape, cloud infrastructure isn't just an option—it's a necessity. For startups looking to scale quickly while managing costs, the cloud provides unparalleled flexibility.

## Choosing the Right Cloud Provider

### AWS (Amazon Web Services)
- Most comprehensive service offering
- Largest market share and community
- Best for complex, enterprise-grade applications

### Google Cloud Platform (GCP)
- Superior data analytics and ML capabilities
- Competitive pricing with sustained use discounts
- Excellent Kubernetes support (GKE)

### Microsoft Azure
- Best integration with Microsoft ecosystem
- Strong enterprise features
- Growing rapidly in market share

## Infrastructure as Code

Managing infrastructure manually doesn't scale. Use tools like Terraform or Pulumi to define your infrastructure as code.

\`\`\`hcl
# Terraform example
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
  }
}
\`\`\`

## Key Takeaways

1. Start simple, scale as needed
2. Automate everything
3. Monitor costs closely
4. Plan for failure
5. Invest in security from day one
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    author: "oluwaseun-adeyemi",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    readingTime: 10,
    category: "technology",
    tags: ["Cloud", "AWS", "DevOps", "Startups", "Infrastructure"],
    featured: false,
  },
  {
    id: 4,
    slug: "seo-strategies-2024",
    title: "SEO Strategies That Actually Work in 2024",
    excerpt:
      "Forget outdated tactics. Learn the SEO strategies that are driving real results in 2024, from AI content optimization to Core Web Vitals.",
    content: `
## SEO Has Changed—Have You?

Search engine optimization in 2024 looks nothing like it did five years ago. Google's algorithms have become more sophisticated, user behavior has shifted, and AI is changing the game.

## Content Quality Over Quantity

The days of churning out thin content are over. Google's helpful content update rewards depth, expertise, and genuine value.

### What Quality Content Looks Like:
- Comprehensive coverage of topics
- Original research and insights
- Expert authorship (E-E-A-T)
- Regular updates and freshness

## Technical SEO Fundamentals

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Mobile Optimization
With mobile-first indexing, your mobile experience IS your SEO.

## The Rise of AI in SEO

AI tools can help with:
- Content optimization
- Keyword research
- Technical audits
- Competitor analysis

But remember: AI is a tool, not a replacement for strategy.

## Conclusion

SEO success in 2024 requires a holistic approach combining technical excellence, quality content, and user experience optimization.
    `,
    coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    author: "amara-nwosu",
    publishedAt: "2024-01-02",
    updatedAt: "2024-01-02",
    readingTime: 7,
    category: "marketing",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Google"],
    featured: false,
  },
  {
    id: 5,
    slug: "building-ai-powered-applications",
    title: "Building AI-Powered Applications: A Practical Guide",
    excerpt:
      "Learn how to integrate AI capabilities into your applications using OpenAI, LangChain, and other modern AI tools.",
    content: `
## The AI Revolution in Application Development

Artificial Intelligence is transforming how we build software. From chatbots to recommendation engines, AI capabilities are becoming essential features in modern applications.

## Getting Started with OpenAI

The OpenAI API provides powerful language models that can be integrated into any application.

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  
  return completion.choices[0].message.content;
}
\`\`\`

## LangChain for Complex AI Applications

LangChain provides a framework for building more sophisticated AI applications with features like:

- **Chains**: Combine multiple AI operations
- **Agents**: AI that can use tools and make decisions
- **Memory**: Maintain context across conversations
- **Retrieval**: Connect AI to your data

## Best Practices

1. **Start Simple**: Begin with basic prompts before building complex systems
2. **Handle Errors Gracefully**: AI can fail or produce unexpected results
3. **Monitor Costs**: API calls add up quickly
4. **Implement Rate Limiting**: Protect your application and budget
5. **Consider Privacy**: Be careful with sensitive data

## Conclusion

AI integration is more accessible than ever. Start small, experiment, and gradually build more sophisticated features as you learn.
    `,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    author: "ibrahim-musa",
    publishedAt: "2023-12-28",
    updatedAt: "2024-01-10",
    readingTime: 9,
    category: "ai",
    tags: ["AI", "Machine Learning", "OpenAI", "LangChain", "Development"],
    featured: true,
  },
  {
    id: 6,
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Advanced Techniques",
    excerpt:
      "Master advanced React performance optimization techniques including memoization, code splitting, and virtual list rendering.",
    content: `
## Why Performance Matters

Performance isn't just a technical concern—it directly impacts user experience and business metrics. Studies show that a 1-second delay in page load can reduce conversions by 7%.

## Memoization Strategies

### React.memo for Component Memoization

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders when data changes
  return <div>{/* Complex rendering */}</div>;
});
\`\`\`

### useMemo for Expensive Calculations

\`\`\`tsx
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);
\`\`\`

### useCallback for Function Stability

\`\`\`tsx
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);
\`\`\`

## Code Splitting

Use dynamic imports to split your bundle:

\`\`\`tsx
const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Virtual Lists for Large Data Sets

For lists with thousands of items, use virtualization:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });
  
  // Render only visible items
}
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Measure first, optimize what matters, and always validate improvements with real data.
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    author: "ibrahim-musa",
    publishedAt: "2023-12-20",
    updatedAt: "2023-12-20",
    readingTime: 8,
    category: "development",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    featured: false,
  },
  {
    id: 7,
    slug: "design-systems-from-scratch",
    title: "Building a Design System from Scratch: Complete Guide",
    excerpt:
      "Learn how to create a comprehensive design system that scales. From tokens to components, we cover everything you need.",
    content: `
## What is a Design System?

A design system is a collection of reusable components, guidelines, and standards that ensure consistency across products. It's the single source of truth for designers and developers.

## Starting with Design Tokens

Design tokens are the atomic values that define your visual language:

\`\`\`css
:root {
  /* Colors */
  --color-primary-500: #06b6d4;
  --color-gray-900: #0f172a;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  
  /* Typography */
  --font-size-base: 1rem;
  --font-weight-bold: 700;
}
\`\`\`

## Component Architecture

Build components with composition in mind:

1. **Atoms**: Basic elements (buttons, inputs)
2. **Molecules**: Combinations of atoms (search bars)
3. **Organisms**: Complex components (navigation)
4. **Templates**: Page layouts
5. **Pages**: Specific instances

## Documentation is Critical

A design system without documentation is just a component library. Document:

- Usage guidelines
- Do's and don'ts
- Accessibility requirements
- Code examples

## Conclusion

Building a design system is an investment that pays dividends in consistency, efficiency, and scalability.
    `,
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    author: "chioma-okonkwo",
    publishedAt: "2023-12-15",
    updatedAt: "2023-12-15",
    readingTime: 11,
    category: "design",
    tags: ["Design Systems", "UI Design", "Components", "Figma"],
    featured: false,
  },
  {
    id: 8,
    slug: "startup-growth-strategies",
    title: "Growth Strategies for Tech Startups: What Actually Works",
    excerpt:
      "Proven growth strategies from successful tech startups. Learn about product-led growth, content marketing, and community building.",
    content: `
## The Growth Challenge

Every startup faces the same fundamental challenge: how do you grow from zero to sustainable scale? The answer varies by product and market, but certain principles remain constant.

## Product-Led Growth

PLG puts your product at the center of acquisition, conversion, and expansion:

### Key PLG Tactics:
- **Freemium models**: Let users experience value before paying
- **Viral loops**: Build sharing into the product
- **Self-service onboarding**: Reduce friction to activation
- **Usage-based pricing**: Align cost with value delivered

## Content as a Growth Engine

Content marketing remains one of the most effective channels for B2B startups:

1. **SEO-driven content**: Capture search demand
2. **Thought leadership**: Build brand authority
3. **Case studies**: Prove your value
4. **Educational resources**: Help your audience succeed

## Community Building

Building a community creates sustainable competitive advantage:

- Foster genuine connections
- Provide exclusive value
- Empower community leaders
- Listen and iterate

## Conclusion

There's no silver bullet for startup growth. Success comes from systematic experimentation, measurement, and iteration.
    `,
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    author: "oluwaseun-adeyemi",
    publishedAt: "2023-12-10",
    updatedAt: "2023-12-10",
    readingTime: 7,
    category: "business",
    tags: ["Startups", "Growth", "Marketing", "Business Strategy"],
    featured: false,
  },
  {
    id: 9,
    slug: "nextjs-14-complete-guide",
    title: "Next.js 14: The Complete Developer's Guide",
    excerpt:
      "Everything you need to know about Next.js 14, including App Router, Server Components, Server Actions, and more.",
    content: `
## Welcome to Next.js 14

Next.js 14 represents a major evolution in React development. With features like Server Components, Server Actions, and Partial Prerendering, it's redefining how we build web applications.

## App Router Deep Dive

The App Router introduces a new paradigm for routing and data fetching:

### File-Based Routing

\`\`\`
app/
  page.tsx          → /
  about/
    page.tsx        → /about
  blog/
    [slug]/
      page.tsx      → /blog/:slug
\`\`\`

### Layouts and Templates

\`\`\`tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## Server Components by Default

In Next.js 14, components are Server Components by default. This means:

- Zero JavaScript sent to client (by default)
- Direct database access
- Better SEO
- Improved initial load performance

## Server Actions

Server Actions allow you to run server code from client components:

\`\`\`tsx
async function submitForm(formData: FormData) {
  'use server';
  
  const email = formData.get('email');
  await saveToDatabase(email);
}
\`\`\`

## Conclusion

Next.js 14 is a game-changer for React development. Embrace the new patterns and enjoy the improved developer experience.
    `,
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    author: "ibrahim-musa",
    publishedAt: "2023-12-05",
    updatedAt: "2024-01-08",
    readingTime: 12,
    category: "development",
    tags: ["Next.js", "React", "JavaScript", "Full Stack"],
    featured: false,
  },
  {
    id: 10,
    slug: "agritech-revolution-africa",
    title: "The AgriTech Revolution: How Technology is Transforming African Agriculture",
    excerpt: "Explore how precision farming, IoT sensors, and AI are helping African farmers increase yields and access better markets.",
    content: `
## The Agricultural Technology Revolution

Africa's agricultural sector is on the cusp of a major transformation. With a growing population and increasing demand for food, technology is becoming essential for modern farming...

## Precision Farming in Action

Precision farming uses GPS, IoT sensors, and data analytics to optimize every aspect of crop production...

## The Role of Mobile Technology

With over 500 million mobile phone users in Africa, mobile technology is the gateway to agricultural innovation...
    `,
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    author: "oluwaseun-adeyemi",
    publishedAt: "2024-01-20",
    updatedAt: "2024-01-20",
    readingTime: 10,
    category: "technology",
    tags: ["AgriTech", "Agriculture", "IoT", "Africa", "Precision Farming"],
    featured: true,
  },
  {
    id: 11,
    slug: "telemedicine-healthcare-access",
    title: "Telemedicine: Bridging the Healthcare Access Gap in Developing Countries",
    excerpt: "How digital health solutions are making quality healthcare accessible to underserved populations worldwide.",
    content: `
## The Healthcare Access Challenge

Millions of people in developing countries lack access to basic healthcare services. Telemedicine is changing this reality...

## Building Effective Telemedicine Platforms

Creating a successful telemedicine platform requires careful consideration of connectivity, user experience, and clinical workflows...
    `,
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    author: "ibrahim-musa",
    publishedAt: "2024-01-18",
    updatedAt: "2024-01-18",
    readingTime: 8,
    category: "technology",
    tags: ["HealthTech", "Telemedicine", "Healthcare", "Digital Health"],
    featured: false,
  },
  {
    id: 12,
    slug: "proptech-future-real-estate",
    title: "PropTech 2024: The Future of Real Estate Technology",
    excerpt: "From virtual tours to smart buildings, discover the technologies reshaping the real estate industry.",
    content: `
## The PropTech Landscape

Real estate, traditionally one of the least digitized industries, is undergoing rapid technological transformation...

## Virtual Reality in Property Viewing

VR and AR technologies are revolutionizing how properties are showcased and experienced...
    `,
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: "chioma-okonkwo",
    publishedAt: "2024-01-16",
    updatedAt: "2024-01-16",
    readingTime: 7,
    category: "technology",
    tags: ["PropTech", "Real Estate", "VR", "Smart Buildings", "IoT"],
    featured: false,
  },
] as const;

// Helper function to get blog post by slug
export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS_DATA.find((post) => post.slug === slug);
}

// Helper function to get author by ID
export function getAuthorById(authorId: string) {
  return BLOG_AUTHORS[authorId as keyof typeof BLOG_AUTHORS];
}

// Helper function to get related posts
export function getRelatedPosts(currentSlug: string, category: string, limit = 3) {
  return BLOG_POSTS_DATA
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

// Helper function to get featured posts
export function getFeaturedPosts(limit = 3) {
  return BLOG_POSTS_DATA.filter((post) => post.featured).slice(0, limit);
}

// Helper function to get posts by category
export function getPostsByCategory(category: string) {
  if (category === "all") return BLOG_POSTS_DATA;
  return BLOG_POSTS_DATA.filter((post) => post.category === category);
}
