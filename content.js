// Website Content Data - 100% Preserved from Original Site
// DO NOT modify any text content - Only layout/structure changes allowed

export const siteContent = {
  // Navigation
  nav: {
    logo: {
      alt: 'macreat_logo',
      text: 'Macreat Biomass Pellet Machine Solution'
    },
    links: [
      { text: 'Home', href: '/' },
      { text: 'Solution', href: '/solution/', hasDropdown: true },
      { text: 'Machines', href: '/machine/products/', hasDropdown: true },
      { text: 'Case', href: '/case/', hasDropdown: true },
      { text: 'Become Our Dealer', href: '/become-our-dealer/' },
      { text: 'NEWS', href: '#', hasDropdown: true },
      { text: 'Contact Us', href: '/contact/' }
    ],
    social: [
      { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=8618615207548', icon: 'whatsapp' },
      { name: 'Email', href: 'mailto:pellet@macreat.com', icon: 'email' },
      { name: 'Facebook', href: 'https://www.facebook.com/macreatpellet/', icon: 'facebook' },
      { name: 'X (Twitter)', href: 'https://x.com/MacreatBiomass', icon: 'twitter' },
      { name: 'YouTube', href: 'https://www.youtube.com/@macreatpelletmill2327/', icon: 'youtube' },
      { name: 'Instagram', href: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fwoodpelletmill%2F&is_from_rle', icon: 'instagram' }
    ]
  },

  // Homepage Hero Section
  hero: {
    title: 'Worldwide Distributors Recruitment!',
    subtitle: 'Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines. Manufacturer of solutions for pellet machines. As a technology-driven company, we integrate design, research and development, manufacturing, and sales to deliver innovative pellet machine solutions that meet global market demands.',
    stats: [
      { label: 'R&D and production', icon: 'research' },
      { label: 'Factory direct sales', icon: 'factory' },
      { label: 'Professional Certification', icon: 'certification' }
    ],
    cta: [
      { text: 'Contact Us Now', href: 'https://api.whatsapp.com/send?phone=8618615207548' },
      { text: 'Become Our Dealer', href: '/become-our-dealer/' }
    ]
  },

  // Materials Section
  materials: {
    title: 'Our pellet machine work for a wide variety of materials',
    subtitle: 'Please provide raw materials and output requirements, and we will provide a biomass pellet production solution',
    items: [
      { 
        name: 'Wood Waste', 
        href: '/materials/wood-waste/', 
        image: 'wood-waste',
        description: 'This production line can process and granulate high-moisture biological raw materials. The overall production line consists of crushing section, grinding section, drying section, granulation section, cooling section, and packaging section.',
        process: 'Raw Material → Crushing machine → Drying machine → Grinding machine → Pelleting machine → Cooling machine → Packing machine → Pellets'
      },
      { 
        name: 'Wood Chips/Sawdust', 
        href: '/materials/wood-chips-sawdust/', 
        image: 'wood-chips',
        description: 'Wood pellet machine, also known as sawdust pellet machine, pellet mill, Granulator. It is a machine that presses crushed trees, planks, bark, shavings, scraps of furniture factories and other raw materials into rod-shaped particles.',
        process: 'Crushing Section / Hammer Section / Drying Section / Pelletizing Section / Cooling Section / Packing Section'
      },
      { 
        name: 'Straw Waste', 
        href: '/materials/straw-waste/', 
        image: 'straw-waste',
        description: 'A lot of waste materials are generated during the production of furniture, and they are good raw materials for the production of fuel pellets. So as to realize the reuse of waste materials, and at the same time obtain more benefits.',
        process: 'Crushing Section / Hammer Section / Drying Section / Pelletizing Section / Cooling Section / Packing Section'
      },
      { 
        name: 'Rice Husk', 
        href: '/materials/rice-husk/', 
        image: 'rice-husk',
        description: 'Rice husk is a good raw material for the production of biomass fuel in agricultural waste. As long as the moisture meets the requirements, the rice husk can be pressed into cylindrical pellets directly with a pellet making machine.',
        process: 'Drying → Pelleting → Cooling → Packaging'
      },
      { 
        name: 'Animal Feed', 
        href: '/materials/animal-feed/', 
        image: 'animal-feed',
        description: 'Automatic dosing feed pellet line can be used for processing livestock and poultry feed pellets. It has good versatility of raw materials and is suitable for pelletizing corn, wheat, beans, oilseed meal, etc.',
        process: 'Crushing Section → Mixing Section → Pelletizing Section → Cooling Section → Classifying Screen → Packing Section'
      },
      { 
        name: 'Palm Shell', 
        href: '/materials/palm-shell/', 
        image: 'palm-shell',
        description: 'The empty fruit bunches from the residues and waste produced in the palm oil extraction process can be used as a good raw material for solid biomass fuel.',
        process: 'Crushing Section → Pulverizing Section → Pelleting Section → Cooling Section → Packing Section'
      }
    ]
  },

  // System Solutions
  systemSolutions: {
    title: 'System Solutions',
    description: 'System Solutions: Delivering comprehensive, reliable, and professional biomass new energy and environmental protection equipment tailored to your needs.',
    items: [
      {
        title: 'Biomass Pellet Line',
        description: 'Our biomass pellet line efficiently processes wood waste into high-quality fuel pellets. Ideal for wood processing plants, furniture factories, and biomass energy enterprises.',
        machines: 'Drum Wood Chipper → Hammer Mill → Drying Machine → Pellet Mill → Cooling Machine → Packing Machine',
        technique: 'Wood Chipping → Crushing → Drying → Pelletizing → Cooling → Packing',
        image: 'Biomass Pellet Line',
        href: '/solution/biomass-pellet-line/'
      },
      {
        title: 'Wood Pellet Mill Production Line',
        description: 'Complete wood pellet production line for processing wood chips and sawdust into premium wood pellets for heating and industrial use.',
        machines: 'Wood Chipper → Hammer Mill → Dryer → Pellet Mill → Cooler → Packing',
        technique: 'Raw Material Preparation → Crushing → Drying → Pelletizing → Cooling → Packing',
        image: 'Wood Pellet Mill Production Line',
        href: '/solution/wood-pellet-mill-production-line/'
      },
      {
        title: 'Straw Pelletizing Production Line',
        description: 'Turn agricultural straw waste into valuable biomass fuel pellets. Perfect for farms and renewable energy projects.',
        machines: 'Straw Crusher → Hammer Mill → Rotary Dryer → Pellet Mill → Cooler → Packing Machine',
        technique: 'Straw Cutting → Crushing → Drying → Pelletizing → Cooling → Packing',
        image: 'Straw Pelletizing Production Line',
        href: '/solution/straw-pelletizing-production-line/'
      },
      {
        title: 'Biomass Fuel Pellet Production with Rice Husk',
        description: 'Specialized rice husk pellet production line converting agricultural byproducts into efficient bio-fuel pellets.',
        machines: 'Rice Husk Hammer Mill → Rotary Dryer → Pellet Mill → Cooler → Packing',
        technique: 'Raw Material Processing → Drying → Pelletizing → Cooling → Packing',
        image: 'Rice Husk Pellet Production',
        href: '/solution/biomass-fuel-pellet-production-with-rice-husk/'
      },
      {
        title: 'Fresh Wood Logs Pretreatment',
        machines: 'Drum Wood Chipper → High Efficiency Hammer Mill → Triple Pass Dryer → Pellet Machine → Cooling Machine',
        technique: 'Crushing section → Pulverizing section → Drying section → Pelletizing section',
        image: '10-Fresh-Wood-Logs-Pretreatment',
        href: '/solution/sawdust-pellets-production-line/'
      },
      {
        title: 'Solutions for Palm Oil Industry EFB',
        machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill Series → Pellet Machine → Cooling Machine → Bagging Machine',
        technique: 'Initial size reduction → Fine size reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling',
        image: '11-Solutions-for-Palm-Oil-Industry-EFB',
        href: '/solution/palm-efb-pellet-production-line/'
      },
      {
        title: 'Waste Solution of Urban RDF',
        machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill → Pellet Mill → Cooling Section → Jumbo Packer',
        technique: 'Ominent Size Reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling Section → Bagging Section',
        image: '12-Waste-Solution-of-Urban-RDF',
        href: '/solution/plywood-waste-pellet-making-solution/'
      },
      {
        title: 'Fully Automatic Feed Pellet Production Line',
        description: 'Our automatic dosing feed pellet line is designed for the efficient processing of livestock and poultry feed. With excellent raw material flexibility, it is suitable for producing pellets from corn, wheat, beans, oilseed meal, and more. This advanced line can simultaneously handle both powder and granule processing, enabling the production of two types of feed products at the same time.',
        flow: 'Animal Feed Production Plant Flow Chart: 1. Crushing Section → 2. Mixing Section → 3. Pelletizing Section → 4. Cooling Section → 5. Classifying Screen → 6. Packing Section',
        image: 'Fully automatic feed pellet production line',
        href: '/product/fully-automatic-feed-pellet-production-line/'
      }
    ]
  },

  // Pellet Production Lines
  productionLines: {
    title: 'Pellet Production Line',
    subtitle: 'The Pellet Production Line efficiently converts raw materials into high-quality pellets for various industrial and agricultural applications.',
    items: [
      { name: '1-1.5T/H Pellet Production Line', spec: '200-300kwh 1-1.5T/H', href: '/product/1-1-5t-h-pellet-production-line/' },
      { name: '3-4T/H Pellet Production Line', spec: '350-400kwh 3-4T/H', href: '/product/3-4t-h-pellet-production-line/' },
      { name: '4-6T/H Pellet Production Line', spec: '450-600kwh 4-6T/H', href: '/product/4-6t-h-pellet-production-line/' },
      { name: '8-12T/H Pellet Production Line', spec: '450-600kwh 8-12T/H', href: '/product/8-12t-h-pellet-production-line/' }
    ]
  },

  // Lead Magnet Section
  leadMagnet: {
    title: 'Setup a pellet factory !',
    description: 'Get it for free E-book 《Your Guide how to setup a pellet factory-2025》',
    cta: 'Get Plan !',
    ctaLink: '/base_message/',
    saleText: 'SALE Coupons',
    saleCta: 'Get coupons',
    saleLink: '/project_message/'
  },

  // About Section
  about: {
    title: 'ABOUT MACREAT',
    description: 'Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines and biomass energy equipment. As a technology-driven enterprise, we integrate design, R&D, manufacturing, and sales to deliver innovative and reliable solutions for the renewable energy industry. Core Products: Pellet Mills, Hammer Mills, Auxiliary Equipment, Crushing Machine, Pellet drying Machine, Hammer Mills, Pellet-production Line, Pelletizing Machine, etc.',
    cta: 'About Us',
    ctaLink: '/about-macreat/',
    videoAlt: 'factory'
  },

  // Products Section
  products: {
    title: 'Product',
    subtitle: '62 YEARS Professional Production Experience, Professioanl Design And Technical Team Scheme For You',
    items: [
      { name: 'Biomass Pellet Machine LD700C', spec: 'LD700C 110-132kw 1.5-2T/H', href: '/product/biomass-pellet-machine/', image: 'pellet-machine-LD700C' },
      { name: 'Hydraulic Crusher LDZPH1300-600', spec: 'LDZPH 7.5KW 10-15T/H', href: '/product/hydraulic-crusher-ldzph1300-600/', image: 'Hydraulic-Crusher-LDZPH1300-600' },
      { name: 'Drum Wood Chipper', spec: 'LDBX 55-710KW 6-60T/H', href: '/product/drum-wood-chipper/', image: '1-1-Drum-Wood-Chipper' },
      { name: 'High Efficiency Hammer Mill', spec: 'GXP 55-250KW 1-60T/H', href: '/product/hammer-mill/', image: '2-3High-Efficiency-Hammer-Mill' },
      { name: 'Biomass Pellet Machine', spec: 'RH&RV 11-110KW 0.15-1.2T/H', href: '/product/pellet-mill-rh-and-rv-series/', image: 'biomass-pellet-maker-1' },
      { name: 'Cooler Machine', spec: 'LQC 7.5-30KW 1.5-12T/H', href: '/product/cooler-machine/', image: '2-1Cooler-Machine-' },
      { name: 'Triple Pass Biomass Pellet Dryer', spec: 'LDSG 3-4KW 1-6T/H', href: '/product/triple-pass-dryer/', image: '2-0Triple-Pass-Dryer' },
      { name: 'Packing Machine', spec: 'LDPM 20-2000kg 10-40bags/hour', href: '/product/packing-machine/', image: '1-3Packing-Machine-' }
    ]
  },

  // Cases Section
  cases: {
    title: 'Case',
    subtitle: 'To build the first brand of China's biomass wood pellet machinery',
    items: [
      { name: '2-3t/h wood pellet making line case', href: '/product/2-3t-h-wood-pellet-making-line-case/', image: '19.jpg' },
      { name: '4t/h Wood Pellet Production Line Case', href: '/product/4t-h-wood-pellet-production-line-case/', image: '4t/h Wood Pellet Production Line Case' },
      { name: '1-1.5t/h Wood Pellet Making Line Case', href: '/product/1-1-5t-h-wood-pellet-making-line-case/', image: 'Wood-Pellet-Making-Line-Case' },
      { name: '5-6 t/h Wood log pellets production line in Indonesia', href: '/product/5-6-t-h-wood-log-pellets-production-line/', image: 'Wood-log-pellets-production-line-in-Indonesia' },
      { name: '3-4 t/h Wood scraps pellets production line in Indonesia', href: '/product/3wood-scraps-pellets-production-line/', image: 'Wood-scraps-pellets-production-line-in-Indonesia' },
      { name: '1-1.5 t/h sanding powder pellets production line in Indonesia', href: '/product/1-1-5-t-h-sanding-powder-pellets-production-line/', image: 'sanding-powder-pellets-production-line-in-Indonesia' },
      { name: '2-3 t/h peanut shell wood pellet machine line in Hebei', href: '/product/2-3-t-h-peanut-shell-wood-pellet-line/', image: 'peanut-shell-wood-pellet-line-in-Hebei' },
      { name: 'Wood Chipper/Crusher LDBX218 working video in our customer\'s factory', href: '/product/wood-chipper-crusher-ldbx218/', image: 'Wood-Chipper-Crusher-LDBX218-working-video-in-our-customers-factory' }
    ]
  },

  // News Section
  news: {
    title: 'News',
    subtitle: 'Professioanl Design And Technical Team Scheme For You',
    items: [
      {
        title: 'MACREAT Makes Dual-Expo Debut in Thailand & Vietnam',
        excerpt: 'March 25: MACREAT Makes a Simultaneous Debut at Two Major Exhibitions in Bangkok, Thailand, and Ho Chi Minh City, Vietnam...',
        href: '/macreat-makes-dual-expo-debut-in-thailand-vietnam/',
        image: 'MACREAT Makes Dual-Expo Debut in Thailand & Vietnam'
      },
      {
        title: 'MACREAT Welcomes You at BBBSAF-AETD 2026 Vietnam – Booth W12',
        excerpt: 'Welcome to the Biogas, Biomass, Bioenergy & Biofuels SAF Asia Summit 2026! This marks Southeast Asia\'s premier professional gathering dedicated...',
        href: '/macreat-welcomes-you-at-bbbsaf-aetd-2026-vietnam-booth-w12/',
        image: 'MACREAT cordially invites you to visit us at BBBSAF-AETD 2026 Vietnam (Booth No. W12).'
      },
      {
        title: 'MACREAT Cordially Invites You to the 2026 ASEAN Biomass Energy Expo',
        excerpt: 'As the global energy transition continues to deepen, biomass energy—a clean, efficient, and renewable form of energy—is embracing unprecedented opportunities...',
        href: '/macreat-cordially-invites-you-to-the-2026-asean-biomass-energy-expo/',
        image: 'MACREAT Cordially Invites You to the 2026 ASEAN Biomass Energy Expo'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'FAQ',
    items: [
      'Are you a trading company or a manufacturer?',
      'How long is your delivery time?',
      'Can you provide all the technical parameters of the machine?',
      'Can you supply a complete animal feed production line?',
      'What is the warranty period for your machines?',
      'What is the price of this product?',
      'How much does shipping cost to my country?'
    ]
  },

  // Contact Section
  contact: {
    title: 'Get In Touch !',
    whatsapp: '+86-15207548',
    whatsappLink: 'https://api.whatsapp.com/send?phone=8618615207548',
    email: 'pellet@macreat.com',
    emailLink: 'mailto:pellet@macreat.com',
    phone: '+86-15207548',
    phoneLink: 'tel:+86-15207548',
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/macreatpellet' },
      { name: 'Twitter', href: 'https://twitter.com/macreatmachine' },
      { name: 'Instagram', href: 'https://www.instagram.com/woodpelletmill/' },
      { name: 'Youtube', href: 'https://www.youtube.com/@macreatpelletmill2327' },
      { name: 'Whatsapp', href: 'https://api.whatsapp.com/send?phone=8618615207548' }
    ]
  },

  // Contact Form
  contactForm: {
    title: 'Send a message',
    fields: [
      { name: 'name', placeholder: 'Name *', required: true },
      { name: 'email', placeholder: 'Email *', required: true },
      { name: 'phone', placeholder: 'Whatsapp/Phone *', required: true },
      { name: 'country', placeholder: 'Country *', required: true }
    ],
    messagePlaceholder: '* Please let us know more details if possible. What are raw materials? Which machine do you want? And We can receive an accurate quotation.',
    button: 'Get A Quote'
  },

  // Footer
  footer: {
    copyright: 'Copyright © 2026 - Macreat Biomass Pellet Machine Manufacturer',
    privacyLink: '/privacy-policy/',
    menu: [
      {
        title: 'Biomass Pellet Line Solution',
        links: [
          { text: 'Biomass Pellet Line', href: 'https://macreat.com/solution/biomass-pellet-line/' },
          { text: 'Furniture Scraps Pellet Production Solution', href: 'https://macreat.com/solution/furniture-scraps-pellet-production-solution/' },
          { text: 'Palm EFB Pellet production line', href: 'https://macreat.com/solution/palm-efb-pellet-production-line/' },
          { text: 'Peanut shell pelletizing solution', href: 'https://macreat.com/solution/peanut-shell-pelletizing-solution/' },
          { text: 'Plywood Waste Pellet Making Solution', href: 'https://macreat.com/solution/plywood-waste-pellet-making-solution/' },
          { text: 'Biomass Fuel Pellet Production with Rice Husk', href: 'https://macreat.com/solution/biomass-fuel-pellet-production-with-rice-husk/' }
        ]
      },
      {
        title: 'Pellet Production Line',
        links: [
          { text: '1-1.5 t/h sanding powder pellets production line in Indonesia', href: 'https://macreat.com/product/1-1-5-t-h-sanding-powder-pellets-production-line/' },
          { text: '1-1.5T/H Pellet Production Line', href: 'https://macreat.com/product/1-1-5t-h-pellet-production-line/' },
          { text: '2-3 t/h peanut shell wood pellet machine line in Hebei', href: 'https://macreat.com/product/2-3-t-h-peanut-shell-wood-pellet-line/' },
          { text: '4t/h Wood Pellet Production Line Case', href: 'https://macreat.com/product/4t-h-wood-pellet-production-line-case/' },
          { text: '5-6 t/h Wood log pellets production line in Indonesia', href: 'https://macreat.com/product/5-6-t-h-wood-log-pellets-production-line/' },
          { text: '8-12T/H Pellet Production Line', href: 'https://macreat.com/product/8-12t-h-pellet-production-line/' }
        ]
      }
    ],
    productLinks: [
      { text: 'Biomass Pellet Machine LD700C', href: 'https://macreat.com/product/biomass-pellet-machine/' },
      { text: 'Hydraulic Crusher / Wood Chipper LDZPH1300-600', href: 'https://macreat.com/product/hydraulic-crusher-ldzph1300-600/' }
    ]
  },

  // Floating Social Buttons
  floatingSocial: [
    { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=8618615207548', icon: 'whatsapp' },
    { name: 'Get A Quote Now', href: '#message', icon: 'email' }
  ]
};

// Multi-language content
export const translations = {
  en: siteContent,
  zh: {
    // Chinese translations (placeholder - would need actual translation)
    ...siteContent,
    hero: {
      ...siteContent.hero,
      title: '全球经销商招募！'
    },
    about: {
      ...siteContent.about,
      title: '关于MACREAT'
    },
    contact: {
      ...siteContent.contact,
      title: '联系我们！'
    }
  },
  id: {
    // Indonesian translations (placeholder)
    ...siteContent,
    hero: {
      ...siteContent.hero,
      title: 'Rekrutan Distributor Worldwide!'
    },
    about: {
      ...siteContent.about,
      title: 'TENTANG MACREAT'
    },
    contact: {
      ...siteContent.contact,
      title: 'Hubungi Kami!'
    }
  }
};

export default siteContent;