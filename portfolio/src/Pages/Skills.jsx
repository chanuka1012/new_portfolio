import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skills = [
    { name: "HTML/CSS", category: "frontend", proficiency: 90 },
    { name: "JavaScript", category: "frontend", proficiency: 80 },
    { name: "React", category: "frontend", proficiency: 80 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 70 },
    { name: "Spring boot", category: "backend", proficiency: 80 },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-blue-400">Skills</span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-sm p-1 rounded-full">
            {["all", "frontend", "backend", "tools"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-6 rounded-full transition-colors duration-300 ${
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

        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${activeTab}-${skill.name}`}
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
