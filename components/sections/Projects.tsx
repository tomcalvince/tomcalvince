"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Parcel Delivery Platform",
    description:
      "A logistics management system for agent-based parcel delivery and real-time package tracking.",
    features: [
      "Parcel tracking system",
      "Agents can create deliveries on behalf of customers.",
      "Real-time package tracking with live updates and notification system.",
    ],
    techStack: [
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "JWT",
      "Tailwind CSS",
    ],
    image: "/images/wakaagent.png",
    liveUrl: "https://wakaagent.vercel.app", // Add your live URL here
    status: "Ongoing",
  },
  {
    title: "Open OICD connect and Africa's Talking SMS Integration",
    description:
      "A notification service for sending automated SMS updates to customers using Africa's Talking API.",
    features: [
      "Automated SMS notifications for customer updates",
      "Integration with Django REST Framework backend",
      "Scalable notification delivery system",
    ],
    techStack: [
      "Django REST Framework",
      "Africa's Talking API",
      "Python",
      "PostgreSQL",
    ],
    image: "/images/savannah.png",
    liveUrl: "https://github.com/calvincetom/savannah", // Add your live URL here
    status: "Completed",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 text-center"
        >
          My Current Personal Projects
        </motion.h2>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 overflow-hidden shadow-lg border-gray-800 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Image - Mobile: Top, Desktop: Left */}
                  <div className="w-full lg:w-1/2 order-1 lg:order-1">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content - Mobile: Bottom, Desktop: Right */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 order-2 lg:order-2 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-base sm:text-lg">
                      {project.description}
                    </p>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold text-lg mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm sm:text-base text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-gray-500 mt-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-gray-300 text-xs sm:text-sm py-1.5 px-3 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      {project.status && (
                        <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                          {project.status}
                        </span>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-gray-600 dark:border-gray-600 text-white dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-100"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

