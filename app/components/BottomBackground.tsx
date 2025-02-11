import React from 'react';

const BottomBackground = () => {
  return (
    <>
      
      <div className="absolute bottom-0 w-full h-[700px] bg-repeat-x bg-[url('/bg_bottom_light.png')] bg-[auto_auto] dark:hidden block opacity-20 z-2" />
      <div className="absolute bottom-0 w-full h-[700px] bg-repeat-x bg-[url('/bg_bottom_dark.png')] bg-[auto_auto] hidden dark:block opacity-20 z-2" />
    </>
  );
};

export default BottomBackground;
