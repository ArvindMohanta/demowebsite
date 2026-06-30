import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Code2, Zap, Brain, Radio } from 'lucide-react';
import Reveal from '../components/Reveal';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockProjects = [
    {
      id: 1,
      title: "Tooth Numbering and Segmentation on Panoramic Dental Images",
      description: "Developed a deep learning pipeline to automate recognition, segmentation, and tooth numbering in panoramic dental radiographs (DPR). Used U-Net architecture for semantic segmentation with multiple CNN models for feature extraction.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "Python, PyTorch, TensorFlow, U-Net, CNN, Computer Vision",
      category: "Deep Learning",
      icon: Brain
    },
    {
      id: 2,
      title: "Metamaterial Circular Polarized Antennas",
      description: "Designed and simulated high-performance metamaterial-based circular polarized antennas for modern wireless communication systems. Focused on enhancing bandwidth, miniaturizing size, improving gain.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "CST Microwave Studio, Antenna Design, Electromagnetic Simulation, PCB Etching",
      category: "RF Engineering",
      icon: Radio
    },
    {
      id: 3,
      title: "Software Defined Vehicle (SDV) Architecture",
      description: "Research on next-generation intelligent vehicle systems using NXP S32G platform. Implements edge AI and cloud integration for connected vehicle ecosystems.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "Python, NXP S32G, Edge AI, Cloud Computing",
      category: "Automotive",
      icon: Zap
    },
    {
      id: 4,
      title: "Edge AI and Foundation Models for Vehicles",
      description: "Integration of foundation models and edge intelligence for autonomous vehicle systems. Focuses on real-time perception and decision-making.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "Python, PyTorch, TensorFlow, Edge Computing, AI/ML",
      category: "AI/ML",
      icon: Brain
    },
    {
      id: 5,
      title: "Blockchain for Connected Vehicle Security",
      description: "Secure communication framework for connected vehicles using blockchain technology. Ensures data integrity and security across vehicle networks.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "Python, Blockchain, Cryptography, AWS IoT",
      category: "Cybersecurity",
      icon: Code2
    },
    {
      id: 6,
      title: "Object Detection Radar with Ultrasonic Sensor and Arduino",
      description: "Developed an ultrasonic sensor-based radar system using Arduino that detects objects in real-time. An ultrasonic sensor mounted on a servo motor scans the surrounding area up to 200 cm.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "Arduino IDE, Embedded C++, Ultrasonic Sensor, Servo Motor, Tinkercad",
      category: "Embedded Systems",
      icon: Radio
    },
    {
      id: 7,
      title: "Speech Recognition using Cross Correlation",
      description: "Developed a lightweight speech recognition system using cross-correlation signal processing techniques. Matches spoken input with pre-recorded templates by measuring similarity between input and reference signals.",
      github_url: "https://github.com/ArvindMohanta",
      tech_stack: "MATLAB, Digital Signal Processing, Cross-Correlation, Signal Analysis, Noise Filtering",
      category: "Signal Processing",
      icon: Code2
    }
  ];

  const projectRoutes = {
    1: '/project-detail',
    2: '/project-metamaterial-antennas',
    6: '/project-ultrasonic-radar',
    7: '/project-speech-recognition'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setProjects(mockProjects);
        setLoading(false);
      }
    }, 5000);

    api.get("/projects/")
      .then(res => {
        clearTimeout(timer);
        setProjects(res.data.length > 0 ? res.data : mockProjects);
        setError(null);
        setLoading(false);
      })
      .catch(err => {
        clearTimeout(timer);
        setProjects(mockProjects);
        setError(null);
        setLoading(false);
      });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest mb-6">My Projects</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore my research projects and technical implementations across AI, Embedded Systems, RF Engineering, and Automotive Technology
          </p>
        </Reveal>
      </section>

      <div className="max-w-wide mx-auto px-6 py-20">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-accent border-t-transparent"></div>
            <p className="mt-4 text-graphite">Loading projects...</p>
          </div>
        )}

        {projects.length === 0 && !loading && (
          <div className="border border-mist rounded-2xl p-12 text-center">
            <p className="text-graphite text-lg">No projects available at the moment.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const meta = mockProjects.find(p => p.id === project.id);
            const IconComponent = meta?.icon || Code2;

            return (
              <Reveal key={project.id} delay={(i % 3) * 0.08}>
                <div className="group border border-mist hover:border-ink/20 rounded-2xl p-8 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <IconComponent className="text-accent" size={28} strokeWidth={1.5} />
                    <span className="px-3 py-1 bg-mist text-graphite rounded-full text-xs font-medium">
                      {meta?.category || 'Project'}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold mb-3 tracking-tight line-clamp-2">{project.title}</h2>
                  <p className="text-graphite text-sm mb-6 leading-relaxed line-clamp-3 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack && project.tech_stack.split(',').slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-mist text-graphite rounded-full text-xs">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-mist">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {projectRoutes[project.id] && (
                      <Link
                        to={projectRoutes[project.id]}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                      >
                        <ExternalLink size={16} />
                        Details
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
