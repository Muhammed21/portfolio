import { Typographie } from "@/design/typographie/Typographie";
import { BsArrowDownShort } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section className="relative flex flex-col w-full h-[600px] md:h-screen items-center justify-center gap-10 md:gap-16">
      <motion.div
        className="absolute md:block hidden top-96 right-80 w-4 h-4 bg-primaryColors-100 dark:bg-darkPrimaryColors-100 rotate-45"
        animate={{
          y: [0, -30],
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
            duration: 2,
          },
        }}
        style={{
          rotate: "45deg",
        }}
      ></motion.div>
      <Image
        src="/healt.svg"
        alt="icon"
        width={23}
        height={21}
        className="block dark:hidden health"
      />
      <Image
        src="/svg/dark-healt.svg"
        alt="icon"
        width={23}
        height={21}
        className="dark:block hidden health"
      />
      <div className="flex gap-2.5 items-start justify-center w-max">
        <div className="sm:flex hidden flex-col items-end justify-start gap-1 pt-4">
          <Typographie
            size="h3"
            balise="span"
            weight="regular"
            className="uppercase"
          >
            Some
          </Typographie>
          <Typographie
            size="h3"
            balise="span"
            weight="regular"
            className="uppercase"
          >
            selected
          </Typographie>
        </div>
        <Typographie
          size="h1"
          balise="span"
          weight="bold"
          className="uppercase"
          fontFamily="PP Neue"
        >
          About me
        </Typographie>
        <div className="sm:flex hidden flex-col items-start justify-center gap-1 pt-4">
          <Typographie
            size="h3"
            balise="span"
            weight="regular"
            className="uppercase"
          >
            Location
          </Typographie>
          <Typographie
            size="h3"
            balise="span"
            weight="regular"
            className="uppercase"
          >
            work
          </Typographie>
        </div>
      </div>
      {/* scroll down part */}
      <div className="flex items-center justify-center gap-2.5">
        <Image
          src="/svg/down-double-arrow.svg"
          className="block dark:hidden"
          alt="down arrow"
          width={10}
          height={10}
        />
        <Image
          src="/svg/dark-down-double-arrow.svg"
          className="dark:block hidden"
          alt="down arrow"
          width={13}
          height={13}
        />
        <Typographie
          size="h3"
          balise="span"
          weight="medium"
          className="uppercase tracking-[2px]"
          fontFamily="PP Neue"
        >
          scroll down
        </Typographie>
        <Image
          src="/svg/down-double-arrow.svg"
          className="block dark:hidden"
          alt="down arrow"
          width={10}
          height={10}
        />
        <Image
          src="/svg/dark-down-double-arrow.svg"
          className="dark:block hidden"
          alt="down arrow"
          width={13}
          height={13}
        />
      </div>
      <div className="relative md:absolute md:bottom-12">
        <Typographie
          balise="span"
          weight="regular"
          fontFamily="PP Neue"
          className="flex items-end justify-center gap-2 text-[30px]"
        >
          (<BsArrowDownShort size={24} />)
        </Typographie>
      </div>
      <motion.div
        className="absolute md:block hidden bottom-96 left-80 w-4 h-4 bg-primaryColors-100 dark:bg-darkPrimaryColors-100 rotate-45"
        animate={{
          y: [0, 30],
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
            duration: 2,
          },
        }}
        style={{
          rotate: "45deg",
        }}
      ></motion.div>
    </section>
  );
};
