import { Typographie } from "@/design/typographie/Typographie";
import { Stack } from "../stack/Stack";
import { Meme } from "../meme/Meme";
import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  return (
    <section className="flex w-full items-center justify-between">
      <div className="absolute w-full sm:w-max overflow-hidden md:rotate-[-90deg] top-[470px] sm:top-2/4 left-0 sm:left-2/4 md:left-[80px] sm:translate-x-[-50%] translate-y-[-50%]">
        <Stack></Stack>
      </div>
      <div className="flex flex-col gap-10 md:gap-16 items-center justify-center absolute headerTitle left-2/4 top-36 md:top-56 max-w-[1300px] w-full">
        {/* SQUARE FORM */}
        <motion.div
          className="absolute md:block hidden top-28 right-32 w-4 h-4 bg-primaryColors-100 dark:bg-darkPrimaryColors-100 rotate-45"
          animate={{
            y: [0, -50], // Animation verticale avec un rebond fluide
          }}
          transition={{
            y: {
              type: "spring", // Utilisation de spring pour un effet de rebond naturel
              stiffness: 100, // Rigidité du ressort, plus élevé = plus rigide
              damping: 12, // Amortissement du ressort, plus élevé = moins de rebond
              repeat: Infinity, // Répétition infinie de l'animation
              repeatType: "reverse", // Répétition continue
              ease: "easeOut", // Pour un mouvement fluide
              duration: 2, // Durée de l'animation
            },
          }}
          style={{
            rotate: "45deg", // Applique la rotation de 45 degrés
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
        <Typographie
          size="h1"
          balise="span"
          weight="bold"
          fontFamily="PP Neue"
          className="text-center uppercase"
        >
          creative <br />
          web developer
        </Typographie>
        <Typographie
          size="h2"
          balise="span"
          weight="medium"
          fontFamily="PP Neue"
          className="text-center uppercase"
        >
          depuis 2022 • freelance
        </Typographie>
        {/* SQUARE FORM */}
        <motion.div
          className="absolute md:block hidden bottom-6 left-32 w-4 h-4 bg-primaryColors-100 dark:bg-darkPrimaryColors-100 rotate-45"
          animate={{
            y: [0, 50],
          }}
          transition={{
            y: {
              type: "spring",
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              duration: 5,
            },
          }}
          style={{
            rotate: "45deg",
          }}
        ></motion.div>
      </div>
      <div
        className="w-max h-max absolute"
        style={{ transform: "translate(-50%)", left: "50%", bottom: "0px" }}
      >
        <div className="hidden md:block">
          <Meme media="dekstop" variant="text" />
        </div>
        <div className="block md:hidden">
          <Meme media="mobile" variant="text" />
        </div>
      </div>
      <div className="hidden md:block absolute overflow-hidden rotate-90 top-[48%] right-[80px] translate-x-2/4">
        <Stack></Stack>
      </div>
    </section>
  );
};
