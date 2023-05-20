import { useAllPrismicDocumentsByTag } from "@prismicio/react";
import AccordionItem from "./AccordionItem";

const AccordionHolder = () => {
  const [porodica] = useAllPrismicDocumentsByTag("Porodica");
  const [uvod] = useAllPrismicDocumentsByTag("Uvod");
  const [drustvo] = useAllPrismicDocumentsByTag("Drustvo");
  const [radPodelaNovac] = useAllPrismicDocumentsByTag("radPodelaNovac");
  const [kulturaReligija] = useAllPrismicDocumentsByTag("kulturaReligija");
  const [politikaNarodIdeologija] = useAllPrismicDocumentsByTag(
    "politikaNarodIdeologija"
  );

  const allTags = [
    [porodica, "Porodica i društveni problemi"],
    [uvod, "Uvod u sociologiju"],
    [drustvo, "Društvo"],
    [radPodelaNovac, "Rad, podela rada i novac"],
    [kulturaReligija, "Kultura, religija"],
    [politikaNarodIdeologija, "Politika, narod i ideologija"],
  ];

  return (
    <div>
      {allTags.map((tag, i) => (
        <AccordionItem items={tag} key={i} />
      ))}
    </div>
  );
};

export default AccordionHolder;
