
import React from 'react';
import { Project } from '../types/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="border border-[#1F1F1F] p-8 flex flex-col h-full bg-[#111111] group hover:border-[#14F195] transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-0.5 border border-[#1F1F1F] text-[#14F195] text-[9px] font-bold uppercase tracking-wider group-hover:border-[#14F195]/30">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#A3A3A3] hover:text-[#14F195] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
      </div>

      <h3 className="heading-font text-lg font-bold text-white mb-3 group-hover:text-[#14F195] transition-colors">
        {project.title}
      </h3>
      
      <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      <div className="bg-[#0A0A0A] border border-[#1F1F1F] p-4 mb-6 group-hover:border-[#14F195]/20 transition-colors">
        <div className="text-[9px] text-[#6B6B6B] font-bold uppercase tracking-widest mb-1">Architecture Overview</div>
        <p className="mono-font text-[11px] text-white/80 leading-tight">
          {project.architectureDetails}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <a target='_black' href={project.liveUrl} className="text-[11px] font-bold text-white uppercase tracking-widest border-b-2 border-transparent group-hover:text-[#14F195] group-hover:border-[#14F195] transition-all cursor-pointer" >
          VISIT →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
