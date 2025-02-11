"use client";

import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";

const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [darkMode, setDarkMode] = useState(false);

    // Load theme dari localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newTheme = !prev ? "dark" : "light";
            document.documentElement.classList.toggle("dark", !prev);
            localStorage.setItem("theme", newTheme);
            return !prev;
        });
    };

    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1150px]">
            {/* Navbar Container */}
            <nav className="flex items-center justify-between bg-secondary dark:bg-primary text-white px-8 py-3 rounded-full shadow-lg">
                
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" className="w-8 h-8 bg-white p-1 rounded-full" height={8} width={8} />
                    <span className="text-lg font-semibold text-white">s.erzv</span>
                </div>

                {/* Menu Section */}
                <ul className="hidden md:flex gap-2 text-white text-sm font-medium transition-all">
                    {["Home", "Skills", "Projects", "Experience", "Contact"].map((section) => (
                        <li key={section}>
                            <button
                                className={cn("hover:text-primary hover:dark:text-card transition-all px-4 py-2 rounded-full", {
                                    "bg-white text-black shadow-md": activeSection === section.toLowerCase(),
                                })}
                                onClick={() => {
                                    setActiveSection(section.toLowerCase());
                                    scrollToSection(section.toLowerCase());
                                    setIsOpen(false);
                                }}
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Dark Mode Toggle */}
                <div
                    className="bg-white rounded-full p-1 cursor-pointer w-12 h-6 flex items-center transition-all"
                    onClick={toggleDarkMode}
                >
                    <div
                        className={`w-5 h-5 rounded-full shadow-md transition-all ${
                            darkMode ? "translate-x-6 bg-card" : "bg-primary"
                        }`}
                    ></div>
                </div>

                {/* Burger Menu (Mobile) */}
                <button onClick={() => setIsOpen((prevVal) => !prevVal)}>
                    <Image className="block md:hidden" src="/menu_icon_dark.svg" alt="menu icon dark" height={10} width={10}/>
                </button>
            </nav>

            {/* Mobile Menu */}      
            {isOpen && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={sidebarVariants}
                className="absolute top-20 right-0 w-full bg-primary dark:bg-card rounded-lg shadow-lg p-4 md:hidden"
            >
                <ul className="flex flex-col items-start gap-4">
                    {["Home", "Skills", "Projects", "Experience", "Contact"].map((section) => (
                        <li key={section}>
                            <button
                                className={cn("hover:text-primary transition-all px-4 py-2 rounded", {
                                    "bg-white text-black shadow-md": activeSection === section.toLowerCase(),
                                })}
                                onClick={() => {
                                    setActiveSection(section.toLowerCase());
                                    scrollToSection(section.toLowerCase());
                                    setIsOpen(false);
                                }}
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
        </div>
    );
};

export default Navbar;
