import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  slug: string
  excerpt: string
  date: string        // 'YYYY-MM-DD'
  readingTime: string // '4 min read'
}

const blogDir = path.resolve(process.cwd(), 'content', 'blog')

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

  if (files.length === 0) {
    return []
  }

  const posts: PostMeta[] = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data } = matter(raw)

    return {
      title: data.title ?? '',
      slug,
      excerpt: data.excerpt ?? '',
      date: data.date ?? '',
      readingTime: data.readingTime ?? '',
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(
  slug: string
): { meta: PostMeta; content: string } | null {
  const filePath = path.join(blogDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const meta: PostMeta = {
    title: data.title ?? '',
    slug,
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    readingTime: data.readingTime ?? '',
  }

  return { meta, content }
}
