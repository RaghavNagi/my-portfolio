import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react"; // Added Twitter

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#212121] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#eeeeee] mb-4 sm:mb-6">
        Contact Me
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12">
        I’d love to collaborate or just have a chat. Reach out through any of
        the platforms below or drop me a message.
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
  <a
    href="mailto:raghavnagi81@gmail.com"
    rel="noopener noreferrer"
    target="_blank"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Mail className="w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12" />
  </a>
  <a
    href="https://github.com/RaghavNagi"
    rel="noopener noreferrer"
    target="_blank"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Github className="w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12" />
  </a>
  <a
    href="https://www.linkedin.com/in/raghav-nagi/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Linkedin className="w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12" />
  </a>
  <a
    href="https://x.com/RaghavNagi33623"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Twitter className="w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12" />
  </a>
</div>
    </div>
  );
};

export default Contact;