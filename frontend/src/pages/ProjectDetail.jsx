import React from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';

const ProjectDetail = () => {
  const navigate = useNavigate();

  const project = {
    title: "Tooth Numbering and Segmentation on Panoramic Dental Images",
    tagline: "Deep Learning Pipeline for Automated Dental Radiograph Analysis",
    objective: "Developed a deep learning pipeline to automate recognition, segmentation, and tooth numbering in panoramic dental radiographs (DPR) to improve diagnostic support and reduce manual processing time.",

    technologies: {
      "Architecture": ["U-Net", "CNN Models", "Encoder-Decoder Structure"],
      "Frameworks": ["PyTorch", "TensorFlow", "Keras"],
      "Processing": ["OpenCV", "NumPy", "Pandas", "Scikit-image"],
      "Visualization": ["Matplotlib", "Seaborn"],
      "Tools": ["Jupyter", "Google Colab", "Git"]
    },

    preprocessing: [
      "Converted DPR images to grayscale for consistency",
      "Resized images to match U-Net input requirements (512x512)",
      "Applied data augmentation (rotation, flip, brightness adjustment)",
      "Normalized pixel values to [0, 1] range",
      "Handled class imbalance in tooth segmentation"
    ],

    modelTraining: [
      "Trained U-Net model for semantic segmentation",
      "Used dental X-ray datasets for model training",
      "Implemented loss functions: Dice Loss + Cross-Entropy",
      "Applied Adam optimizer with learning rate scheduling",
      "Validation accuracy: 94.2% on test dataset",
      "Total training epochs: 100 with early stopping"
    ],

    postProcessing: [
      "Applied morphological operations for noise reduction",
      "Implemented tooth contour extraction",
      "Applied FDI Tooth Numbering System",
      "Determined spatial position and classification",
      "Generated mask overlays on original images"
    ],

    outcomes: [
      "Automated dental structure analysis with 94.2% accuracy",
      "Improved diagnostic support for dentists",
      "Reduced manual processing time by 85%",
      "Decreased healthcare analysis costs",
      "Enabled rapid tooth identification and numbering",
      "Scalable pipeline for clinical deployment"
    ],

    metrics: {
      "Dice Coefficient": "0.921",
      "IoU": "0.852",
      "Pixel Accuracy": "0.942",
      "Sensitivity": "0.915",
      "Specificity": "0.948",
      "Per-Image Time": "~2.3s"
    },

    impact: [
      { value: '85%', label: 'Time Reduction' },
      { value: '94.2%', label: 'Accuracy' },
      { value: '2.3s', label: 'Per Image' },
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
            <p className="text-xl text-white/60 mb-8">{project.tagline}</p>
            <a href="https://github.com/arvindmohanta/tooth-segmentation" target="_blank" rel="noopener noreferrer" className="pill-btn bg-white text-black hover:bg-white/90 gap-2 inline-flex">
              <Github size={18} /> View on GitHub
            </a>
          </Reveal>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 py-20 space-y-20">
        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Objective</h2>
            <p className="text-graphite text-lg leading-relaxed">{project.objective}</p>
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
                    {techs.map((tech, idx) => (
                      <span key={idx} className="bg-mist text-graphite px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Data Preprocessing</h2>
            <ol className="space-y-4">
              {project.preprocessing.map((step, idx) => (
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
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Model Training</h2>
            <ul className="space-y-3">
              {project.modelTraining.map((point, idx) => (
                <li key={idx} className="border-l-2 border-accent pl-4 text-graphite leading-relaxed">{point}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Post-Processing</h2>
            <ul className="space-y-3">
              {project.postProcessing.map((step, idx) => (
                <li key={idx} className="text-graphite leading-relaxed">→ {step}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(project.metrics).map(([metric, value]) => (
                <div key={metric} className="border-t-2 border-accent pt-4">
                  <p className="text-graphite text-sm mb-1">{metric}</p>
                  <p className="text-3xl font-semibold tracking-tight">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-black text-white rounded-3xl p-10 md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Project Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span className="text-white/80">{outcome}</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Clinical Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {project.impact.map(i => (
                <div key={i.label}>
                  <p className="text-4xl font-semibold tracking-tightest mb-2">{i.value}</p>
                  <p className="text-graphite">{i.label}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectDetail;
