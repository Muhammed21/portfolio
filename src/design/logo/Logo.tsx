import clsx from "clsx";
import { Typographie } from "../typographie/Typographie";
import Link from "next/link";

interface LogoProps {
  children: React.ReactNode;
  className?: string;
}

export const Logo = ({ children, className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={clsx(className, `flex gap-2.5 items-center justify-start`)}
    >
      <div className="md:w-4 w-3 md:h-4 h-3 bg-bgKbd dark:bg-darkPrimaryColors-100 hover:animate-spin"></div>
      <Typographie
        size="h2"
        balise="span"
        weight="medium"
        className="uppercase"
      >
        {children}
      </Typographie>
    </Link>
  );
};
