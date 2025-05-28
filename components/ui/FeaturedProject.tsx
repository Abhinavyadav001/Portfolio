"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image"; // at the top with other imports


const categories = ["All Projects", "Web Development", "Machine Learning", "Research"];

const projects = [
  {
    title: "Cafe Food Order",
    description:
      "A dynamic web-based application that streamlines food ordering for cafés. Built using HTML, CSS, PHP, and MySQL, this system allows users to browse the menu, place orders, and manage them through an intuitive interface. It features real-time order tracking, a user-friendly admin panel for menu updates, and secure backend operations. Designed with a focus on usability and efficiency, the project demonstrates strong frontend-backend integration and practical database handling.",
    // demo: "https://code-connect-lilac.vercel.app/",
    code: "https://github.com/Abhinavyadav001/cafe-food-order",
    stack: ["HTML", "CSS", "PHP", "My SQL","Tailwind CSS"],
    category: "Web Development",
    image: "/food.png",
  },
  {
    title: "Workly-A Job Portal",
    description:
      "A responsive web application designed to connect job seekers with employers. It offers features like user authentication, job postings, resume uploads, and application tracking. Employers can manage listings through a dedicated dashboard, while candidates can search, filter, and apply for jobs with ease, making the recruitment process more efficient.",
    demo: "https://workly-dvlf.onrender.com",
    code: "https://github.com/Abhinavyadav001/Workly",
    stack: ["React", "Tailwind CSS","Express.Js","Node.Js","Mongo DB","Redux"],
    category: "Web Development",
    image: "/job_portal.png",
  },
  {
    title: "Weather Based Music Recommender",
    description:
      "A dynamic web app that recommends music based on real-time weather using OpenWeatherMap and JioSaavn APIs. Built with HTML, CSS, and JavaScript, it features Firebase login, mood-based playlists, and a responsive UI. By gathering feedback from friends on their music preferences and integrating that into the system, the project achieved a 27% increase in user retention during testing.",
    // demo: "https://media-flow.vercel.app/",
    // code: "https://github.com/chitransh100/Media-Flow",
    stack: ["HTML", "CSS", "JavaScript", "FireBase", "local storage"],
    category: "Web Development",
    image: "/weather_music.png",
  },
];



export const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-widest text-purple-500">My Work</p>
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full border text-sm font-medium transition-all",
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.title}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >

            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="aspect-video overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  width={500}
                  height={300}
                />

              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-zinc-700 text-white px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
                >
                  🔗 Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-sm font-medium flex items-center gap-2 hover:bg-zinc-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 0 0 8.208 11.418c.6.113.82-.263.82-.582v-2.18c-3.338.724-4.033-1.613-4.033-1.613-.546-1.388-1.334-1.756-1.334-1.756-1.09-.746.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.934 0-1.312.469-2.384 1.237-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.009-.322 3.31 1.23a11.5 11.5 0 0 1 3.018-.406c1.024.004 2.055.138 3.018.406 2.3-1.552 3.307-1.23 3.307-1.23.655 1.653.243 2.874.12 3.176.77.838 1.236 1.91 1.236 3.222 0 4.61-2.804 5.628-5.476 5.924.432.372.816 1.104.816 2.226v3.293c0 .322.218.699.826.58A12.001 12.001 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </Card>

          </div>
        ))}
      </div>
    </section>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-3xl p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300",
      className
    )}
  >
    <div className="relative z-50">{children}</div>
  </div>
);

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-lg", className)}>
    {children}
  </h4>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("mt-4 text-zinc-400 tracking-wide text-sm", className)}>{children}</p>
);
