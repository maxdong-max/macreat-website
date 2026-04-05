// Website Content Data - 100% Preserved from Original Site
// DO NOT modify any text content - Only layout/structure changes allowed

export const siteContent = {
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
      { text: 'NEWS', href: '/news/', hasDropdown: true, dropdownItems: [
        { text: 'Exhibition News', href: '/news/' },
        { text: 'Pellet Machine News', href: '/news/' }
      ] },
      { text: 'Contact Us', href: '/contact/' }
    ],
    social: [
      { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=8618615207548', icon: 'whatsapp' },
      { name: 'Email', href: 'mailto:pellet@macreat.com', icon: 'email' },
      { name: 'Facebook', href: 'https://www.facebook.com/macreatpellet/', icon: 'facebook' },
      { name: 'X', href: 'https://x.com/MacreatBiomass', icon: 'twitter' },
      { name: 'YouTube', href: 'https://www.youtube.com/@macreatpelletmill2327/', icon: 'youtube' },
      { name: 'Instagram', href: 'https://www.instagram.com/woodpelletmill/', icon: 'instagram' }
    ]
  },

  hero: {
    title: 'Worldwide Distributors Recruitment!',
    subtitle: 'Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines. Manufacturer of solutions for pellet machines. As a technology-driven company, we integrate design, research and development, manufacturing, and sales to deliver innovative pellet machine solutions that meet global market demands.',
    backgroundImage: '/images/macreat/Pellets-2.jpg',
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

  materials: {
    title: 'Our pellet machine work for a wide variety of materials',
    subtitle: 'Please provide raw materials and output requirements, and we will provide a biomass pellet production solution',
    items: [
      { name: 'Wood Waste', href: '/solution/biomass-pellet-line/', image: '/images/macreat/material-wood-waste.jpg' },
      { name: 'Wood Chips/Sawdust', href: '/solution/wood-pellet-mill-production-line/', image: '/images/macreat/material-wood-chips.png' },
      { name: 'Straw Waste', href: '/solution/straw-pelletizing-production-line/', image: '/images/macreat/material-straw-waste.png' },
      { name: 'Rice Husk', href: '/solution/biomass-fuel-pellet-production-with-rice-husk/', image: '/images/macreat/material-rice-husk.png' },
      { name: 'Animal Feed', href: '/product/fully-automatic-feed-pellet-production-line/', image: '/images/macreat/material-animal-feed.jpg' },
      { name: 'Palm Shell', href: '/solution/palm-efb-pellet-production-line/', image: '/images/macreat/material-palm-shell.png' }
    ]
  },

  systemSolutions: {
    title: 'System Solutions',
    description: 'System Solutions: Delivering comprehensive, reliable, and professional biomass new energy and environmental protection equipment tailored to your needs.',
    items: [
      {
        title: 'Biomass Pellet Line',
        subtitle: 'High Capacity Pellet Production (10-100 T/H)',
        description: 'This production line can process and granulate high-moisture biological raw materials. The overall production line consists of crushing section, grinding section, drying section, granulation section, cooling section, and packaging section. This production line can achieve fully automated operation, efficient and stable production, and reduce manual intervention.',
        machines: 'Drum Wood Chipper → Hammer Mill → Triple Pass Dryer → Pellet Machine → Cooling Machine → Packing Machine',
        technique: 'Crushing section → Grinding section → Drying section → Granulation section → Cooling section → Packaging section',
        flow: 'Raw Material → 1. Crushing machine → 2. Drying machine → 3. Grinding machine → 4. Pelleting machine → 5. Cooling machine → 6. Packing machine → Pellets',
        features: [
          'High Capacity Pellet Production (10-100 T/H)',
          'Fully Automatic Biomass Pellet Line',
          'Multi-Material Pelletizing Technology',
          'Clean and Safe Production Environment (ADC Concept)',
          'Energy Efficiency & Low Labor Cost',
          'Global Project Experience & On-Site Installation'
        ],
        materials: 'Palm Kernel Shell, Palm EFB, Furfural residue, Agricultural straws, Animal Dumps, Wastes Papers, Wasted Furniture & Panels, Wastes from food industries, etc.',
        image: '/images/macreat/11-1.jpg',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2024/11/05-2英文.jpg',
          features: 'https://macreat.com/wp-content/uploads/2024/11/05-1英文.jpg',
          process: 'https://macreat.com/wp-content/uploads/2024/12/07-Granulation-Process-1.jpg',
          customerPlant: 'https://macreat.com/wp-content/uploads/2024/12/07-Customer-plant-1.jpg',
          product: 'https://macreat.com/wp-content/uploads/2024/12/07-Biomass-Pellet-Line.jpg',
          productVideo: 'https://macreat.com/wp-content/uploads/2024/11/16-Wood-Chipper-Crusher-LDBX218-working-video-in-our-customers-factory.jpg'
        },
        href: '/solution/biomass-pellet-line/'
      },
      {
        title: 'Wood Pellet Mill Production Line',
        subtitle: 'Wood pellet machine, also known as sawdust pellet machine',
        description: 'Wood pellet machine, also known as sawdust pellet machine, pellet mill, Granulator. It is a machine that presses crushed trees, planks, bark, shavings, scraps of furniture factories and other raw materials into rod-shaped particles with a diameter of 6/8/10 mm through mechanical physical extrusion.',
        machines: 'Wood Chipper → Hammer Mill → Rotary Dryer → Pellet Machine → Cooling Machine → Packing Machine',
        technique: 'Crushing Section → Hammer Section → Drying Section → Pelletizing Section → Cooling Section → Packing Section',
        flow: 'Wood → Wood Chipper (3-5cm chips) → Hammer Mill (3-5mm sawdust) → Dryer (10-15% moisture) → Pellet Machine (6/8/10mm pellets) → Cooler → Packing',
        features: [
          'Crushing: wood chipper crushes waste wood into 3-5cm wood chips',
          'Hammer: grinder grinds wood chips into 3-5mm sawdust',
          'Drying: moisture content to 10-15%',
          'Pelletizing: make sawdust into 6/8/10mm pellets',
          'Cooling: cool hot pellets',
          'Packing: customizable package weight'
        ],
        image: '/images/macreat/material-wood-chips.png',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2023/11/4-Wood-pellet-mill-production-line-1-1024x477.jpg',
          process: 'https://macreat.com/wp-content/uploads/2023/11/4-Wood-pellet-mill-production-line-3.jpg',
          customerPlant: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-1.jpg',
          product: 'https://macreat.com/wp-content/uploads/2024/12/07-Wood-Pellet-Mill-Production-Line-2.jpg',
          findMarket: 'https://macreat.com/wp-content/uploads/2023/11/5-Find-a-good-market-for-pellets-and-expand-production.jpg'
        },
        customerPlant: {
          capacity: 'From 1T/h to 10T/h, customized based on customer requirements',
          features: [
            'Wood chipper crushes wood scraps into 3-8cm wood chips',
            'Hammer mill grinds 3-8cm wood chips into 3-5mm sawdust',
            'Triple pass dryer reduces moisture to 10-15%',
            'Pellet machine produces 6/8/10mm pellets',
            'Cooling system stabilizes pellet temperature',
            'Automatic packing for various bag sizes'
          ],
          materials: 'Wood logs, wood chips, sawdust, bark, furniture factory waste, wood planks'
        },
        processSteps: [
          {
            title: 'Crushing Section',
            description: 'The wood chipper first crushes the waste wood into 3-5cm wood chips',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Crushing-Section.jpg'
          },
          {
            title: 'Hammer Section',
            description: 'Crush 3-5cm wood chips into 3-5mm sawdust',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Hammer-Section.jpg'
          },
          {
            title: 'Drying Section',
            description: 'Drying the moisture of the wood chips into 10-15% of moisture suitable for pelletizing',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Drying-Section.jpg'
          },
          {
            title: 'Pelletizing Section',
            description: 'The pelleting machine will make sawdust with appropriate size and moisture into 6/8/10mm pellets',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Pelletizing-Section.jpg'
          },
          {
            title: 'Cooling Section',
            description: 'The temperature of the pellets just out of the pellet machine will be hot, need the cooler to cool the pellet. If you don\'t use the cooler, you can choose to make a large silo for natural cooling',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Cooling-Section.jpg'
          },
          {
            title: 'Packing Section',
            description: 'Pack the cooled pellets, the weight of the package can be changed according to your needs',
            image: 'https://macreat.com/wp-content/uploads/2024/11/Wood-Pellet-Mill-Production-Line-Packing-Section.jpg'
          }
        ],
        findMarket: {
          title: 'Find A Good Market For Pellets, And Expand Production',
          description: 'Coincidentally, a customer of Qixia in China also bought a production line of 3-4 tons to process apple wood, and said that the pellets are sold well in Korea and Japan, and they can consider adding other raw materials in the future to fill in another production line.'
        },
        moistureNote: {
          title: 'The Moisture Content Of Scraps Is Less Than 15%',
          description: 'If moisture is higher, need to use dryer to reduce the water content before pelleting section.'
        },
        href: '/solution/wood-pellet-mill-production-line/'
      },
      {
        title: 'Straw Pelletizing Production Line',
        subtitle: 'Turn agricultural waste into valuable pellets',
        description: 'A lot of waste materials are generated during the production of furniture, and they are good raw materials for the production of fuel pellets. So as to realize the reuse of waste materials, and at the same time obtain more benefits.',
        machines: 'Rotary Crusher → Hammer Mill → Triple Pass Dryer → Pellet Machine → Cooling Machine → Packing Machine',
        technique: 'Crushing Section → Hammer Section → Drying Section → Pelletizing Section → Cooling Section → Packing Section',
        flow: 'Straw → Rotary Crusher (3-5cm) → Hammer Mill (3-5mm) → Dryer (10-15% moisture) → Pellet Machine → Cooler → Packing',
        features: [
          'Crushing: rotary crusher crushes straw into 3-5cm straw chips',
          'Hammer: crush into 3-5mm strawdust',
          'Drying: moisture to 10-15%',
          'Triple-Pass Dryer: 70% thermal efficiency, 50% less floor space',
          'Pelletizing: produce 6/8/10mm pellets',
          'Packing: customizable weight'
        ],
        image: '/images/macreat/material-straw-waste.png',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2023/11/8-straw-pelletizing-production-line-2.jpg',
          process: 'https://macreat.com/wp-content/uploads/2023/11/8-straw-pelletizing-production-line-2.jpg'
        },
        processSteps: [
          {
            title: 'Crushing Section',
            description: 'The rotary crusher first crushes the straw into 3-5cm straw chipper'
          },
          {
            title: 'Hammer Section',
            description: 'Crush 3-5cm straw chipper into 3-5mm strawdust'
          },
          {
            title: 'Drying Section',
            description: 'Drying the moisture of the strawdust into 10-15% of moisture suitable for pelletizing'
          },
          {
            title: 'Pelletizing Section',
            description: 'The pelleting machine will make strawdust with appropriate size and moisture into 6/8/10mm pellets'
          },
          {
            title: 'Cooling Section',
            description: 'The temperature of the pellets just out of the pellet mill will be hot, need the cooler to cool the pellet. If you don\'t use the cooler, you can choose to make a large silo for natural cooling'
          },
          {
            title: 'Packing Section',
            description: 'Pack the cooled pellets, the weight of the package can be changed according to your needs'
          }
        ],
        moistureNote: {
          title: 'The Moisture Content Of Scraps Is Less Than 15%',
          description: 'If moisture is higher, need to use dryer to reduce the water content before pelleting section.'
        },
        triplePassDryer: {
          title: 'The Solution To Handle Wet Straw And Wet Wood Chips—Triple-Pass Dryer',
          description: 'The three-channel dryer is composed of inner, middle and outer three-layer cylinders. The wet material enters from one end of the inner cylinder.',
          features: [
            'The thermal efficiency of the cylinder body is as high as 70%',
            'Compared with the single-cylinder dryer, the floor space is reduced by about 50%',
            'The air outlet temperature is low, the dust removal equipment can be used for a long time, and it can be continuously produced for the next process'
          ],
          image: 'https://macreat.com/wp-content/uploads/2023/11/8-The-Solution-To-Handle-Wet-Straw-And-Wet-Wood-Chips—Triple-Pass-Dryer.jpg'
        },
        href: '/solution/straw-pelletizing-production-line/'
      },
      {
        title: 'Biomass Fuel Pellet Production with Rice Husk',
        subtitle: 'Rice husk is a good raw material for biomass fuel',
        description: 'Rice husk is a good raw material for the production of biomass fuel in agricultural waste. As long as the moisture meets the requirements, the rice husk can be pressed into cylindrical pellets directly with a pellet making machine, and the diameter of the formed pellets can be 6/8/10 mm.',
        machines: 'Hammer Mill → Triple Pass Dryer → Pellet Machine → Cooling Machine → Packing Machine',
        technique: 'Drying Section → Pelletizing Section → Cooling Section → Packing Section',
        flow: 'Rice Husk → Pre-cleaning → Dryer (10-15% moisture) → Pellet Machine (6/8/10mm) → Cooler → Packing',
        features: [
          'Drying: moisture must be 10-15%',
          'Pelletizing: physical compression, no chemical adhesives',
          'Cooling: reduce temperature and strengthen pellets',
          'Packing: automatic weighing and sealing',
          'Optional: Triple Pass Dryer for high moisture materials',
          'Equipment: LDSG Dryer, LD700C Pellet Machine, LQC Cooler, LDPM Packing Machine'
        ],
        image: '/images/macreat/material-rice-husk.png',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2023/11/3-Biomass-Fuel-Pellet-Production-with-Rice-Husk.jpg',
          process: 'https://macreat.com/wp-content/uploads/2023/11/3-Biomass-Fuel-Pellet-Production-with-Rice-Husk-3.jpg'
        },
        processSteps: [
          {
            title: 'Drying Section',
            description: 'In order to ensure the output and the formation of particles, the moisture content of the raw materials must be 10%-15%. If the moisture content of the raw material is higher than 15%, you need to use a dryer to reduce the moisture.',
            equipment: 'Non-Essential Equipment'
          },
          {
            title: 'Pelletizing Section',
            description: 'The full process is a complete physical change. By the spinning of the main shaft, it drives the rollers of the pellet mill to push the materials into the trumpet shaped holes of the pellet mill ring die, and the materials are firmly compressed into shape. There are no any chemical adhesives are applied at all.',
            equipment: 'Compulsory Equipment'
          },
          {
            title: 'Cooling Section',
            description: 'When the pellets are freshly made out of the machine, because it\'s from fully physical work, the temperature is very high, thus with the help of the cooling machine, not only the pellets could be cooled down, but also it could store the pellets for a while, strengthen the pressure of packing & conveying sections.',
            equipment: 'Optional Equipment'
          },
          {
            title: 'Packing Section',
            description: 'Under the action of the packaging machine, the pellets are packed into the bag according to the required weight, and the bag is automatically sewn. Convenient for transportation and sale.',
            equipment: 'Optional Equipment'
          }
        ],
        moistureNote: {
          title: 'The Moisture Content Of Scraps Is Less Than 15%',
          description: 'If moisture is higher, need to use dryer to reduce the water content before pelleting section.'
        },
        equipment: [
          {
            name: 'Triple Pass Dryer',
            model: 'LDSG 3-4KW 1-6T/H',
            description: 'Wood chips, Animal feed, bamboo chips, straw crushed materials, etc.',
            image: 'https://macreat.com/wp-content/uploads/2023/11/2-0Triple-Pass-Dryer.jpg'
          },
          {
            name: 'Pellet Machine',
            model: 'LD700C 110-132kw 1.5-2T/H',
            description: 'Biomass-energy fuels plant, power plant, wood processing plant, chemical plant etc.',
            image: 'https://macreat.com/wp-content/uploads/2025/04/pellet-machine-LD700C.jpg'
          },
          {
            name: 'Cooler Machine',
            model: 'LQC 7.5-30KW 1.5-12T/H',
            description: 'Using vibration locking device to improve the cooling effect, reduce the rate of breakage, reducing power consumption.',
            image: 'https://macreat.com/wp-content/uploads/2023/11/2-1Cooler-Machine.jpg'
          },
          {
            name: 'Packing Machine',
            model: 'LDPM 20-2000kg 10-40bags/hour',
            description: 'Speed fast, high precision, weighing, conveying and sealing bags automatically.',
            image: 'https://macreat.com/wp-content/uploads/2023/11/1-3Packing-Machine-.jpg'
          }
        ],
        customerCase: {
          location: 'Wenzhou, Zhejiang Province, China',
          capacity: '2-3 t/h',
          rawMaterial: 'sawdust and wood block',
          moisture: 'less than 20%',
          description: 'We establish one 2-3 t/h wood pellet line in Wenzhou, Zhejiang Province in China. The raw material is sawdust and wood block. The moisture of raw material is less than 20%.',
          image: 'https://macreat.com/wp-content/uploads/2023/11/10-Pellet-mill-LD720-in-Wenzhou.jpg'
        },
        href: '/solution/biomass-fuel-pellet-production-with-rice-husk/'
      },
      {
        title: 'Palm EFB Pellet Production Line',
        subtitle: 'Turn palm oil waste into energy',
        description: 'The empty fruit bunches from the residues and waste produced in the palm oil extraction process can be used as a good raw material for solid biomass fuel. As long as the moisture meets the requirements, the EFB can be directly pressed into cylindrical particles with a pelletizer.',
        machines: 'Twin-shaft Shredder → Hammer Mill → Triple-pass Dryer → Pellet Machine → Cooling Machine → Bagging Machine',
        technique: 'Crushing Section → Pulverizing Section → Drying Section → Pelleting Section → Cooling Section → Packing Section',
        flow: 'Palm EFB → Shredder (30-100mm) → Hammer Mill (twice grinding) → Dryer (10-15% moisture) → Pellet Machine → Cooler → Packing',
        features: [
          'Crushing: size reduction to 30-100mm',
          'Pulverizing: twice-grinding for palm fiber',
          'Drying: moisture to 10-15%',
          'Pelletizing: produce 6/8/10mm pellets',
          'High moisture tolerance',
          'Realize reuse of waste materials'
        ],
        image: 'https://macreat.com/wp-content/uploads/2023/11/6-Palm-EFB-Pellet-production-line-.jpg',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2023/11/6-Palm-EFB-Pellet-production-line-.jpg',
          process: 'https://macreat.com/wp-content/uploads/2023/11/6-Palm-EFB-Pellet-production-line-6.jpg',
          crushing: 'https://macreat.com/wp-content/uploads/2023/11/6-1Crushing-Section.jpg',
          pulverizing: 'https://macreat.com/wp-content/uploads/2023/11/6-2Pulverizing-Section.jpg',
          drying: 'https://macreat.com/wp-content/uploads/2023/11/6-3Drying-Section.jpg',
          pelleting: 'https://macreat.com/wp-content/uploads/2023/11/6-4Pelleting-Section.jpg'
        },
        processSteps: [
          {
            title: 'Crushing Section',
            description: 'First size reduction, turning the huge chunks of the EFB chips into within 30-100mm (L*W). The capacity won\'t be affected by the moisture content.',
            equipment: 'Twin-shaft Shredder | Compulsory Equipment',
            image: 'https://macreat.com/wp-content/uploads/2023/11/6-1Crushing-Section.jpg'
          },
          {
            title: 'Pulverizing Section',
            description: 'No matter what moisture condition the materials are, Macreat suggest that better apply twice-grinding for processing palm EFB. Palm fiber has extremely high toughness, it will become silky after the first pulverization, and can reach the standard only after the second pulverization.',
            equipment: 'Hammer Mill | Compulsory Equipment',
            image: 'https://macreat.com/wp-content/uploads/2023/11/6-2Pulverizing-Section.jpg'
          },
          {
            title: 'Drying Section',
            description: 'To produce pellets it is important to reduce the moisture into 10-15%, thus after reducing the size of all materials, they need to be dehydrated by a dryer. The capacity could be strictly affected by the moisture content.',
            equipment: 'Triple-pass Dryer | Compulsory Equipment',
            image: 'https://macreat.com/wp-content/uploads/2023/11/6-3Drying-Section.jpg'
          },
          {
            title: 'Pelleting Section',
            description: 'The full process is a complete physical change. By the spinning of the main shaft, it drives the rollers of the pellet mill to push the materials into the trumpet gaped holes of the pellet mill ring die, and the materials are firmly compressed into shape. There are no any chemical adheres are applied at all.',
            equipment: 'Pellet Machine | Compulsory Equipment',
            image: 'https://macreat.com/wp-content/uploads/2023/11/6-4Pelleting-Section.jpg'
          }
        ],
        moistureNote: 'The Moisture Content Of Scraps Is Less Than 15%. If moisture is higher, need to use dryer to reduce the water content before pelleting section.',
        href: '/solution/palm-efb-pellet-production-line/'
      },
      {
        title: 'Solutions for Palm Oil Industry EFB',
        machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill Series → Pellet Machine → Cooling Machine → Bagging Machine',
        technique: 'Initial size reduction → Fine size reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling',
        image: '/images/macreat/11-2.jpg',
        href: '/solution/palm-efb-pellet-production-line/'
      },
      {
        title: 'Waste Solution of Urban RDF',
        machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill → Pellet Mill → Cooling Section → Jumbo Packer',
        technique: 'Size Reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling Section → Bagging Section',
        image: '/images/macreat/0313-solution-1.jpg',
        href: '/solution/plywood-waste-pellet-making-solution/'
      },
      {
        title: 'Fully Automatic Feed Pellet Production Line',
        description: 'Our automatic dosing feed pellet line is designed for the efficient processing of livestock and poultry feed. With excellent raw material flexibility, it is suitable for producing pellets from corn, wheat, beans, oilseed meal, and more.',
        subtitle: 'Suitable for large and medium-size farms and medium-sized feed mill plant',
        flow: 'Animal Feed Production Plant Flow Chart: 1. Crushing Section → 2. Mixing Section → 3. Pelletizing Section → 4. Cooling Section → 5. Classifying Screen → 6. Packing Section',
        features: [
          'Automatic dosing feed pellet line can be used for processing livestock and poultry feed pellets',
          'Good versatility of raw materials, suitable for pelletizing corn, wheat, beans, oilseed meal, etc.',
          'Can produce chicken feed, cattle feed, sheep feed and other kinds of pellet feed or powder feed',
          'Automatic batching system with PLC program',
          'High weighing accuracy: static weighing accuracy of 1‰, dynamic weighing accuracy of 3‰',
          'Less human intervention: 1-2 people for feeding, 1-2 people for packaging'
        ],
        image: '/images/macreat/Fully-automatic-feed-pellet-production-line-.jpg',
        images: {
          overview: 'https://macreat.com/wp-content/uploads/2024/02/Fully-automatic-feed-pellet-production-line-4.jpg',
          flowchart: 'https://macreat.com/wp-content/uploads/2024/02/Fully-automatic-feed-pellet-production-line-5.jpg'
        },
        processSteps: [
          {
            title: 'Crushing Section',
            description: 'Water drop type grinder, high pulverizing efficiency, smooth operation',
            equipment: 'Hammer mill | Water drop mill'
          },
          {
            title: 'Mixing Section',
            description: 'Double screw belt mixer, mixing uniformity ≥95%',
            equipment: 'Vertical mixer | Horizontal mixer'
          },
          {
            title: 'Pelletizing Section',
            description: 'Pressure roller adopts slanting groove structure to avoid pressure roller slipping',
            equipment: 'Flat die pellets | Horizontal ring die'
          },
          {
            title: 'Cooling Section',
            description: 'Using vibration locking device to improve the cooling effect',
            equipment: 'Horizontal cooler | Countercurrent cooler'
          },
          {
            title: 'Packing Section',
            description: 'Speed fast, high precision, weighing, conveying and sealing bags automatically',
            equipment: 'Automatic packing machine'
          }
        ],
        advantages: [
          {
            title: 'Automatic Batching',
            description: 'Multiple materials automatic batching, controlled by PLC touch screen, automatically stop when the weight is reached'
          },
          {
            title: 'Weighing System',
            description: 'Weighing silo equipped with weighing sensor, can be equipped with pneumatic discharge device'
          },
          {
            title: 'High Efficiency Crusher',
            description: 'Water drop crusher, 360-degree screen to improve efficiency; motor can rotate forward and reverse'
          },
          {
            title: 'Buffer Silo',
            description: 'Consistent volume with mixer to ensure continuous operation of pellet machine'
          },
          {
            title: 'Variable Frequency Feeder',
            description: 'Variable frequency motor with reducer, speed adjustable to match pelleting speed'
          },
          {
            title: 'Countercurrent Cooler',
            description: 'With level meter for automatic discharge, manual and automatic options available'
          }
        ],
        faq: [
          {
            q: 'Are you manufacturer?',
            a: 'Yes, we are manufacturer. Welcome to visit our factory and check the machines.'
          },
          {
            q: 'What is the delivery time?',
            a: 'Generally the delivery time is about 8-10 working days for small machines, and about 15-20 working days for large machines. If you need customization, please discuss with us to confirm the exact delivery time.'
          },
          {
            q: 'Can you provide parameters and layout drawing?',
            a: 'Yes, we can provide all the parameters, price, layout drawing, factory design etc.'
          },
          {
            q: 'Can you provide complete feed pellet production line?',
            a: 'Yes, we can provide the complete feed pellet production line, from raw material crushing to pellet packing. Our machines are guaranteed for one year, excluding wearing parts.'
          },
          {
            q: 'How to get a quotation?',
            a: 'We need more information about your demand. Please tell us your raw materials and your detailed requirements, we will make quotation sheet for you.'
          }
        ],
        about: {
          title: 'ABOUT US',
          description: 'Started in 1960, Macreat is pellet machine manufacturer and supplier. We are a technology production enterprise that incorporates designing, R & D, manufacturing and sales. Main machine: Pellet Mills, Hammer Mills, Auxiliary Equipment, Crushing Machine, Pellet drying Machine, Pellet Production Line, Pelletizing Machine, and the pellet machine\'s consumable parts, etc.'
        },
        whyChoose: [
          {
            title: 'Customer Consultation',
            description: 'We are eager to gain a profound understanding of your industrial process and determine your precise requirements for poultry feed, cattle feed, aquatic feed, pet food, or other types of feed processing.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/1-Customer-Consultation.png'
          },
          {
            title: 'Feed Plant Design',
            description: 'We will customize the complete small-scale feed machine plant that you require. Moreover, we will notify you of every extra detail that can facilitate the operation and minimize the overall cost.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/2-Design.png'
          },
          {
            title: 'Equipment Manufacturing',
            description: 'The crucial components of the complete small feed-making machine are fabricated in our own workshops in Asia.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/3-Equipment-Manufacturing-1.png'
          },
          {
            title: 'Quality Inspection & Testing',
            description: 'Before shipment from the factory, all pellet mill machines are subject to inspection by the quality inspection department.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/11-1.jpg'
          },
          {
            title: 'Equipment Delivery',
            description: 'For equipment boxing and packaging, we employ professional packaging and modular solutions to guarantee safe delivery.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/5-Delivery.png'
          },
          {
            title: 'Installation & Commissioning',
            description: 'A Macreat supervisor will be present to ensure that everything is installed securely and comprehensively.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/6-Installation.png'
          },
          {
            title: 'Staff Training',
            description: 'We offer comprehensive training for the technicians involved in each small-feed-making-machine project.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/7-Staff-Training.png'
          },
          {
            title: 'Project Follow-Up',
            description: 'Once everything is operational, our team will assist you further whenever necessary. We are available 24/7.',
            image: 'https://macreat.com/wp-content/uploads/2024/02/8-After-sales.png'
          }
        ],
        href: '/product/fully-automatic-feed-pellet-production-line/'
      }
    ]
  },

  productionLines: {
    title: 'Pellet Production Line',
    subtitle: 'The Pellet Production Line efficiently converts raw materials into high-quality pellets for various industrial and agricultural applications.',
    items: [
      { name: '1-1.5T/H Pellet Production Line', spec: '200-300kwh 1-1.5T/H', href: '/product/1-1-5t-h-pellet-production-line/', image: '/images/macreat/Pellet-Machine-3.jpg' },,
      { name: '3-4T/H Pellet Production Line', spec: '350-400kwh 3-4T/H', href: '/product/3-4t-h-pellet-production-line/', image: '/images/macreat/Pellet-Machine-2.jpg' },,
      { name: '4-6T/H Pellet Production Line', spec: '450-600kwh 4-6T/H', href: '/product/4-6t-h-pellet-production-line/', image: '/images/macreat/Pellets-2.jpg' },,
      { name: '8-12T/H Pellet Production Line', spec: '450-600kwh 8-12T/H', href: '/product/8-12t-h-pellet-production-line/', image: '/images/macreat/biomass-pellet-maker-1.jpg' }
    ]
  },

  leadMagnet: {
    title: 'Setup a pellet factory !',
    description: 'Get it for free E-book 《Your Guide how to setup a pellet factory-2025》',
    image: '/images/macreat/ebook-cover.jpg',
    cta: 'Get Plan !',
    ctaLink: '/base_message/',
    saleText: 'SALE Coupons',
    saleCta: 'Get coupons',
    saleLink: '/project_message/'
  },

  about: {
    title: 'ABOUT MACREAT',
    description: 'Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines and biomass energy equipment. As a technology-driven enterprise, we integrate design, R&D, manufacturing, and sales to deliver innovative and reliable solutions for the renewable energy industry. Core Products: Pellet Mills, Hammer Mills, Auxiliary Equipment, Crushing Machine, Pellet drying Machine, Hammer Mills, Pellet-production Line, Pelletizing Machine, etc.',
    cta: 'About Us',
    ctaLink: '/about-macreat/',
    videoAlt: 'Play Video',
    videoUrl: 'https://www.youtube.com/embed/UtQPMJT_1lQ'
  },

  products: {
    title: 'Product',
    subtitle: '62 YEARS Professional Production Experience, Professional Design And Technical Team Scheme For You',
    items: [
      { name: 'Biomass Pellet Machine LD700C', spec: 'LD700C 110-132kw 1.5-2T/H', href: '/product/biomass-pellet-machine/', image: '/images/macreat/pellet-machine-LD700C.jpg' },,
      { name: 'Hydraulic Crusher LDZPH1300-600', spec: 'LDZPH 7.5KW 10-15T/H', href: '/product/hydraulic-crusher-ldzph1300-600/', image: '/images/macreat/Hydraulic-Crusher-LDZPH1300-600.jpg' },,
      { name: 'Drum Wood Chipper', spec: 'LDBX 55-710KW 6-60T/H', href: '/product/drum-wood-chipper/', image: '/images/products/1-1-Drum-Wood-Chipper.jpg' },
      { name: 'High Efficiency Hammer Mill', spec: 'GXP 55-250KW 1-60T/H', href: '/product/hammer-mill/', image: '/images/macreat/2-3High-Efficiency-Hammer-Mill.jpg' },,
      { name: 'Biomass Pellet Machine', spec: 'RH&RV 11-110KW 0.15-1.2T/H', href: '/product/pellet-mill-rh-and-rv-series/', image: '/images/macreat/biomass-pellet-maker-1.jpg' },,
      { name: 'Cooler Machine', spec: 'LQC 7.5-30KW 1.5-12T/H', href: '/product/cooler-machine/', image: '/images/macreat/2-1Cooler-Machine-.jpg' },,
      { name: 'Triple Pass Biomass Pellet Dryer', spec: 'LDSG 3-4KW 1-6T/H', href: '/product/triple-pass-dryer/', image: '/images/macreat/2-0Triple-Pass-Dryer.jpg' },,
      { name: 'Packing Machine', spec: 'LDPM 20-2000kg 10-40bags/hour', href: '/product/packing-machine/', image: '/images/macreat/1-3Packing-Machine-.jpg' }
    ]
  },

  cases: {
    title: 'Case',
    subtitle: 'To build the first brand of China biomass wood pellet machinery',
    items: [
      { name: '2-3t/h wood pellet making line case', href: '/product/2-3t-h-wood-pellet-making-line-case/', image: '/images/macreat/case—1.jpg' },,
      { name: '4t/h Wood Pellet Production Line Case', href: '/product/4t-h-wood-pellet-production-line-case/', image: '/images/macreat/Pellet-Machine-2.jpg' },,
      { name: '1-1.5t/h Wood Pellet Making Line Case', href: '/product/1-1-5t-h-wood-pellet-making-line-case/', image: '/images/macreat/Pellet-Machine-3.jpg' },,
      { name: '5-6 t/h Wood log pellets production line in Indonesia', href: '/product/5-6-t-h-wood-log-pellets-production-line/', image: '/images/macreat/Pellet-Machine-4.jpg' },,
      { name: '3-4 t/h Wood scraps pellets production line in Indonesia', href: '/product/3wood-scraps-pellets-production-line/', image: '/images/macreat/Mesin-Pelet.jpg' },,
      { name: '1-1.5 t/h sanding powder pellets production line in Indonesia', href: '/product/1-1-5-t-h-sanding-powder-pellets-production-line/', image: '/images/macreat/0509-mo-.jpg' },,
      { name: '2-3 t/h peanut shell wood pellet machine line in Hebei', href: '/product/2-3-t-h-peanut-shell-wood-pellet-line/', image: '/images/macreat/Pellets-2.jpg' },,
      { name: 'Wood Chipper/Crusher LDBX218 working video in our customer factory', href: '/product/wood-chipper-crusher-ldbx218/', image: '/images/macreat/1-1-Drum-Wood-Chipper-.jpg' }
    ]
  },

  news: {
    title: 'News',
    subtitle: 'Professional Design And Technical Team Scheme For You',
    items: [
      {
        title: 'MACREAT Makes Dual-Expo Debut in Thailand & Vietnam',
        excerpt: 'March 25: MACREAT Makes a Simultaneous Debut at Two Major Exhibitions in Bangkok, Thailand, and Ho Chi Minh City, Vietnam',
        href: '/macreat-makes-dual-expo-debut-in-thailand-vietnam/',
        image: '/images/macreat/case—1.jpg'
      },
      {
        title: 'MACREAT Welcomes You at BBBSAF-AETD 2026 Vietnam – Booth W12',
        excerpt: 'Welcome to the Biogas, Biomass, Bioenergy & Biofuels SAF Asia Summit 2026! This marks Southeast Asia premier professional gathering dedicated',
        href: '/macreat-welcomes-you-at-bbbsaf-aetd-2026-vietnam-booth-w12/',
        image: '/images/macreat/Pellets-2.jpg'
      },
      {
        title: 'MACREAT Cordially Invites You to the 2026 ASEAN Biomass Energy Expo',
        excerpt: 'As the global energy transition continues to deepen, biomass energy—a clean, efficient, and renewable form of energy—is embracing unprecedented opportunities',
        href: '/macreat-cordially-invites-you-to-the-2026-asean-biomass-energy-expo/',
        image: '/images/macreat/11-1.jpg'
      }
    ]
  },

  faq: {
    title: 'FAQ',
    items: [
      { question: 'Are you a trading company or a manufacturer?', answer: 'We are a professional manufacturer with 62 years of experience in pellet machine production. We have our own factory and R&D team.' },
      { question: 'How long is your delivery time?', answer: 'Delivery time varies by model and quantity. Generally, it takes 15-30 days after order confirmation.' },
      { question: 'Can you provide all the technical parameters of the machine?', answer: 'Yes, we provide complete technical specifications, including power, capacity, dimensions, and material compatibility.' },
      { question: 'Can you supply a complete animal feed production line?', answer: 'Yes, we offer complete feed production line solutions from raw material processing to final packaging.' },
      { question: 'What is the warranty period for your machines?', answer: 'We provide 12-24 months warranty depending on the machine type. We also offer lifetime after-sales support.' },
      { question: 'What is the price of this product?', answer: 'Price depends on model and configuration. Please contact us for a detailed quote based on your requirements.' },
      { question: 'How much does shipping cost to my country?', answer: 'Shipping costs vary by destination and volume. We can arrange FOB, CIF, or DDP shipping terms.' }
    ]
  },

  contact: {
    title: 'Get In Touch !',
    whatsapp: '+86-18615207548',
    whatsappLink: 'https://api.whatsapp.com/send?phone=8618615207548',
    email: 'pellet@macreat.com',
    emailLink: 'mailto:pellet@macreat.com',
    phone: '+86-18615207548',
    phoneLink: 'tel:+86-18615207548',
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/macreatpellet' },
      { name: 'X', href: 'https://twitter.com/macreatmachine' },
      { name: 'Instagram', href: 'https://www.instagram.com/woodpelletmill/' },
      { name: 'Youtube', href: 'https://www.youtube.com/@macreatpelletmill2327' },
      { name: 'Whatsapp', href: 'https://api.whatsapp.com/send?phone=8618615207548' }
    ]
  },

  contactForm: {
    title: 'Send a message',
    fields: [
      { name: 'name', placeholder: 'Name', required: true },
      { name: 'email', placeholder: 'Email', required: true },
      { name: 'phone', placeholder: 'WhatsApp/Phone', required: true },
      { name: 'country', placeholder: 'Country', required: true }
    ],
    messagePlaceholder: 'Your Message',
    button: 'Get A Quote'
  },

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

  floatingSocial: [
    { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=8618615207548', icon: 'whatsapp' },
    { name: 'Get A Quote Now', href: '#message', icon: 'email' }
  ]
};

export const translations = {
  en: siteContent,
  zh: {
    ...siteContent,
    systemSolutions: siteContent.systemSolutions  // 使用英文的 systemSolutions 数据（包含 images 字段）
  },
  id: {
    ...siteContent,
    systemSolutions: siteContent.systemSolutions  // 使用英文的 systemSolutions 数据（包含 images 字段）
  }
};

export default siteContent;
