import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../assets/projects";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = projects.length;

    if (total < 3) {
      return index === current ? "center" : "hidden";
    }

    if (index === current) return "center";

    const leftIndex = current === 0 ? total - 1 : current - 1;
    const rightIndex = current === total - 1 ? 0 : current + 1;

    if (index === leftIndex) return "left";
    if (index === rightIndex) return "right";

    return "hidden";
  };

  const variants = {
    center: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      x: "0%",
      zIndex: 10,
      transition: { duration: 0.7, ease: "easeInOut" },
      pointerEvents: "auto",
    },
    left: {
      rotateY: 60,
      scale: 0.85,
      opacity: 0.4,
      x: "-60%",
      zIndex: 5,
      transition: { duration: 0.7, ease: "easeInOut" },
      pointerEvents: "none",
    },
    right: {
      rotateY: -60,
      scale: 0.85,
      opacity: 0.4,
      x: "60%",
      zIndex: 5,
      transition: { duration: 0.7, ease: "easeInOut" },
      pointerEvents: "none",
    },
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0,
      rotateY: 0,
      zIndex: 0,
      transition: { duration: 0.5 },
      pointerEvents: "none",
    },
  };

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Featured <span className="text-blue-300">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            These are some of my latest projects, designed with a focus on
             performance, simplicity, and user experience.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevProject}
            className="absolute left-0 z-20 p-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-colors duration-200"
            aria-label="Previous Project"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl h-[500px] relative overflow-visible flex justify-center perspective-[1000px]">
            {projects.map((project, index) => {
              const position = getPosition(index);
              return (
                <motion.div
                  key={project.id}
                  className="absolute w-96 bg-gray-900/90 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
                  variants={variants}
                  initial="hidden"
                  animate={position}
                  whileHover={{
                    scale: position === "center" ? 1.05 : undefined,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        if (!e.target.src.includes("fallback.jpg")) {
                          e.target.src = "/images/fallback.jpg";
                        }
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      {project.demoLink && project.demoLink !== "N/A" ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-200 hover:text-white flex items-center gap-1 transition-colors duration-200"
                          aria-label={`View ${project.title} demo`}
                        >
                          Demo <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span
                          className="text-gray-500 cursor-not-allowed flex items-center gap-1"
                          title="Demo not available"
                        >
                          Demo Unavailable <ExternalLink size={16} />
                        </span>
                      )}
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-white flex items-center gap-1 transition-colors duration-200"
                        aria-label={`View ${project.title} code`}
                      >
                        Code <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={nextProject}
            className="absolute right-0 z-20 p-3 rounded-full bg-blue-400 hover:bg-blue-600 text-white transition-colors duration-200"
            aria-label="Next Project"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <a
            href="https://github.com/chanuka1012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-400 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-all duration-300 text-lg font-medium"
          >
            Check My GitHub
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
