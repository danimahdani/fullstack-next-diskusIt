import type { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '../../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions)
    if(!session) {
      return res.status(401).json({message: 'Please sign in to make a post'})
    }
    
    const title: string = req.body.title

    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    })

    //Check title length and empty post
    if(title.length > 300) {
      return res.status(403).json({message: 'Please write a shorter post'})
    }

    if(!title.length) {
      return res.status(403).json({message: 'Please do not leave this empty'})
    }

    //Create a post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id as string
        }
      })
      return res.status(200).json(result)
    } catch (error) {
      return res.status(403).json({ err: "Error has occured while making a post" })
    }
    
  }
}