import clsx from "clsx";
import localFont from "next/font/local";

interface TypoProps {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "menuTextSize" | "menuTextMobile";
  balise: "div" | "span" | "p" | "a";
  weight: "regular" | "medium" | "bold";
  fontFamily?: "PP Neue" | "Inter" | "Poppins" | "Fraunces";
  href?: string;
  opacity?: "0.5" | "0.6" | "0.8" | "1";
  className?: string;
  children: React.ReactNode;
}

const PPNeueRgular = localFont({
  src: "../../pages/fonts/PPNeue/PPNeueMontreal-Regular.ttf",
});

const PPNeueMedium = localFont({
  src: "../../pages/fonts/PPNeue/PPNeueMontreal-Medium.ttf",
});

const PPNeueBold = localFont({
  src: "../../pages/fonts/PPNeue/PPNeueMontreal-Bold.ttf",
});

const Inter = localFont({
  src: "../../pages/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
});

const Poppins = localFont({
  src: "../../pages/fonts/poppins/Poppins-Regular.ttf",
});

const Fraunces = localFont({
  src: "../../pages/fonts/fraunces/Fraunces-Italic.ttf",
});

export const Typographie = ({
  size,
  balise: Balise,
  weight,
  opacity = "1",
  fontFamily,
  href,
  className,
  children,
}: TypoProps) => {
  let sizeSwitcher: string = "";
  let weightSwitcher: string = "";
  let opacitySwitcher: string = "";

  // Font family
  let fontSwitcher: string = "";

  switch (size) {
    case "h1":
      sizeSwitcher = "text-h1";
      break;
    case "h2":
      sizeSwitcher = "text-h2";
      break;
    case "h3":
      sizeSwitcher = "text-h3";
      break;
    case "h4":
      sizeSwitcher = "text-h4";
      break;
    case "h5":
      sizeSwitcher = "text-h5";
      break;
    case "menuTextSize":
      sizeSwitcher = "text-[99px]";
      break;
    case "menuTextMobile":
      sizeSwitcher = "text-[20px]";
      break;
  }

  switch (weight) {
    case "regular":
      weightSwitcher = "font-normal";
      break;
    case "medium":
      weightSwitcher = "font-[550]";
      break;
    case "bold":
      weightSwitcher = "font-bold";
      break;
  }

  switch (opacity) {
    case "1":
      opacitySwitcher = "opacity-1";
      break;
    case "0.8":
      opacitySwitcher = "opacity-[0.8]";
      break;
    case "0.6":
      opacitySwitcher = "opacity-[0.6]";
      break;
    case "0.5":
      opacitySwitcher = "opacity-[0.5]";
      break;
  }

  switch (fontFamily) {
    case "PP Neue":
      if (weight === "bold") fontSwitcher = PPNeueBold.className;
      if (weight === "medium") fontSwitcher = PPNeueMedium.className;
      if (weight === "regular") fontSwitcher = PPNeueRgular.className;
      break;
    case "Inter":
      fontSwitcher = `${Inter.className}`;
      break;
    case "Poppins":
      fontSwitcher = `${Poppins.className}`;
      break;
    case "Fraunces":
      fontSwitcher = `${Fraunces.className}`;
      break;
  }

  const isLink = href ? true : false;

  return (
    <Balise
      href={isLink ? href : undefined}
      className={clsx(
        sizeSwitcher,
        weightSwitcher,
        opacitySwitcher,
        fontSwitcher,
        className
      )}
    >
      {children}
    </Balise>
  );
};
