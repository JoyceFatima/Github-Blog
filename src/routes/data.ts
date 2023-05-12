import { Blogs } from '../pages/Blogs'
import { Home } from '../pages/Home'

export const paths = [
  {
    path: '/',
    content: Home,
  },
  {
    path: '/blog/:repo/:issueNum',
    content: Blogs,
  },
]
