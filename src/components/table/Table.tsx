import { useEffect, useState } from "react";
import clsx from "clsx";
import { Typographie } from "@/design/typographie/Typographie";

interface TableProps {
  projectID: number;
}

interface TableData {
  id: number;
  mission: string;
  challenge: string;
  processus: string;
  UIDesign: string;
  development: string;
  results: string;
  projectId: number;
}

export const Table = ({ projectID }: TableProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [tables, setTables] = useState<TableData[]>([]);

  const tableKeys = [
    "mission",
    "challenge",
    "processus",
    "UIDesign",
    "development",
    "results",
  ];

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/project_detail/${projectID}`);
        const data = await res.json();
        setTables(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchProject();
  }, [projectID]);

  const renderContent = () => {
    if (!tables) {
      return (
        <div className="text-bgColors">
          <Typographie
            size="h2"
            balise="span"
            weight="regular"
            fontFamily="Fraunces"
            className="italic text-bgColors dark:text-darkBgColors"
          >
            Chargement...
          </Typographie>
        </div>
      );
    }

    const activeKey = tableKeys[activeIndex];

    return (
      <div className="text-bgColors">
        <Typographie
          size="h2"
          balise="span"
          weight="regular"
          fontFamily="Fraunces"
          className="italic text-bgColors dark:text-darkBgColors"
        >
          {tables.map((elem, index) => (
            <div key={index} className="mb-4">
              {elem[activeKey as keyof TableData] || "Aucune donnée disponible"}
            </div>
          ))}
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
          {tableKeys.map((key, index) => (
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
                {key}
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
