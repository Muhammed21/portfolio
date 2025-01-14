import { Typographie } from "@/design/typographie/Typographie";
import Image from "next/image";

export const Screen = () => {
  return (
    <section className="grid w-full md:h-screen h-max md:pb-0 pb-5 place-content-center">
      <div className="flex flex-col w-full h-max bg-primaryColors-100 dark:bg-darkPrimaryColors-100 border border-black-100 rounded-[2px] sm:rounded-[5px] p-[2px] sm:p-[5px] gap-1">
        <Image
          src="/svg/content-files-archive-books.svg"
          className="sm:block hidden m-1"
          alt="archive"
          width={25}
          height={25}
        />
        <div className="max-w-[1550px] w-full h-max bg-[#A5AFCC] dark:bg-[#f5efd8] rounded-sm border border-black-100 p-7">
          <div className="flex flex-wrap">
            <Typographie
              balise="span"
              weight="regular"
              fontFamily="Poppins"
              className="clamp-screen gap-4 inline-flex flex-wrap items-center"
            >
              Passionné par le web et les technologies, je me spécialise dans la
              création de sites internet modernes et performants. Avec une
              expertise en développement web.Mon parcours m’a permis de
              maîtriser des langages tels que le typescript et le
              javascript.Chaque projet est pour moi l’occasion d’innover, et de
              renforcer mes connaissances dans ce domaine.Je suis convaincu que
              le succès réside dans les détails.
            </Typographie>
          </div>
        </div>
      </div>
    </section>
  );
};
