import { Typographie } from "@/design/typographie/Typographie";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StackProps {
  className?: string;
  highlightedStack?: string;
}

interface Data {
  id: number;
  stack: string;
}

export const Stack = ({ className, highlightedStack }: StackProps) => {
  // const stacks = ["nextjs", "reactjs", "typescript", "html/css/js", "prisma"];
  const [stacks, setStacks] = useState<string[]>([]);

  useEffect(() => {
    const fetchStack = async () => {
      try {
        const res = await fetch("/api/article/article");
        const data: Data[] = await res.json();
        const fetchedStacks = data.map((item) => item.stack);
        setStacks(fetchedStacks);
      } catch (error) {
        console.error("Erreur lors de la récupération des stacks :", error);
      }
    };
    fetchStack();
  }, []);
  return (
    <section
      className={clsx(
        className,
        "flex items-center justify-center gap-5 w-full sm:w-max h-max"
      )}
    >
      <div className="absolute test w-full h-4 left-0 top-1"></div>
      <motion.div
        className="flex items-center justify-center gap-5 w-full sm:w-max h-max"
        animate={{
          x: ["100%", "0%", "-100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {stacks.map((elem, index) => (
          <div key={index} className="flex items-center justify-center gap-5">
            <div className="relative">
              {index === stacks.length - 1 && (
                <div className="absolute top-0 left-0 text-shadow-right-to-left w-full h-full"></div>
              )}
              <Typographie
                size="h3"
                balise="span"
                fontFamily="Inter"
                weight="medium"
                opacity="0.5"
                className={clsx(
                  "uppercase",
                  elem.toLowerCase() === highlightedStack?.toLowerCase() &&
                    "bg-primaryColors-50 dark:bg-darkPrimaryColors-50 px-1"
                )}
              >
                {elem}
              </Typographie>
              {index === 0 && (
                <div className="absolute top-0 left-0 text-shadow-left-to-right w-full h-full"></div>
              )}
            </div>
            {index < stacks.length - 1 && (
              <div className="w-[5px] h-[5px] rounded-full bg-white dark:bg-darkPrimaryColors-100 opacity-50"></div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
