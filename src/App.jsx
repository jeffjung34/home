import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {


  return (
    <>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <Hobbies />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
