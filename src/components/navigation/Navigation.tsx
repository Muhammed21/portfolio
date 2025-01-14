import { Button } from "@/design/cta/Button";
import { Logo } from "@/design/logo/Logo";

interface NavProps {
  text: string;
  onClickFunction: () => void;
}

export const Navigation = ({ text, onClickFunction }: NavProps) => {
  const toogleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <section className="flex w-full h-max items-center justify-between z-10">
      <Logo className="w-full">i&apos;m muhammed</Logo>
      <div className="hidden w-full items-center justify-center md:flex">
        <Button variant="themeBtn" onClick={toogleTheme} />
      </div>
      <div className="flex w-full items-center justify-end">
        <Button menuText={text} variant="menuBtn" onClick={onClickFunction} />
      </div>
    </section>
  );
};
