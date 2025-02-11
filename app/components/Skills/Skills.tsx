import React from 'react';
import skills from '@/data/skills.json';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import Skill from './Skill';

const Skills = () => {
  return (
    <SectionContainer id="skills" className="relative">
       <div className="relative z-10 max-w-5xl mx-auto px-5">
            <SectionHeader plaintext='This is my' highlightText='Tech Stack'/>
            <div className='card mt-12 w-full px-4 sm:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-center'>
                {skills.map((skill, id) => (
                    <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
            </div>

        </div>
        <>
        <img src="/bg_middle_light.png" alt="" className="block dark:hidden absolute -top-[39px] z-0 w-full"/>
        <img src="/bg_middle_dark.png" alt="" className="hidden dark:block absolute -top-[39px] z-0 w-full"/>

        </>
    </SectionContainer>
  );
};

export default Skills;