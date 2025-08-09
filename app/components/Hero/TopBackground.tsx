'use client';
import React from 'react';

const TopBackground = () => {
  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[128px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative">
          <div className="circle-icon top-[-30px] left-[20px] md:top-48 md:left-[520px] animate-float delay-0">
            <img src="/rocket_icon.svg" alt="Rocket Icon" width={23} height={23} />
          </div>
          <div className="circle-icon top-[100px] right-[20px] md:top-20 md:left-0 animate-wiggle delay-[200ms]">
            <img src="/bracket_icon.svg" alt="Bracket Icon" width={23} height={23} />
          </div>
          <div className="hidden md:circle-icon top-80 left-0 md:top-[500px] md:right-[450px] animate-float delay-[400ms]">
            <img src="/github_icon.svg" alt="GitHub Icon" width={23} height={23} />
          </div>
          <div className="hidden md:circle-icon top-20 right-[-60px] md:top-[400px] md:right-[300px] animate-wiggle delay-[600ms]">
            <img src="/electricity_icon.svg" alt="Electricity Icon" width={23} height={23} />
          </div>
          <div className="hidden circle-icon top-[160px] right-3 md:top-[450px] md:right-[480px] animate-float delay-[800ms]">
            <img src="/merge_icon.svg" alt="Merge Icon" width={23} height={23} />
          </div>
          <div className="hidden md:circle-icon top-60 right-[60px] md:top-[70px] md:right-[60px] animate-wiggle delay-[1000ms]">
            <img src="/stack_icon.svg" alt="Stack Icon" width={23} height={23} />
          </div>
        </div>
      </div>

      <img
        src="top_highlight.svg"
        alt="top dark mode background"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2 opacity-55 z-1"
      />
      <img
        src="top_highlight_mobile.svg"
        alt="top dark mode background"
        width={426}
        height={465}
        className="absolute top-[-229px] dark:md:hidden left-1/2 -translate-x-1/2 opacity-55 z-1"
      />
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/bg_top_light.png')] bg-[auto_auto] dark:hidden block opacity-20 z-2" />
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/bg_top_dark.png')] bg-[auto_auto] hidden dark:block opacity-10 z-2" />
    </>
  );
};

export default TopBackground;
