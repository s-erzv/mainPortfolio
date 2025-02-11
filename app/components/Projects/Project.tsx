import React from "react";

type ProjectProps = {
  thumbnail: string;
  title: string;
  link: { url: string; label: string };
  description: string;
  languageIcons: string[];
};

const Project = ({ thumbnail, title, link, description, languageIcons }: ProjectProps) => {
  return (
    <div className="card flex flex-col items-stretch min-w-[450px] max-w-[500px] p-5 md:p-[18px] overflow-hidden">
      <img src={thumbnail} alt={`${title} thumbnail`} className="w-full h-full object-cover rounded-lg pb-4" />
      <div className="flex flex-col gap-[0px]">
        <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        <div className="flex flex-row justify-between">
          <a href={link.url} className="my-2 bg-primary hover:bg-secondary text-foreground max-w-[100px] p-2 hover:underline rounded-lg text-sm md:text-base" target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
          <div className="flex flex-row gap-[10px]">
            {languageIcons.map((icon, iconId) => (
              <img src={icon} alt="language icon" key={iconId} width={35} className="object-contain"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
