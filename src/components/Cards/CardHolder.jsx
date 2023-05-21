import Card from "./Card";
import SmallHeading from "../SmallHeading";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

const CardHolder = () => {
  const [documents] = useAllPrismicDocumentsByType("post", {
    limit: 5,
  });

  if (!documents) return;

  return (
    <div className="holder-linear text-white h-[40rem] md:w-[80rem] w-[80%] mx-auto rounded-[2.1rem] p-8">
      <div className="relative">
        <SmallHeading className="isolate absolute top-0 left-36 z-10">
          Popularno
        </SmallHeading>

        {/* SVG */}
        <svg
          className="w-[12.2rem] h-[14.1rem] absolute -top-24 left-0 isolate"
          viewBox="0 0 132 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_142_64)">
            <path
              d="M97.017 27.4966C153.36 85.7893 118.493 124.966 88.174 142C107.376 103.895 81.8577 71.4474 66.6986 59.9866C69.7305 75.6322 59.7506 95.6309 55.6449 98.4698C59.6874 89.6376 54.8027 81.1208 51.855 77.9664C50.9076 83.9597 50.9076 86.4832 39.8538 104.779C31.0108 119.415 35.5373 135.691 38.9059 142C-24.5737 102.886 19.9571 71.6577 23.1149 42.3221C27.1574 48.8832 28.3786 60.1969 28.4838 65.0336C55.5181 35.2564 57.4341 9.93736 55.0128 1C79.2679 11.851 91.4375 40.009 94.4905 52.7315C101.818 46.4228 99.2278 33.2796 97.017 27.4966Z"
              fill="url(#paint0_linear_142_64)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_142_64"
              x="0"
              y="0"
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
                result="effect1_dropShadow_142_64"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_142_64"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_142_64"
              x1="66"
              y1="1"
              x2="66"
              y2="142"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#383638" />
              <stop offset="1" stopColor="#201F20" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex relative top-20 gap-[1.73rem] overflow-x-scroll">
        {documents.map((document) => (
          <Card
            description={document.data.description}
            heading={document?.data.title}
            href={document?.uid}
            image={document?.data.image_url}
            key={document?.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
