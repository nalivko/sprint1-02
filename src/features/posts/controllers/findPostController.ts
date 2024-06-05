import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"
import { PostViewModel } from "../../../input-output-types/posts-types"

export const findPostController = (req: Request, res: Response<PostViewModel>) => {
    const post = postsRepository.getPostById(req.params.id)
    
    if(post) {
        res.send(post)
    } else {
        res.sendStatus(404)
    }
}