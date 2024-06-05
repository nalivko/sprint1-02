import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"

export const createPostController = (req: Request, res: Response) => {
    const post = postsRepository.getPostById(req.params.id)
    
    if(post) {
        res.send(post)
    } else {
        res.send(404)
    }
}

export const findPostController = () => {}