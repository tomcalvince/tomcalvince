"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript"],
  Frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "React Hooks",
    "SSR",
    "State Management",
  ],
  Backend: [
    "Django",
    "Django REST Framework",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Authentication",
  ],
  DevOps: ["Docker", "Docker Compose", "Nginx", "Linux", "CI/CD"],
  Databases: ["PostgreSQL", "MySQL", "SQLite"],
  Tools: ["Git", "GitHub", "Postman", "Testing"],
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 text-center"
        >
          My Skills & Stack
        </motion.h2>

        {/* Mobile: Stacked, Desktop: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-4 sm:p-6 bg-white dark:bg-gray-900 shadow-md border-gray-200 dark:border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm py-2 px-3 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

