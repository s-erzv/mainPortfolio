import React from 'react';
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Projects from './Projects/Projects';
import Contact from './Contact';
import ExperiencesSection from './Experiences/ExperiencesSection';
import TechJokes from './TechJokes';



const Sections = () => {
  return (
    <main className="flex flex-col gap-[42px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto justify-center items-center">
      <Hero />
      <Skills />
      <Projects />
      <ExperiencesSection />
      {/* <TechJokes /> */}
      <Contact />
    </main>
  );
};

export default Sections;