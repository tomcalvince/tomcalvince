"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleAboutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.querySelector("#about");
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 bg-[#FAFAFA] dark:bg-gray-900">
      {/* Background Pattern - Hidden on very small screens */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(0, 0, 0, 0.05) 35px,
            rgba(0, 0, 0, 0.05) 70px
          )`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-32 h-32 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl bg-white shadow-lg overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Calvince Otieno Tom"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Hey Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="inline-block bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 font-medium">
              Hey!
            </span>
            <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
              I&apos;m Calvince Otieno Tom
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight max-w-3xl"
          >
            I Build Full-Stack Software That Actually Works!
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col gap-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            <p>Code, bugs, and late-night coffee keep it all running.</p>
            <p>I turn complex problems into clean, working solutions.</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="pt-4 w-full sm:w-auto relative z-10"
          >
            <Button
              type="button"
              onClick={handleAboutClick}
              size="lg"
              className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 text-white dark:text-black px-8 py-6 text-base sm:text-lg font-medium shadow-lg min-h-[48px] w-full sm:w-auto cursor-pointer relative z-10"
            >
              About me &gt;
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

