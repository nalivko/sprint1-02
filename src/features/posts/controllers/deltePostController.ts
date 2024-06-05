import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"

export const deletePostController = (req: Request<{id: string}>, res: Response) => {
    const isDeleted = postsRepository.deletePost(req.params.id)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
}