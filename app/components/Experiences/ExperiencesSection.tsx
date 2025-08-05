import React from "react";
import experiences from "@/data/experiences.json";
import SectionHeader from "../Section/SectionHeader";
import SectionContainer from "../Section/SectionContainer";
import { Button } from "../ui/moving-border";

const ExperiencesSection: React.FC = () => {
  return (
    <SectionContainer className="py-10 z-10" id="experience">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeader plaintext="My Prior" highlightText="Work Experience" />
        <div className="space-y-6 pt-12">
          {experiences.map((exp, index) => (
            <Button
              key={index}
              borderRadius="1.75rem"
              // Perbaikan di sini: Menyesuaikan kelas untuk light mode
              className="w-full text-left px-6 py-6 transition-all duration-300
                         bg-gray-100/50 text-gray-800 border border-gray-200
                         hover:bg-gray-200/50
                         dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-secondary text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3> 
                </div>
                <p className="text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperiencesSection;