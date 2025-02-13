import React from "react";
import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact" className="relative flex justify-center px-4 pb-14">
            {/* Card Container */}
            <div className="bg-[#A9D1F6] shadow-lg rounded-xl dark:bg-card relative w-full max-w-[98%] px-8 py-6 md:py-8 flex flex-col gap-6 md:gap-5 items-center z-30">
                
                <div className="flex flex-col md:flex-row gap-5 md:justify-between md:w-full items-center">
                    {/* Title & Description */}
                    <div className="flex flex-col gap-2 md:max-w-[400px] text-center md:text-left">
                        <h2 className="font-bold text-[25px] md:text-[32px] text-transparent bg-clip-text bg-gradient-to-r dark:from-secondary dark:to-primary from-[#323DC7] to-[#A9D1F6]">
                            Let’s Connect!
                        </h2>
                        <p className="text-foreground text-[12px] md:text-base">
                            I’d love to hear from you! Whether you have questions, need advice, or just want to say hello, feel free to reach out. Find me on:
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-0 md:gap-4">
                        <a href="https://instagram.com/s.erzv">
                            <Image src="/ig-light.png" alt="Instagram" className="w-8 h-8 dark:hidden transition-all hover:scale-110 " height={8} width={8} />
                            <Image src="/ig-dark.png" alt="Instagram Dark" className="w-8 h-8 hidden dark:block transition-all hover:scale-110 " height={8} width={8} />
                        </a>
                        <a href="https://www.linkedin.com/in/serzv">
                            <Image src="/linkedin_light.png" alt="LinkedIn" className="w-8 h-8 dark:hidden transition-all hover:scale-110 " height={8} width={8} />
                            <Image src="/linkedin_dark.png" alt="LinkedIn Dark" className="w-8 h-8 hidden dark:block transition-all hover:scale-110 " height={8} width={8} />
                        </a>
                        <a href="https://github.com/s-erzv">
                            <Image src="/github-light.png" alt="GitHub" className="w-8 h-8 dark:hidden transition-all hover:scale-110 " height={8} width={8} />
                            <Image src="/github-dark.png" alt="GitHub Dark" className="w-8 h-8 hidden dark:block transition-all hover:scale-110 " height={8} width={8} />
                        </a>
                    <a href="mailto:sarahfajriarahmah@gmail.com" className="border border-white px-5 py-1.5 rounded-full text-white text-sm transition-all hover:bg-white hover:text-[#5A3D67] dark:hover:text-[#3D2C48]">
                        Hire Me
                    </a>
                    </div>

                    {/* Hire Me Button */}
                </div>

                {/* Divider & Footer */}
                <div className="w-[98%] border-t border-gray-400 mt-2"></div>
                <div className="text-center text-foreground text-sm">
                   Copyright © 2025 nupers
                </div>
            </div>
        </section>
    );
};

export default Contact;
