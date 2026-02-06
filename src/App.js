// import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
// import AnimatedBackground from './components/AnimatedBackground';
import Abhi from './image/AbhishekAmbi.png';
import Abhishek1 from './image/AbhishekAmbi1.png'
// import Abhishek2 from './image/AbhishekAmbi2.png'
import Abhishek3 from './image/AbhishekAmbi3.png'
import Abhishek4 from './image/AbhishekAmbi4.png';
import Abhishek5 from './image/AbhishekAmbi5.png';
import Python from './logo/python.png';
import Java from './logo/java.png';
import JavaScript from './logo/JavaScript.png';
import cpp from './logo/cpp.png';
import php from './logo/php.png';
import html from './logo/html.png';
import css from './logo/css.png';
import bootstrap from './logo/bootstrap.png';
import tailwind from './logo/tailwind.png';
import react from './logo/react.png';
import reactnative from './logo/reactnative.png';
import node from './logo/node.png';
import express from './logo/express.png';
import angular from './logo/angular.png';
import mongodb from './logo/mongodb.png';
import mysql from './logo/mysql.png';
import git from './logo/git.png';
import vscode from './logo/vscode.png';
import postman from './logo/postman.png';
import eclipse from './logo/eclipse.png';
import canva from './logo/canva.png';
import photoshop from './logo/photoshop.png';
import blender from './logo/blender.png';
import aftereffect from './logo/aftereffect.png';
import fullstack from './certificate/Full.jpg';
import jscer from './certificate/js.jpg';
import androiddev from './certificate/android.jpg';
import pythonfun from './certificate/python.jpg';
import oops from './certificate/oops.jpg';
import sead from './certificate/SE.jpg';
import oep from './certificate/OS.jpg';
import react_certificate from './certificate/React.jpg';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import ChatBot from './components/ChatBot';
import ImageSlider from './components/ImageSlider';
import ComputerNetwork from './certificate/CN.jpg'
import Nias from './certificate/Nias.jpeg'

// Project Images
import meetingHouse1 from './ProjectImage/MeetingHouse (1).png';
import meetingHouse2 from './ProjectImage/MeetingHouse (2).png';
import meetingHouse3 from './ProjectImage/MeetingHouse (3).png';
import meetingHouse4 from './ProjectImage/MeetingHouse (4).png';
import meetingHouse5 from './ProjectImage/MeetingHouse (5).png';
import meetingHouse6 from './ProjectImage/MeetingHouse (6).png';

// import vagdevi1 from './ProjectImage/vagdevi (1).png';
import vagdevi2 from './ProjectImage/vagdevi (2).png';
import vagdevi3 from './ProjectImage/vagdevi (3).png';
import vagdevi4 from './ProjectImage/vagdevi (4).png';
import vagdevi5 from './ProjectImage/vagdevi (5).png';
import vagdevi6 from './ProjectImage/vagdevi (6).png';
import vagdevi7 from './ProjectImage/vagdevi (7).png';
import vagdevi8 from './ProjectImage/vagdevi (8).png';

import objectDetection1 from './ProjectImage/ObjectDetection (1).png';
import objectDetection2 from './ProjectImage/ObjectDetection (2).png';
import objectDetection3 from './ProjectImage/ObjectDetection (3).png';
import objectDetection4 from './ProjectImage/ObjectDetection (4).png';

import pathfinder1 from './ProjectImage/Patfinder (1).png';
import pathfinder2 from './ProjectImage/Patfinder (2).png';
import pathfinder3 from './ProjectImage/Patfinder (3).png';
import pathfinder4 from './ProjectImage/Patfinder (4).png';
import pathfinder5 from './ProjectImage/Patfinder (5).png';

import ctutor1 from './ProjectImage/CTUTOR (1).jpeg';
import ctutor2 from './ProjectImage/CTUTOR (2).jpeg';
import ctutor3 from './ProjectImage/CTUTOR (3).jpeg';
import ctutor4 from './ProjectImage/CTUTOR (4).jpeg';
import ctutor5 from './ProjectImage/CTUTOR (5).jpeg';
import ctutor6 from './ProjectImage/CTUTOR (6).jpeg';
import ctutor7 from './ProjectImage/CTUTOR (7).jpeg';
import ctutor8 from './ProjectImage/CTUTOR (8).jpeg';
import ctutor9 from './ProjectImage/CTUTOR (9).jpeg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff9800', contrastText: '#fff' },
    secondary: { main: '#ff5722', contrastText: '#fff' },
    background: { default: '#1a1a2e', paper: '#16213e' },
    text: { primary: '#f0f0f0', secondary: '#a8a8a8' },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
  },
});

const skillsData = [
  {
    label: 'Programming Languages',
    key: 'programming',
    skills: [
      { name: 'Python', icon: Python },
      { name: 'Java', icon: Java },
      { name: 'JavaScript', icon: JavaScript },
      { name: 'C++', icon: cpp },
      { name: 'PHP', icon: php },
    ],
  },
  {
    label: 'Web Technologies',
    key: 'web',
    skills: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Bootstrap', icon: bootstrap },
      { name: 'Tailwind', icon: tailwind },
    ],
  },
  {
    label: 'Frameworks',
    key: 'frameworks',
    skills: [
      { name: 'React', icon: react },
      { name: 'React Native', icon: reactnative },
      { name: 'Node', icon: node },
      { name: 'Express', icon: express },
      { name: 'Angular', icon: angular },
    ],
  },
  {
    label: 'Databases',
    key: 'databases',
    skills: [
      { name: 'MySQL', icon: mysql },
      { name: 'MongoDB', icon: mongodb },
    ],
  },
  {
    label: 'Tools & Others',
    key: 'tools',
    skills: [
      { name: 'Git & GitHub', icon: git },
      { name: 'VSCode', icon: vscode },
      { name: 'Postman', icon: postman },
      { name: 'Eclipse', icon: eclipse },
    ],
  },
  {
    label: 'Design Tools',
    key: 'design',
    skills: [
      { name: 'Canva', icon: canva },
      { name: 'Photoshop', icon: photoshop },
      { name: 'Blender', icon: blender },
      { name: 'After Effects', icon: aftereffect },
    ],
  },
];

const certifications = [
  { img: fullstack, title: 'Full Stack Web Development', org: 'Simplilearn', year: '2022' },
  { img: react_certificate, title: 'React.js', org: 'Great Learning', year: '2022' },
  { img: jscer, title: 'JavaScript', org: 'Great Learning', year: '2022' },
  { img: androiddev, title: 'Android Development', org: 'Great Learning', year: '2022' },
  { img: pythonfun, title: 'Python Fundamental', org: 'Great Learning', year: '2022' },
  { img: oops, title: 'OOPs With Java', org: 'Great Learning', year: '2024' },
  { img: sead, title: 'Software Engg and Agile Development', org: 'infosys Springboard', year: '2024' },
  { img: oep, title: 'Operating System', org: 'Mind Luster', year: '2024' },
  { img: ComputerNetwork, title: 'Computer Network', org: 'Cisco Networking Academy', year: '2024' },
  { img: Nias, title: 'BootCamp on Machine Learning', org: 'Nias Academy', year: '2025' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openSkills, setOpenSkills] = useState({});
  const [theme, setTheme] = useState('dark');
  const [modalCert, setModalCert] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [imageSliderOpen, setImageSliderOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isErasing, setIsErasing] = useState(false);
  const fullName = 'Abhishek Ambi';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Abhi, Abhishek1, Abhishek3, Abhishek4, Abhishek5];

  // Project data with images
  const projectsData = [
    {
      title: 'Meeting House',
      desc: 'Developed an online meeting application using MERN Stack. Features include user authentication, event management, and resource sharing for seamless collaboration.',
      images: [meetingHouse1, meetingHouse2, meetingHouse3, meetingHouse4, meetingHouse5, meetingHouse6]
    },
    {
      title: 'Shri Vagdevi Construction',
      desc: 'Shri Vagdevi Constructions is a professional civil engineering and construction firm dedicated to delivering high-quality residential and commercial projects with precision and reliability.',
      link: 'https://www.shrivagdeviconstructions.com/',
      images: [ vagdevi2, vagdevi3, vagdevi4, vagdevi5, vagdevi6, vagdevi7, vagdevi8]
    },
    {
      title: 'Quick Eats',
      desc: 'A "Quick Eats" hybrid app for a cloud kitchen would be a smart, streamlined platform designed to manage both online delivery and walk-in/takeaway.',
      images: []
    },
    {
      title: 'Plant disease detection',
      desc: 'Building a plant disease detection system using machine learning and mobile technologies like Android, VSCode, React Native, or Flutter is a hackathon project idea.',
      images: []
    },
    {
      title: 'Object Detection',
      desc: 'YOLOv5 (You Only Look Once version 5) is a powerful real-time object detection model known for its speed and accuracy.',
      images: [objectDetection1, objectDetection2, objectDetection3, objectDetection4]
    },
    {
      title: 'Path Finder',
      desc: 'Created a web application with React to visualize pathfinding algorithms (Dijkstra\'s, DFS, BFS, A*) for finding the shortest path between points.',
      images: [pathfinder1, pathfinder2, pathfinder3, pathfinder4, pathfinder5]
    },
    {
      title: 'Todo List',
      desc: 'Created a Java application for managing tasks with a straightforward interface to boost productivity.',
      images: []
    },
    {
      title: 'C-Tutor',
      desc: 'Augmented Reality (AR) is transforming education by creating immersive and interactive learning experiences that engage students and enhance comprehension.',
      images: [ctutor1, ctutor2, ctutor3, ctutor4, ctutor5, ctutor6, ctutor7, ctutor8, ctutor9]
    },
    {
      title: 'Online Medicine Store',
      desc: 'Designed a web application with React, Node.js, and MongoDB, offering a simple cart system for purchasing medicines online.',
      images: []
    }
  ];

  // Debug: Check if images are loaded
  useEffect(() => {
    console.log('Images array:', images);
    images.forEach((img, index) => {
      console.log(`Image ${index}:`, img);
    });
  }, []);

  useEffect(() => {
    let timeout;
    if (!isErasing && typedName.length < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 120);
    } else if (!isErasing && typedName.length === fullName.length) {
      timeout = setTimeout(() => setIsErasing(true), 3000);
    } else if (isErasing && typedName.length > 0) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 60);
    } else if (isErasing && typedName.length === 0) {
      timeout = setTimeout(() => setIsErasing(false), 400);
    }
    return () => clearTimeout(timeout);
  }, [typedName, isErasing, fullName]);

  // Auto-advance images every 4 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleSkillCategory = (key) => {
    setOpenSkills((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const skillListVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'skills', 'education', 'certifications', 'projects', 'contact'];
      let current = sectionIds[0];
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) { // 80px offset for nav height
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="modern-app">
        {/* Navigation */}
        <nav className={`modern-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="modern-nav-content">
            <span className="modern-logo" onClick={() => scrollToSection('home')}>Abhishek</span>
            <button className="modern-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '×' : '☰'}</button>
            <ul className={`modern-nav-links ${isMenuOpen ? 'open' : ''}`}>
              {['home','about','projects','skills','education','certifications','contact'].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    className={activeSection === sec ? 'active' : ''}
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection(sec);
                    }}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme" style={{marginLeft: 16, fontSize: 22, background: 'none', border: 'none', color: 'var(--color-accent)', cursor: 'pointer'}}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
        {/* Hero/Header */}
        <header id="home" className="modern-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Image Cards
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            transform: 'translateY(-12%)'
          }}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const imageIndex = (currentImageIndex + offset + images.length) % images.length;
              // Only show cards for images that exist (not undefined/null)
              if (!images[imageIndex]) return null;
              
              const isCurrent = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isFar = Math.abs(offset) === 2;
              
              let cardStyle = {};
              
              if (isCurrent) {
                cardStyle = {
                  transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)',
                  opacity: 0.6,
                  zIndex: 5,
                  filter: 'blur(0px)'
                };
              } else if (isAdjacent) {
                const direction = offset > 0 ? 1 : -1;
                cardStyle = {
                  transform: `translateX(${direction * 80}px) translateY(${direction * 20}px) scale(0.8) rotateY(${direction * 15}deg)`,
                  opacity: 0.4,
                  zIndex: 4,
                  filter: 'blur(1px)'
                };
              } else if (isFar) {
                const direction = offset > 0 ? 1 : -1;
                cardStyle = {
                  transform: `translateX(${direction * 160}px) translateY(${direction * 40}px) scale(0.6) rotateY(${direction * 25}deg)`,
                  opacity: 0.3,
                  zIndex: 3,
                  filter: 'blur(2px)'
                };
              }
              
              return (
                <div
                  key={`${currentImageIndex}-${offset}`}
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '250px',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    ...cardStyle
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: 'perspective(1000px)',
                    transformStyle: 'preserve-3d'
                  }}>
                    <div style={{
                      flex: 1,
                      background: images[imageIndex] ? `url(${images[imageIndex]}) center/cover` : 'var(--color-bg-paper)',
                      position: 'relative'
                    }}>
                      {!images[imageIndex] && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          color: 'var(--color-text-secondary)',
                          fontSize: '14px'
                        }}>
                          Image {imageIndex + 1}
                        </div>
                      )}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        color: 'white',
                        padding: '15px',
                        textAlign: 'center'
                      }}>
                        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
                          Abhishek Ambi
                        </h3>
                        <p style={{ margin: '5px 0 0 0', fontSize: '12px', opacity: 0.9 }}>
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
          <div>
            
          <img 
            src={Abhi} 
            alt="Abhishek Ambi" 
            className="modern-hero-img" 
            style={{
              transition: 'opacity 0.8s ease-in-out',
              
              position: 'relative',
              zIndex: 10,
              width: '200px',
              height: '200px'
            }}
          />
          </div>
          <h1 className="modern-hero-title" style={{
            display:'inline-block',
            // position: 'absolute',
            zIndex: 15
          }}>
            {typedName}
            <span style={{
              display: 'inline-block',
              width: '1ch',
              color: 'red',
              fontWeight: 700,
              background: 'none',
              animation: 'none',
              verticalAlign: 'baseline',
              opacity: showCursor ? 1 : 0
            }}>
              |
            </span>
          </h1>
          <p className="modern-hero-subtitle" style={{
            position: 'relative',
            zIndex: 15
          }}>Computer Science & Engineering Student</p>
        </header>
        {/* About */}
        <motion.section id="about" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>About Me</h2>
          <p>Final year computer science student with practical experience in software development, data analysis, machine learning and computer vision through academic projects. Interested in using code and insights to solve real-world problems. Seeking to join a forward-thinking organization that supports innovation, mentorship, and lifelong learning while gaining worthwhile industry experience.</p>
          </motion.section>
          {/* Education */}
        <motion.section id="education" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Education</h2>
          <div className="modern-timeline">
            <div className="modern-timeline-item">
              <div className="modern-timeline-dot" />
              <div>
                <h3>RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT BENGALURU</h3>
                <p>BE in Computer Science & Engg</p>
                <p>CGPA: 8.26</p>
                <p>2023 - 2026</p>
              </div>
            </div>
            <div className="modern-timeline-item">
              <div className="modern-timeline-dot" />
              <div>
                <h3>K.L.E.SOCIETY'S POLYTECHNIC MAHALINGAPUR</h3>
                <p>Diploma in Computer Science & Engg</p>
                <p>CGPA: 9.83</p>
                <p>2020 - 2023</p>
              </div>
            </div>
          </div>
          </motion.section>
        {/* Projects */}
        <motion.section id="projects" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Projects</h2>
          <motion.div className="modern-projects-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {projectsData.map(project => (
              <div
                key={project.title}
                className="modern-project-item"
                onClick={() => {
                  if (project.images && project.images.length > 0) {
                    setCurrentProjectImages(project.images);
                    setModalProject(project);
                    setImageSliderOpen(true);
                  } else {
                    setModalProject(project);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.link && <a href={project.link} onClick={e => e.stopPropagation()}>{project.title}</a>}
              </div>
            ))}
          </motion.div>
         {modalProject && (
           <div className="cert-modal-overlay" onClick={() => setModalProject(null)}>
             <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
               <button className="cert-modal-close" onClick={() => setModalProject(null)}>&times;</button>
               <div className="cert-modal-caption">
                 <strong>{modalProject.title}</strong><br />
                 <span>{modalProject.desc}</span><br />
                 {modalProject.link && <div style={{marginTop:8}}><a href={modalProject.link} target="_blank" rel="noopener noreferrer">Visit Project</a></div>}
               </div>
             </div>
           </div>
         )}
         {imageSliderOpen && currentProjectImages.length > 0 && (
            <ImageSlider
              images={currentProjectImages}
              isOpen={imageSliderOpen}
              onClose={() => setImageSliderOpen(false)}
              projectData={modalProject}
            />
          )}
        </motion.section>
        {/* Skills */}
        <motion.section id="skills" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Skills & Technologies</h2>
          <div className="modern-skills">
            {skillsData.map((cat) => (
              <div key={cat.key} className="modern-skill-category">
                <button className="modern-skill-heading" onClick={() => toggleSkillCategory(cat.key)}>
                  {cat.label} <span>{openSkills[cat.key] ? '▲' : '▼'}</span>
                </button>
                {openSkills[cat.key] && (
                  <motion.div
                    className="modern-skill-list"
                    variants={skillListVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {cat.skills.map(skill => (
                      <motion.span
                        key={skill.name}
                        className="modern-skill-chip"
                        variants={skillItemVariants}
                        whileHover={{ scale: 1.12, rotate: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={skill.icon} alt={skill.name} className="modern-skill-icon" />
                        {skill.name}
                      </motion.span>
                    ))}
              </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
        
        {/* Certifications */}
        <motion.section id="certifications" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Certifications</h2>
          <motion.div className="modern-certifications-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {certifications.map(cert => (
              <div
                key={cert.title}
                className="modern-cert-item"
                onClick={() => setModalCert(cert)}
                style={{ cursor: 'pointer' }}
              >
                <img src={cert.img} alt={cert.title} className="modern-cert-img" />
                <div className="modern-cert-info">
                  <strong>{cert.title}</strong><br />
                  <span>{cert.org}</span><br />
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </motion.div>
         {modalCert && (
           <div className="cert-modal-overlay" onClick={() => setModalCert(null)}>
             <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
               <button className="cert-modal-close" onClick={() => setModalCert(null)}>&times;</button>
               <img src={modalCert.img} alt={modalCert.title} className="cert-modal-img" />
               <div className="cert-modal-caption">
                 <strong>{modalCert.title}</strong><br />
                 <span>{modalCert.org}</span><br />
                 <span>{modalCert.year}</span>
               </div>
             </div>
           </div>
         )}
        </motion.section>
        {/* Contact */}
        <motion.section id="contact" className="modern-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2>Contact Me</h2>
          <div className="modern-contact-list">
            <div className="modern-contact-item">
                <h3>Email</h3>
              <a href="mailto:abhishekambi2003@gmail.com">abhishekambi2003@gmail.com</a>
            </div>
            <div className="modern-contact-item">
                <h3>LinkedIn</h3>
              <a href='https://www.linkedin.com/in/abhishekambi2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>linkedin.com/in/abhishekambi2003</a>
            </div>
            <div className="modern-contact-item">
                <h3>GitHub</h3>
              <a href='https://www.github.com/CSEStudentAbhi'>github.com/CSEStudentAbhi</a>
            </div>
          </div>
          </motion.section>
      </div>
      <ChatBot autoOpen={window.innerWidth > 768} />
    </ThemeProvider>
  );
}

export default App;
