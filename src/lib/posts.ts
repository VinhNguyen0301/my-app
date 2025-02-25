export interface Post {
  id: string
  slug: string
  title: string
}

export async function getPosts(): Promise<Post[]> {
  // Implement post fetching logic
  return []
} 