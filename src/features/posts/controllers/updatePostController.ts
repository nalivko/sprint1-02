import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"

export const updatePostController = (req: Request, res: Response) => {
    const isUpdated = postsRepository.updatePost(req.params.id, req.body)

    if(isUpdated){
        res.send(204)
    } else {
        res.sendStatus(404)
    }
}