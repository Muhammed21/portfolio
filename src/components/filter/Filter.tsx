import { Typographie } from "@/design/typographie/Typographie";
import { Dropdowns } from "./Dropdowns";

export const Filter = () => {
  return (
    <div className="relative top-14 flex flex-col md:gap-5 gap-0 w-full h-max items-start justify-start">
      <div className="flex md:max-w-[485px] w-full justify-between md:sticky top-5">
        <div className="flex gap-2.5 items-center justify-start">
          <div className="hidden md:block w-2.5 h-2.5 bg-primaryColors-100 dark:bg-darkPrimaryColors-100"></div>
          <Typographie
            size="h3"
            balise="span"
            fontFamily="PP Neue"
            weight="medium"
            className="uppercase md:pb-0 pb-5"
          >
            Tous mes projets
          </Typographie>
        </div>
        <div className="flex gap-2.5 items-center justify-end md:pb-0 pb-5">
          <Typographie
            size="h4"
            balise="span"
            weight="medium"
            className="text-primaryColors-80 dark:text-darkPrimaryColors-80"
          >
            Supprimer le filtre
          </Typographie>
          <Typographie
            size="h5"
            balise="span"
            weight="medium"
            className="px-1 py-0.5 bg-primaryColors-20 border border-black-12 dark:text-darkPrimaryColors-100 rounded-md"
          >
            R
          </Typographie>
        </div>
      </div>
      <hr className="bg-none border-[1px] border-primaryColors-100 dark:border-darkPrimaryColors-100 md:max-w-[485px] w-full md:sticky top-14" />
      <div className="flex gap-10 w-full justify-between items-start">
        <Dropdowns></Dropdowns>
      </div>
    </div>
  );
};
