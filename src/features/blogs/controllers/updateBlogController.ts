import { Request, Response } from "express"
import { blogsRepository } from "../blogsRepository"
import { BlogInputModel, BlogViewModel } from "../../../input-output-types/blogs-types"

export const updateBlogController = (req: Request<{id: string}, any, BlogInputModel>, res: Response) => {
    
    const isUpdated = blogsRepository.updateBlog(req.params.id, req.body)
    
    if(isUpdated){
        res.send(204)
    } else {
        res.send(404)
    }
}