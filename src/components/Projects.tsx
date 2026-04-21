import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Smart-Hire",
    category: "AI-Powered Job Portal",
    description:
      "An AI-powered job portal where users can find and post jobs, and check their resume ATS score to improve hiring chances.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    link: "https://smarthire-three.vercel.app/",
  },
  {
    id: 2,
    title: "Project Management Dashboard",
    category: "Full Stack Application",
    description:
      "A full stack project management tool where you can create your own workspace and track tasks and progress efficiently.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    link: "https://task-flow-woad-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Cara",
    category: "E-Commerce Website",
    description:
      "A clean and modern frontend e-commerce website with a smooth shopping experience and elegant product listings.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    link: "https://developertutuorials.github.io/CARA/",
  },
  {
    id: 4,
    title: "Chatbot",
    category: "Generative AI",
    description:
      "A conversational AI chatbot built with a Q&A architecture using Generative AI, capable of answering user queries intelligently with context-aware responses.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A collection of recent projects exploring the intersection of
            creative coding and interactive design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 md:h-80 overflow-hidden bg-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
