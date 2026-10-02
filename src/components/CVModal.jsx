import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, experience, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-950 text-slate-100 rounded-3xl border border-amber-500/30 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Action Bar (hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1422] border-b border-slate-800 print:hidden flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Dixon Benoy • Executive Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 print:overflow-visible bg-[#0a0e17] print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6 print:border-black/20">
            <h1 className="text-3xl font-black tracking-tight text-white print:text-black">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-amber-400 print:text-slate-700 mt-1">
              Master of Computer Applications (MCA) Scholar • Full-Stack & 3D Web Developer
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 print:text-slate-600 mt-3 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-300 print:text-slate-800">
              {personal.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <h3 className="font-bold text-white print:text-black">{edu.degree}</h3>
                    <p className="text-slate-300 print:text-slate-700">{edu.institution}, {edu.location}</p>
                    {edu.gpa && <p className="text-amber-400 print:text-slate-900 font-semibold mt-0.5">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience & Internships */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-3">
              Work Experience & Internships
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-white print:text-black">{exp.role}</h3>
                      <p className="text-amber-400/90 print:text-slate-800 font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-slate-300 print:text-slate-700 text-xs">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-3">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white print:text-black">
                      {proj.title} <span className="font-mono font-normal text-[11px] text-amber-400 print:text-slate-600">| {proj.tags.slice(0, 3).join(', ')}</span>
                    </h3>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{proj.year}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-300 print:text-slate-700 text-xs">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
              <p>
                <strong className="text-white print:text-black font-semibold">Languages & Web/Mobile:</strong> JavaScript, TypeScript, Python, C, C++, PHP, SQL, React.js, React Three Fiber, Three.js, MediaPipe, HTML5/CSS3, Tailwind CSS, Express.js, Node.js, Java/Android
              </p>
              <p>
                <strong className="text-white print:text-black font-semibold">AI Concepts & Databases/Tools:</strong> Conversational AI UX, Streaming Responses, API Integration, Vector Search/RAG, MongoDB, SQLite3, MySQL, Git/GitHub, Vite, Canva, MS Office
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
              Certifications & Training
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
              {certifications.map((c, i) => (
                <div key={i} className="flex justify-between">
                  <span>• {c.title} – <span className="font-medium text-amber-400 print:text-black">{c.issuer}</span></span>
                  <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Co-Curricular */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1 mb-2">
              Achievements & Leadership
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
              {awards.map((a, i) => (
                <div key={i} className="flex justify-between">
                  <span>• <strong className="text-white print:text-black">{a.title}</strong> – {a.organization}</span>
                  <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{a.period}</span>
                </div>
              ))}
              <div className="pt-1">
                <span>• College Secretary, IT Club Secretary & Class Representative (De Paul College, 2022–2025) – Organised International Conferences, Diplomat Coding Competition, and Canva Design Workshops.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#0e1422] border-t border-slate-800 flex items-center justify-between print:hidden flex-shrink-0">
          <span className="text-[11px] text-slate-400">
            Free of institutional headers, clean & recruiter-ready.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
