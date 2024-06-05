import { Request, Response } from "express"
import { postsRepository } from "../postsRepository"

export const createPostController = (req: Request, res: Response) => {
    const newPostId = postsRepository.createPost(req.body)
    const newPost = postsRepository.getPostById(newPostId)

    res.status(201).send(newPost)
}