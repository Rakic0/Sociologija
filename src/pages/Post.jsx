import { useParams } from "react-router-dom";
import { usePrismicDocumentByUID, PrismicRichText } from "@prismicio/react";

import "../styles/post.css";

const Post = () => {
  const { id } = useParams();
  const [document] = usePrismicDocumentByUID("post", id);

  if (!document) {
    return <div>Loading...</div>;
  }

  const date = new Date(document.data.time_and_date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleString(undefined, options);

  return (
    <>
      <header
        className="w-full h-[57.4rem] !bg-no-repeat !bg-cover !bg-center flex items-center justify-center"
        style={{
          background: `linear-gradient(180deg, #181718 0%, rgba(0, 0, 0, 0) 49.48%, #181718 100%), url("${document.data.image_url}")`,
        }}
      >
        <h1
          className="text-65 text-white font-semibold"
          style={{
            textShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          {document.data.title}
        </h1>
      </header>
      <main className="bg-thunder-400 text-white py-12">
        <p className="text-15 p-4 text-right">
          {formattedDate.replaceAll("/", ".")}
        </p>
        <div className="w-[40%] mx-auto rich">
          <PrismicRichText field={document.data.text} />
        </div>
      </main>
    </>
  );
};

export default Post;
