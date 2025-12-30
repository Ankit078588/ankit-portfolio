import React from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import ProjectCard from './components/ProjectCard';
import { SOCIAL_LINKS, SKILL_CATEGORIES, PROJECTS, EXPERIENCE, YOUTUBE_VIDEOS } from './utils/constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED]">
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1F1F1F] bg-[#111111] text-[#A3A3A3] text-[11px] font-medium uppercase tracking-widest mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14F195]"></span>
              </span>
              Available for opportunities
            </div>
            
            <h1 className="heading-font text-6xl md:text-[7.5rem] font-bold tracking-tighter text-white leading-[0.85] mb-6">
              Ankit Kumar<span className="text-[#14F195]">.</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold text-[#14F195] mb-8 heading-font tracking-tight uppercase">
              Backend–Focused Full Stack Engineer
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-[#A3A3A3] leading-relaxed mb-10 font-medium">
              Hi, I'm a Fullstack developer, building <span className="text-white font-bold">scalable production systems</span> — from video streaming pipelines and RAG-based AI applications to distributed microservices using modern cloud and DevOps practices.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-[#6B6B6B] mb-12">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               India • Open to Remote
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#projects" className="px-10 py-4 bg-[#14F195] text-[#0A0A0A] font-bold text-sm rounded-md uppercase tracking-widest hover:bg-[#00D1C1] transition-all">
                View Projects
              </a>
              <a target='_blank' href="https://drive.google.com/file/d/1il4APjNl1-4XAoIUtKpDuTWVsZDu0BMm/view?usp=sharing" className="flex gap-3 px-10 py-4 border border-[#1F1F1F] text-white font-bold text-sm rounded-md uppercase tracking-widest hover:border-[#14F195] hover:text-[#14F195] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-pdf" viewBox="0 0 16 16">
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
                  <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.244.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 5.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
                </svg>
                Resume / CV
              </a>
            </div>

            <div className="flex justify-center gap-3">
              <a href={SOCIAL_LINKS.github} target="_blank" className="p-3 bg-[#111111] border border-[#1F1F1F] rounded-md text-[#A3A3A3] hover:text-[#14F195] hover:border-[#14F195] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="p-3 bg-[#111111] border border-[#1F1F1F] rounded-md text-[#A3A3A3] hover:text-[#14F195] hover:border-[#14F195] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 bg-[#111111] border border-[#1F1F1F] rounded-md text-[#A3A3A3] hover:text-[#14F195] hover:border-[#14F195] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
              <a href="https://www.youtube.com/@ankitwritess" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#111111] border border-[#1F1F1F] rounded-md text-[#A3A3A3] hover:text-[#14F195] hover:border-[#14F195] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
              </a>
            </div>
            
            <div className="mt-16 animate-bounce cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-6 border-t border-[#1F1F1F]">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Technical Stack" subtitle="Core Competencies & Tools" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-8 bg-[#111111] border border-[#1F1F1F] hover:border-[#14F195]/50 transition-colors rounded-lg">
                  <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#14F195] rounded-full"></div>
                    {cat.title}
                  </h4>
                  <ul className="space-y-3">
                    {cat.skills.map(skill => (
                      <li key={skill} className="text-sm font-bold text-[#A3A3A3] border-l-2 border-[#1F1F1F] pl-3 hover:border-[#14F195] hover:text-[#14F195] transition-all cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-24 px-6 border-t border-[#1F1F1F]">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Work History" subtitle="Professional Experience Record" />
            <div className="grid gap-16">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <span className="text-sm font-black text-[#14F195] mono-font uppercase tracking-tighter">{exp.period}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{exp.role}</h3>
                    <div className="text-lg font-bold text-[#A3A3A3] mb-6 inline-block border-b-2 border-[#14F195]/20">{exp.company}</div>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-[#A3A3A3] text-base leading-relaxed flex gap-4">
                          <span className="text-[#14F195] flex-shrink-0 font-bold">»</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 px-6 border-t border-[#1F1F1F]">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Engineering Projects" subtitle="Scalable Production Systems" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 border-t border-[#1F1F1F]">
          <div className="max-w-6xl mx-auto">
            <div className="border border-[#1F1F1F] p-12 md:p-24 bg-[#111111] flex flex-col items-center text-center hover:border-[#14F195]/30 transition-colors rounded-2xl">
              <span className="text-[10px] font-bold text-[#14F195] uppercase tracking-[0.3em] mb-6">Availability</span>
              <h2 className="heading-font text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Open for high-impact <br /> engineering <span className="text-[#14F195]">roles.</span>
              </h2>
              <p className="text-[#A3A3A3] text-lg max-w-xl mb-12">
                Specialized in Fullstack development, distributed systems, and modern cloud practices. 
                Let's discuss how I can contribute to your engineering goals.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-16">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-2xl font-bold text-white hover:text-[#14F195] transition-colors underline decoration-[#14F195]/30 underline-offset-8">
                  {SOCIAL_LINKS.email}
                </a>
              </div>

              <div className="w-full max-w-xl">
                <form className="grid gap-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-sm focus:border-[#14F195] outline-none rounded-md font-medium text-white" />
                    <input type="email" placeholder="Email" className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-sm focus:border-[#14F195] outline-none rounded-md font-medium text-white" />
                  </div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-sm focus:border-[#14F195] outline-none rounded-md resize-none font-medium text-white"></textarea>
                  <button className="w-full bg-[#14F195] text-[#0A0A0A] py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#00D1C1] transition-all rounded-md">
                    Initiate Connection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-[#1F1F1F] bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mono-font text-lg font-bold text-white tracking-tighter">
            <span className="text-[#14F195]">_&gt;</span> ankit.dev
          </div>
          <div className="text-[10px] font-black text-[#6B6B6B] uppercase tracking-widest">
            India &nbsp; • &nbsp; Global Remote &nbsp; • &nbsp; <span className="text-[#14F195]">System Architecture</span>
          </div>
          <div className="text-[#6B6B6B] text-[10px] font-bold font-mono">
            &copy; {new Date().getFullYear()} ENGINEER PORTFOLIO &nbsp; [ v2.2.0 ]
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
