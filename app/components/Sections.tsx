import React from 'react';
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Projects from './Projects/Projects';
import Contact from './Contact';
import ExperiencesSection from './Experiences/ExperiencesSection';



const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <ExperiencesSection />
      <Contact />
    </main>
  );
};

export default Sections;