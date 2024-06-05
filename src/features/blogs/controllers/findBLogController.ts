import { Request, Response } from "express"
import { BlogViewModel } from "../../../input-output-types/blogs-types"
import { blogsRepository } from "../blogsRepository"

export const findBlogController = (req: Request, res: Response<BlogViewModel>) => {
    const blog = blogsRepository.getBlogById(req.params.id)

    if (blog) {
        res.send(blog)
    } else {
        res.sendStatus(404)
    }
}