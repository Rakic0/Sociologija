/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ image, heading, description, href }) => {
  return (
    <Link to={`post/${href}`} id={href}>
      <article className="bg-thunder-200 rounded-[2.1rem] w-[23.8rem] h-[28.8rem] shadow-sm p-6 drop-shadow">
        <img
          src={image}
          alt={`Slika iz artikla ${heading}`}
          className="rounded-[2rem] w-[20.1rem] h-[14.2rem] object-cover"
        />

        <div className="mt-4">
          <h5 className="text-white text-15">{heading.slice(0, 16) + "..."}</h5>

          <p className="text-white text-11 opacity-70 mt-5">
            {description.slice(0, 110) + "..."}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
