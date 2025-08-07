import React, { useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "rc-progress"; // install with: npm install rc-progress

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    { name: "HTML/CSS", category: "frontend", proficiency: 90 },
    { name: "JavaScript", category: "frontend", proficiency: 80 },
    { name: "React", category: "frontend", proficiency: 80 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 70 },
    { name: "Kotlin", category: "frontend", proficiency: 75 },
    { name: "Spring boot", category: "backend", proficiency: 80 },
    { name: "Java", category: "backend", proficiency: 80 },
    { name: "MongoDB", category: "backend", proficiency: 70 },
    { name: "Git/GitHub", category: "tools", proficiency: 85 },
    { name: "VS Code", category: "tools", proficiency: 95 },
    { name: "Android Studio", category: "tools", proficiency: 65 },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const tabs = ["all", "frontend", "backend", "tools"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400">Technologies I'm good at</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-4 bg-gray-800 p-2 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full transition ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 shadow-md"
            >
              <div className="flex flex-col items-center">
                <Circle
                  percent={skill.proficiency}
                  strokeWidth={8}
                  strokeColor="#3B82F6"
                  trailWidth={8}
                  trailColor="#374151"
                  className="w-24 h-24 mb-4"
                />
                <h4 className="text-xl font-semibold">{skill.name}</h4>
                <p className="text-gray-400 text-sm capitalize mt-1">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

