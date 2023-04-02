import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please sign in to make a post" });
    }

    //Create a post
    try {
      const postId: string = req.body;
      const result = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res
        .status(403)
        .json({ err: "Error has occured while making a post" });
    }
  }
}
