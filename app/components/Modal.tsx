import React from 'react';
import { X } from 'lucide-react';
import type {Skill} from '../../types/Skill';

interface ModalProps {
  skill: Skill;
  onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ skill, onClose }) => {
  return (
      <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4"
    onClick={onClose} 
  >
    <div
      className="card p-12 rounded-lg md:w-3/4 sm:max-w-screen-sm shadow-lg relative"
      onClick={(e) => e.stopPropagation()} 
    >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
          <X />
        </button>
        <div className="items-center gap-4">
          <img src={skill.icon} alt={skill.name} className="w-20 h-20 mb-4" />
          <div>
            <h2 className="text-xl font-semibold sm:text-lg">{skill.name}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 sm:text-xs">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
