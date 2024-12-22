'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaClipboard,
  FaExternalLinkAlt, 
  FaTools,
  FaChevronUp
} from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { BsCode } from 'react-icons/bs';
import Image from "next/image";
import { Montserrat } from 'next/font/google';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Configure Montserrat font with multiple weights
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800']
});

const Resume = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Rajwen",
      description: "Modern restaurant platform featuring real-time ordering, secure payment processing, and an intuitive admin dashboard for menu management.",
      image: "/Rajwen.jpg",
      techStack: ["React.js", "Node.js", "Express", "Firebase", "Stripe"],
      github: "https://github.com/username/rajwen",
      live: "https://rajwen.demo",
    },
    {
      title: "Raaaz.io",
      description: "Real-time chat application with features like instant messaging, and user presence indicators.",
      image: "/Raaaz.io.png",
      techStack: ["Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/username/raaaz",
      live: "https://raaaz.io",
    },
    {
      title: "Uber Clone",
      description: "Ride-booking app with real-time tracking, user authentication, and payment integration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4fpHeifo1l4Q7oI0kpRN-sS8W6ixi7oPuA&s",
      techStack: ["React", "Node.js", "MongoDB", "Next.js", "WebRTC"],
      github: "https://github.com/username/uber-clone",
      live: "https://uber-clone.demo",
    }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('vyasvishal.work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{ 
        smooth: true,
        direction: 'vertical',
        smartphone: { smooth: true },
        tablet: { smooth: true }
      }}
      containerRef={containerRef}
      onUpdate={(obj) => {
        // Track scroll progress
        toggleVisibility(obj.scroll.progress);
      }}
      watch={[
        // Recompute when these dependencies change
        copied
      ]}
    >
      <main data-scroll-container ref={containerRef} className={`${montserrat.className} min-h-screen bg-[#0a0a0a] text-white`}>
       
        <div className="max-w-6xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-[#111111] shadow-2xl">
            {/* Left Column - Image and Title */}
            <div className="relative">
              <Image
                src="/me2.jpg"
                alt="Profile" 
                width={500}
                height={500}
                className="w-full h-[400px] object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-black/70 backdrop-blur-sm w-full">
                <h3 className={`text-sm uppercase tracking-wider text-sky-500 font-semibold ${montserrat.className}`}>
                  HEAD OF CODELAB
                </h3>
                <h2 className={`text-2xl font-bold mt-1 text-white ${montserrat.className}`}>
                  FULL STACK DEVELOPER
                </h2>
                <p className={`mt-2 text-gray-200 font-light ${montserrat.className}`}>
                  Bachelor In Computer Science
                </p>
              </div>
            </div>

            {/* Right Column - Personal Info */}
            <div className="flex flex-col justify-center p-8 space-y-6">
              <h1 className={`text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r text-white ${montserrat.className}`}>
                VISHAL VYAS
              </h1>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-sky-400" />
                  <p className="font-light">9726270553</p>
                </div>
                <div className="flex items-center gap-3 relative">
                  <FaEnvelope className="text-sky-400" />
                  <p className="font-light">vyasvishal.work@gmail.com</p>
                  <button 
                    onClick={copyEmail} 
                    className="ml-2 text-sky-400 hover:text-sky-600 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <FaClipboard /> : <FaCopy />}
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                  <FaLinkedin size={28} />
                </a>
              </div>
              
              <div className="mt-6 bg-[#1a1a1a] p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <IoAdd className="text-sky-400 text-xl" />
                  <h3 className={`uppercase tracking-wider text-sky-500 font-semibold ${montserrat.className}`}>
                    About Me
                  </h3>
                </div>
                <p className={`text-gray-200 leading-relaxed font-light ${montserrat.className}`}>
                 
                I&#39;m Vyas Vishal, a <span className="font-bold">Full Stack Developer</span> and <span className="font-bold"> Head of CodeLab</span> Club at Ganpat University. With expertise in the <span className="font-bold">MERN stack</span>, I&#39;ve developed and deployed multiple production-ready, end-to-end applications, showcasing my skills in scalable and efficient development.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#111111] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BsCode className="text-sky-400" />
                <h3 className={`uppercase tracking-wider text-sky-500 font-semibold ${montserrat.className}`}>
                  SKILLS
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Front-End", skills: ["HTML & CSS", "JavaScript", "React.js"] },
                  { title: "Back-End", skills: ["Node.js", "Express.js","restful api"] },
                  { title: "Database", skills: ["MongoDB", "SQL", "Firebase"] },
                  { title: "Soft Skills", skills: ["Problem Solving", "Creative Thinking" , "Leadership"] }
                ].map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className={`text-gray-100 font-medium ${montserrat.className}`}>
                      {category.title}
                    </h4>
                    {category.skills.map((skill, idx) => (
                      <p key={idx} className={`text-gray-300 text-sm font-light ${montserrat.className}`}>
                        {skill}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-[#111111] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <IoAdd className="text-sky-400" />
                <h3 className={`uppercase tracking-wider text-sky-500 font-semibold ${montserrat.className}`}>
                  EDUCATION
                </h3>
              </div>
              
              <div>
                <p className={`text-gray-400 font-light ${montserrat.className}`}>2023/2026</p>
                <div className="flex items-center gap-4 mt-1">
                  <p className={`text-gray-200 font-medium ${montserrat.className}`}>
                    Ganpat University [GUNI]
                  </p>
                  <div className="flex-1 border-b border-[#222222]"></div>
                  <p className={`text-gray-200 font-medium ${montserrat.className}`}>
                    BCA
                  </p>
                </div>
                <p className={`text-sm text-gray-400 mt-2 font-light ${montserrat.className}`}>
                  Ampics
                </p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-8 bg-[#111111] rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <IoAdd className="text-sky-400 text-xl" />
              <h3 className={`text-xl font-bold tracking-wider text-sky-500 ${montserrat.className}`}>
                PROJECTS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-5">
                    <h4 className={`font-bold text-xl mb-3 text-sky-100 ${montserrat.className}`}>
                      {project.title}
                    </h4>
                    <p className={`text-gray-300 text-sm mb-4 line-clamp-3 font-light ${montserrat.className}`}>
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaTools className="text-sky-400" />
                        <span className={`text-sm font-semibold text-sky-500 ${montserrat.className}`}>
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`text-xs bg-[#2a2a2a] text-gray-200 px-2 py-1 rounded-full font-light ${montserrat.className}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333333] text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${montserrat.className}`}
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ${montserrat.className}`}
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

        {/* Certifications Section */}
        <div className="mt-8 bg-[#111111] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <IoAdd className="text-sky-400" />
            <h3 className={`uppercase tracking-wider text-sky-500 font-semibold ${montserrat.className}`}>
              CERTIFICATIONS & INTERNSHIPS
            </h3>
          </div>
          
          <div>
            <h4 className={`font-semibold text-gray-100 ${montserrat.className}`}>
              J.P. Morgan Chase
            </h4>
            <p className={`text-gray-400 font-light ${montserrat.className}`}>
              Virtual Internship • One Month
            </p>
            <p className={`text-sm text-gray-400 mt-2 font-light ${montserrat.className}`}>
              Software Engineer
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 text-center">
          <p className={`text-gray-400 font-light ${montserrat.className}`}>
            © 2024 Vyas Vishal. All Rights Reserved.
          </p>
        </footer>

      </div>
    </main>

    </LocomotiveScrollProvider>
  );
};

export default Resume;