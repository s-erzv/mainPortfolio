import React from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";
import SectionHeader from "../Section/SectionHeader";
import SectionContainer from "../Section/SectionContainer";


const ExperiencesSection: React.FC = () => {
  return (
    <SectionContainer className="py-10 z-10" id="experience">
      <div className="max-w-5xl mx-auto px-5">
      <SectionHeader plaintext='My Prior' highlightText='Work Experience' />
        <div className="space-y-8 pt-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-5 border border-primary"
            >
             {exp.image ? (
                <Image
                    src={exp.image}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="rounded-full bg-white p-2"
                />
                ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <span>No Image</span>
                </div>
                )}

            <div className="flex-1">
              <h3 className="text-sm md:text-xl font-semibold">{exp.role}</h3>
              <div className="flex flex-wrap justify-between items-center">
                <p className="text-xs md:text-sm text-foreground">{exp.company}</p>
                <p className="text-xs md:text-sm text-foreground">{exp.dates}</p>
              </div>
              <ul className="text-[10px] md:text-sm text-foreground pt-3 md:text-left text-justify">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>

            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperiencesSection;
