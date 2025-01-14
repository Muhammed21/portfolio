import { Link } from "@/design/link/Link";
import { Typographie } from "@/design/typographie/Typographie";
import clsx from "clsx";
import Image from "next/image";

interface MemeProps {
  variant: "text" | "noText";
  media?: "dekstop" | "mobile";
  className?: string;
}

export const Meme = ({ variant, media = "dekstop", className }: MemeProps) => {
  let mediaSwitcher: number = 0;
  let squareSize: string = "";

  switch (media) {
    case "dekstop":
      mediaSwitcher = 277;
      squareSize = "w-3 h-3";
      break;
    case "mobile":
      mediaSwitcher = 200;
      squareSize = "w-2.5 h-2.5";
      break;
  }
  return (
    <div
      className={clsx(
        className,
        "flex w-max flex-col gap-2.5 justify-start items-start"
      )}
    >
      {variant === "text" && (
        <div className="flex items-center w-max gap-2.5">
          <div
            className={clsx(
              squareSize,
              "bg-bgKbd dark:bg-darkPrimaryColors-100 hover:animate-spin"
            )}
          ></div>
          <Typographie
            size="h4"
            balise="span"
            weight="medium"
            className="flex gap-2 items-center justify-center uppercase"
          >
            {media === "dekstop" ? (
              <>
                co fondateur • <Link variant="Basic" socialName="axis studio" />
              </>
            ) : (
              <>
                voir • <Link variant="Basic" socialName="axis studio" />
              </>
            )}
          </Typographie>
        </div>
      )}
      <Image
        unoptimized
        src="/gif/meme.gif"
        className="dark:sepia"
        alt="meme"
        width={mediaSwitcher}
        height={mediaSwitcher}
      />
    </div>
  );
};
