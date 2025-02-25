'use client'
import { use } from 'react'
 
export default function Posts({
  posts,
}: {
  posts: { id: string; title: string }[] // Remove Promise wrapper from type
}) {
  // Remove use() since posts is already resolved
  const allPosts = posts
 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}