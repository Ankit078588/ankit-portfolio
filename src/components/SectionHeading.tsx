
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 border-b border-[#1F1F1F] pb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 bg-[#14F195] rounded-full"></div>
        <span className="text-[10px] font-bold text-[#14F195] uppercase tracking-[0.2em] block">
          {title}
        </span>
      </div>
      <h2 className="heading-font text-3xl font-bold text-white tracking-tight">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
