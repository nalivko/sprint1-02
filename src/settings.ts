import { config } from "dotenv";
config()

export const SETTINGS = {
    // все хардкодные значения должны быть здесь, для удобства их изменения
    PORT: process.env.PORT || 3003,
    PATH: {
        BLOGS: '/blogs',
        POSTS: '/posts',
        TESTS: '/testing',
    },
    ADMIN_AUTH: process.env.ADMIN_AUTH || 'admin:qwerty'
}