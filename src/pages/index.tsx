import { Navigation } from "@/components/navigation/Navigation";
import { Header } from "@/components/header/Header";
import { Menu } from "@/components/menu/Menu";
import { useState } from "react";
import { Filter } from "@/components/filter/Filter";
import { About } from "@/components/about/About";
import { Screen } from "@/components/about/Screen";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <section
      className={clsx(clicked && "overflow-hidden", "w-full h-screen py-10")}
    >
      {/* Animation de la navigation, menu et header */}
      <motion.div
        className="w-full h-screen"
        initial={{ opacity: 0, y: 100 }} // Départ avec une opacité de 0 et une position décalée en bas
        whileInView={{ opacity: 1, y: -10 }} // Devient visible avec un retour à la position normale
        transition={{ duration: 0.5 }} // Transition douce
        viewport={{ once: true }} // L'animation ne se déclenche qu'une fois lors du premier passage
      >
        <Navigation
          onClickFunction={toggle}
          text={clicked ? "fermer" : "ouvrir"}
        ></Navigation>
        <Menu className={clicked ? "active h-full" : "menu"} />
        <Header />
      </motion.div>

      {/* Animation du composant Filter */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Filter />
      </motion.div>

      {/* Animation du composant About */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* Animation du composant Screen */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Screen />
      </motion.div>
      <Footer></Footer>
    </section>
  );
}
