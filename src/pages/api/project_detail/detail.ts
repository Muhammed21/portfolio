import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await prisma.projectDetail.findMany({
        orderBy: { id: "asc" },
      });
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
