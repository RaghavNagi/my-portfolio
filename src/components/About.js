import Self from "../utils/self.webp";
import Chess from "../utils/chess.svg";
import Book from "../utils/books.png";
import Running from "../utils/running.png"

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#212121] flex flex-col md:flex-row justify-between items-center gap-8 pt-16 md:pt-24 px-4 md:px-12"
    >
      {/* Image (now same sizing as cards) */}
      <div className="w-full md:w-[28rem] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden">
        <img src={Self} alt="self" className="w-full h-full object-cover" />
      </div>

      {/* About Card (Unchanged) */}
      <div className="w-full md:w-[28rem] aspect-auto md:aspect-[3/4] bg-[#d3d2d2] rounded-2xl shadow-lg text-[#212121] p-6 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-400 pb-3 underline">
          About
        </h3>

        {/* Scrollable Text */}
        <div className="flex-1 overflow-y-auto">
          <p className="text-lg md:text-2xl leading-relaxed flex-1">
            I’m from <span className="font-bold">Patiala</span>, Punjab,
            currently in my 4th year of Computer Science and Engineering at
            Chitkara University. I enjoy solving logical and analytical
            problems, exploring new technologies, and continuously improving my
            programming and development skills.
          </p>
        </div>

        <span className="mt-6 text-xs md:text-sm text-gray-600">
          Always learning • Always building
        </span>
      </div>

      {/* Hobbies Card (MODIFIED) */}
      <div className="w-full md:w-[28rem] aspect-auto md:aspect-[3/4] bg-[#d3d2d2] rounded-2xl shadow-lg text-[#212121] p-6 flex flex-col overflow-y-auto">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-400 pb-3 underline">
          Hobbies
        </h3>

        {/* Content Container */}
        <div className="flex-1 flex flex-col pt-6 pb-8">
          {/* Chess Item */}
          <div className="flex items-center gap-5 p-2">
            <img
              src={Chess}
              alt="chess icon"
              className="w-10 h-12 md:w-12 md:h-16 flex-shrink-0"
            />
            <div>
              <p className="text-lg md:text-xl font-semibold">Playing Chess</p>
              <a
                href="https://www.chess.com/member/raghav_nagi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:underline"
              >
                Chess Profile
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300 my-6 mx-2"></div>

          {/* Books Item */}
          <div className="flex items-center gap-5 p-2">
            <img
              src={Book}
              alt="book icon"
              className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
            />
            <div>
              <p className="text-lg md:text-xl font-semibold">Reading Books</p>
              <a
                href="https://www.goodreads.com/user/show/146549726-raghav-nagi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:underline"
              >
                Goodreads Profile
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-300 my-6 mx-2"></div>

          {/* Books Item */}
          <div className="flex items-center gap-5 p-2">
            <img
              src={Running}
              alt="book icon"
              className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
            />
            <div>
              <p className="text-lg md:text-xl font-semibold">Running</p>
            </div>
          </div>
        </div>

        {/* Footer pushes to the bottom */}
        <span className="mt-auto pt-4 text-xs md:text-sm text-gray-600">
          Exploring creativity beyond coding
        </span>
      </div>
    </div>
  );
};

export default About;
