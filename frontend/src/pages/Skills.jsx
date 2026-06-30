import React from 'react';
import { Zap, Brain, Code2, Cpu, Gauge, MessageSquare, Award } from 'lucide-react';
import Reveal from '../components/Reveal';

const Skills = () => {
  const skills = {
    "Core Expertise": { items: ['Software Defined Vehicles (SDV)', 'Edge AI', 'Cloud Computing', 'Automotive Networking', 'Blockchain', 'Cyber Security'], icon: Zap },
    "AI & Machine Learning": { items: ['Artificial Intelligence', 'Machine Learning', 'Foundation Models', 'Physical AI', 'Perception Systems', 'Data-driven Intelligence'], icon: Brain },
    "Platforms & Tools": { items: ['NXP S32G Platform', 'AWS IoT', 'Python', 'FastAPI', 'Docker', 'Kubernetes'], icon: Code2 },
    "Backend & Infrastructure": { items: ['Python on Backend', 'Cloud Architecture', 'DevOps', 'Cyber-Physical Systems', 'Blockchain Frameworks', 'Over-the-Air (OTA) Updates'], icon: Cpu },
    "Automotive Systems": { items: ['Autonomous Vehicles', 'Vehicle Communication', 'Connected Vehicle Ecosystems', 'Intelligent Transportation', 'Vehicle Perception', 'Smart Mobility'], icon: Gauge },
    "Project Skills": { items: ['MATLAB', 'Digital Signal Processing', 'Deep Learning (TensorFlow/PyTorch)', 'Embedded C++', 'Arduino Programming', 'RF Engineering', 'Signal Processing', 'Cross-Correlation Analysis', 'Antenna Design', 'Ultrasonic Sensors', 'Image Segmentation', 'Computer Vision'], icon: Award },
    "Languages": { items: ['Hindi (Professional Working)', 'Odia (Native or Bilingual)', 'English (Professional Working)'], icon: MessageSquare }
  };

  const summary = [
    { value: '7', label: 'Skill Categories' },
    { value: '30+', label: 'Technologies' },
    { value: '3', label: 'Languages' },
    { value: 'PhD', label: 'AI Expert' },
  ];

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest mb-6">Skills &amp; Expertise</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto italic">
            "I only know what I've implemented practically. Nothing more — nothing less."
          </p>
        </Reveal>
      </section>

      <div className="max-w-wide mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {Object.entries(skills).map(([category, data], i) => {
            const IconComponent = data.icon;
            return (
              <Reveal key={category} delay={(i % 3) * 0.08}>
                <IconComponent className="text-accent mb-4" size={26} strokeWidth={1.5} />
                <h2 className="text-xl font-semibold tracking-tight mb-4">{category}</h2>
                <ul className="space-y-2">
                  {data.items.map((skill) => (
                    <li key={skill} className="text-sm text-graphite border-t border-mist pt-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <section className="mb-24 bg-mist rounded-3xl p-12 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award size={36} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Python on the Backend</h3>
                <p className="text-accent mb-3">Certified Backend Developer</p>
                <p className="text-graphite leading-relaxed">Expertise in building scalable backend solutions using Python, FastAPI, and modern cloud infrastructure.</p>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {summary.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tightest mb-2">{s.value}</div>
              <p className="text-sm text-graphite">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
