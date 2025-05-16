"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projects from "@/data/projects.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Project from "./Project";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi, updateButtons]);

  return (
    <SectionContainer id="projects">
      <div className="mx-auto max-w-5xl md:px-5 px-2">
        <SectionHeader plaintext="Some of my" highlightText="Best Work" />

        <div className="relative pt-12">
          <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, id) => (
              <div key={id} className="flex-shrink-0 basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3 px-2">
                <Project {...project} />
              </div>
            ))}
          </div>
          </div>
              <button
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-[-50px] z-10 bg-primary px-3 py-2 rounded-full text-white ${!canScrollPrev && "opacity-50"}`}
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                disabled={!canScrollPrev}
              >
                ◀
              </button>
              <button
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-[-50px] z-10 bg-primary px-3 py-2 rounded-full text-white ${!canScrollNext && "opacity-50"}`}
                onClick={() => emblaApi && emblaApi.scrollNext()}
                disabled={!canScrollNext}
              >
                ▶
              </button>
        </div>


      </div>
    </SectionContainer>
  );
};

export default Projects;
