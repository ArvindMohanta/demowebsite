import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import MetamaterialAntennasDetail from './pages/MetamaterialAntennasDetail';
import UltrasonicRadarDetail from './pages/UltrasonicRadarDetail';
import SpeechRecognitionDetail from './pages/SpeechRecognitionDetail';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
        <Route path="/project-metamaterial-antennas" element={<MetamaterialAntennasDetail />} />
        <Route path="/project-ultrasonic-radar" element={<UltrasonicRadarDetail />} />
        <Route path="/project-speech-recognition" element={<SpeechRecognitionDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;