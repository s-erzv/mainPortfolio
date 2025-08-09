'use client';
import { motion } from 'framer-motion';
import React from 'react';
import skills from '@/data/skills.json';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import SkillCard from '@/types/Skill';

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring" as "spring", 
      bounce: 0.2,
      duration: 0.8
    },
  },
};

const Skills = () => {
  return (
    <SectionContainer id="skills" className="relative mb-12">
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <SectionHeader plaintext='This is my' highlightText='Tech Stack' />

        <motion.div
          className="card mt-12 w-full px-4 sm:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, id) => (
            <motion.div
              key={id}
              className="cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 15px 25px rgba(0,0,0,0.15)',
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 10 
              }}
            >
              <SkillCard name={skill.name} icon={skill.icon} description={skill.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <>
        <img src="/bg_middle_light.png" alt="" className="block dark:hidden absolute -top-[39px] z-0 w-full" />
        <img src="/bg_middle_dark.png" alt="" className="hidden dark:block absolute -top-[39px] z-0 w-full opacity-50" />
      </>
    </SectionContainer>
  );
};

export default Skills;
