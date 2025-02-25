import Link from 'next/link'
import { Post as PostType } from '@/lib/posts'

export default function Post({ post }: { post: PostType }) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}