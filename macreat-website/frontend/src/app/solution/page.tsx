import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solution - Macreat Biomass Pellet Machine',
  description: 'Macreat provides professional biomass pellet production solutions for various materials including wood waste, sawdust, straw, rice husk, and more.',
};

export default function SolutionPage() {
  const solutions = [
    {
      title: 'Furniture Scraps Pellet Production Solution',
      description: 'A lot of waste materials are generated during the production of furniture, and they are good raw materials for the production of fuel pellets.',
      features: [
        'Presses crushed trees, planks, bark, shavings, scraps of furniture factories',
        'At the same time obtain more benefits',
      ],
      url: '/solution/furniture-scraps-pellet-production-solution/',
    },
    {
      title: 'Sawdust Pellets Production Line',
      description: 'Wood pellet machine, also known as sawdust pellet machine, pellet mill, Granulator.',
      features: [
        'Presses crushed trees, planks, bark, shavings, scraps of furniture factories',
        'Other raw materials into rod-shaped particles',
        'With a diameter of 6/8/10 mm through mechanical physical extrusion',
      ],
      url: '/solution/sawdust-pellets-production-line/',
    },
    {
      title: 'Biomass Fuel Pellet Production with Rice Husk',
      description: 'Rice husk is a good raw material for the production of biomass fuel in agricultural waste.',
      features: [
        'As long as the moisture meets the requirements',
        'The rice husk can be pressed into cylindrical pellets directly with a pellet making machine',
        'The diameter of the formed pellets can be 6/8/10 mm',
      ],
      url: '/solution/biomass-fuel-pellet-production-with-rice-husk/',
    },
    {
      title: 'Wood pellet mill production line',
      description: 'Wood pellet machine, also known as sawdust pellet machine, pellet mill, Granulator. It is a machine that presses crushed trees, planks, bark, shavings, scraps of furniture factories and other raw materials into rod-shaped particles with a diameter of 6/8/10 mm through mechanical physical extrusion.',
      url: '/solution/wood-pellet-mill-production-line/',
    },
    {
      title: 'Plywood Waste Pellet Making Solution',
      description: 'Plywood Waste pelleting production line, also known as sawdust pellet machine, pellet mill.',
      features: [
        'Presses crushed trees, planks, bark, shavings, scraps of furniture factories',
        'At the same time obtain more benefits',
      ],
      url: '/solution/plywood-waste-pellet-making-solution/',
    },
    {
      title: 'Palm EFB Pellet production line',
      description: 'The empty fruit bunches from the residues and waste produced in the palm oil extraction process can be used as a good raw material for solid biomass fuel.',
      url: '/solution/palm-efb-pellet-production-line/',
    },
    {
      title: 'Peanut shell pelletizing solution',
      description: 'Rice husk and peanut shell pelletizing is to transport rice husk and peanut husk with moisture content of 10%-15% directly to the pellet machine, and press them into rod-shaped pellets with a diameter of 6/8/10 mm through mechanical and physical extrusion.',
      url: '/solution/peanut-shell-pelletizing-solution/',
    },
    {
      title: 'Straw pelletizing production line',
      description: 'Straw pelletizing production line, also known as sawdust pellet machine, pellet mill, Granulator.',
      url: '/solution/straw-pelletizing-production-line/',
    },
  ];

  const materials = [
    { name: 'Wood Waste', url: '/solution/biomass-pellet-line/' },
    { name: 'Wood Chips/Sawdust', url: '/solution/wood-pellet-mill-production-line/' },
    { name: 'Straw Waste', url: '/solution/straw-pelletizing-production-line/' },
    { name: 'Rice Husk', url: '/solution/biomass-fuel-pellet-production-with-rice-husk/' },
    { name: 'Animal Feed', url: '/product/fully-automatic-feed-pellet-production-line/' },
    { name: 'Palm Shell', url: '/solution/palm-efb-pellet-production-line/' },
  ];

  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '60px 20px' }}>
        <div className="hero-content">
          <h1>Solution</h1>
          <p>62 YEARS Professional Production Experience, Professional Design. And Technical Team Scheme For You.</p>
        </div>
      </section>
      
      <section className="materials">
        <div className="section-title">
          <h2>Our pellet machine work for a wide variety of materials</h2>
          <p>Please provide raw materials and output requirements, and we will provide a biomass pellet production solution</p>
        </div>
        <div className="materials-grid">
          {materials.map((item, index) => (
            <a href={item.url} key={index} className="material-item">
              <h3>{item.name}</h3>
            </a>
          ))}
        </div>
      </section>
      
      <section className="solutions">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card" style={{ marginBottom: '30px' }}>
            <div className="solution-content">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              {solution.features && (
                <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyle: 'disc' }}>
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              )}
              <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <a href={solution.url} className="btn btn-primary">View Details</a>
                <a href="#message" className="btn btn-secondary">Get a Quote</a>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
}