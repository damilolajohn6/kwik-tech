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
    slug: "lekki-gardens-estate",
    title: "Lekki Gardens Estate",
    type: "Residential",
    status: "For Sale",
    location: "Lekki, Lagos",
    address: "Plot 15, Lekki Gardens Estate, Lekki Phase 1, Lagos",
    price: 85000000,
    priceFormatted: "₦85,000,000",
    size: "4 Bedroom Duplex",
    squareFeet: 3500,
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    yearBuilt: 2023,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    features: [
      "Swimming Pool",
      "Smart Home System",
      "24/7 Security",
      "Gym & Fitness Center",
      "Children's Playground",
      "Backup Power Supply",
      "Borehole Water",
      "CCTV Surveillance",
    ],
    amenities: [
      { icon: "Wifi", label: "Smart Home" },
      { icon: "Car", label: "2 Car Garage" },
      { icon: "Waves", label: "Swimming Pool" },
      { icon: "Shield", label: "24/7 Security" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Garden" },
    ],
    description: "Luxury 4-bedroom duplex in the heart of Lekki with modern amenities and smart home features. This stunning property offers the perfect blend of comfort and sophistication.",
    longDescription: `Welcome to this magnificent 4-bedroom duplex located in the prestigious Lekki Gardens Estate. This property represents the pinnacle of luxury living in Lagos, offering an exceptional lifestyle for discerning homeowners.

**Property Highlights:**

The ground floor features a spacious living room with double-height ceilings, a formal dining area, a modern kitchen with premium appliances, and a guest bedroom with en-suite bathroom. The open-plan design creates a seamless flow between living spaces, perfect for both everyday living and entertaining.

The first floor houses the master bedroom with a walk-in closet and luxurious en-suite bathroom featuring a jacuzzi tub. Three additional bedrooms, each with en-suite bathrooms, provide ample space for family members or guests.

**Smart Home Features:**

This home comes equipped with a state-of-the-art smart home system, allowing you to control lighting, climate, security, and entertainment systems from your smartphone. The automated features include:

- Central air conditioning with zone control
- Automated lighting throughout
- Smart security system with remote monitoring
- Video doorbell and intercom system
- Motorized blinds and curtains

**Estate Amenities:**

Residents of Lekki Gardens Estate enjoy access to world-class amenities including a clubhouse, swimming pool, tennis court, children's playground, and 24/7 security with controlled access gates.

The estate is strategically located with easy access to major roads, shopping centers, schools, and hospitals, making it an ideal choice for families.`,
    agent: {
      name: "Adaeze Okafor",
      phone: "+234 814 164 6357",
      email: "adaeze@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      title: "Senior Property Consultant",
    },
    coordinates: {
      lat: 6.4281,
      lng: 3.4219,
    },
    virtualTourUrl: "https://example.com/virtual-tour/lekki-gardens",
    floorPlanUrl: "https://example.com/floor-plans/lekki-gardens.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Survey Plan", verified: true },
      { name: "Building Approval", verified: true },
      { name: "Deed of Assignment", verified: true },
    ],
    nearbyPlaces: [
      { name: "Lekki Phase 1 Mall", distance: "0.5 km", type: "Shopping" },
      { name: "Corona School", distance: "1.2 km", type: "Education" },
      { name: "Reddington Hospital", distance: "2.0 km", type: "Healthcare" },
      { name: "Lekki Toll Gate", distance: "3.5 km", type: "Transport" },
    ],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
  },
  {
    id: 2,
    slug: "victoria-island-towers",
    title: "Victoria Island Towers",
    type: "Commercial",
    status: "In Progress",
    location: "Victoria Island, Lagos",
    address: "Plot 42, Adeola Odeku Street, Victoria Island, Lagos",
    price: 150000000,
    priceFormatted: "From ₦150,000,000",
    size: "Office Spaces",
    squareFeet: 5000,
    bedrooms: 0,
    bathrooms: 4,
    parking: 10,
    yearBuilt: 2024,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1200&q=80",
    ],
    features: [
      "Grade A Office Space",
      "Dedicated Parking",
      "Fiber Internet Ready",
      "24/7 Generator Backup",
      "Central Air Conditioning",
      "High-Speed Elevators",
      "Conference Facilities",
      "Rooftop Terrace",
    ],
    amenities: [
      { icon: "Building2", label: "Grade A Office" },
      { icon: "Car", label: "Parking" },
      { icon: "Wifi", label: "Fiber Internet" },
      { icon: "Zap", label: "24/7 Power" },
      { icon: "Wind", label: "Central AC" },
      { icon: "Coffee", label: "Cafeteria" },
    ],
    description: "Premium Grade A office spaces in a 15-story tower with panoramic city views. Perfect for corporate headquarters and multinational companies.",
    longDescription: `Victoria Island Towers represents the future of commercial real estate in Lagos. This iconic 15-story development is designed to meet the needs of modern businesses, offering Grade A office spaces with world-class amenities.

**Building Features:**

The tower features floor-to-ceiling windows that flood each floor with natural light while offering breathtaking views of Lagos Island and the Atlantic Ocean. The building's contemporary design incorporates sustainable features including energy-efficient systems and green building practices.

**Office Specifications:**

- Floor plates ranging from 3,000 to 5,000 square feet
- Raised floors for easy cable management
- Suspended ceilings with integrated lighting
- Floor-to-ceiling height of 3.5 meters
- VRF air conditioning system with individual zone control
- Fire suppression and detection systems

**Technology Infrastructure:**

The building is equipped with cutting-edge technology infrastructure:

- Dedicated fiber optic connectivity
- Redundant power supply with automatic changeover
- Building management system (BMS)
- Access control and CCTV surveillance
- High-speed elevators with smart dispatching

**Amenities:**

Tenants and visitors enjoy access to premium amenities including a ground-floor lobby with concierge services, multiple high-speed elevators, conference facilities, a rooftop terrace, and on-site cafeteria.

**Location Advantage:**

Situated on Adeola Odeku Street, the heart of Victoria Island's business district, the tower offers excellent accessibility and is surrounded by banks, hotels, restaurants, and other commercial establishments.`,
    agent: {
      name: "Chukwuemeka Obi",
      phone: "+234 814 164 6357",
      email: "emeka@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      title: "Commercial Property Specialist",
    },
    coordinates: {
      lat: 6.4281,
      lng: 3.4219,
    },
    virtualTourUrl: null,
    floorPlanUrl: "https://example.com/floor-plans/vi-towers.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Building Permit", verified: true },
      { name: "Environmental Impact Assessment", verified: true },
    ],
    nearbyPlaces: [
      { name: "Eko Hotel", distance: "0.3 km", type: "Hotel" },
      { name: "Mega Plaza", distance: "0.5 km", type: "Shopping" },
      { name: "First Bank HQ", distance: "0.2 km", type: "Business" },
      { name: "Bar Beach", distance: "1.0 km", type: "Recreation" },
    ],
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18",
  },
  {
    id: 3,
    slug: "abuja-luxury-villas",
    title: "Abuja Luxury Villas",
    type: "Residential",
    status: "For Sale",
    location: "Maitama, Abuja",
    address: "Plot 88, Maitama District, Abuja, FCT",
    price: 250000000,
    priceFormatted: "₦250,000,000",
    size: "5 Bedroom Villa",
    squareFeet: 6500,
    bedrooms: 5,
    bathrooms: 7,
    parking: 4,
    yearBuilt: 2022,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    ],
    features: [
      "Private Garden",
      "Guest House",
      "Home Theater",
      "Wine Cellar",
      "Staff Quarters",
      "Swimming Pool",
      "Tennis Court",
      "Landscaped Gardens",
    ],
    amenities: [
      { icon: "TreePine", label: "Private Garden" },
      { icon: "Home", label: "Guest House" },
      { icon: "Tv", label: "Home Theater" },
      { icon: "Wine", label: "Wine Cellar" },
      { icon: "Waves", label: "Pool" },
      { icon: "CircleDot", label: "Tennis Court" },
    ],
    description: "Exquisite 5-bedroom villa with expansive grounds in the prestigious Maitama district. A masterpiece of architectural excellence.",
    longDescription: `This extraordinary 5-bedroom villa in Maitama represents the ultimate in luxury living in Nigeria's capital city. Set on over 2,000 square meters of meticulously landscaped grounds, this property offers privacy, elegance, and an unparalleled lifestyle.

**Architectural Excellence:**

Designed by renowned architects, this villa combines contemporary design with timeless elegance. The property features natural stone facades, floor-to-ceiling windows, and premium finishes throughout. Every detail has been carefully considered to create a home of exceptional quality.

**Main Residence:**

The main house spans three levels, with the ground floor featuring a grand entrance foyer, formal living and dining rooms, a gourmet kitchen, family room, and a guest suite. The first floor houses the master suite with his-and-hers dressing rooms, a spa-like bathroom, and a private terrace. Three additional bedroom suites, each with en-suite bathrooms, complete this level.

**Additional Structures:**

- Detached guest house with 2 bedrooms
- Staff quarters with 3 rooms
- 4-car garage with workshop
- Pool house with changing facilities

**Outdoor Features:**

The grounds include a heated infinity pool, a floodlit tennis court, a children's play area, extensive gardens, and a covered outdoor entertainment area with a built-in barbecue.

**Smart Home Integration:**

The entire property is equipped with a comprehensive smart home system controlling lighting, climate, security, audio-visual systems, and more.`,
    agent: {
      name: "Fatima Ibrahim",
      phone: "+234 814 164 6357",
      email: "fatima@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      title: "Luxury Property Consultant",
    },
    coordinates: {
      lat: 9.0765,
      lng: 7.4986,
    },
    virtualTourUrl: "https://example.com/virtual-tour/maitama-villa",
    floorPlanUrl: "https://example.com/floor-plans/maitama-villa.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Survey Plan", verified: true },
      { name: "Building Approval", verified: true },
      { name: "Tax Clearance", verified: true },
    ],
    nearbyPlaces: [
      { name: "Maitama Market", distance: "1.0 km", type: "Shopping" },
      { name: "British International School", distance: "2.5 km", type: "Education" },
      { name: "National Hospital", distance: "3.0 km", type: "Healthcare" },
      { name: "Nnamdi Azikiwe Airport", distance: "35 km", type: "Transport" },
    ],
    createdAt: "2024-01-05",
    updatedAt: "2024-01-15",
  },
  {
    id: 4,
    slug: "ikoyi-waterfront-apartments",
    title: "Ikoyi Waterfront Apartments",
    type: "Residential",
    status: "For Sale",
    location: "Ikoyi, Lagos",
    address: "Waterfront Drive, Banana Island Road, Ikoyi, Lagos",
    price: 120000000,
    priceFormatted: "₦120,000,000",
    size: "3 Bedroom Apartment",
    squareFeet: 2800,
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    yearBuilt: 2023,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
    ],
    features: [
      "Lagoon View",
      "Concierge Service",
      "Rooftop Pool",
      "Fitness Center",
      "Private Balcony",
      "Smart Home",
      "Underground Parking",
      "Marina Access",
    ],
    amenities: [
      { icon: "Waves", label: "Lagoon View" },
      { icon: "User", label: "Concierge" },
      { icon: "Waves", label: "Rooftop Pool" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "Ship", label: "Marina" },
      { icon: "Shield", label: "Security" },
    ],
    description: "Stunning waterfront apartments with unobstructed views of the Lagos Lagoon. Experience luxury living at its finest.",
    longDescription: `Experience the pinnacle of waterfront living at Ikoyi Waterfront Apartments. These stunning residences offer an exclusive lifestyle with breathtaking views of the Lagos Lagoon and access to world-class amenities.

**Apartment Features:**

Each 3-bedroom apartment spans approximately 2,800 square feet and features:

- Open-plan living and dining areas with panoramic lagoon views
- Gourmet kitchen with European appliances and stone countertops
- Master bedroom with walk-in closet and en-suite bathroom
- Two additional bedrooms with en-suite bathrooms
- Private balcony overlooking the lagoon
- Dedicated laundry room
- Smart home automation system

**Premium Finishes:**

The apartments are finished to the highest standards with:

- Engineered hardwood flooring
- Floor-to-ceiling windows
- Designer lighting fixtures
- Premium sanitaryware
- Custom-built wardrobes
- Central air conditioning

**Building Amenities:**

Residents enjoy exclusive access to:

- Infinity rooftop pool with lagoon views
- State-of-the-art fitness center
- Residents' lounge and entertainment area
- 24-hour concierge service
- Private marina with boat mooring
- Underground parking
- Children's play area

**Security:**

The building features comprehensive security including 24/7 manned security, CCTV surveillance, access control systems, and video intercom.`,
    agent: {
      name: "Adaeze Okafor",
      phone: "+234 814 164 6357",
      email: "adaeze@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      title: "Senior Property Consultant",
    },
    coordinates: {
      lat: 6.4526,
      lng: 3.4328,
    },
    virtualTourUrl: "https://example.com/virtual-tour/ikoyi-waterfront",
    floorPlanUrl: "https://example.com/floor-plans/ikoyi-waterfront.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Governor's Consent", verified: true },
      { name: "Survey Plan", verified: true },
    ],
    nearbyPlaces: [
      { name: "Falomo Shopping Center", distance: "1.5 km", type: "Shopping" },
      { name: "Ikoyi Club", distance: "2.0 km", type: "Recreation" },
      { name: "Lagoon Hospital", distance: "2.5 km", type: "Healthcare" },
      { name: "Falomo Bridge", distance: "1.0 km", type: "Transport" },
    ],
    createdAt: "2024-01-12",
    updatedAt: "2024-01-22",
  },
  {
    id: 5,
    slug: "gwarimpa-commercial-plaza",
    title: "Gwarimpa Commercial Plaza",
    type: "Commercial",
    status: "Completed",
    location: "Gwarimpa, Abuja",
    address: "Plot 234, First Avenue, Gwarimpa, Abuja",
    price: 45000000,
    priceFormatted: "From ₦45,000,000",
    size: "Shop Spaces",
    squareFeet: 1500,
    bedrooms: 0,
    bathrooms: 2,
    parking: 50,
    yearBuilt: 2023,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=1200&q=80",
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=1200&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
    ],
    features: [
      "High Foot Traffic",
      "Ample Parking",
      "Loading Bay",
      "24/7 Security",
      "Central Location",
      "Generator Backup",
      "CCTV Coverage",
      "Fire Safety System",
    ],
    amenities: [
      { icon: "Users", label: "High Traffic" },
      { icon: "Car", label: "50+ Parking" },
      { icon: "Truck", label: "Loading Bay" },
      { icon: "Shield", label: "24/7 Security" },
      { icon: "Zap", label: "Backup Power" },
      { icon: "Camera", label: "CCTV" },
    ],
    description: "Prime retail spaces in a bustling commercial plaza with excellent visibility and high foot traffic.",
    longDescription: `Gwarimpa Commercial Plaza offers prime retail and commercial spaces in one of Abuja's fastest-growing residential and commercial districts. With over 50 shop units and excellent amenities, this plaza is ideal for businesses looking to establish a presence in this thriving area.

**Location Advantage:**

Situated on First Avenue, the main commercial artery of Gwarimpa, the plaza benefits from:

- High daily foot traffic from residents and visitors
- Easy accessibility from major roads
- Proximity to residential estates with high purchasing power
- Growing population in the catchment area

**Available Units:**

The plaza offers various unit sizes to suit different business needs:

- Small shops (30-50 sqm) - Ideal for boutiques and service businesses
- Medium shops (60-100 sqm) - Perfect for retail stores and restaurants
- Large spaces (150+ sqm) - Suitable for supermarkets and showrooms
- Office spaces on upper floors

**Facilities:**

All tenants benefit from:

- 24/7 electricity supply with generator backup
- Borehole water supply
- Central waste management
- Common area maintenance
- Professional security services
- Ample customer parking

**Investment Opportunity:**

With rental yields averaging 8-10% annually and property values appreciating steadily, Gwarimpa Commercial Plaza represents an excellent investment opportunity in Abuja's retail sector.`,
    agent: {
      name: "Ibrahim Danladi",
      phone: "+234 814 164 6357",
      email: "ibrahim@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      title: "Commercial Property Manager",
    },
    coordinates: {
      lat: 9.1084,
      lng: 7.3876,
    },
    virtualTourUrl: null,
    floorPlanUrl: "https://example.com/floor-plans/gwarimpa-plaza.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Building Approval", verified: true },
      { name: "Fire Safety Certificate", verified: true },
    ],
    nearbyPlaces: [
      { name: "Gwarimpa Market", distance: "0.5 km", type: "Shopping" },
      { name: "First Bank Gwarimpa", distance: "0.3 km", type: "Banking" },
      { name: "Gwarimpa Estate", distance: "0.2 km", type: "Residential" },
      { name: "Kubwa Expressway", distance: "2.0 km", type: "Transport" },
    ],
    createdAt: "2024-01-08",
    updatedAt: "2024-01-20",
  },
  {
    id: 6,
    slug: "port-harcourt-terraces",
    title: "Port Harcourt Terraces",
    type: "Residential",
    status: "For Sale",
    location: "GRA, Port Harcourt",
    address: "Phase 2, GRA, Port Harcourt, Rivers State",
    price: 65000000,
    priceFormatted: "₦65,000,000",
    size: "3 Bedroom Terrace",
    squareFeet: 2200,
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    yearBuilt: 2023,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5e8d53?w=1200&q=80",
    ],
    features: [
      "Gated Community",
      "Private Garden",
      "Solar Power",
      "Boys Quarters",
      "Modern Kitchen",
      "CCTV Security",
      "Paved Roads",
      "Green Spaces",
    ],
    amenities: [
      { icon: "Shield", label: "Gated Community" },
      { icon: "TreePine", label: "Garden" },
      { icon: "Sun", label: "Solar Power" },
      { icon: "Home", label: "BQ" },
      { icon: "Car", label: "2 Car Parking" },
      { icon: "Leaf", label: "Green Spaces" },
    ],
    description: "Modern terrace houses in a secure gated community with 24-hour power and contemporary finishes.",
    longDescription: `Port Harcourt Terraces offers modern living in one of the city's most prestigious neighborhoods. These beautifully designed 3-bedroom terrace houses combine contemporary architecture with practical living spaces, all within a secure gated community.

**Property Layout:**

Each terrace house features:

**Ground Floor:**
- Spacious living room with high ceilings
- Dining area with access to rear garden
- Modern fitted kitchen with pantry
- Guest toilet
- Boys Quarters (BQ) with en-suite bathroom

**First Floor:**
- Master bedroom with en-suite bathroom and walk-in closet
- Two additional bedrooms with shared bathroom
- Family bathroom
- Laundry area

**Outdoor Spaces:**
- Front yard with parking for 2 cars
- Private rear garden
- Covered patio area

**Community Features:**

The estate offers residents:

- Controlled access gate with security post
- Paved internal roads with drainage
- Street lighting throughout
- Central borehole with water treatment
- Waste management services
- Common green spaces

**Power Solution:**

Each home comes equipped with:

- 5KVA solar power system with battery backup
- Prepaid meter connection
- Generator connection point
- Inverter-ready electrical system

**Location:**

GRA Phase 2 is one of Port Harcourt's most sought-after addresses, offering:

- Proximity to major businesses and offices
- Quality schools nearby
- Access to healthcare facilities
- Shopping centers within minutes
- Low-density, peaceful environment`,
    agent: {
      name: "Grace Amadi",
      phone: "+234 814 164 6357",
      email: "grace@qwikmultiservices.com",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80",
      title: "Property Consultant - Port Harcourt",
    },
    coordinates: {
      lat: 4.8156,
      lng: 7.0498,
    },
    virtualTourUrl: "https://example.com/virtual-tour/ph-terraces",
    floorPlanUrl: "https://example.com/floor-plans/ph-terraces.pdf",
    documents: [
      { name: "Certificate of Occupancy", verified: true },
      { name: "Survey Plan", verified: true },
      { name: "Deed of Assignment", verified: true },
    ],
    nearbyPlaces: [
      { name: "Port Harcourt Mall", distance: "3.0 km", type: "Shopping" },
      { name: "Shell Residential Area", distance: "2.0 km", type: "Residential" },
      { name: "University of Port Harcourt", distance: "8.0 km", type: "Education" },
      { name: "Port Harcourt Airport", distance: "25 km", type: "Transport" },
    ],
    createdAt: "2024-01-14",
    updatedAt: "2024-01-21",
  },
] as const;

export function getPropertyBySlug(slug: string) {
  return FEATURED_PROPERTIES.find((property) => property.slug === slug);
}

export function getRelatedProperties(currentSlug: string, type: string, limit = 3) {
  return FEATURED_PROPERTIES
    .filter((property) => property.slug !== currentSlug && property.type === type)
    .slice(0, limit);
}

export const PROPERTY_TYPES = [
  { id: "all", label: "All Properties" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Land", label: "Land" },
] as const;

export const PROPERTY_STATUSES = [
  { id: "all", label: "All Status" },
  { id: "For Sale", label: "For Sale" },
  { id: "For Rent", label: "For Rent" },
  { id: "Completed", label: "Completed" },
  { id: "In Progress", label: "In Progress" },
] as const;

export const PROPERTY_LOCATIONS = [
  { id: "all", label: "All Locations" },
  { id: "Lagos", label: "Lagos" },
  { id: "Abuja", label: "Abuja" },
  { id: "Port Harcourt", label: "Port Harcourt" },
  { id: "Ibadan", label: "Ibadan" },
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
