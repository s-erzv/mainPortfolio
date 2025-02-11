import React from 'react';


const Hero = () => {
  return (
    <section className="relative flex flex-row z-20 mx-auto md:gap-[50px] md:mx-[-40px] top-[-70px] justify-center">
        <div className="flex flex-col gap-[13px] items-center md:items-start mt-10">
            <h1 className="py-3 mt-0 text-2xl block mx-28 items-center text-center md:mx-0 md:text-[50px] font-bold bg-clip-text bg-gradient-to-r from-[#2f39c6] to-[#aad3f8] dark:from-secondary dark:to-primary text-transparent transition-colors duration-1000 ease-in-out">Hello I&apos;m Sarah, I&apos;m a 
              <span className='block text-[40px] highlight-p mt-[10px] text-center'>Web Developer</span>
              </h1>
            <p className='text-justify text-lg mx-28 md:mx-0'>An Information Systems student at UIN Jakarta passionate about leveraging technology to explore innovations, enhance digital knowledge, and drive societal progress.</p>
            <div id="social-media" className="mt-2 text-xl flex items-center justify-center">
                <a href="https://instagram.com/s.erzv"><img src="/ig-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-light.png" alt="" className='w-12 h-auto dark:hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://instagram.com/s.erzv"><img src="/ig-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://www.linkedin.com/in/serzv"><img src="/linkedin_dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="https://github.com/s-erzv"><img src="/github-dark.png" alt="" className='w-12 h-auto dark:block hidden transition-all duration-500 ease-in-out hover:scale-110'/></a>
                <a href="#" className="text-sm font-medium px-4 py-3 ml-4 bg-white dark:bg-background border-2 border-primary rounded-full transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg">Check Out My Resume</a>
            </div>
        </div>
        <div>
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