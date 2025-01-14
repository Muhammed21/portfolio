-- CreateEnum
CREATE TYPE "Stack" AS ENUM ('React', 'Nextjs', 'Tailwindcss', 'Prisma', 'Html', 'Css', 'Js', 'Typescript');

-- CreateTable
CREATE TABLE "ProjectDetail" (
    "id" SERIAL NOT NULL,
    "mission" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "processus" TEXT NOT NULL,
    "UIDesign" TEXT NOT NULL,
    "development" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "stack" "Stack" NOT NULL DEFAULT 'Nextjs',
    "cover" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectDetail" ADD CONSTRAINT "ProjectDetail_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
