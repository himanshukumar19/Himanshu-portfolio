import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      className="relative w-full max-w-5xl font-inter"
      aria-labelledby="about-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mt-4 sm:mt-6">
        <h2
          id="about-heading"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          About
        </h2>

        <div className="mt-2 space-y-2 text-xs text-gray-600 dark:text-[#A3A3A3] md:text-sm leading-relaxed">
          <p>
            Hello! I'm a developer from Delhi, India. I build things that make
            <span className="font-medium text-gray-900 dark:text-white">
              {" "}
              sense
            </span>
            , both in code and in the real world.
          </p>

          <p>
            I believe the best way to learn is by{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              building
            </span>
            . I spend my time creating{" "}
            <span className="font-bold text-teal-600 dark:text-teal-300">
              full-stack applications
            </span>{" "}
            from scratch with{" "}
            <span className="font-bold text-teal-600 dark:text-teal-300">
              React
            </span>{" "}
            and{" "}
            <span className="font-bold text-teal-600 dark:text-teal-300">
              Node.js
            </span>
            , taking them from a simple idea to a{" "}
            <span className="font-bold text-teal-600 dark:text-teal-300">
              finished product
            </span>
            .
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 tracking-wide">
        {/* Availability pill */}
        <button
          type="button"
          aria-label="Currently available for new opportunities"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl 
                     border border-gray-200 dark:border-white/10 
                     bg-gray-50 dark:bg-white/5 
                     px-3 sm:px-4 py-2 text-xs sm:text-sm 
                     text-gray-700 dark:text-gray-200 
                     hover:bg-gray-100 dark:hover:bg-white/10 
                     transition-colors"
        >
          <span
            className="relative grid place-items-center h-4 w-4 flex-shrink-0"
            aria-hidden="true"
          >
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500/40 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="whitespace-nowrap">
            Available for new opportunities
          </span>
        </button>

        {/* Download CV pill */}
        <a
          href="/DakshResume.pdf"
          download="DakshResume.pdf"
          aria-label="Download my resume as PDF"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl 
                     border border-gray-200 dark:border-white/10 
                     bg-gray-50 dark:bg-white/5 
                     px-3 sm:px-4 py-2 text-xs sm:text-sm 
                     text-gray-700 dark:text-gray-200 
                     hover:bg-gray-100 dark:hover:bg-white/10 
                     transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-gray-500 dark:text-gray-300 flex-shrink-0"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="whitespace-nowrap">Download CV</span>
        </a>
      </div>
    </motion.section>
  );
};

export default About;
