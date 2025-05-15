'use client';
import React from 'react';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Hero = () => {
  return (
    <section className="relative pl-6 flex flex-row z-20 mx-auto md:gap-[50px] md:mx-[-40px] top-[-90px] justify-center">
      <motion.div 
        className="flex flex-col gap-[13px] items-start md:items-start mt-0 md:mt-10 text-left md:text-center"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <motion.h1
          className="py-3 mt-0 text-2xl md:text-[50px] font-bold bg-clip-text bg-gradient-to-r from-[#2f39c6] to-[#aad3f8] dark:from-secondary dark:to-primary text-transparent transition-colors duration-1000 ease-in-out"
          custom={1}
          variants={textVariant}
        >
          Hello I&apos;m Sarah, I&apos;m a 
          <span className='block text-[30px] md:text-[40px] highlight-l mt-[10px]'>Web Developer</span>
        </motion.h1>

        <motion.p 
          className='text-sm md:text-lg max-w-full md:text-left mr-3'
          custom={2}
          variants={textVariant}
        >
          An Information Systems student at UIN Jakarta passionate about leveraging technology to explore innovations, enhance digital knowledge, and drive societal progress.
        </motion.p>

        <motion.div 
          id="social-media" 
          className="md:mt-2 mt-1 text-xl flex items-center justify-center"
          custom={3}
          variants={textVariant}
        >
          <div id="social-media" className="md:mt-2 mt-1 text-xl flex items-center justify-center">
                <a href="https://instagram.com/s.erzv"><img src="/ig-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://instagram.com/s.erzv"><img src="/ig-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="/resume.pdf" className="hidden md:block md:text-sm font-medium px-2 py-1.5 md:px-4 md:py-3 md:ml-4 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg">Check Out My Resume</a>
                <a href="/resume.pdf" className="md:hidden block text-sm font-medium px-4 py-3 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg">Resume</a>
        </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="sm:hidden relative md:w-auto md:flex justify-start mt-6 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={imageVariant}
      >
        <div className="sm:hidden relative md:w-auto md:flex justify-start mt-6 md:mt-0">
          <img src="/test.svg" alt="" height={417} width={357} className='hidden md:block min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] dark:hidden'/>
          <img src="/testdark.svg" alt="" height={417} width={357} className='hidden dark:md:block min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px]'/>
      </div>
      </motion.div>
    </section>
  );
};

export default Hero;
