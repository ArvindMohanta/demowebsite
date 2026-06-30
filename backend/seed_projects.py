#!/usr/bin/env python3
"""
Seed sample projects into the database
"""

from backend.app.database import SessionLocal, engine
from backend.app.models.project import Project
from backend.app import models

# Create tables
models.project.Base.metadata.create_all(bind=engine)

# Create database session
db = SessionLocal()

# Sample projects
projects = [
    {
        "title": "Tooth Numbering and Segmentation on Panoramic Dental Images",
        "description": "Developed a deep learning pipeline to automate recognition, segmentation, and tooth numbering in panoramic dental radiographs (DPR). Used U-Net architecture for semantic segmentation with multiple CNN models for feature extraction. Implemented grayscale conversion, image resizing, and data augmentation techniques. Achieved automated dental structure analysis with improved diagnostic support for dentists, reducing manual processing time and healthcare costs.",
        "github_url": "https://github.com/arvindmohanta/tooth-segmentation",
        "tech_stack": "Python, PyTorch, TensorFlow, U-Net, CNN, Computer Vision, Image Processing, Deep Learning, Pandas, OpenCV"
    },
    {
        "title": "Metamaterial Circular Polarized Antennas",
        "description": "Designed and simulated high-performance metamaterial-based circular polarized antennas for modern wireless communication systems. Focused on enhancing bandwidth, miniaturizing size, improving gain, and controlling radiation patterns. Used CST Microwave Studio for electromagnetic simulation and analysis with PCB etching, 3D printing, and lithography fabrication techniques.",
        "github_url": "https://github.com/arvindmohanta/metamaterial-antennas",
        "tech_stack": "CST Microwave Studio, Antenna Design, Electromagnetic Simulation, PCB Etching, 3D Printing, FR4, Rogers Substrate, Microwave Engineering"
    },
    {
        "title": "Software Defined Vehicle (SDV) Architecture",
        "description": "Research on next-generation intelligent vehicle systems using NXP S32G platform. Implements edge AI and cloud integration for connected vehicle ecosystems.",
        "github_url": "https://github.com/arvindmohanta/sdv-architecture",
        "tech_stack": "Python, NXP S32G, Edge AI, Cloud Computing, Automotive Networking"
    },
    {
        "title": "Edge AI and Foundation Models for Vehicles",
        "description": "Integration of foundation models and edge intelligence for autonomous vehicle systems. Focuses on real-time perception and decision-making.",
        "github_url": "https://github.com/arvindmohanta/edge-ai-vehicles",
        "tech_stack": "Python, PyTorch, TensorFlow, Edge Computing, AI/ML, Autonomous Systems"
    },
    {
        "title": "Blockchain for Connected Vehicle Security",
        "description": "Secure communication framework for connected vehicles using blockchain technology. Ensures data integrity and security across vehicle networks.",
        "github_url": "https://github.com/arvindmohanta/blockchain-vehicles",
        "tech_stack": "Python, Blockchain, Cryptography, AWS IoT, Cyber Security"
    },
    {
        "title": "Object Detection Radar with Ultrasonic Sensor and Arduino",
        "description": "Developed an ultrasonic sensor-based radar system using Arduino that detects objects in real-time. An ultrasonic sensor mounted on a servo motor scans the surrounding area up to 200 cm. Green indicators show clear paths, while red indicators alert when objects are detected within 40 cm range. Suitable for obstacle detection and collision avoidance systems.",
        "github_url": "https://github.com/arvindmohanta/ultrasonic-radar",
        "tech_stack": "Arduino IDE, Embedded C++, Ultrasonic Sensor, Servo Motor, Autodesk Tinkercad, Electronics"
    },
    {
        "title": "Speech Recognition using Cross Correlation",
        "description": "Developed a lightweight speech recognition system using cross-correlation signal processing techniques. The system matches spoken input with pre-recorded templates by measuring similarity between input and reference signals. Achieves word recognition based on peak correlation values without complex machine learning models, making it ideal for embedded and low-power systems.",
        "github_url": "https://github.com/arvindmohanta/speech-recognition-correlation",
        "tech_stack": "MATLAB, Digital Signal Processing, Signal Analysis, Cross-Correlation, Noise Filtering"
    }
]

# Clear existing projects
db.query(Project).delete()

# Insert projects
for proj in projects:
    db_project = Project(**proj)
    db.add(db_project)

db.commit()
print(f"✅ Successfully seeded {len(projects)} projects!")
db.close()