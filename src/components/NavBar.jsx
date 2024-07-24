import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full transition-transform duration-300 ${showNavBar ? 'translate-y-0' : '-translate-y-full'} bg-gray-100 dark:bg-gray-900 shadow-md z-50 hidden md:flex`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Jeff Jung</span>
        </div>
        <div className="flex space-x-6 items-center">

          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none">
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
          <a href="https://github.com/jeffjung34" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">More About Me</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
