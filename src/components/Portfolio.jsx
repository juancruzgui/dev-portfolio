
import React, { useState, useEffect } from 'react';
import '../App.css'

// Component imports
import Header from './Header';
import MobileMenu from './MobileMenu';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';


import { projects, skills } from '../data';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set initial dark mode based on user preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);

    // Add scroll listener for section highlighting
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Header/Navigation */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MobileMenu
          darkMode={darkMode}
          toggleMobileMenu={toggleMobileMenu}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}

      <main>
        {/* Hero Section */}
        <HeroSection darkMode={darkMode} scrollToSection={scrollToSection} />

        {/* About Section */}
        <AboutSection darkMode={darkMode} />

        {/* Projects Section */}
        <ProjectsSection darkMode={darkMode} projects={projects} />

        {/* Skills Section */}
        <SkillsSection darkMode={darkMode} skills={skills} />

        {/* Contact Section */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
