import { useState } from "react";
import Setup from "../utils/setup.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import TechStack from "./TechStack";
import ScrambleText from "./ScrambleText";

function MainBackground() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "raghavnagi81@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full bg-[#212121] text-[#eeeeee]">
        <div
          id="home"
          className="flex flex-col md:flex-row justify-between items-center md:items-start relative pt-24 sm:pt-28 md:pt-36 gap-8 min-h-screen px-4 sm:px-6 md:px-12"
        >
          {/* Left Section */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 md:w-6/12 mt-8 sm:mt-10 md:mt-16 text-center md:text-left">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold z-40 leading-snug">
              <ScrambleText text="Software Engineer Trainee" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              A passionate Computer Science student and aspiring software
              engineer, building innovative solutions with Java, JavaScript, and
              modern web technologies. Constantly learning and creating projects
              that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/RaghavNagi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white rounded hover:underline transition duration-300 text-sm sm:text-base"
              >
                Github
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 w-28 h-10 bg-[#616161] rounded relative text-sm sm:text-base"
              >
                <AnimatePresence initial={false} mode="wait">
                  {!copied ? (
                    <motion.span
                      key="email"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                      Email
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 text-[#eeeeee]"
                    >
                      <CheckIcon className="w-5 h-5" />
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-5/12 overflow-hidden rounded-lg">
            <img
              src={Setup}
              alt="setup"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* TechStack Section */}
        <div className="w-full bg-[#212121] mt-16 sm:-mt-20 md:-mt-28">
          <div className="px-4 sm:px-6 md:px-12 pb-6">
            <TechStack />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBackground;
