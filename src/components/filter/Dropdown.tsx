import { Typographie } from "@/design/typographie/Typographie";
import { GoChevronDown } from "react-icons/go";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface ContentItem {
  id: number;
  type: string;
  stack: string;
}

interface FilteredElement {
  content: string;
}

interface DropdownProps {
  variant: "Types" | "Stack Utilisée";
  content: ContentItem[];
  setFilteredElement?: (content: FilteredElement[]) => void;
  className?: string;
}

export const Dropdown = ({
  variant,
  content,
  setFilteredElement,
  className,
}: DropdownProps) => {
  const [isClicked, setIsClicked] = useState(true);
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const onClickFunc = () => {
    setIsClicked(!isClicked);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "r" || event.key === "R") {
      setSelectedItems({});
      if (setFilteredElement) {
        setFilteredElement([]);
      }
    }
  };

  const toggleSelection = (id: number) => {
    setSelectedItems((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };
      return newState;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Filtrer les doublons pour `Types` ou `Stack Utilisée`
  const uniqueContent = (variant: "Types" | "Stack Utilisée") => {
    const seen = new Set();
    return content.filter((item) => {
      const value = variant === "Types" ? item.type : item.stack;
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  };

  // Mettre à jour le filtre uniquement quand selectedItems change
  useEffect(() => {
    if (setFilteredElement) {
      const filtered = Object.keys(selectedItems)
        .filter((key) => selectedItems[+key])
        .map((key) => ({
          content:
            variant === "Types"
              ? content.find((item) => item.id === +key)?.type || ""
              : content.find((item) => item.id === +key)?.stack || "",
        }));

      setFilteredElement(filtered);
    }
  }, [selectedItems, variant, content, setFilteredElement]);

  return (
    <div
      className={clsx(
        className,
        "flex md:flex-col flex-row gap-4 items-start justify-start"
      )}
    >
      <div
        className="flex gap-2 md:w-max w-56 items-center cursor-pointer md:border-none border-r border-dashed md:h-max h-14 pr-4"
        onClick={onClickFunc}
      >
        {isClicked ? (
          <GoChevronDown size={20} />
        ) : (
          <GoChevronDown size={20} className="rotate-180" />
        )}
        <Image
          src="/svg/folder-open.svg"
          alt="folder open"
          className="dark:hidden block"
          width={18}
          height={18}
        />
        <Image
          src="/svg/dark-folder-open.svg"
          alt="folder open"
          className="dark:block hidden"
          width={18}
          height={18}
        />
        {variant === "Types" ? (
          <Typographie
            size="h3"
            balise="span"
            weight="medium"
            fontFamily="PP Neue"
            className="text-primaryColors-100 dark:text-darkPrimaryColors-100"
          >
            Types
          </Typographie>
        ) : (
          <Typographie
            size="h3"
            balise="span"
            weight="medium"
            fontFamily="PP Neue"
            className="text-primaryColors-100 dark:text-darkPrimaryColors-100"
          >
            Stack Utilisée
          </Typographie>
        )}
      </div>

      {isClicked && (
        <div className="pl-2 flex gap-3 md:w-max w-full overflow-auto dropdown-container">
          <div className="w-0 md:w-[2px] bg-primaryColors-50 dark:bg-darkPrimaryColors-50"></div>
          <div className="flex flex-row md:flex-col gap-4 w-full">
            {uniqueContent(variant).map((element) => (
              <div
                key={element.id}
                className="flex gap-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-white/10"
                onClick={() => toggleSelection(element.id)}
              >
                {selectedItems[element.id] ? (
                  <>
                    <div className="w-[15px] rounded-[1px] p-[2px] h-[15px] border-[1.5px] border-primaryColors-100 dark:border-darkPrimaryColors-100">
                      <div className="w-full h-full bg-primaryColors-100 dark:bg-darkPrimaryColors-100"></div>
                    </div>
                    {variant === "Types" ? (
                      <>
                        <input
                          type="checkbox"
                          value={element.type}
                          className="hidden"
                          checked={selectedItems[element.id]}
                          onChange={() => toggleSelection(element.id)}
                        />
                        <Typographie
                          size="h3"
                          balise="span"
                          weight="regular"
                          className=" w-max"
                          fontFamily="PP Neue"
                        >
                          {element.type}
                        </Typographie>
                      </>
                    ) : (
                      <Typographie
                        size="h3"
                        balise="span"
                        weight="regular"
                        className=" w-max"
                        fontFamily="PP Neue"
                      >
                        {element.stack}
                      </Typographie>
                    )}
                  </>
                ) : (
                  <>
                    <div className="w-[15px] rounded-[1px] h-[15px] border-[1.5px] border-primaryColors-60 dark:border-darkPrimaryColors-60"></div>
                    {variant === "Types" ? (
                      <Typographie
                        size="h3"
                        balise="span"
                        weight="regular"
                        fontFamily="PP Neue"
                        className="text-primaryColors-60 dark:text-darkPrimaryColors-60 w-max"
                      >
                        {element.type}
                      </Typographie>
                    ) : (
                      <Typographie
                        size="h3"
                        balise="span"
                        weight="regular"
                        fontFamily="PP Neue"
                        className="text-primaryColors-60 dark:text-darkPrimaryColors-60 w-max"
                      >
                        {element.stack}
                      </Typographie>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
