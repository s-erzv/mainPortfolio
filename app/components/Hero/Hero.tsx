import React from 'react';

const Hero = () => {
  return (
    <section className="relative pl-6 flex flex-row z-20 mx-auto md:gap-[50px] md:mx-[-40px] top-[-90px] justify-center">
      <div className="flex flex-col gap-[13px] items-start md:items-start mt-0 md:mt-10 text-left md:text-center">
        <h1 className="py-3 mt-0 text-2xl md:text-[50px] font-bold bg-clip-text bg-gradient-to-r from-[#2f39c6] to-[#aad3f8] dark:from-secondary dark:to-primary text-transparent transition-colors duration-1000 ease-in-out">
          Hello I&apos;m Sarah, I&apos;m a 
          <span className='block text-[30px] md:text-[40px] highlight-l mt-[10px]'>Web Developer</span>
        </h1>
        <p className='text-sm md:text-lg max-w-full md:text-left mr-3'>
          An Information Systems student at UIN Jakarta passionate about leveraging technology to explore innovations, enhance digital knowledge, and drive societal progress.
        </p>
        <div id="social-media" className="md:mt-2 mt-1 text-xl flex items-center justify-center">
                <a href="https://instagram.com/s.erzv"><img src="/ig-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://instagram.com/s.erzv"><img src="/ig-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="/resume.pdf" className="hidden md:block md:text-sm font-medium px-2 py-1.5 md:px-4 md:py-3 md:ml-4 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg">Check Out My Resume</a>
                <a href="/resume.pdf" className="md:hidden block text-sm font-medium px-4 py-3 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg">Resume</a>
        </div>
      </div>
      <div className="sm:hidden relative md:w-auto md:flex justify-start mt-6 md:mt-0">
      <img src="/yellow.png" alt="" height={430} width={372} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 dark:hidden'/>
          <img src="/blue.png" alt="" height={430} width={372} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 dark:hidden'/>
          <img src="/mee.png" alt="" height={417} width={357} className='hidden md:block min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] dark:hidden'/>
          <img src="/purple.png" alt="" height={430} width={372} className='hidden dark:md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
          <img src="/magenta.png" alt="" height={430} width={372} className='hidden dark:md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
          <img src="/mepurple.png" alt="" height={417} width={357} className='hidden dark:md:block min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px]'/>
      </div>
    </section>
  );
};

export default Hero;
