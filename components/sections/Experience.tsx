"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Full-Stack Software Developer",
    company: "Iguru Limited",
    location: "Nairobi, Kenya",
    period: "February 2025 – Present",
    responsibilities: [
      "Architected full-stack analytics dashboards using Next.js and Django REST Framework, enabling real-time business reporting for multiple client organizations.",
      "Designed and deployed multi-tenant backend APIs with advanced filtering, aggregation, and pagination  able to handle 10,000+ records daily.",
      "Implemented role-based access control (RBAC) across user types, ensuring secure and compliant data access per client organization.",
      "Managed full Docker-based infrastructure, deploying multi-container setups (frontend, backend, and database) with zero-downtime rollouts.",
      "Configured production servers on Linux using Nginx reverse proxy and Let's Encrypt SSL, achieving 99.9% uptime and secure HTTP/2 communication.",
      "Developed custom data aggregation endpoints for reporting dashboards, optimizing query performance and API response times.",
      "Introduced TypeScript patterns across the frontend codebase, improving type safety and reducing production bugs by over 40%.",
      "Optimized frontend performance with lazy loading and code splitting, reducing bundle size and improving page load speed by 35%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "KONZA TECHNOPOLIS",
    location: "Makueni, Kenya",
    period: "September 2023 – November 2024",
    responsibilities: [
      "Delivered a complete server provisioning and quotation management system using Django, automating request handling and reducing turnaround time by 60%.",
      "Designed a user role assignment workflow that improved departmental collaboration and accountability.",
      "Created custom Django admin interfaces with search and filtering for system administrators.",
      "Built robust form validation and error-handling mechanisms, ensuring clean data and better UX.",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 text-center"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 shadow-md border-gray-200 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-gray-400 mt-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

