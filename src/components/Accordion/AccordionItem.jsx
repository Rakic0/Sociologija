import { useState, useRef } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

const AccordionItem = ({ items }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);

    open
      ? (ref.current.style.rotate = "0deg")
      : (ref.current.style.rotate = "90deg");
  };

  return (
    <div className="ml-12 mt-10">
      <button
        onClick={onClick}
        className="text-white font-semibold text-22 flex items-center"
      >
        <span
          className="flex items-center justify-center transition-all"
          ref={ref}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_142_142)">
              <path
                d="M13.6374 9.51425L5.31989 17.8318L5.31988 1.19672L13.6374 9.51425Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_142_142"
                x="0.319885"
                y="0.196777"
                width="18.3175"
                height="26.635"
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
                  result="effect1_dropShadow_142_142"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_142_142"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        {items[1]}
      </button>

      <Collapse isOpened={open}>
        <div className="text-white opacity-50 flex flex-col">
          {items[0]?.map((item) => (
            <Link
              to={`post/${item.uid}`}
              key={item.uid}
              className="underline hover:no-underline ml-10 text-13"
            >
              {item.data.title}
            </Link>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
