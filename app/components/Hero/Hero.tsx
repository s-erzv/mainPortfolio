'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import GradientText from '../GradientText/GradientText';
import TextType from '../TextType/TextType';
import Lanyard from '../Lanyard/Lanyard';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const gradientColors: string[] = isDark
    ? ['#7F4DB0', '#CF97C6']
    : ['#2f39c6', '#aad3f8'];

  return (
    <section className="relative z-20 mx-auto px-6 flex flex-col md:flex-row md:gap-[50px] md:mx-[-40px] justify-center items-center md:items-start top-[-330px] md:top-[-213px] h-screen"> {/* Added h-screen for better mobile container */}
      
      {/* Lanyard for Mobile */}
      <motion.div
        className="block md:hidden mb-6 h-[400px] w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Lanyard position={[0, 0, 25]} gravity={[0, -20, 0]} />
      </motion.div>

      {/* Text & Content */}
      <motion.div
        className="flex flex-col gap-[13px] items-start md:items-start mt-0 md:mt-40 text-left md:text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.h1
          className="py-5 mt-0 text-2xl md:text-[50px] font-semibold transition-colors duration-1000 ease-in-out flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GradientText
            colors={gradientColors}
            animationSpeed={3}
            // showBorder={false}
            className="py-1"
          >
            Hello I&apos;m Sarah, I&apos;m a
          </GradientText>

          <TextType
            text={['Web Developer', 'Full-Stack Developer', 'Software Engineer']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="block text-[30px] md:text-[40px] highlight-l mt-[10px] text-left"
          />
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg max-w-full md:text-left mr-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          An Information Systems student at UIN Jakarta passionate about
          leveraging technology to explore innovations, enhance digital
          knowledge, and drive societal progress.
        </motion.p>

        <motion.div
          id="social-media"
          className="md:mt-2 mt-1 text-xl flex flex-wrap gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Social Icons */}
          {[
            { href: "https://instagram.com/s.erzv", light: "/ig-light.png", dark: "/ig-dark.png", alt: "Instagram" },
            { href: "https://www.linkedin.com/in/serzv", light: "/linkedin_light.png", dark: "/linkedin_dark.png", alt: "LinkedIn" },
            { href: "https://github.com/s-erzv", light: "/github-light.png", dark: "/github-dark.png", alt: "GitHub" },
          ].map(({ href, light, dark, alt }, i) => (
            <React.Fragment key={i}>
              <a href={href}>
                <img
                  src={light}
                  alt={alt}
                  className="w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110"
                />
              </a>
              <a href={href}>
                <img
                  src={dark}
                  alt={alt}
                  className="w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110"
                />
              </a>
            </React.Fragment>
          ))}

          {/* Resume Buttons */}
          <a
            href="/resume.pdf"
            className="hidden md:block md:text-sm font-medium px-2 py-1.5 md:px-4 md:py-3 md:ml-4 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
          >
            Check Out My Resume
          </a>
          <a
            href="/resume.pdf"
            className="md:hidden block text-sm font-medium px-4 py-3 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Lanyard for Desktop */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
      </motion.div>
    </section>
  );
};

export default Hero;