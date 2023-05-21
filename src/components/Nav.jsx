import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import AccordionHolder from "./Accordion/AccordionHolder";

const Nav = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 p-2 bg-transparent fixed top-0 left-0 w-full z-40 text-white">
        <CgMenuLeftAlt
          className="text-white text-35 cursor-pointer"
          onClick={onClick}
        />
        <Link className="text-35 font-semibold" to="/">
          Sociologija
        </Link>
        <div className="w-[30px]"></div>
      </nav>
      <div
        className={`bg-thunder-400 fixed left-0 top-0 w-full sm:w-[49.9rem] h-screen z-50 pt-1 px-4 transition-all duration-500 ${
          isOpened ? "translate-x-0" : "-translate-x-[100rem]"
        }`}
      >
        \{/* Početak SVG-a */}
        <div onClick={onClick} className="cursor-pointer">
          <svg
            className="w-10 h-10"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_142_158)">
              <line
                x1="8"
                y1="23.5059"
                x2="28.5061"
                y2="2.99983"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="7.82843"
                y1="2.99988"
                x2="28.3345"
                y2="23.506"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_142_158"
                x="0.82843"
                y="-0.00012207"
                width="34.6777"
                height="34.5061"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_142_158"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_142_158"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        {/* Kraj SVG-a */}
        <AccordionHolder />
      </div>
    </>
  );
};

export default Nav;
