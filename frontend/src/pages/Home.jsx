import React from 'react';
import { ChevronRight, Zap, Brain, Cloud, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const stats = [
  { value: 'PhD', label: 'EEE, IIT Guwahati' },
  { value: 'BTech', label: 'IIIT Bhubaneswar' },
  { value: '7', label: 'Research Projects' },
  { value: '3', label: 'Languages' },
];

const expertise = [
  {
    icon: Zap,
    title: 'Automotive & SDV',
    text: 'Building the future of vehicle systems with Software Defined Vehicles, autonomous architectures, and intelligent connectivity.',
    items: ['Software Defined Vehicles (SDV)', 'NXP S32G Platform', 'Connected Vehicle Ecosystems', 'Autonomous Systems'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    text: 'Leveraging advanced AI models and machine learning to create intelligent, adaptive systems for edge computing.',
    items: ['Edge AI & Intelligence', 'Foundation Models', 'Deep Learning & Computer Vision', 'Physical AI'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Security',
    text: 'Designing secure, scalable cloud architectures with blockchain technology for trustless communication.',
    items: ['AWS IoT & Cloud Computing', 'Blockchain Frameworks', 'Cybersecurity', 'DevOps & Infrastructure'],
  },
];

const featured = [
  {
    to: '/project-detail',
    title: 'Tooth Segmentation using Deep Learning',
    text: '94.2% accuracy in automated dental image segmentation with U-Net architecture.',
    tags: ['Deep Learning', 'Medical AI'],
  },
  {
    to: '/project-ultrasonic-radar',
    title: 'Ultrasonic Radar with Arduino',
    text: 'Real-time obstacle detection with 200cm range and ±3cm accuracy.',
    tags: ['Embedded Systems', 'IoT'],
  },
];

const Home = () => {
  return (
    <div className="bg-white text-ink">
      {/* Hero */}
      <section className="bg-black text-white pt-28 pb-32 px-6 text-center">
        <Reveal>
          <p className="text-[15px] text-white/60 mb-4 tracking-tight">Welcome to my portfolio</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest leading-[1.05] mb-6">
            M. Arvind Mohanta
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl text-white/70 font-light mb-6">
            Researcher &amp; AI Innovator
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            Currently working at the intersection of Artificial Intelligence and Healthcare, building intelligent systems for medical diagnosis and clinical decision support.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/projects" className="link-chevron text-lg">
              View My Work <ChevronRight size={18} />
            </Link>
            <a href="mailto:marvindmohanta@gmail.com" className="link-chevron text-lg">
              Get In Touch <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="flex justify-center gap-5 pt-14">
            <a href="https://github.com/ArvindMohanta" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arvindmohanta" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:marvindmohanta@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-b border-mist">
        <div className="max-w-wide mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tightest mb-2">{s.value}</div>
              <p className="text-sm text-graphite">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-28 px-6">
        <div className="max-w-wide mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-center mb-4">Core Expertise</h2>
            <p className="text-lg text-graphite text-center max-w-2xl mx-auto mb-20">
              Specializing in cutting-edge technologies that power next-generation intelligent systems
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {expertise.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.title} delay={i * 0.1}>
                  <Icon className="text-accent mb-5" size={28} strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold tracking-tight mb-3">{e.title}</h3>
                  <p className="text-graphite leading-relaxed mb-6">{e.text}</p>
                  <ul className="space-y-2">
                    {e.items.map(item => (
                      <li key={item} className="text-sm text-graphite border-t border-mist pt-2">{item}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-wide mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-center mb-4">Featured Projects</h2>
            <p className="text-lg text-white/50 text-center max-w-2xl mx-auto mb-20">
              Explore my research projects and technical implementations
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featured.map((p, i) => (
              <Reveal key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-10 transition-colors duration-300 h-full">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">{p.text}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">{tag}</span>
                    ))}
                  </div>
                  <span className="link-chevron text-sm">Learn more <ChevronRight size={14} /></span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center">
              <Link to="/projects" className="link-chevron text-lg">
                View All 7 Projects <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest mb-6">Ready to Collaborate?</h2>
          <p className="text-lg text-graphite max-w-xl mx-auto mb-10">
            Let's work together on innovative solutions for intelligent vehicles and edge computing systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/contact" className="pill-btn bg-accent text-white hover:bg-accent-dark">
              Get In Touch
            </Link>
            <a href="https://github.com/ArvindMohanta" target="_blank" rel="noopener noreferrer" className="link-chevron text-lg">
              View on GitHub <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
