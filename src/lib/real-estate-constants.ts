export const REAL_ESTATE_HERO = {
  title: "Transforming Real Estate Through Technology",
  subtitle: "Property Development & PropTech Solutions",
  description:
    "We combine innovative technology with deep real estate expertise to deliver exceptional property development, management, and investment solutions across Nigeria and beyond.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
} as const;

export const REAL_ESTATE_STATS = [
  { value: "500+", label: "Properties Managed" },
  { value: "₦25B+", label: "Portfolio Value" },
  { value: "50+", label: "Development Projects" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export const REAL_ESTATE_SERVICES = [
  {
    id: 1,
    title: "Property Development",
    description:
      "End-to-end property development services from land acquisition to project completion. We build residential, commercial, and mixed-use developments.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      "Residential Developments",
      "Commercial Properties",
      "Mixed-Use Projects",
      "Land Acquisition & Due Diligence",
      "Project Management",
      "Quality Assurance",
    ],
  },
  {
    id: 2,
    title: "Property Management",
    description:
      "Comprehensive property management solutions that maximize returns and minimize hassle for property owners and investors.",
    icon: "Settings",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    features: [
      "Tenant Screening & Placement",
      "Rent Collection & Accounting",
      "Maintenance Coordination",
      "Property Inspections",
      "Financial Reporting",
      "Legal Compliance",
    ],
  },
  {
    id: 3,
    title: "PropTech Solutions",
    description:
      "Cutting-edge technology solutions for the real estate industry, from virtual tours to smart building management systems.",
    icon: "Cpu",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "Virtual Property Tours",
      "Property Management Software",
      "Smart Building IoT",
      "Real Estate Marketplaces",
      "Tenant Portals",
      "Analytics Dashboards",
    ],
  },
  {
    id: 4,
    title: "Real Estate Investment",
    description:
      "Strategic investment advisory and opportunities in carefully vetted real estate projects with strong return potential.",
    icon: "TrendingUp",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    features: [
      "Investment Advisory",
      "Portfolio Diversification",
      "Joint Venture Opportunities",
      "Market Analysis",
      "Risk Assessment",
      "Exit Strategy Planning",
    ],
  },
  {
    id: 5,
    title: "Facility Management",
    description:
      "Professional facility management services ensuring your properties operate efficiently, safely, and sustainably.",
    icon: "Wrench",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    features: [
      "Building Maintenance",
      "Security Management",
      "Cleaning Services",
      "Energy Management",
      "Vendor Coordination",
      "Emergency Response",
    ],
  },
  {
    id: 6,
    title: "Real Estate Consulting",
    description:
      "Expert consulting services for developers, investors, and property owners looking to maximize their real estate potential.",
    icon: "MessageSquare",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80",
    features: [
      "Feasibility Studies",
      "Market Research",
      "Valuation Services",
      "Legal Advisory",
      "Transaction Support",
      "Strategic Planning",
    ],
  },
] as const;

export const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Lekki Gardens Estate",
    type: "Residential",
    status: "Completed",
    location: "Lekki, Lagos",
    price: "₦85,000,000",
    size: "4 Bedroom Duplex",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    features: ["Swimming Pool", "Smart Home", "24/7 Security", "Gym"],
    description:
      "Luxury 4-bedroom duplex in the heart of Lekki with modern amenities and smart home features.",
  },
  {
    id: 2,
    title: "Victoria Island Towers",
    type: "Commercial",
    status: "In Progress",
    location: "Victoria Island, Lagos",
    price: "From ₦150,000,000",
    size: "Office Spaces",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: ["Grade A Office", "Parking", "Fiber Internet", "Generator"],
    description:
      "Premium Grade A office spaces in a 15-story tower with panoramic city views.",
  },
  {
    id: 3,
    title: "Abuja Luxury Villas",
    type: "Residential",
    status: "For Sale",
    location: "Maitama, Abuja",
    price: "₦250,000,000",
    size: "5 Bedroom Villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    features: ["Private Garden", "Guest House", "Home Theater", "Wine Cellar"],
    description:
      "Exquisite 5-bedroom villa with expansive grounds in the prestigious Maitama district.",
  },
  {
    id: 4,
    title: "Ikoyi Waterfront Apartments",
    type: "Residential",
    status: "For Sale",
    location: "Ikoyi, Lagos",
    price: "₦120,000,000",
    size: "3 Bedroom Apartment",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    features: ["Lagoon View", "Concierge", "Rooftop Pool", "Gym"],
    description:
      "Stunning waterfront apartments with unobstructed views of the Lagos Lagoon.",
  },
  {
    id: 5,
    title: "Gwarimpa Commercial Plaza",
    type: "Commercial",
    status: "Completed",
    location: "Gwarimpa, Abuja",
    price: "From ₦45,000,000",
    size: "Shop Spaces",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    features: ["High Foot Traffic", "Parking", "Loading Bay", "24/7 Security"],
    description:
      "Prime retail spaces in a bustling commercial plaza with excellent visibility.",
  },
  {
    id: 6,
    title: "Port Harcourt Terraces",
    type: "Residential",
    status: "For Sale",
    location: "GRA, Port Harcourt",
    price: "₦65,000,000",
    size: "3 Bedroom Terrace",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    features: ["Gated Community", "Garden", "Solar Power", "BQ"],
    description:
      "Modern terrace houses in a secure gated community with 24-hour power.",
  },
] as const;

export const REAL_ESTATE_PROCESS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your real estate goals, budget, and preferences.",
    icon: "MessageCircle",
  },
  {
    step: "02",
    title: "Property Search & Analysis",
    description:
      "Our team conducts comprehensive market research and identifies properties that match your criteria.",
    icon: "Search",
  },
  {
    step: "03",
    title: "Due Diligence",
    description:
      "We perform thorough due diligence including title verification, structural assessment, and legal review.",
    icon: "FileCheck",
  },
  {
    step: "04",
    title: "Negotiation & Acquisition",
    description:
      "Our experts negotiate the best terms and guide you through the acquisition process.",
    icon: "Handshake",
  },
  {
    step: "05",
    title: "Development & Management",
    description:
      "For development projects, we oversee construction. For acquisitions, we provide ongoing management.",
    icon: "HardHat",
  },
  {
    step: "06",
    title: "Handover & Support",
    description:
      "We ensure smooth handover and provide continued support for all your property needs.",
    icon: "Key",
  },
] as const;

export const REAL_ESTATE_FEATURES = [
  {
    title: "Virtual Property Tours",
    description:
      "Experience properties from anywhere with our immersive 3D virtual tours and augmented reality features.",
    icon: "View",
  },
  {
    title: "Smart Building Technology",
    description:
      "IoT-enabled buildings with automated climate control, security, and energy management systems.",
    icon: "Wifi",
  },
  {
    title: "Digital Document Management",
    description:
      "Secure digital storage and e-signature capabilities for all property documents and contracts.",
    icon: "FileText",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Comprehensive dashboards providing insights on property performance, occupancy, and financials.",
    icon: "BarChart3",
  },
  {
    title: "Tenant Portal",
    description:
      "Self-service portal for tenants to pay rent, submit maintenance requests, and communicate.",
    icon: "Users",
  },
  {
    title: "Investment Tracking",
    description:
      "Track your real estate investments, rental income, and portfolio performance in real-time.",
    icon: "PieChart",
  },
] as const;

export const REAL_ESTATE_PORTFOLIO = [
  {
    id: 1,
    title: "Sunrise Estate Development",
    category: "Residential",
    location: "Lekki, Lagos",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "50-unit luxury residential estate with modern amenities",
    stats: { units: 50, value: "₦4.2B", occupancy: "95%" },
  },
  {
    id: 2,
    title: "Tech Hub Office Complex",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern 10-story office complex for tech companies",
    stats: { sqft: "150,000", value: "₦8.5B", occupancy: "100%" },
  },
  {
    id: 3,
    title: "Green Valley Apartments",
    category: "Residential",
    location: "Maitama, Abuja",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
    description: "Eco-friendly apartment complex with solar power",
    stats: { units: 120, value: "₦6.8B", occupancy: "88%" },
  },
  {
    id: 4,
    title: "Retail Mall & Plaza",
    category: "Commercial",
    location: "Ikeja, Lagos",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80",
    description: "Premier shopping destination with international brands",
    stats: { sqft: "200,000", value: "₦12B", occupancy: "92%" },
  },
] as const;

export const REAL_ESTATE_TESTIMONIALS = [
  {
    id: 1,
    name: "Chief Emeka Okonkwo",
    role: "Property Investor",
    company: "Okonkwo Holdings",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    content:
      "Qwik Multi Services has been instrumental in growing my real estate portfolio. Their market insights and property management services are exceptional. I've seen a 40% increase in my rental yields since partnering with them.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mrs. Folake Adeyemi",
    role: "Homeowner",
    company: "First-time Buyer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    content:
      "As a first-time home buyer, I was overwhelmed by the process. The team guided me every step of the way, from finding the perfect property to securing financing. I'm now a proud homeowner thanks to them.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Ibrahim Danjuma",
    role: "CEO",
    company: "Danjuma Developments",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content:
      "The PropTech solutions they developed for our company have revolutionized how we manage our 200+ properties. The virtual tour feature alone has increased our property viewings by 300%.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Amina Hassan",
    role: "Medical Director",
    company: "Hassan Medical Center",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    content:
      "When we needed a new location for our medical center, Qwik Multi found us the perfect commercial property within our budget. Their facility management team now handles all our building needs.",
    rating: 5,
  },
] as const;

export const REAL_ESTATE_PARTNERS = [
  {
    name: "Access Bank",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
  {
    name: "GTBank",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
  {
    name: "First Bank",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
  {
    name: "Zenith Bank",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
  {
    name: "FMBN",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
  {
    name: "NHF",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&q=80",
  },
] as const;

export const REAL_ESTATE_FAQ = [
  {
    question: "What types of properties do you develop?",
    answer:
      "We develop a wide range of properties including residential estates, commercial office buildings, retail spaces, mixed-use developments, and industrial facilities. Our portfolio spans luxury homes to affordable housing, catering to different market segments.",
  },
  {
    question: "How do I invest in your real estate projects?",
    answer:
      "We offer various investment options including direct property purchase, joint venture partnerships, and real estate investment pools. Contact our investment team for a consultation to discuss options that match your investment goals and budget.",
  },
  {
    question: "What is included in your property management services?",
    answer:
      "Our comprehensive property management includes tenant screening and placement, rent collection, maintenance coordination, property inspections, financial reporting, legal compliance, and 24/7 emergency response. We handle everything so you can enjoy passive income.",
  },
  {
    question: "Do you offer mortgage assistance?",
    answer:
      "Yes, we have partnerships with major banks and mortgage institutions. We help clients navigate the mortgage process, from application to approval, and can help secure competitive interest rates through our banking partners.",
  },
  {
    question: "What areas do you operate in?",
    answer:
      "We currently operate in Lagos, Abuja, Port Harcourt, and other major Nigerian cities. We're also expanding to other West African countries. Our digital PropTech solutions are available nationwide.",
  },
  {
    question: "How do your virtual property tours work?",
    answer:
      "Our virtual tours use 3D scanning technology to create immersive, interactive walkthroughs of properties. You can explore every room, check out amenities, and get a true sense of the space from your computer or mobile device, anywhere in the world.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by project type. A typical residential development takes 18-24 months from land acquisition to completion. Commercial projects may take 24-36 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Absolutely. We provide comprehensive after-sales support including warranty management, facility management services, resale assistance, and ongoing property maintenance. Our relationship with clients extends well beyond the initial transaction.",
  },
] as const;
