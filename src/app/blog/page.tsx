import { getPosts } from '@/lib/posts'
import Posts from '@/app/ui/posts'
import { Suspense } from 'react'
 
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Posts posts={posts} />
    </Suspense>
  )
}