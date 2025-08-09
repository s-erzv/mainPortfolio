import React from 'react';

export type Skill = {
  icon: string;
  name: string;
  description: string;
};

const SkillCard = ({ icon, name}: Skill) => {
  return (
    <div className='relative flex gap-2 p-3 border-primary border rounded-lg h-[46px] items-center'>
        <img src={icon} alt={`${name} icon`} width={28}/>
        <p className='text-xs md:text-lg font-medium'>{name}</p>
    </div>
  );
};

export default SkillCard;