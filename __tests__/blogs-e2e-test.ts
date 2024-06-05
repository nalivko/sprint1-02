import { req } from './helpers/test-helpers'
import { db, setDB } from '../src/db/db'
import { SETTINGS } from '../src/settings'
import { BlogInputModel } from '../src/input-output-types/blogs-types'
import { codedAuth, createString, dataset1 } from './helpers/datasets'

describe('/blogs', () => {

    beforeAll(async () => {
        setDB()
    })

    it('should create', async () => {
        setDB()
        const newBlog: BlogInputModel = {
            name: 'n1',
            description: 'd1',
            websiteUrl: 'http://some.com',
        }

        const res = await req
            .post(SETTINGS.PATH.BLOGS)
            .set({ 'Authorization': 'Basic ' + codedAuth })
            .send(newBlog) // отправка данных
            .expect(201)

        // console.log(res.body)

        expect(res.body.name).toEqual(newBlog.name)
        expect(res.body.description).toEqual(newBlog.description)
        expect(res.body.websiteUrl).toEqual(newBlog.websiteUrl)
        expect(typeof res.body.id).toEqual('string')

        expect(res.body).toEqual(db.blogs[0])
    })

})