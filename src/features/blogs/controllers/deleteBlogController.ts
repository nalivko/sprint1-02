import { Request, Response } from "express"
import { blogsRepository } from "../blogsRepository"

export const deleteBlogController = (req: Request<{id: string}>, res: Response) => {
    const isDeleted = blogsRepository.deleteBlog(req.params.id)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
}