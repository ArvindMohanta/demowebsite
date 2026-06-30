import React from 'react';
import { ArrowLeft, Github, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function SpeechRecognitionDetail() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6">
        <div className="max-w-wide mx-auto">
          <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <Reveal>
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tightest mb-3">Speech Recognition using Cross Correlation</h1>
                <p className="text-xl text-white/60">Signal Processing-Based Speech Identification System</p>
              </div>
              <a
                href="https://github.com/arvindmohanta/speech-recognition-correlation"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn bg-white text-black hover:bg-white/90 gap-2 inline-flex"
              >
                <Github size={18} /> View Repository
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-white/50 text-sm mb-6">
              <span className="flex items-center gap-2"><Calendar size={14} /> March 2021</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> IIIT Bhubaneswar</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['MATLAB', 'Signal Processing', 'Cross-Correlation', 'Digital Signal Processing', 'Noise Analysis'].map(tech => (
                <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-wide mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">
            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-4">Objective</h2>
                <p className="text-graphite leading-relaxed text-lg">
                  Develop a lightweight and computationally efficient speech recognition system using cross-correlation
                  signal processing. The system matches spoken input with pre-recorded voice templates to recognize
                  isolated words without relying on complex machine learning models or neural networks.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Technical Approach</h2>
                <div className="space-y-4">
                  {[
                    { t: '1. Template Recording', d: 'Pre-recorded voice templates for each word stored as audio signals with known characteristics and baseline patterns.' },
                    { t: '2. Signal Preprocessing', d: 'Audio signals filtered to remove noise using bandpass filters. Normalization applied to handle different speaker volumes and acoustic conditions.' },
                    { t: '3. Cross-Correlation Computation', d: 'Computes correlation between input signal and each template to measure similarity. Mathematical formula measures how well the input matches each reference signal.' },
                    { t: '4. Peak Detection & Recognition', d: 'Identifies the maximum correlation value across all templates. The template with highest peak correlation is recognized as the spoken word.' },
                  ].map(item => (
                    <div key={item.t} className="border border-mist rounded-2xl p-6">
                      <h3 className="font-semibold mb-2">{item.t}</h3>
                      <p className="text-graphite text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { t: 'Lightweight Processing', d: 'Minimal computational overhead suitable for resource-constrained devices and real-time applications.' },
                    { t: 'No ML Training', d: 'No machine learning models to train. Signal processing techniques provide immediate usability with minimal setup.' },
                    { t: 'Fast Recognition', d: 'Quick cross-correlation computation enables near real-time word recognition suitable for responsive systems.' },
                    { t: 'Isolated Word Focus', d: 'Optimized for isolated word recognition in controlled environments with clear pauses between commands.' },
                    { t: 'Noise Resilience', d: 'Filtering and preprocessing techniques handle various noise conditions maintaining recognition accuracy.' },
                    { t: 'Template Scalability', d: 'Easy to add new words by recording additional templates without architectural changes.' },
                  ].map(item => (
                    <div key={item.t} className="border border-mist rounded-2xl p-5">
                      <h3 className="font-semibold mb-2 text-sm">{item.t}</h3>
                      <p className="text-graphite text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Signal Processing Workflow</h2>
                <ol className="space-y-4">
                  {[
                    { t: 'Audio Acquisition', d: 'Capture spoken word from microphone with consistent sample rate and bit depth.' },
                    { t: 'Noise Filtering', d: 'Apply bandpass filter and noise gates to remove background interference and acoustic artifacts.' },
                    { t: 'Signal Normalization', d: 'Normalize amplitude to handle different speaker volumes ensuring consistent recognition.' },
                    { t: 'Cross-Correlation Analysis', d: 'Compute correlation coefficients between input and all template signals in database.' },
                    { t: 'Peak Threshold Detection', d: 'Identify peaks in correlation values and apply threshold to confirm valid matches.' },
                    { t: 'Word Recognition Output', d: 'Return recognized word with confidence score based on peak correlation magnitude.' },
                  ].map((step, idx) => (
                    <li key={step.t} className="flex items-start gap-4">
                      <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{idx + 1}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{step.t}</h3>
                        <p className="text-graphite text-sm leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Evaluation &amp; Testing</h2>
                <div className="border border-mist rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm">Test Conditions</h3>
                      <ul className="text-graphite text-sm space-y-1.5">
                        <li>Multiple speaker variations</li>
                        <li>Different noise environments</li>
                        <li>Volume variations</li>
                        <li>Accent differences</li>
                        <li>Microphone quality variations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm">Performance Metrics</h3>
                      <ul className="text-graphite text-sm space-y-1.5">
                        <li>Recognition accuracy</li>
                        <li>False positive rate</li>
                        <li>Processing time</li>
                        <li>Template sensitivity</li>
                        <li>Noise robustness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Real-World Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { t: 'Smart Device Control', d: 'Voice-activated commands for IoT devices, smart home systems, and embedded devices with limited computational power.' },
                    { t: 'Robotics Navigation', d: 'Voice command systems for robot control in industrial and research applications without heavy processing requirements.' },
                    { t: 'Accessibility Tools', d: 'Assistive technology for individuals with motor disabilities providing hands-free device control options.' },
                    { t: 'Safety Systems', d: 'Emergency command recognition systems in vehicles, industrial equipment, and safety-critical applications.' },
                    { t: 'Mobile Devices', d: 'Low-power voice recognition for resource-constrained mobile and wearable devices with extended battery life.' },
                    { t: 'Embedded Systems', d: 'Microcontroller-based applications requiring voice command capabilities without external processing infrastructure.' },
                  ].map(item => (
                    <div key={item.t} className="border border-mist rounded-2xl p-5">
                      <h3 className="font-semibold mb-2 text-sm">{item.t}</h3>
                      <p className="text-graphite text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Advantages Over ML-Based Systems</h2>
                <div className="space-y-3">
                  {[
                    { t: 'No Training Required', d: 'Simple template recording replaces complex model training and large dataset requirements.' },
                    { t: 'Minimal Latency', d: 'Direct signal processing delivers real-time results without inference latency typical in neural networks.' },
                    { t: 'Low Resource Overhead', d: 'Suitable for microcontrollers and edge devices where ML frameworks are impractical.' },
                    { t: 'Transparent Processing', d: 'Clear mathematical basis and signal processing logic is auditable and easily debuggable.' },
                    { t: 'Easy Customization', d: 'Add new words or modify thresholds without retraining or updating models.' },
                  ].map(item => (
                    <div key={item.t} className="flex items-start gap-3">
                      <span className="text-accent flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-sm">{item.t}</h3>
                        <p className="text-graphite text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Limitations &amp; Considerations</h2>
                <div className="space-y-3">
                  {[
                    { t: 'Speaker Dependent', d: 'Recognition accuracy decreases significantly with different speakers. Templates are most effective for specific user voices.' },
                    { t: 'Limited Word Vocabulary', d: 'Best suited for isolated word recognition with limited vocabulary (typically 10-100 words). Continuous speech recognition is challenging.' },
                    { t: 'Noise Sensitivity', d: 'High noise environments degrade performance. Requires careful filter tuning for specific acoustic conditions.' },
                    { t: 'Microphone Dependency', d: 'Recognition quality depends significantly on microphone characteristics and positioning.' },
                    { t: 'Threshold Tuning', d: 'Manual threshold adjustment needed for different environments and speaker variations to balance false positives/negatives.' },
                  ].map(item => (
                    <div key={item.t} className="flex items-start gap-3">
                      <span className="text-graphite flex-shrink-0">•</span>
                      <div>
                        <h3 className="font-semibold text-sm">{item.t}</h3>
                        <p className="text-graphite text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">Technologies &amp; Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-mist rounded-2xl p-6">
                    <h3 className="font-semibold mb-3 text-accent text-sm">Signal Processing</h3>
                    <ul className="text-graphite text-sm space-y-1.5">
                      <li>MATLAB Signal Processing Toolbox</li>
                      <li>Cross-Correlation Functions</li>
                      <li>Bandpass Filtering</li>
                      <li>Fourier Analysis</li>
                    </ul>
                  </div>
                  <div className="border border-mist rounded-2xl p-6">
                    <h3 className="font-semibold mb-3 text-accent text-sm">Analysis Techniques</h3>
                    <ul className="text-graphite text-sm space-y-1.5">
                      <li>Noise Analysis &amp; Filtering</li>
                      <li>Peak Detection Algorithms</li>
                      <li>Signal Normalization</li>
                      <li>Template Matching</li>
                    </ul>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="bg-mist rounded-2xl p-6 sticky top-20 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Project Summary</h3>
                  <p className="text-graphite text-sm leading-relaxed">
                    Signal processing-based speech recognition using cross-correlation. Efficient isolated word recognition for embedded systems and low-power devices without machine learning.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-sm">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Digital Signal Processing', 'Cross-Correlation Analysis', 'Noise Filtering', 'Signal Processing', 'MATLAB Programming'].map(skill => (
                      <span key={skill} className="bg-white px-3 py-1 rounded-full text-xs text-graphite">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-sm">Duration</h3>
                  <p className="text-graphite text-sm">March 2021 (1 month)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-sm">Institution</h3>
                  <p className="text-graphite text-sm">International Institute of Information Technology, Bhubaneswar</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-sm">Best For</h3>
                  <div className="space-y-1.5">
                    {['Embedded Systems', 'IoT Devices', 'Voice Commands', 'Real-time Applications'].map(item => (
                      <div key={item} className="text-sm text-graphite">✓ {item}</div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/arvindmohanta/speech-recognition-correlation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full pill-btn bg-black text-white hover:bg-black/80 gap-2"
                >
                  <Github size={16} /> View on GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
