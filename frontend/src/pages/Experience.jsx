import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Trophy, Code2, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const Experience = () => {
  const experiences = [
    {
      company: "TiHAN-IIT Hyderabad",
      position: "Research Scholar",
      duration: "July 2025 - December 2025 (6 months)",
      location: "Hyderabad, Telangana, India",
      description: "Worked on Software Defined Vehicles (SDV) and Foundation Models prior to moving to IIT Guwahati for PhD.",
      skills: ['Software Defined Vehicles', 'Foundation Models', 'Research'],
      icon: Briefcase
    },
    {
      company: "Doqfy",
      position: "Back End Developer",
      duration: "June 2024 - July 2024 (2 months)",
      location: "Bengaluru, Karnataka",
      description: "Developed backend solutions and APIs.",
      skills: ['FastAPI', 'Python', 'Backend Development', 'Database Design'],
      icon: Code2
    }
  ];

  const education = [
    {
      institution: "Indian Institute of Technology Guwahati",
      degree: "Doctor of Philosophy (PhD)",
      field: "Electrical and Electronics Engineering (EEE)",
      duration: "January 2026 - Present",
      icon: GraduationCap
    },
    {
      institution: "International Institute of Information Technology, Bhubaneswar",
      degree: "Bachelor of Technology (BTech)",
      field: "Electronics and Telecommunication Engineering",
      duration: "2019 - 2023",
      icon: Trophy
    },
    {
      institution: "Odisha (Junior) Science Academy",
      degree: "12th - Science",
      field: "Science",
      duration: "2017 - 2018",
      icon: Code2
    }
  ];

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest mb-4">Professional Journey</h1>
          <p className="text-lg text-white/60">Experience, Education, and Growth</p>
        </Reveal>
      </section>

      <div className="max-w-wide mx-auto px-6 py-20">
        {/* Experience */}
        <section className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight mb-12">Professional Experience</h2>
          </Reveal>
          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="border border-mist hover:border-ink/20 rounded-2xl p-8 transition-colors duration-300">
                    <div className="flex gap-6">
                      <IconComponent className="text-accent flex-shrink-0" size={28} strokeWidth={1.5} />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                          <div>
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                          </div>
                          <span className="flex items-center gap-2 text-graphite text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-graphite text-sm mb-4">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <p className="text-graphite mb-6 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-mist text-graphite rounded-full text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight mb-12">Education</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, idx) => {
              const IconComponent = edu.icon;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="border border-mist hover:border-ink/20 rounded-2xl p-8 h-full transition-colors duration-300">
                    <IconComponent className="text-accent mb-5" size={28} strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-graphite font-medium mb-2">{edu.institution}</p>
                    <p className="text-graphite text-sm mb-4">{edu.field}</p>
                    <div className="flex items-center gap-2 text-graphite text-sm pt-4 border-t border-mist">
                      <Calendar size={14} />
                      {edu.duration}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="bg-mist rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl font-semibold tracking-tightest mb-6">Let's Collaborate!</h2>
            <p className="text-lg text-graphite max-w-xl mx-auto mb-10">
              Interested in working together on AI, SDV, or innovative automotive solutions?
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="mailto:marvindmohanta@gmail.com" className="pill-btn bg-accent text-white hover:bg-accent-dark">
                Get In Touch
              </a>
              <a href="https://www.linkedin.com/in/arvindmohanta" target="_blank" rel="noopener noreferrer" className="link-chevron text-lg flex items-center">
                LinkedIn Profile <ChevronRight size={18} />
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default Experience;
