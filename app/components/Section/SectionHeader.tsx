import React from 'react';

type Props = {
    plaintext: string;
    highlightText: string;
}

const SectionHeader = ({plaintext, highlightText}: Props) => {
  return (
    <h2 className='w-full text-[16px] md:text-[33px] px-0 md:px-20 text-center font-semibold'>
        {plaintext}{""} <span className='md:highlight-l highlight-m px-2 whitespace-normal'>{highlightText}</span>
    </h2>
  );
};

export default SectionHeader;