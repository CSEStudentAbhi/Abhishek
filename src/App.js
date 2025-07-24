import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Abhi from './image/Abhi.jpeg'
import Python from './logo/python.png'
import Java from './logo/java.png'
import JavaScript from './logo/JavaScript.png'
import cpp from './logo/cpp.png'
import php from './logo/php.png'
import html from './logo/html.png'
import css from './logo/css.png'
import bootstrap from './logo/bootstrap.png'
import tailwind from './logo/tailwind.png'
import react from './logo/react.png'
import reactnative from './logo/reactnative.png'
import node from './logo/node.png'
import express from './logo/express.png'
import angular from './logo/angular.png'
import mongodb from './logo/mongodb.png'
import mysql from './logo/mysql.png'
import git from './logo/git.png'
import vscode from './logo/vscode.png'
import postman from './logo/postman.png'
import eclipse from './logo/eclipse.png'
import canva from './logo/canva.png'
import photoshop from './logo/photoshop.png'
import blender from './logo/blender.png'
import aftereffect from './logo/aftereffect.png'
import fullstack from './certificate/Full.jpg'
import jscer from './certificate/js.jpg'
import androiddev from './certificate/android.jpg'
import pythonfun from './certificate/python.jpg'
import oops from './certificate/oops.jpg'
import sead from './certificate/SE.jpg'
import oep from './certificate/OS.jpg'

import './App.css';
import react_certificate from './certificate/React.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00bcd4', contrastText: '#ffffff' },
    secondary: { main: '#ff4081', contrastText: '#ffffff' },
    background: { default: '#0a192f', paper: '#112240' },
    text: { primary: '#e6f1ff', secondary: '#8892b0' },
    success: { main: '#64ffda' },
    warning: { main: '#ffb300' },
    error: { main: '#ff1744' },
    info: { main: '#2196f3' },
    divider: '#233554',
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: '#64ffda',
    },
    h2: {
      fontWeight: 600,
      color: '#00bcd4',
    },
    h3: {
      fontWeight: 500,
      color: '#ff4081',
    },
    body1: {
      color: '#e6f1ff',
    },
    body2: {
      color: '#8892b0',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#112240',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    x: -100,
    opacity: 0,
    scale: 0.8
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.8
    }
  }
};

const sectionVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.9,
    rotateX: -10
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Collapsible skill categories
  const [openSkills, setOpenSkills] = useState({
    programming: false,
    web: false,
    frameworks: false,
    databases: false,
    tools: false,
    design: false,
  });

  const toggleSkillCategory = (cat) => {
    setOpenSkills((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
        <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '×' : '☰'}
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('education');
                  }}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('certifications');
                  }}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <AnimatedBackground />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.header
            id="home"
            className="portfolio-header"
            variants={itemVariants}
          >
            <motion.h1
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 0.8
              }}
            >
              Abhishek Ambi
            </motion.h1>
            <motion.div
              className="profile-photo-container"
              initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 1.2
              }}
            >
              <img
                src={Abhi}
                alt="Abhishek Ambi"
                className="profile-photo"
              />
            </motion.div>
            <motion.p
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.3,
                duration: 0.8
              }}
              className="subtitle"
            >
              Computer Science & Engg Student
            </motion.p>
          </motion.header>

          <motion.section
            id="about"
            className="about-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              About Me
            </motion.h2>
            <p>Final year computer science student with practical experience in software development, data analysis, machine
              learning and computer vision through academic projects. Interested in using code and insights to solve real-world
              problems. Seeking to join a forward-thinking organization that supports innovation, mentorship, and lifelong learning
              while gaining worthwhile industry experience. </p>
          </motion.section>

          <motion.section
            id="skills"
            className="skills-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              Skills & Technologies
            </motion.h2>

            {/* Programming Languages Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('programming')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Programming Languages {openSkills.programming ? '▲' : '▼'}
            </h3>
            {openSkills.programming && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {/* Programming Languages */}
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={Python} alt="Python" className="skill-logo" />
                  <p>Python</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={Java} alt="Java" className="skill-logo" />
                  <p>Java</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={JavaScript} alt="JavaScript" className="skill-logo" />
                  <p>JavaScript</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={cpp} alt="C++" className="skill-logo" />
                  <p>C++</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={php} alt="PHP" className="skill-logo" />
                  <p>php</p>
                </motion.div>
              </motion.div>
            )}

            {/* Web Technologies Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('web')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Web Technologies {openSkills.web ? '▲' : '▼'}
            </h3>
            {openSkills.web && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={html} alt="HTML5" className="skill-logo" />
                  <p>HTML</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={css} alt="CSS3" className="skill-logo" />
                  <p>CSS</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={bootstrap} alt="Bootstrap" className="skill-logo" />
                  <p>Bootstrap</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={tailwind} alt="Tailwind CSS" className="skill-logo" />
                  <p>Tailwind</p>
                </motion.div>

              </motion.div>
            )}

            {/* Frameworks Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('frameworks')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Frameworks {openSkills.frameworks ? '▲' : '▼'}
            </h3>
            {openSkills.frameworks && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={react} alt="React.js" className="skill-logo" />
                  <p>React</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={reactnative} alt="React Native" className="skill-logo" />
                  <p>React Native</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={node} alt="Node.js" className="skill-logo" />
                  <p>Node</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={express} alt="Express.js" className="skill-logo" />
                  <p>Express</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={angular} alt="Angular" className="skill-logo" />
                  <p>Angular</p>
                </motion.div>
              </motion.div>
            )}

            {/* Databases Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('databases')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Databases {openSkills.databases ? '▲' : '▼'}
            </h3>
            {openSkills.databases && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={mysql} alt="MySQL" className="skill-logo" />
                  <p>MySQL</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={mongodb} alt="MongoDB" className="skill-logo" />
                  <p>MongoDB</p>
                </motion.div>
              </motion.div>
            )}

            {/* Tools & Others Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('tools')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Tools & Others {openSkills.tools ? '▲' : '▼'}
            </h3>
            {openSkills.tools && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={git} alt="Git & GitHub" className="skill-logo" />
                  <p>Git&GitHub</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={vscode} alt="VS Code" className="skill-logo" />
                  <p>VSCode</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={postman} alt="Postman" className="skill-logo" />
                  <p>Postman</p>
                </motion.div>

                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={eclipse} alt="Eclipse" className="skill-logo" />
                  <p>Eclipse</p>
                </motion.div>
              </motion.div>
            )}

            {/* Design Tools Heading */}
            <h3 className="skills-category-heading" onClick={() => toggleSkillCategory('design')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              Design Tools {openSkills.design ? '▲' : '▼'}
            </h3>
            {openSkills.design && (
              <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {/* Design Tools Cards */}
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={canva} alt="Canva" className="skill-logo" />
                  <p>Canva</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={photoshop} alt="Photoshop" className="skill-logo" />
                  <p>Photoshop</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={blender} alt="Blender" className="skill-logo" />
                  <p>Blender</p>
                </motion.div>
                <motion.div
                  className="skill-card"
                  variants={{
                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(100, 255, 218, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={aftereffect} alt="After Effects" className="skill-logo" />
                  <p>After Effects</p>
                </motion.div>
              </motion.div>
            )}
          </motion.section>

          <motion.section
            id="education"
            className="education-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              Education
            </motion.h2>
            <motion.div
              className="education-timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="education-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT BENGALURU</h3>
                <p>BE in Computer Science & Engg</p>
                <p>CGPA: 8.25</p>
                <p>2023 - 2026</p>
              </motion.div>
              <motion.div
                className="education-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>K.L.E.SOCIETY'S POLYTECHNIC MAHALINGAPUR</h3>
                <p>Diploma in Computer Science & Engg</p>
                <p>CGPA: 9.83</p>
                <p>2020 - 2023</p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="certifications"
            className="certifications-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              Certifications
            </motion.h2>
            <motion.div
              className="certifications-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Full Stack Web Development</h3>
                <p>Simplilearn</p>
                <p>Issued: 2022</p>
                <div className="certification-image">
                  <img
                    src={fullstack}
                    alt="Simplilearn"
                    className="certificate-img"
                  />
                </div>
              </motion.div>

              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>React.js </h3>
                <p>Great Learning</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={react_certificate}
                    alt="Great Learning"
                    className="certificate-img"
                  />
                </div>
              </motion.div>

              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>JavaScript </h3>
                <p>Great Learning</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={jscer}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Android Development </h3>
                <p>Great Learning</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={androiddev}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Python Fundamental </h3>
                <p>Great Learning</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={pythonfun}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>OOPs With Java</h3>
                <p>Great Learning</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={oops}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Software Engg and Agile Development</h3>
                <p>infosys Springboard</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={sead}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
              <motion.div
                className="certification-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Opearting System</h3>
                <p>Mind Luster</p>
                <p>Issued: 2023</p>
                <div className="certification-image">
                  <img
                    src={oep}
                    alt="freeCodeCamp Certificate"
                    className="certificate-img"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="projects"
            className="projects-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              Projects
            </motion.h2>
            <motion.div
              className="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Meeting House</h3>
                <p>Developed an online meeting application using MERN Stack. Features include user authentication, event management, and resource sharing for seamless collaboration.</p>
                <a href='https://indianmeetinghouse.netlify.app/'>Meeting House</a>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Shri Vagdevi Construction</h3>
                <p>Shri Vagdevi Constructions is a professional civil engineering and construction firm dedicated to delivering high-quality residential and commercial projects with precision and reliability. </p>
                <a href='https://www.shrivagdeviconstructions.com/'>Shri Vagdevi Construction</a>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Quick Eats</h3>
                <p>A “Quick Eats” hybrid app for a cloud kitchen would be a smart, streamlined platform designed to manage both online delivery and walk-in/takeaway.</p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Plant disease detection</h3>
                <p>Building a plant disease detection system using machine learning and mobile technologies like Android, VSCode, React Native, or Flutter is a hackathon project idea.</p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Object Detection</h3>
                <p>YOLOv5 (You Only Look Once version 5) is a powerful real-time object detection model known for its speed and accuracy.</p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Path Finder </h3>
                <p>Created a web application with React to visualize pathfinding algorithms (Dijkstra’s, DFS, BFS, A*) for finding the shortest path between points. </p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Todo List </h3>
                <p>Created a Java application for managing tasks with a straightforward interface to boost productivity. </p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>C-Tutor </h3>
                <p>Augmented Reality (AR) is transforming education by creating immersive and interactive learning experiences that engage students and enhance comprehension.</p>
              </motion.div>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Online Medicine Store</h3>
                <p>Online Medicine Store
                  Designed a web application with React, Node.js, and MongoDB, offering a simple cart system for purchasing medicines online. </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="contact"
            className="contact-section"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              Contact Me
            </motion.h2>
            <motion.div
              className="contact-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="contact-card"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>Email</h3>
                <p><a href="mailto:abhishekambi2003@gmail.com" style={{ color: '#00bcd4', textDecoration: 'underline' }}>abhishekambi2003@gmail.com</a></p>
              </motion.div>
              <motion.div
                className="contact-card"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>LinkedIn</h3>
                <p><a href='https://www.linkedin.com/in/abhishekambi2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' style={{ color: '#00bcd4', textDecoration: 'underline' }}>linkedin.com/in/abhishekambi2003</a></p>
              </motion.div>
              <motion.div
                className="contact-card"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>GitHub</h3>
                <p><a href='https://www.github.com/CSEStudentAbhi' style={{ color: '#00bcd4', textDecoration: 'underline' }}>github.com/CSEStudentAbhi</a></p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
