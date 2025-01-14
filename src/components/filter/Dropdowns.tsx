import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import Image from "next/image";
import Link from "next/link";
import { Typographie } from "@/design/typographie/Typographie";
import clsx from "clsx";

interface ContentItem {
  id: number;
  type: string;
  stack: string;
  cover: string;
  isCompleted: boolean;
}

interface FilteredElement {
  content: string;
}

export const Dropdowns = () => {
  const [article, setArticle] = useState<ContentItem[]>([]);
  const [typeFiltered, setTypeFiltered] = useState<FilteredElement[]>([]);
  const [stackFiltered, setStackFiltered] = useState<FilteredElement[]>([]);
  const [filteredElement, setFilteredElement] = useState<ContentItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/article/article");
        const data = await res.json();
        setArticle(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = article.filter((item) => {
      return (
        typeFiltered.some((type) => type.content === item.type) ||
        stackFiltered.some((stack) => stack.content === item.stack)
      );
    });
    setFilteredElement(filtered);
  }, [typeFiltered, stackFiltered, article]);

  return (
    <section className="flex md:flex-row flex-col gap-4 w-full">
      <div
        className={clsx(
          filteredElement.length !== 0 && "md:sticky top-20",
          "flex md:flex-row flex-col md:gap-4 gap-0 md:max-w-[485px] w-full h-max"
        )}
      >
        <Dropdown
          content={article}
          variant="Types"
          className="min-w-[200px] md:border-none border-b border-dashed md:items-start items-center dropdown-container"
          setFilteredElement={setTypeFiltered}
        ></Dropdown>
        <Dropdown
          content={article}
          variant="Stack Utilisée"
          className="min-w-[200px] md:border-none border-b border-dashed md:items-start items-center dropdown-container"
          setFilteredElement={setStackFiltered}
        ></Dropdown>
      </div>
      <div className="relative max-w-[1400px] w-full md:top-[-60px] top-0">
        {filteredElement.length === 0 && (
          <div className="grid place-content-center bg-primaryColors-20 dark:bg-darkPrimaryColors-100/10 border border-black-12 dark:border-darkPrimaryColors-20 rounded w-full h-44">
            <Typographie
              size="h2"
              balise="span"
              weight="medium"
              fontFamily="PP Neue"
            >
              Aucun projet trouvé
            </Typographie>
          </div>
        )}
        {/* max-h-[90vh] */}
        <div className="flex flex-col gap-4  overflow-y-auto">
          {filteredElement.map((item) => (
            <Link
              href={`/pages/project/${item.id}`}
              key={item.id}
              className="bg-primaryColors-20 dark:bg-darkPrimaryColors-20 transition-all duration-200 ease-in-out hover:opacity-90 w-full h-full rounded border border-black-12 dark:border-darkPrimaryColors-100 p-1 sm:p-2.5"
            >
              <Image
                className="w-full max-h-[800px] h-full border dark:border-darkPrimaryColors-100"
                src={item.cover}
                alt={item.cover}
                width={1030}
                height={606}
              />
            </Link>
          ))}
          {filteredElement.length > 0 && (
            <div className="dark:hidden block test2 absolute bottom-0 bg-white w-full h-10"></div>
          )}
        </div>
      </div>

      {/* <button onClick={() => console.log(filteredElement)}>Afficher</button> */}
    </section>
  );
};
