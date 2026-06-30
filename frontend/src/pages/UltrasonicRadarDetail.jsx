import React from 'react';
import { ArrowLeft, Github, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';

const UltrasonicRadarDetail = () => {
  const navigate = useNavigate();

  const project = {
    title: "Object Detection Radar with Ultrasonic Sensor and Arduino",
    tagline: "Real-Time Obstacle Detection System using Ultrasonic Sensing",
    duration: "May 2022 - June 2022",
    institution: "International Institute of Information Technology, Bhubaneswar",

    overview: "Developed a real-time object detection radar system using an ultrasonic sensor mounted on a servo motor. The system scans the surrounding environment and provides visual feedback for obstacle detection and collision avoidance.",

    technologies: {
      "Microcontroller": ["Arduino Uno", "Arduino IDE", "Embedded C++"],
      "Sensors & Actuators": ["HC-SR04 Ultrasonic Sensor", "SG90 Servo Motor"],
      "Design & Simulation": ["Autodesk Tinkercad", "Circuit Design"],
      "Electronics": ["Arduino Shield", "Resistors", "Capacitors", "Breadboard"]
    },

    systemComponents: [
      { component: "Ultrasonic Sensor (HC-SR04)", description: "Measures distance by emitting sound waves and calculating return time", specs: "Detection range: 2 cm - 200 cm, Accuracy: ±3 cm" },
      { component: "Servo Motor (SG90)", description: "Rotates the ultrasonic sensor in a sweeping motion to scan the area", specs: "Rotation angle: 0° - 180°, Speed: 60°/0.1s" },
      { component: "Arduino Uno", description: "Central processing unit controlling sensor and servo operations", specs: "Microcontroller: ATmega328P, 16 MHz clock speed" },
      { component: "Display System", description: "Visual radar display with color-coded indicators (green/red)", specs: "Green: Clear path | Red: Object detected within 40 cm" }
    ],

    workingPrinciple: [
      "Servo motor rotates continuously, moving the ultrasonic sensor side to side",
      "At each angle, the sensor emits a 40 kHz ultrasonic pulse",
      "Sensor measures the time for the pulse to return after hitting an object",
      "Distance is calculated using: Distance = (Time × Speed of Sound) / 2",
      "If distance < 40 cm, object is detected and red indicator is shown",
      "If distance > 40 cm, path is clear and green indicator is shown",
      "Radar display updates in real-time showing a 180° field of view"
    ],

    features: [
      { feature: "180° Coverage", description: "Servo motor rotates 180° providing comprehensive area scanning" },
      { feature: "Real-Time Detection", description: "Instantaneous object detection and visual feedback" },
      { feature: "Color-Coded Display", description: "Green for safe areas, Red for detected obstacles" },
      { feature: "Long Detection Range", description: "Detects objects up to 200 cm away" },
      { feature: "Accurate Measurements", description: "±3 cm accuracy in distance measurement" },
      { feature: "Low Power Consumption", description: "Efficient Arduino-based operation suitable for portable systems" }
    ],

    applications: [
      "Robotic obstacle avoidance systems",
      "Autonomous vehicle parking assistance",
      "Home security and motion detection",
      "Interactive gaming interfaces",
      "GPS-free navigation systems",
      "Industrial safety monitoring",
      "Drone altitude and proximity sensing"
    ],

    implementationDetails: [
      "Arduino programmed to read analog input from ultrasonic sensor",
      "Servo motor controlled with PWM signals to rotate at fixed intervals",
      "Distance calculation implemented using time-of-flight measurement",
      "Visual output generated using color mapping (green/red based on threshold)",
      "Real-time radar display shows detected objects in polar coordinates",
      "Threshold set at 40 cm for object detection alert"
    ],

    results: [
      "Successfully detects objects in 200 cm range",
      "40 cm safety threshold implemented and working",
      "Real-time radar display with color indicators",
      "±3 cm measurement accuracy achieved",
      "Smooth servo scanning motion (180° coverage)",
      "Low-cost implementation suitable for prototyping"
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
            <a href="https://github.com/arvindmohanta/ultrasonic-radar" target="_blank" rel="noopener noreferrer" className="pill-btn bg-white text-black hover:bg-white/90 gap-2 inline-flex">
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
            <h2 className="text-2xl font-semibold tracking-tight mb-8">System Components</h2>
            <div className="space-y-4">
              {project.systemComponents.map((item, idx) => (
                <div key={idx} className="border border-mist rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{item.component}</h3>
                  <p className="text-graphite text-sm mb-2">{item.description}</p>
                  <p className="text-sm text-graphite"><span className="font-medium text-ink">Specs: </span>{item.specs}</p>
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
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Working Principle</h2>
            <ol className="space-y-4">
              {project.workingPrinciple.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{idx + 1}</span>
                  <span className="text-graphite leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((item, idx) => (
                <div key={idx} className="border border-mist rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{item.feature}</h3>
                  <p className="text-graphite text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Implementation Details</h2>
            <ul className="space-y-3">
              {project.implementationDetails.map((detail, idx) => (
                <li key={idx} className="text-graphite leading-relaxed">→ {detail}</li>
              ))}
            </ul>
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
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Real-World Applications</h2>
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

export default UltrasonicRadarDetail;
