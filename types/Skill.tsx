import React from 'react';

export type Skill = {
  icon: string;
  name: string;
  description: string;
};

const Skill = ({ icon, name, description }: Skill) => {
  return (
    <div className='relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] items-center'>
        <img src={icon} alt={'${name} icon'} width={28}/>
        <p className='text-xs md:text-lg font-mediu,'>{name}</p>
        <p className='text-xs md:text-lg font-light'>{description}</p>
    </div>

  );
};

export default Skill;