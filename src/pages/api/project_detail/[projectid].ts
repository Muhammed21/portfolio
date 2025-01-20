import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const Prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { projectid } = req.query;

  if (!projectid || Array.isArray(projectid)) {
    return res.status(400).json({ error: "Invalid projectID" });
  }

  if (req.method === "GET") {
    try {
      const article = await Prisma.projectDetail.findMany({
        where: {
          projectId: parseInt(projectid),
        },
      });
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
