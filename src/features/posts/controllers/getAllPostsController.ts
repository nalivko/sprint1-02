import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"

export const getAllPostsController = (req: Request, res: Response) => {
    const allBlogs = postsRepository.getAllPosts()
    res.send(allBlogs)
}