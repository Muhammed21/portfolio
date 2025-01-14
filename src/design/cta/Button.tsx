import clsx from "clsx";
import { Typographie } from "../typographie/Typographie";
import { ImSpinner8 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";

interface ButtonProps {
  variant: "themeBtn" | "menuBtn";
  menuText?: string;
  disable?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const Button = ({
  variant,
  menuText,
  disable,
  isLoading,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <section className="flex items-center justify-center">
      {disable && (
        <button
          disabled
          className="flex cursor-not-allowed items-center justify-center gap-2 rounded-md w-max h-max p-2 bg-primaryColors-20 hover:bg-primaryColors-100/30 transition-all duration-200 ease-in-out border border-black-12"
        >
          <MdErrorOutline size={16} />
          <Typographie
            size="h3"
            balise="span"
            weight="medium"
            opacity="1"
            fontFamily="PP Neue"
          >
            Disable
          </Typographie>
        </button>
      )}
      {!disable && !isLoading && (
        <button
          disabled={disable || isLoading}
          onClick={onClick}
          className={clsx(className)}
        >
          {variant === "themeBtn" && (
            <div className="flex gap-2 rounded-md w-max h-max p-2 bg-primaryColors-20 dark:bg-darkPrimaryColors-100/10 hover:bg-primaryColors-100/30 dark:hover:bg-darkPrimaryColors-100/20 transition-all duration-200 ease-in-out border border-black-12">
              <div className="w-4 h-4 bg-secondaryTheme border border-bgColors dark:bg-bgColors dark:border-darkPrimaryColors-100 rounded-full"></div>
              <Typographie
                size="h3"
                balise="span"
                weight="medium"
                opacity="1"
                fontFamily="PP Neue"
              >
                Switch theme
              </Typographie>
            </div>
          )}
          {variant === "menuBtn" && (
            <div className="flex gap-4 items-center justify-center">
              <div className="w-[5px] h-[5px] rounded-full bg-white dark:bg-darkPrimaryColors-100"></div>
              <Typographie
                size="h3"
                balise="span"
                weight="medium"
                fontFamily="PP Neue"
                className="uppercase underline-transition"
              >
                {menuText}
              </Typographie>
              <div className="w-[5px] h-[5px] rounded-full bg-white dark:bg-darkPrimaryColors-100"></div>
            </div>
          )}
        </button>
      )}
      {isLoading && (
        <button
          disabled
          className="flex cursor-wait justify-center items-center gap-2 rounded-md w-max h-max p-2 bg-primaryColors-20 hover:bg-primaryColors-100/30 transition-all duration-200 ease-in-out border border-black-12"
        >
          <ImSpinner8 size={15} className="animate-spin" />
          <Typographie
            size="h3"
            balise="span"
            weight="medium"
            opacity="1"
            fontFamily="PP Neue"
          >
            Loading
          </Typographie>
        </button>
      )}
    </section>
  );
};
