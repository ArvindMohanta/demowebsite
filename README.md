# 🚀 Arvind Mohanta - Developer Portfolio

A comprehensive full-stack developer portfolio showcasing research projects, technical expertise, and professional journey in AI, Embedded Systems, RF Engineering, and Automotive Technology.

## 📋 Overview

This is a production-style portfolio website built with modern web technologies, featuring:
- **7 Research Projects** with detailed case studies
- **Interactive Project Pages** with comprehensive technical details
- **Professional Profile** integration
- **Skills & Expertise** showcase
- **Contact Form** with backend integration
- **Responsive Design** for all devices

**Portfolio Owner:** M. Arvind Mohanta  
**Profile:** Researcher || SDV for Next-Gen Intelligent Vehicles || AI & Cloud Computing  
**Education:** PhD in AI from IIT Hyderabad, BTech from IIIT Bhubaneswar

---

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - UI Framework
- **Vite 5.0.0** - Build tool and dev server
- **React Router DOM 6.20.0** - Client-side routing
- **Tailwind CSS 3.3.5** - Styling framework
- **Lucide React 0.295.0** - Icon library
- **Axios 1.6.0** - HTTP client

### Backend
- **FastAPI** - Modern REST API framework
- **Uvicorn** - ASGI server
- **SQLAlchemy 2.0.45** - ORM for database
- **SQLite** - Development database
- **PostgreSQL** - Production database (support ready)
- **Python-Jose** - JWT authentication ready
- **Passlib** - Password hashing

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration
- **Git** - Version control
- **Nginx** - Reverse proxy (config ready)

---

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx                    # Landing page with tech stack
│   │   │   ├── Experience.jsx              # Professional journey & education
│   │   │   ├── Skills.jsx                  # Technical expertise (7 categories)
│   │   │   ├── Projects.jsx                # All 7 projects grid
│   │   │   ├── Contact.jsx                 # Contact form
│   │   │   ├── ProjectDetail.jsx           # Tooth Segmentation detail page
│   │   │   ├── MetamaterialAntennasDetail.jsx # Antenna design detail page
│   │   │   ├── UltrasonicRadarDetail.jsx   # Ultrasonic radar detail page
│   │   │   └── SpeechRecognitionDetail.jsx # Speech recognition detail page
│   │   ├── components/
│   │   │   └── Header.jsx                  # Navigation bar
│   │   ├── services/
│   │   │   └── api.js                      # Axios configuration
│   │   ├── App.jsx                         # Main app with routing
│   │   └── main.jsx                        # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.cjs
│
├── backend/
│   ├── app/
│   │   ├── main.py                         # FastAPI app setup
│   │   ├── database.py                     # SQLAlchemy configuration
│   │   ├── models/
│   │   │   ├── project.py                  # Project ORM model
│   │   │   └── contact.py                  # Contact ORM model
│   │   └── routes/
│   │       ├── projects.py                 # GET /projects/ endpoint
│   │       └── contact.py                  # POST /contact/ endpoint
│   ├── seed_projects.py                    # Database seeding script (7 projects)
│   └── requirements.txt                    # Python dependencies
│
├── docker-compose.yml                      # Multi-service orchestration
├── start.sh                                # Service startup script
└── README.md                               # This file
```

---

## 📊 Featured Projects

### 1. **Tooth Numbering and Segmentation on Panoramic Dental Images**
- **Category:** Deep Learning / Medical Imaging
- **Duration:** 2 months
- **Key Achievement:** 94.2% accuracy, 85% time reduction
- **Tech Stack:** Python, PyTorch, TensorFlow, U-Net, OpenCV
- **Detail Page:** ✅ Available at `/project-detail`
- **GitHub:** https://github.com/ArvindMohanta

### 2. **Metamaterial Circular Polarized Antennas**
- **Category:** RF Engineering
- **Duration:** May 2022 - November 2022
- **Key Achievement:** 40% bandwidth enhancement, 35% size reduction
- **Tech Stack:** CST Microwave Studio, HFSS, Antenna Design
- **Detail Page:** ✅ Available at `/project-metamaterial-antennas`
- **GitHub:** https://github.com/ArvindMohanta

### 3. **Software Defined Vehicle (SDV) Architecture**
- **Category:** Automotive Technology
- **Tech Stack:** Python, NXP S32G, Edge AI, Cloud Computing
- **Focus:** Next-generation intelligent vehicles
- **GitHub:** https://github.com/ArvindMohanta

### 4. **Edge AI and Foundation Models for Vehicles**
- **Category:** AI/ML
- **Tech Stack:** PyTorch, TensorFlow, Edge Computing
- **Focus:** Real-time perception and decision-making
- **GitHub:** https://github.com/ArvindMohanta

### 5. **Blockchain for Connected Vehicle Security**
- **Category:** Cybersecurity
- **Tech Stack:** Python, Blockchain, Cryptography, AWS IoT
- **Focus:** Secure communication framework
- **GitHub:** https://github.com/ArvindMohanta

### 6. **Object Detection Radar with Ultrasonic Sensor and Arduino**
- **Category:** Embedded Systems
- **Duration:** May 2022 - June 2022
- **Key Specs:** 200cm range, ±3cm accuracy, 180° coverage
- **Tech Stack:** Arduino, Embedded C++, Ultrasonic Sensors
- **Detail Page:** ✅ Available at `/project-ultrasonic-radar`
- **GitHub:** https://github.com/ArvindMohanta

### 7. **Speech Recognition using Cross Correlation**
- **Category:** Signal Processing
- **Duration:** March 2021
- **Key Feature:** Lightweight, computationally efficient
- **Tech Stack:** MATLAB, DSP, Cross-Correlation, Signal Analysis
- **Detail Page:** ✅ Available at `/project-speech-recognition`
- **GitHub:** https://github.com/ArvindMohanta

---

## 💡 Skills & Expertise

### 7 Skill Categories
1. **Core Expertise:** SDV, Edge AI, Cloud Computing, Automotive Networking, Blockchain, Cyber Security
2. **AI & Machine Learning:** AI, ML, Foundation Models, Physical AI, Perception Systems
3. **Platforms & Tools:** NXP S32G, AWS IoT, Python, FastAPI, Docker, Kubernetes
4. **Backend & Infrastructure:** Python Backend, Cloud Architecture, DevOps, Blockchain Frameworks
5. **Automotive Systems:** Autonomous Vehicles, Vehicle Communication, Connected Ecosystems
6. **Project Skills:** MATLAB, DSP, Deep Learning, Embedded C++, Arduino, RF Engineering, Signal Processing, Antenna Design, Ultrasonic Sensors, Image Segmentation, Computer Vision
7. **Languages:** Hindi (Professional), Odia (Native), English (Professional)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- Docker & Docker Compose (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/rayukoto44-wq/portfolio.git
cd portfolio
```

### 2. Frontend Setup
```bash
cd frontend
npm install
cd ..
```

### 3. Backend Setup
```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 4. Environment Configuration
Create a `.env` file in the backend directory (optional):
```
DATABASE_URL=sqlite:///portfolio.db
API_PORT=8000
```

---

## 🎯 Running the Application

### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up
```

### Option 2: Running Services Manually

**Terminal 1 - Backend:**
```bash
cd /workspaces/portfolio
python -m uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd /workspaces/portfolio/frontend
npm run dev
```

### 3. Access the Portfolio
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **API Documentation:** http://localhost:8000/docs (Swagger UI)

---

## 📄 Available Routes

### Frontend Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with tech stack |
| `/experience` | Experience | Professional journey & education |
| `/skills` | Skills | Technical expertise showcase |
| `/projects` | Projects | Grid of all 7 projects |
| `/project-detail` | Tooth Segmentation | Detailed case study |
| `/project-metamaterial-antennas` | Antennas | Detailed case study |
| `/project-ultrasonic-radar` | Ultrasonic Radar | Detailed case study |
| `/project-speech-recognition` | Speech Recognition | Detailed case study |
| `/contact` | Contact | Contact form |

### Backend API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/projects/` | Get all projects |
| POST | `/contact/` | Submit contact form |

---

## 🗄 Database

### Schema

**Projects Table:**
```sql
CREATE TABLE projects (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  github_url VARCHAR(255),
  tech_stack VARCHAR(255)
);
```

**Contacts Table:**
```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL
);
```

### Seeding Database
```bash
cd /workspaces/portfolio
python -c "from backend.seed_projects import *"
```

This will populate the database with all 7 projects automatically.

---

## 🎨 Design Features

- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Gradient Styling:** Modern gradient backgrounds and accents
- **Color-Coded Projects:** Each project has unique color theme
- **Interactive Elements:** Hover effects, transitions, and animations
- **Accessibility:** Semantic HTML, ARIA labels where needed
- **Performance:** Optimized with Vite and code splitting

---

## 🔧 Development

### Running in Development Mode
Frontend will hot-reload on file changes:
```bash
cd frontend
npm run dev
```

Backend auto-reloads with `--reload` flag:
```bash
python -m uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

### Building for Production
```bash
cd frontend
npm run build
```

This creates optimized production build in `frontend/dist/`

---

## 📞 Contact Information

- **Email:** arvind.mohanta@example.com
- **LinkedIn:** [linkedin.com/in/arvindmohanta](https://linkedin.com/in/arvindmohanta)
- **GitHub:** [github.com/ArvindMohanta](https://github.com/ArvindMohanta)

---

## 🔐 CORS Configuration

Frontend is enabled to connect from:
- `http://localhost:3000`
- `http://localhost:5173`
- `http://localhost:5174`
- `http://localhost:5175`
- `http://localhost:5176`

---

## 📦 Key Dependencies

### Frontend
- react@18.2.0
- react-router-dom@6.20.0
- axios@1.6.0
- tailwindcss@3.3.5
- lucide-react@0.295.0

### Backend
- fastapi
- uvicorn
- sqlalchemy@2.0.45
- python-jose
- passlib
- psycopg2-binary

---

## 🚀 Deployment Ready

The portfolio is ready for deployment to:
- **Frontend:** Vercel, Netlify, GitHub Pages
- **Backend:** Railway, Render, Heroku, AWS
- **Database:** Supabase, Firebase, AWS RDS

---

## 📝 Features Implemented

✅ Full-stack architecture  
✅ 7 research projects  
✅ 4 detailed project pages with comprehensive case studies  
✅ Professional profile integration  
✅ Interactive skills showcase with 7 categories  
✅ Contact form with backend integration  
✅ Responsive Tailwind CSS design  
✅ CORS middleware configuration  
✅ SQLAlchemy ORM with multiple database support  
✅ Database seeding script  
✅ Mock data fallback for resilience  
✅ React Router client-side navigation  
✅ Lucide React icons  
✅ Project skills section in detail pages  
✅ Project skills in main Skills page

---

## 🎓 Educational Value

This portfolio demonstrates:
- **Full-Stack Development** - Frontend (React, Vite) + Backend (FastAPI)
- **Database Design** - ORM models, migrations, seeding
- **API Design** - RESTful architecture with proper response handling
- **UI/UX Design** - Modern, responsive, accessible interfaces
- **DevOps** - Docker, Docker Compose, environment configuration
- **Version Control** - Git workflow and repository management
- **Best Practices** - Code organization, error handling, fallback mechanisms

---

## 📄 License

This portfolio is open source and available for educational purposes.

---

## 👤 About the Author

**M. Arvind Mohanta** - Researcher and Developer

**Background:**
- PhD in Artificial Intelligence (IIT Hyderabad)
- BTech in Computer Science (IIIT Bhubaneswar)
- Expertise in SDV, Edge AI, Cloud Computing, RF Engineering, Embedded Systems

**Current Focus:**
- Next-generation intelligent vehicle systems
- Edge AI and Foundation Models
- Signal Processing and RF Engineering
- Automotive cybersecurity

---

## 🤝 Contributing

Contributions are welcome! Please feel free to fork this repository and submit pull requests.

---

## ❓ FAQ

**Q: How do I add a new project?**  
A: Edit `backend/seed_projects.py` to add project data, then run the seeding script. Create a new detail page if needed.

**Q: Can I deploy this to production?**  
A: Yes! Update the API_URL in frontend and deploy both frontend and backend to your preferred hosting platform.

**Q: How do I enable email notifications for contact form?**  
A: Install email library (SendGrid, AWS SES) and update `backend/app/routes/contact.py`.

**Q: What database should I use for production?**  
A: PostgreSQL is recommended. Update `DATABASE_URL` in environment variables.

---

## 📞 Support

For issues, questions, or suggestions, please reach out via the contact form on the portfolio website.

---

**Last Updated:** December 2025  
**Version:** 1.0.0
