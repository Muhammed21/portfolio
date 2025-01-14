import { Typographie } from "../typographie/Typographie";
import { MdOutlineArrowOutward } from "react-icons/md";

interface LinkProps {
  variant: "Basic" | "Footer";
  icon?: boolean;
  socialName?: string;
  fullName?: string;
  href?: string;
}

export const Link = ({
  variant,
  socialName,
  fullName,
  icon,
  href,
}: LinkProps) => {
  return (
    <section className="flex items-center justify-center">
      {variant === "Basic" && (
        <div className="cursor-pointer">
          <Typographie
            size="h4"
            balise="a"
            href="https://frontend-axis.vercel.app"
            weight="medium"
            className="back-underline-transition"
          >
            {socialName || ""}
          </Typographie>
        </div>
      )}
      {variant === "Footer" && (
        <div className="flex gap-8">
          <Typographie
            size="h5"
            balise="span"
            weight="medium"
            fontFamily="Poppins"
            className="uppercase"
          >
            ({socialName || ""})
          </Typographie>
          <div className="flex gap-1 items-center justify-center">
            <Typographie
              size="h5"
              balise="a"
              href={href}
              weight="medium"
              fontFamily="Poppins"
              className="uppercase underline-transition cursor-pointer"
            >
              {fullName || ""}
            </Typographie>
            {icon && <MdOutlineArrowOutward size={12} />}
          </div>
        </div>
      )}
    </section>
  );
};
