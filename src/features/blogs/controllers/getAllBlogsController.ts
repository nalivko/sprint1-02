import { Request, Response } from "express"
import { blogsRepository } from "../blogsRepository"

export const getAllBlogsController = (req: Request, res: Response) => {
    const allBlogs = blogsRepository.getAllBlogs()
    res.send(allBlogs)
}