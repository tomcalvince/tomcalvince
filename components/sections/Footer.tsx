"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Calvince Otieno Tom. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/calvince-tom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </Link>

            <Link
              href="https://github.com/calvincetom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

