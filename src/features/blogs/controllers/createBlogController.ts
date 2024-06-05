import { Request, Response } from "express"
import { blogsRepository } from "../blogsRepository"
import { BlogInputModel, BlogViewModel } from "../../../input-output-types/blogs-types"

export const createBlogController = (req: Request<any, any, BlogInputModel>, res: Response<BlogViewModel>) => {
    const newBlogId = blogsRepository.createBlog(req.body)
    const newBlog = blogsRepository.getBlogById(newBlogId)

    res.status(201).send(newBlog)
}