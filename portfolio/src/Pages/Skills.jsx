import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    { name: "HTML/CSS", category: "frontend", proficiency: 90 },
    { name: "JavaScript", category: "frontend", proficiency: 80 },
    { name: "React", category: "frontend", proficiency: 80 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 70 },
    { name: "Spring Boot", category: "backend", proficiency: 80 },
    { name: "Java", category: "backend", proficiency: 80 },
    { name: "MongoDB", category: "backend", proficiency: 70 },
    { name: "Git/GitHub", category: "tools", proficiency: 85 },
    { name: "Kotlin", category: "frontend", proficiency: 75 },
    { name: "VS Code", category: "tools", proficiency: 95 },
    { name: "Android Studio", category: "tools", proficiency: 65 },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            My <span className="text-blue-900">Skills</span>
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-900/50 p-1 rounded-full">
            {["all", "frontend", "backend", "tools"].map((tab) => (
              <button
                key={tab}
                className={`py-1.5 px-4 text-sm rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {filteredSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-white">{skill.name}</span>
                <span className="text-sm text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <motion.div
                  className="bg-blue-300 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
