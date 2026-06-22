export const SERVICES = [
  {
    id: 'cleaning-services',
    name: 'Cleaning Services',
    description: 'Premium deep cleaning and sanitization for homes & offices',
    icon: 'Sparkles',
    services: [
      { name: 'Deep Cleaning', description: 'Thorough sanitation of all rooms, kitchens, and bathrooms' },
      { name: 'Move-In Cleaning', description: 'Detailed cleaning before you unpack and settle in' },
      { name: 'Move-Out Cleaning', description: 'Restoration-level cleaning to prepare properties for handover' },
    ],
  },
  {
    id: 'property-maintenance',
    name: 'Property Maintenance',
    description: 'Expert plumbing, electrical, carpentry, painting & AC maintenance',
    icon: 'Wrench',
    services: [
      { name: 'Plumbing', description: 'Leak detection, pipe repairs, and premium fixture installations' },
      { name: 'Electrical', description: 'Safe repairs, complete rewiring, and appliance installations' },
      { name: 'Carpentry', description: 'Furniture repair, cabinet assembly, and custom wood fittings' },
      { name: 'Painting', description: 'Professional interior and exterior painting with premium finishes' },
      { name: 'AC Maintenance', description: 'AC installation, filter cleaning, and cooling optimization' },
      { name: 'Tank Cleaning', description: 'Hygienic overhead and underground water tank disinfection' },
    ],
  },
  {
    id: 'home-assistance',
    name: 'Home Assistance',
    description: 'Trusted daily help, from maid services to cooking and caretaker assistance',
    icon: 'Users',
    services: [
      { name: 'Maid Services', description: 'Reliable housekeeping, sweeping, dusting, and washing support' },
      { name: 'Cook Services', description: 'Experienced cooks preparing wholesome home-cooked meals' },
      { name: 'Caretaker Services', description: 'Attentive care for elderly family members or property upkeep' },
      { name: 'Nanny Services', description: 'Professional child care and babysitting support' },
    ],
  },
  {
    id: 'vehicle-care',
    name: 'Vehicle Care',
    description: 'Professional car washing, detailing, and roadside mechanical support',
    icon: 'Car',
    services: [
      { name: 'Car Cleaning', description: 'Thorough interior vacuuming and exterior washing at your doorstep' },
      { name: 'Vehicle Detailing', description: 'Paint protection, polishing, and deep restoration services' },
      { name: 'Mechanical Assistance', description: 'Basic battery jump-starts, tire change, and minor repairs' },
    ],
  },
  {
    id: 'infrastructure-services',
    name: 'Infrastructure Services',
    description: 'Landscaping, site infrastructure, and expert project oversight',
    icon: 'Building2',
    services: [
      { name: 'Landscaping', description: 'Garden design, lawn mowing, and comprehensive plant care' },
      { name: 'Site Infrastructure', description: 'Paving, drainage solutions, and outdoor fencing installation' },
      { name: 'Project Oversight', description: 'Professional supervision for home construction or renovation' },
    ],
  },
];

export const FEATURED_SERVICES = [
  {
    id: 'deep-cleaning',
    name: 'Deep Home Cleaning',
    category: 'Cleaning Services',
    description: 'Comprehensive deep cleaning and disinfection for your entire villa or apartment.',
    price: 'From ₹1,499',
    rating: 4.9,
    reviews: 142,
    image: '✨',
  },
  {
    id: 'plumbing-repair',
    name: 'Emergency Plumbing Repair',
    category: 'Property Maintenance',
    description: 'Rapid leak detection, pipe fixing, and sanitary installations by certified plumbers.',
    price: 'From ₹349',
    rating: 4.8,
    reviews: 98,
    image: '🚰',
  },
  {
    id: 'ac-service',
    name: 'AC Servicing & Gas Charging',
    category: 'Property Maintenance',
    description: 'Keep your home cool with professional AC filter cleaning and coolant top-up.',
    price: 'From ₹599',
    rating: 4.9,
    reviews: 176,
    image: '❄️',
  },
  {
    id: 'doorstep-car-wash',
    name: 'Premium Doorstep Car Wash',
    category: 'Vehicle Care',
    description: 'Complete interior vacuuming, dashboard polish, and foam exterior wash at your driveway.',
    price: 'From ₹299',
    rating: 4.7,
    reviews: 215,
    image: '🚗',
  },
  {
    id: 'interior-painting',
    name: 'Interior Express Painting',
    category: 'Property Maintenance',
    description: 'Transform your walls with dust-free premium painting and professional color consulting.',
    price: 'From ₹2,999',
    rating: 4.8,
    reviews: 64,
    image: '🎨',
  },
  {
    id: 'electrical-safety',
    name: 'Home Electrical Safety Audit',
    category: 'Property Maintenance',
    description: 'Complete inspection of wiring, MCBs, earthing, and appliances to ensure safety.',
    price: 'From ₹499',
    rating: 4.9,
    reviews: 110,
    image: '⚡',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rohan Malhotra',
    title: 'Resident, Sector 4, Omaxe City',
    image: 'RM',
    rating: 5,
    quote: 'OmniTaskers has been a lifesaver. Finding a reliable plumber in Omaxe City Lucknow used to take hours. Their technician arrived on time and fixed our major kitchen leak professionally.',
  },
  {
    id: 2,
    name: 'Dr. Shalini Bajpai',
    title: 'Villa Owner, Sector 2, Omaxe City',
    image: 'SB',
    rating: 5,
    quote: 'We booked their Move-In Cleaning service when we shifted to our new villa. The cleaning crew left no corner untouched. Extremely professional and highly recommended.',
  },
  {
    id: 3,
    name: 'Alok Srivastava',
    title: 'Resident, Omaxe City',
    image: 'AS',
    rating: 5,
    quote: 'I use their weekly car cleaning service. It\'s incredibly convenient to have it done right in my driveway before leaving for office. Truly a premium experience.',
  },
  {
    id: 4,
    name: 'Meenakshi Dwivedi',
    title: 'Resident, Sector 3, Omaxe City',
    image: 'MD',
    rating: 5,
    quote: 'The AC technicians were very knowledgeable. They cleaned the filters, checked the gas level, and explained everything clearly. Very transparent and fair pricing.',
  },
  {
    id: 5,
    name: 'Karan Johri',
    title: 'Property Owner, Omaxe City',
    image: 'KJ',
    rating: 4,
    quote: 'Excellent landscaping and garden maintenance service. Our lawn looks pristine and healthy. The gardeners are well-trained and punctual.',
  },
  {
    id: 6,
    name: 'Ritu Verma',
    title: 'Resident, Omaxe City',
    image: 'RV',
    rating: 5,
    quote: 'Finding trusted maid and cooking assistance was always a hassle. OmniTaskers helped connect us with vetted staff, and we couldn\'t be happier with the service.',
  },
];

export const FAQ = [
  {
    id: 1,
    question: 'Which areas in Lucknow do you serve?',
    answer: 'We currently specialize in and primarily serve Omaxe City ( Lucknow ) and immediately adjacent residential sectors to ensure prompt response times and premium service quality.',
  },
  {
    id: 2,
    question: 'How do I request a quote or book a service?',
    answer: 'Since we do not have an automated online booking system, you can easily click the "Get Free Quote" button, call us directly, or send a message on WhatsApp. Our customer support will respond immediately to assist you.',
  },
  {
    id: 3,
    question: 'Are the service professionals verified?',
    answer: 'Absolutely. Every service professional (Tasker) undergoes a rigorous identity verification process, reference checks, and background screening to ensure safety, reliability, and high-quality workmanship in your home.',
  },
  {
    id: 4,
    question: 'How is the pricing calculated?',
    answer: 'We provide transparent estimates before any work starts. Since every property and requirement is different, our rates are competitive, based on standard service scopes, and have absolutely no hidden charges.',
  },
  {
    id: 5,
    question: 'Do you offer emergency or same-day services?',
    answer: 'Yes, we accommodate urgent and emergency property maintenance (like critical pipe bursts, electrical failures, or AC breakdowns) depending on available technicians in Omaxe City. Please call us directly for emergency dispatch.',
  },
  {
    id: 6,
    question: 'What happens if I\'m not satisfied with the work?',
    answer: 'Customer satisfaction is our core value. If a service doesn\'t meet our professional standards, let us know within 24 hours and we will address and rectify the issue promptly at no additional cost.',
  },
];

export const TRUST_METRICS = [
  {
    id: 1,
    label: 'Verified Professionals',
    value: 50,
    prefix: '',
    suffix: '+',
  },
  {
    id: 2,
    label: 'Omaxe City Homes Served',
    value: 1200,
    prefix: '',
    suffix: '+',
  },
  {
    id: 3,
    label: 'Customer Satisfaction',
    value: 98,
    prefix: '',
    suffix: '%',
  },
  {
    id: 4,
    label: 'Average Response Time',
    value: 45,
    prefix: '',
    suffix: ' Min',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: 'ShieldCheck',
    title: 'Trusted Professionals',
    description: 'Every worker is strictly background-verified, reference-checked, and highly skilled.',
  },
  {
    id: 2,
    icon: 'BadgePercent',
    title: 'Transparent Pricing',
    description: 'Know what you pay upfront. Competitive rates with no hidden commissions or surprise fees.',
  },
  {
    id: 3,
    icon: 'Zap',
    title: 'Fast Response',
    description: 'Located right here in Omaxe City, ensuring our team arrives quickly when scheduled.',
  },
  {
    id: 4,
    icon: 'Award',
    title: 'Quality Assurance',
    description: 'We guarantee premium materials, professional tools, and meticulous workmanship.',
  },
  {
    id: 5,
    icon: 'Heart',
    title: 'Community Focus',
    description: 'Tailored services built around the specific needs of Omaxe City, Lucknow residents.',
  },
  {
    id: 6,
    icon: 'Headphones',
    title: 'Reliable Support',
    description: 'Direct phone and WhatsApp support from our local coordination team whenever you need help.',
  },
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    step: 'Step 1',
    title: 'Contact Us',
    description: 'Call us, message on WhatsApp, or fill our quote request form explaining your requirements.',
  },
  {
    id: 2,
    step: 'Step 2',
    title: 'Get a Quote',
    description: 'Our coordinate manager provides a transparent, custom price estimate tailored to your task.',
  },
  {
    id: 3,
    step: 'Step 3',
    title: 'Schedule Service',
    description: 'Choose a date and time slot that fits your schedule, and we dispatch our vetted professionals.',
  },
  {
    id: 4,
    step: 'Step 4',
    title: 'Work Completed',
    description: 'Inspect the completed work and pay securely via cash, UPI, or card. Enjoy peace of mind!',
  },
];

export const COMPANY_INFO = {
  name: 'OmniTaskers',
  tagline: 'Premium Home & Property Services in Lucknow',
  description: 'OmniTaskers is the premium, trusted service platform dedicated to the residents of Omaxe City, Lucknow. We connect homeowners and property managers with verified, expert professionals to deliver reliable, top-tier home maintenance, cleaning, personal assistance, and vehicle care services under one organized platform.',
  mission: 'To simplify home and property maintenance by providing Lucknow residential communities with trusted, seamless, and high-quality services at upfront, fair pricing.',
  vision: 'At Omnitaskers Solutions Pvt. Ltd., our vision is to empower every deserving and educated individual with access to meaningful employment opportunities that unlock their full potential. We aspire to build a future where talent is recognized, opportunities are accessible, and every individual has an equal chance to grow, succeed, and contribute to the nation\'s social, economic, and educational progress. Through workforce empowerment and inclusive growth, we are committed to creating a stronger, more equitable, and prosperous society.',
  values: [
    { title: 'Trust', description: 'Every single professional is vetted so you can feel completely secure.' },
    { title: 'Quality', description: 'We hold ourselves to rigorous standards and inspect work to guarantee satisfaction.' },
    { title: 'Local Care', description: 'We focus deeply on Omaxe City to ensure prompt, responsive local service.' },
    { title: 'Integrity', description: 'Honest rates, transparent time estimates, and zero hidden charges.' },
  ],
};
