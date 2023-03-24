import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    //Fetch all post
    try {
      const result = await prisma.post.findMany({
        include: {
          user: true,
          comment: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(403).json({ err: "Error fetching posts" });
    }
  }
}
