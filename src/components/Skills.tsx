"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "Languages",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    hoverShadow: "hover:shadow-blue-500/15",
    badge:
      "bg-blue-500/10 border-blue-500/25 text-blue-300 hover:bg-blue-500/25 hover:border-blue-400/60 hover:text-blue-200",
    dot: "bg-blue-400",
    glow: "rgba(59,130,246,0.12)",
    items: ["JavaScript", "Python", "C++", "C", "MATLAB"],
  },
  {
    category: "Frontend",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/40",
    hoverShadow: "hover:shadow-purple-500/15",
    badge:
      "bg-purple-500/10 border-purple-500/25 text-purple-300 hover:bg-purple-500/25 hover:border-purple-400/60 hover:text-purple-200",
    dot: "bg-purple-400",
    glow: "rgba(139,92,246,0.12)",
    items: [
      "React",
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    hoverShadow: "hover:shadow-emerald-500/15",
    badge:
      "bg-emerald-500/10 border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/25 hover:border-emerald-400/60 hover:text-emerald-200",
    dot: "bg-emerald-400",
    glow: "rgba(16,185,129,0.12)",
    items: ["Node.js", "Express", "EJS", "Supabase"],
  },
  {
    category: "Database",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    hoverShadow: "hover:shadow-orange-500/15",
    badge:
      "bg-orange-500/10 border-orange-500/25 text-orange-300 hover:bg-orange-500/25 hover:border-orange-400/60 hover:text-orange-200",
    dot: "bg-orange-400",
    glow: "rgba(249,115,22,0.12)",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "AI / ML",
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/40",
    hoverShadow: "hover:shadow-pink-500/15",
    badge:
      "bg-pink-500/10 border-pink-500/25 text-pink-300 hover:bg-pink-500/25 hover:border-pink-400/60 hover:text-pink-200",
    dot: "bg-pink-400",
    glow: "rgba(236,72,153,0.12)",
    items: ["LangChain", "OpenAI", "Generative AI", "Agentic AI"],
  },
  {
    category: "Tools",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    hoverShadow: "hover:shadow-cyan-500/15",
    badge:
      "bg-cyan-500/10 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400/60 hover:text-cyan-200",
    dot: "bg-cyan-400",
    glow: "rgba(6,182,212,0.12)",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "MySQL Workbench",
      "AWS",
      "MathWorks",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[#0a0a0a] py-32 px-8 md:px-24 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`group relative rounded-2xl bg-gradient-to-br ${group.color} border ${group.border} ${group.hoverBorder} p-6 transition-all duration-300 cursor-default overflow-hidden`}
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  `0 20px 60px ${group.glow}, 0 0 0 1px ${group.glow}`;
              }}
              onHoverEnd={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 0 0 transparent";
              }}
            >
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12" />
              </div>

              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <motion.span
                  className={`w-2 h-2 rounded-full ${group.dot}`}
                  animate={isInView ? { scale: [0, 1.3, 1] } : {}}
                  transition={{ delay: groupIndex * 0.1 + 0.3, duration: 0.4 }}
                />
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.75, y: 6 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 cursor-default ${group.badge}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
