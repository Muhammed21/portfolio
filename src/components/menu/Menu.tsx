import Image from "next/image";
import { Typographie } from "@/design/typographie/Typographie";
import clsx from "clsx";
import { Meme } from "../meme/Meme";
import Link from "next/link";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <section
      className={clsx(
        className,
        "absolute mt-1.5 left-0 z-[5] w-full bg-bgColors dark:bg-darkBgColors px-0 py-10"
      )}
    >
      <Image
        src="/svg/dor.svg"
        alt="dor"
        width={520}
        height={710}
        className="hidden md:block doorImg absolute translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4"
      />
      <div className="flex flex-col w-full md:w-max relative left-0 md:left-[12.5vw] md:translate-y-[-50%] md:top-[47%]">
        <div className="flex md:border-none border-y py-5 dark:border-darkPrimaryColors-100 border-white/45 items-center justify-start gap-12 menuBtn cursor-pointer">
          <div className="hidden md:block w-4 h-4 rotate-45 bg-bgKbd dark:bg-darkPrimaryColors-100"></div>
          <Typographie
            size="menuTextSize"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase hidden md:block"
          >
            <Link href="https://github.com/Muhammed21?tab=repositories">
              mon gihtub
            </Link>
          </Typographie>
          <Typographie
            size="menuTextMobile"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase block md:hidden"
          >
            <Link href="https://github.com/Muhammed21?tab=repositories">
              mon gihtub
            </Link>
          </Typographie>
        </div>
        <div className="flex md:border-none border-b py-5 dark:border-darkPrimaryColors-100 border-white/45 items-center justify-start gap-12 menuBtn cursor-pointer">
          <div className="hidden md:block w-4 h-4 rotate-45 bg-bgKbd dark:bg-darkPrimaryColors-100"></div>
          <Typographie
            size="menuTextSize"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase hidden md:block"
          >
            <Link href="https://www.linkedin.com/in/muhammed-cavus-95869b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              mon linkedln
            </Link>
          </Typographie>
          <Typographie
            size="menuTextMobile"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase block md:hidden"
          >
            <Link href="https://www.linkedin.com/in/muhammed-cavus-95869b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              mon linkedln
            </Link>
          </Typographie>
        </div>
        <div className="flex md:border-none border-b py-5 dark:border-darkPrimaryColors-100 border-white/45 items-center justify-start gap-12 menuBtn cursor-pointer">
          <div className="hidden md:block w-4 h-4 rotate-45 bg-bgKbd dark:bg-darkPrimaryColors-100"></div>
          <Typographie
            size="menuTextSize"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase hidden md:block"
          >
            <Link href="mailto:mcavus048@gmail.com">me contacter</Link>
          </Typographie>
          <Typographie
            size="menuTextMobile"
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="uppercase block md:hidden"
          >
            <Link href="mailto:mcavus048@gmail.com">me contacter</Link>
          </Typographie>
        </div>
      </div>
      <Meme
        variant="noText"
        className="absolute bottom-0 right-0 md:block hidden"
      />
    </section>
  );
};
