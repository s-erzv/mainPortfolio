import React from "react";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

type ProjectProps = {
  thumbnail: string;
  title: string;
  link: { url: string; label: string };
  description: string;
  languageIcons: string[];
};

const Project = ({ thumbnail, title, description, languageIcons }: ProjectProps) => {
  return (
    <SpotlightCard className="custom-spotlight-card h-full flex flex-col" spotlightColorDark="rgba(0, 229, 255, 0.2)">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden pb-4">
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[0px] flex-grow">
        <h3 className="font-semibold text-sm md:text-[22px] mt-4">{title}</h3>
        <p className="line-clamp-2 text-xs md:text-base flex-grow">{description}</p>
        <div className="flex flex-wrap justify-between mt-auto">
          <div className="flex flex-row gap-[10px] items-center">
            {languageIcons.map((icon, iconId) => (
              <img src={icon} alt="language icon" key={iconId} className="w-[30px] md:w-35 object-contain mt-1"/>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default Project;
