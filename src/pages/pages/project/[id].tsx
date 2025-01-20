import { Menu } from "@/components/menu/Menu";
import { Navigation } from "@/components/navigation/Navigation";
import { Stack } from "@/components/stack/Stack";
import { Typographie } from "@/design/typographie/Typographie";
import { CgSpinner } from "react-icons/cg";
import { TbError404 } from "react-icons/tb";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Table } from "@/components/table/Table";
import { Footer } from "@/components/footer/Footer";

interface Detail {
  id: number;
  mission: string;
  challenge: string;
  processus: string;
  UIDesign: string;
  development: string;
  results: string;
  projectId: number;
}

interface Project {
  id: number;
  type: string;
  stack: string;
  cover: string;
  isCompleted: boolean;
  details: Detail[];
}

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID depuis l'URL
  const [project, setProject] = useState<Project | undefined>();
  const [error, setError] = useState<string | null>(null);

  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/article/${id}`);
          if (!res.ok) throw new Error("Failed to fetch project");
          const data: Project[] = await res.json();
          if (data.length === 0) throw new Error("No project found");
          setProject(data[0]);
          console.log(data);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
        }
      };
      fetchData();
    }
  }, [id]);

  if (error) {
    return (
      <section className="w-full h-screen grid place-content-center">
        <div className="flex items-center gap-2">
          <TbError404 size={30} />
          <Typographie
            size="h2"
            balise="span"
            weight="medium"
            className="uppercase"
          >
            — something went wrong
          </Typographie>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="w-full h-screen grid place-content-center">
        <div className="flex items-center gap-2">
          <CgSpinner size={20} className="animate-spin" />
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section
      className={clsx(
        clicked && "overflow-hidden",
        "relative w-full h-full flex flex-col gap-20 pt-10 items-center justify-center"
      )}
    >
      <Navigation
        onClickFunction={toggle}
        text={clicked ? "fermer" : "ouvrir"}
      ></Navigation>
      <Menu
        className={
          clicked ? "active md:pt-0 md:top-0 md:h-screen h-full pt-28" : "menu"
        }
      />
      <div className="absolute md:block hidden w-full sm:w-max overflow-hidden md:rotate-[-90deg] top-[370px] sm:top-[29%] z-0 left-0 sm:left-2/4 md:left-[80px] sm:translate-x-[-50%] translate-y-[-50%]">
        <Stack highlightedStack={project.stack}></Stack>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center w-full h-max my-auto">
        <div className="relative flex items-center justify-center w-max h-20">
          <Typographie
            balise="span"
            weight="bold"
            fontFamily="PP Neue"
            className="text-[24px] uppercase z-[3]"
          >
            projet n°[{project.id}]
          </Typographie>
          <Image
            src="/svg/entourage.svg"
            alt="entourage"
            className="absolute top-0 left-0 z-0 rotate-6"
            width={200}
            height={80}
          />
        </div>
        <div
          key={project.id}
          className="relative bg-primaryColors-20 dark:bg-darkPrimaryColors-20 max-w-[1050px] w-full h-full rounded border border-black-12 dark:border-darkPrimaryColors-100 p-1 sm:p-2.5"
        >
          {project.isCompleted === true && (
            <>
              <Image
                src="/svg/timbre.svg"
                alt="timbre"
                width={60}
                height={75}
                className="sm:block hidden absolute top-5 left-5"
              />
              <Image
                src="/svg/timbre.svg"
                alt="timbre"
                width={40}
                height={55}
                className="block sm:hidden absolute top-5 left-5"
              />
            </>
          )}
          <Image
            className="w-full max-h-[630px] h-full border border-darkPrimaryColors-100"
            src={project.cover}
            alt={project.cover}
            width={1030}
            height={606}
          />
        </div>
      </div>
      {/* Project detail */}
      <Table projectID={Number(id)}></Table>
      <Footer></Footer>
      <div className="hidden xl:block absolute overflow-hidden rotate-90 top-[28%] right-[80px] translate-x-2/4">
        <Stack highlightedStack={project.stack}></Stack>
      </div>
    </section>
  );
}
