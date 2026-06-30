import React from 'react';
import { ArrowLeft, Github, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';

const MetamaterialAntennasDetail = () => {
  const navigate = useNavigate();

  const project = {
    title: "Metamaterial Circular Polarized Antennas",
    tagline: "High-Performance Antenna Design for Wireless Communication Systems",
    duration: "May 2022 - November 2022",
    institution: "International Institute of Information Technology, Bhubaneswar",

    overview: "Designed and simulated high-performance metamaterial-based circular polarized antennas for modern wireless communication systems requiring compact, high-speed data transmission capabilities.",

    technologies: {
      "Simulation Tools": ["CST Microwave Studio", "HFSS", "ADS"],
      "Antenna Design": ["Microstrip Antennas", "Patch Antennas", "Metamaterial Structures"],
      "Fabrication": ["PCB Etching", "3D Printing", "Lithography"],
      "Substrate Materials": ["FR4", "Rogers RO4003C", "Taconic"]
    },

    objectives: [
      "Enhance bandwidth for wider frequency range operation",
      "Miniaturize antenna size while maintaining performance",
      "Improve gain and directivity",
      "Control radiation patterns for targeted coverage",
      "Achieve circular polarization for robust wireless links"
    ],

    keyFeatures: [
      { feature: "Bandwidth Enhancement", description: "Implemented metamaterial structures to achieve 40% bandwidth improvement over conventional antennas", impact: "Supports wider frequency range with single antenna design" },
      { feature: "Size Miniaturization", description: "Reduced antenna footprint by 35% using metamaterial unit cells", impact: "Compact design suitable for portable and integrated systems" },
      { feature: "Gain Improvement", description: "Achieved 5-8 dBi gain with optimized radiator and ground plane design", impact: "Better signal strength and coverage" },
      { feature: "Radiation Pattern Control", description: "Implemented directional patterns for interference mitigation", impact: "Improved signal quality in urban environments" }
    ],

    fabricationTechniques: [
      { technique: "PCB Etching", description: "Traditional etching process for planar antenna designs on FR4 and Rogers substrates", applications: "2.4 GHz, 5 GHz WiFi antennas" },
      { technique: "3D Printing", description: "Advanced additive manufacturing for complex geometries and volumetric metamaterials", applications: "Experimental designs, rapid prototyping" },
      { technique: "Lithography", description: "High-precision lithographic processes for high-frequency and THz metamaterials", applications: "millimeter-wave and THz applications" }
    ],

    substrateMaterials: [
      { name: "FR4", properties: "Standard PCB material, cost-effective, suitable for L-band and S-band" },
      { name: "Rogers RO4003C", properties: "Low loss, stable dielectric constant, ideal for broadband designs" },
      { name: "Taconic", properties: "Premium substrate, lowest losses, best for high-frequency applications" }
    ],

    designProcess: [
      "Electromagnetic modeling of metamaterial unit cells",
      "S-parameter analysis and impedance matching optimization",
      "Full-wave simulation using CST Microwave Studio",
      "Radiation pattern and gain analysis",
      "Prototype fabrication and testing",
      "Experimental validation and performance verification"
    ],

    results: [
      "40% bandwidth enhancement",
      "35% size reduction",
      "5-8 dBi gain achieved",
      "Excellent circular polarization (Axial Ratio < 3 dB)",
      "Compact form factor suitable for integration",
      "Validated design for 5G and beyond applications"
    ],

    applications: [
      "5G and Beyond Wireless Communication",
      "Satellite Communication Systems",
      "IoT and Smart Device Integration",
      "Drone and UAV Communication",
      "Healthcare Monitoring Systems",
      "Automotive Radar Systems"
    ]
  };

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6">
        <div className="max-w-content mx-auto">
          <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </button>
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tightest mb-4">{project.title}</h1>
            <p className="text-xl text-white/60 mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-6 text-white/50 text-sm mb-8">
              <span className="flex items-center gap-2"><Calendar size={14} /> {project.duration}</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> {project.institution}</span>
            </div>
            <a href="https://github.com/arvindmohanta/metamaterial-antennas" target="_blank" rel="noopener noreferrer" className="pill-btn bg-white text-black hover:bg-white/90 gap-2 inline-flex">
              <Github size={18} /> View on GitHub
            </a>
          </Reveal>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 py-20 space-y-20">
        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Project Overview</h2>
            <p className="text-graphite text-lg leading-relaxed">{project.overview}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Design Objectives</h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="border-l-2 border-accent pl-4 text-graphite leading-relaxed">{obj}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Key Features &amp; Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures.map((item, idx) => (
                <div key={idx} className="border border-mist rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{item.feature}</h3>
                  <p className="text-graphite text-sm mb-4">{item.description}</p>
                  <div className="bg-mist p-3 rounded-lg text-sm text-graphite">
                    <span className="font-medium text-ink">Impact: </span>{item.impact}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Technologies &amp; Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="border border-mist rounded-2xl p-6">
                  <h3 className="font-semibold text-accent mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, i) => (
                      <span key={i} className="bg-mist text-graphite px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Fabrication Techniques</h2>
            <div className="space-y-4">
              {project.fabricationTechniques.map((fab, idx) => (
                <div key={idx} className="border border-mist rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{fab.technique}</h3>
                  <p className="text-graphite text-sm mb-2">{fab.description}</p>
                  <p className="text-sm text-graphite"><span className="font-medium text-ink">Applications: </span>{fab.applications}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Substrate Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.substrateMaterials.map((mat, idx) => (
                <div key={idx} className="border-t-2 border-accent pt-4">
                  <h3 className="font-semibold mb-2">{mat.name}</h3>
                  <p className="text-graphite text-sm">{mat.properties}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Design &amp; Analysis Process</h2>
            <ol className="space-y-4">
              {project.designProcess.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{idx + 1}</span>
                  <span className="text-graphite leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-black text-white rounded-3xl p-10 md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Project Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span className="text-white/80">{result}</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Applications &amp; Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.applications.map((app, idx) => (
                <div key={idx} className="border border-mist rounded-xl p-4 text-graphite font-medium">
                  {app}
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default MetamaterialAntennasDetail;
