import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const Prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  if (req.method === "GET") {
    try {
      const article = await Prisma.project.findMany({
        where: {
          id: parseInt(id),
        },
        include: {
          details: true,
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
