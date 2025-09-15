import {
  ReactComponent as Css,
} from "../utils/techs/css.svg";
import { ReactComponent as Express } from "../utils/techs/express.svg";
import { ReactComponent as Git } from "../utils/techs/git.svg";
import { ReactComponent as Github } from "../utils/techs/github.svg";
import { ReactComponent as Html } from "../utils/techs/html.svg";
import { ReactComponent as Java } from "../utils/techs/java.svg";
import { ReactComponent as Javascript } from "../utils/techs/javascript.svg";
import { ReactComponent as MongoDB } from "../utils/techs/mongodb.svg";
import { ReactComponent as MySql } from "../utils/techs/mysql.svg";
import { ReactComponent as Node } from "../utils/techs/node.svg";
import { ReactComponent as PostgresQl } from "../utils/techs/postgresql.svg";
import { ReactComponent as Postman } from "../utils/techs/postman.svg";
import { ReactComponent as ReactJs } from "../utils/techs/react.svg";
import { ReactComponent as Tailwind } from "../utils/techs/tailwind.svg";
import { ReactComponent as Vscode } from "../utils/techs/vscode.svg";

export default function TechStack({ speed = 20 }) {
  const icons = [
    <Css key="css" className="w-12 h-12" />,
    <Express key="express" className="w-12 h-12" />,
    <Git key="git" className="w-12 h-12" />,
    <Github key="github" className="w-12 h-12" />,
    <Html key="html" className="w-12 h-12" />,
    <Java key="java" className="w-12 h-12" />,
    <Javascript key="js" className="w-12 h-12" />,
    <MongoDB key="mongodb" className="w-12 h-12" />,
    <MySql key="mysql" className="w-12 h-12" />,
    <Node key="node" className="w-12 h-12" />,
    <PostgresQl key="postgresql" className="w-12 h-12" />,
    <Postman key="postman" className="w-12 h-12" />,
    <ReactJs key="react" className="w-12 h-12" />,
    <Tailwind key="tailwind" className="w-12 h-12" />,
    <Vscode key="vscode" className="w-12 h-12" />,
  ];

  const duplicated = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden py-6 bg-[#212121]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Text */}
        <div className="font-serif flex-shrink-0 font-semibold text-[#eeeeee] text-3xl md:text-4xl z-30">
          My Tech Stack :
        </div>

        {/* Marquee Icons */}
        <div className="overflow-hidden flex-1 w-full">
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display:flex;
              gap:2rem;
              align-items:center;
              animation: marqueeScroll ${speed}s linear infinite;
              will-change: transform;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-track">
            {duplicated.map((icon, i) => (
              <div key={i} className="flex-shrink-0 text-gray-700">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}