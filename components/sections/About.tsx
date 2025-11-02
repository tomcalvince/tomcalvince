"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Illustration Card - Mobile: Below, Desktop: Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <Card className="bg-[#F5F5DC] p-6 sm:p-8  shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Person working at desk"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </motion.div>

          {/* Text Content - Mobile: Above, Desktop: Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 order-1 md:order-2 space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                A Bit About Me
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-normal">
                (& My Code)
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-prose">
              <p>
                I&apos;m a full-stack developer who writes code that doesn&apos;t
                just run; it solves problems. From Django REST Framework and
                Next.js on the front to Python and JavaScript on the back,
                I&apos;ve worked across the stack to ship solid,
                user-friendly stuff.
              </p>
              <p>
                I like building things that scale, make sense, and don&apos;t
                break under pressure (most of the time). Complex challenges?
                Bring &apos;em on—I turn chaos into clean, working solutions.
              </p>
            </div>

            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black px-6 py-6 text-base font-medium shadow-md min-h-[48px] w-full sm:w-auto"
            >
              Contact me &gt;
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

