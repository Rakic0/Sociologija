import { useEffect } from "react";

import CardHolder from "../components/Cards/CardHolder";
import Heading from "../components/Heading";
import Searchbar from "../components/Searchbar";

import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <section className="h-[57.4rem] bg-image flex flex-col items-center justify-center">
        <Heading>Dobrodošli.</Heading>
        <Searchbar />
      </section>

      <section className="bg-thunder-400 py-12 relative cardHolder">
        <CardHolder />
      </section>
    </>
  );
}
