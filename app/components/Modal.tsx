import React from 'react';

type ProjectProps = {
  thumbnail: string;
  title: string;
  link: { url: string; label: string };
  description: string;
  languageIcons: string[];
};

type ModalProps = {
  project: ProjectProps | null;
  onClose: () => void;
};

const Modal = ({ project, onClose }: ModalProps) => {
  if (!project) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-[999] transition-opacity duration-300 ease-out" 
      onClick={onClose}
    >
      {/* Modal content */}
      <div 
        className="bg-[var(--card)] text-[var(--foreground)] rounded-xl shadow-2xl p-8 max-w-3xl w-full relative transform transition-transform duration-300 ease-out scale-95 md:scale-100 border border-[var(--primary)]"
        onClick={e => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--foreground)] opacity-70 hover:opacity-100 text-3xl leading-none transition-opacity"
        >
          &times;
        </button>
        
        {/* Konten Modal */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img 
              src={project.thumbnail} 
              alt={`${project.title} thumbnail`} 
              className="w-full h-auto rounded-lg object-cover border border-[var(--secondary)]" 
            />
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-2 text-[var(--primary)]">
                {project.title}
              </h2>
              <p className="text-[var(--foreground)] opacity-80 leading-relaxed mb-4">{project.description}</p>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-2 items-center">
                {project.languageIcons.map((icon, iconId) => (
                  <img src={icon} alt="language icon" key={iconId} className="w-8 h-8 object-contain transition-all duration-200" />
                ))}
              </div>
              <a 
                href={project.link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[var(--primary)] text-black font-semibold py-3 px-6 rounded-lg text-center hover:bg-[var(--secondary)] transition-colors duration-300 transform hover:-translate-y-1"
              >
                {project.link.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;