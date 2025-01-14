import { useState } from "react";
import clsx from "clsx";
import { Typographie } from "@/design/typographie/Typographie";

export const Table = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const table = [
    "Mission",
    "Challenge",
    "Processus",
    "UI Design",
    "Development",
    "Results",
    // Ajoute d'autres éléments si nécessaire
  ];

  const renderContent = () => {
    return (
      <div className=" text-bgColors">
        <Typographie
          size="h2"
          balise="span"
          weight="regular"
          fontFamily="Fraunces"
          className="italic text-bgColors dark:text-darkBgColors"
        >
          {table[activeIndex]}
        </Typographie>
      </div>
    );
  };

  return (
    <section className="flex flex-col md:flex-row gap-2.5 bg-bgKbd dark:bg-darkPrimaryColors-100 border border-black-12 max-w-[1760px] h-[900px] w-full p-1 md:p-2.5">
      {/* Menu */}
      <div className="flex flex-col gap-8 items-end box-border border border-bgColors dark:border-darkBgColors flex-1 min-w-[300px] py-8 pl-8">
        <Typographie
          balise="span"
          fontFamily="Fraunces"
          weight="regular"
          className="text-bgColors dark:text-darkBgColors text-[18px] text-left w-full"
        >
          Voici les détails du projet
        </Typographie>
        <div className="flex flex-col w-full">
          {table.map((elem, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                index === 0 && "border-y",
                activeIndex === index && "outline-right-clicked",
                "flex gap-3 w-full item-start py-7 border-b border-bgColors dark:border-darkBgColors outline-right group"
              )}
            >
              <Typographie
                size="h4"
                balise="span"
                fontFamily="Fraunces"
                weight={activeIndex === index ? "bold" : "medium"}
                className="text-bgColors dark:text-darkBgColors italic group-hover:font-bold transition-all duration-200 ease-in-out"
              >
                {index < 9 ? `0${index + 1}` : index + 1}
              </Typographie>
              <Typographie
                size="h4"
                balise="span"
                fontFamily="Inter"
                weight={activeIndex === index ? "bold" : "medium"}
                className="text-bgColors dark:text-darkBgColors uppercase group-hover:font-bold transition-all duration-200 ease-in-out"
              >
                {elem}
              </Typographie>
            </button>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div
        className={clsx(
          "border border-bgColors dark:border-darkBgColors flex-[3] p-8"
        )}
      >
        {renderContent()}
      </div>
    </section>
  );
};
