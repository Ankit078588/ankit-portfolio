
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-dark h-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
        <a href="#home" className="mono-font text-lg font-bold tracking-tight text-white hover:text-[#14F195] transition-colors flex items-center gap-2">
          <span className="text-[#14F195]">_&gt;</span> ankit.dev
        </a>
        
        <div className="hidden md:flex gap-8 text-[13px] font-medium text-[#A3A3A3]">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>

        <a href="#contact" className="bg-[#14F195] text-[#0A0A0A] px-5 py-2 rounded-sm text-xs font-bold hover:bg-[#00D1C1] transition-all uppercase tracking-wider">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
