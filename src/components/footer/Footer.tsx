import { Link } from "@/design/link/Link";
import { Typographie } from "@/design/typographie/Typographie";

export const Footer = () => {
  return (
    <section className="w-full h-max flex flex-col lg:flex-row lg:pb-8 py-8 border-t border-bgKbd dark:border-darkPrimaryColors-100 justify-between lg:items-center items-start">
      <Typographie
        balise="span"
        weight="regular"
        className="text-[20px] rotate-[-90deg] lg:block hidden uppercase"
      >
        (M)
      </Typographie>
      <div className="flex flex-col lg:flex-row lg:max-w-[800px] justify-between items-start lg:gap-0 gap-5 lg:items-center w-full h-max">
        <Link
          variant="Footer"
          socialName="@"
          href="mailto:mcavus048@gmail.com"
          fullName="mcavus048@gmail.com"
        ></Link>
        <div className="flex md:flex-row flex-col md:items-center items-start md:w-max w-full md:gap-20 gap-5">
          <Link
            variant="Footer"
            socialName="linkedln"
            href="https://www.linkedin.com/in/muhammed-cavus-95869b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            fullName="Muhammed Cavus"
          ></Link>
          <Link variant="Footer" socialName="cv" fullName="voir le cv"></Link>
        </div>
      </div>
      <Typographie
        balise="span"
        weight="regular"
        className="text-[20px] rotate-90 lg:block hidden uppercase"
      >
        (C)
      </Typographie>
    </section>
  );
};
