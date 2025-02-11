import React from 'react';

type Props = {
    plaintext: string;
    highlightText: string;
}

const SectionHeader = ({plaintext, highlightText}: Props) => {
  return (
    <h2 className='text-[22px] md:text-[33px] px-20 text-center font-semibold'>
        {plaintext}{""} <span className='highlight-p px-2 whitespace-normal'>{highlightText}</span>
    </h2>
  );
};

export default SectionHeader;