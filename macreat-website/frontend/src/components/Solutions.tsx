import Link from 'next/link';

const solutions = [
  {
    title: 'Fresh Wood Logs Pretreatment',
    machines: 'Drum Wood Chipper → High Efficiency Hammer Mill → Triple Pass Dryer → Pellet Machine → Cooling Machine',
    technique: 'Crushing section → Pulverizing section → Drying section → Pelletizing section',
    url: '/solution/sawdust-pellets-production-line/',
  },
  {
    title: 'Solutions for Palm Oil Industry EFB',
    machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill Series → Pellet Machine → Cooling Machine → Bagging Machine',
    technique: 'Initial size reduction → Fine size reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling',
    url: '/solution/palm-efb-pellet-production-line/',
  },
  {
    title: 'Waste Solution of Urban RDF',
    machines: 'Twin-shaft Shredder → Triple-pass Dryer → Hammer Mill → Pellet Mill → Cooling Section → Jumbo Packer',
    technique: 'Ominent Size Reduction → Dehydrating → Fine Pulverizing → Pelletizing → Cooling Section → Bagging Section',
    url: '/solution/plywood-waste-pellet-making-solution/',
  },
  {
    title: 'Fully Automatic Feed Pellet Production Line',
    description: 'Our automatic dosing feed pellet line is designed for the efficient processing of livestock and poultry feed. With excellent raw material flexibility, it is suitable for producing pellets from corn, wheat, beans, oilseed meal, and more. This advanced line can simultaneously handle both powder and granule processing, enabling the production of two types of feed products at the same time.',
    flow: '1. Crushing Section → 2. Mixing Section → 3. Pelletizing Section → 4. Cooling Section → 5. Classifying Screen → 6. Packing Section',
    url: '/product/fully-automatic-feed-pellet-production-line/',
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="section-title">
        <h2>System Solutions</h2>
        <p>System Solutions: Delivering comprehensive, reliable, and professional biomass new energy and environmental protection equipment tailored to your needs.</p>
      </div>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <div className="solution-content">
              <h3>{solution.title}</h3>
              {solution.machines && (
                <div className="solution-machines">
                  <strong>Machines:</strong> {solution.machines}
                </div>
              )}
              {solution.technique && (
                <p><strong>Processing technique</strong>: {solution.technique}</p>
              )}
              {solution.description && <p>{solution.description}</p>}
              {solution.flow && <p><strong>Flow</strong>: {solution.flow}</p>}
              <Link href={solution.url} className="btn btn-primary">
                Pellet Production Line
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}