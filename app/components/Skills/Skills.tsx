'use client';
import { useState } from 'react';
import React from 'react';
import skills from '@/data/skills.json';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import type { Skill } from '@/types/Skill';
import SkillCard from '@/types/Skill';
import Modal from '../Modal';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };
  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <SectionContainer id="skills" className="relative">
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <SectionHeader plaintext='This is my' highlightText='Tech Stack' />
        <div className='card cursor-pointer mt-12 w-full px-4 sm:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-center'>
          {skills.map((skill, id) => (
            <div key={id} onClick={() => handleSkillClick(skill)} className='transition-all duration-500 ease-in-out hover:scale-110'>
              <SkillCard name={skill.name} icon={skill.icon} description={skill.description} />
            </div>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <Modal skill={selectedSkill} onClose={closeModal} />
      )}

      <>
        <img src="/bg_middle_light.png" alt="" className="block dark:hidden absolute -top-[39px] z-0 w-full" />
        <img src="/bg_middle_dark.png" alt="" className="hidden dark:block absolute -top-[39px] z-0 w-full" />
      </>
    </SectionContainer>
  );
};


export default Skills;