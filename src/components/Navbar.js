import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// Import your resume file (put resume.pdf inside src/utils or public folder)
// If in public folder, use: href="/resume.pdf"
// If in src/utils, you need to import: import resumeFile from "../utils/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#eeeeee] fixed top-4 left-2 right-2 py-4 px-6 md:px-8 rounded-lg shadow-lg z-50 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="font-serif text-2xl md:text-4xl text-[#212121]">
        <a href="#home">Raghav Nagi</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg font-serif text-[#212121] items-center">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#contact" className="hover:underline">Contact</a>

        {/* Resume Button */}
        <a
          href="/MyResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-[#212121] text-[#eeeeee] px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-[#212121] hover:bg-gray-200"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-2 right-2 bg-[#eeeeee] shadow-md rounded-lg flex flex-col gap-4 p-6 text-[#212121] md:hidden">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          {/* Resume Button in Mobile Menu */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#212121] text-[#eeeeee] px-4 py-2 rounded-md hover:bg-gray-700 transition text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;