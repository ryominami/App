import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return blogPosts.map(post => ({ id: String(post.id) }))
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => String(p.id) === params.id)
  if (!post) {
    notFound()
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">
          {post.publishedAt} ・ {post.readTime}
        </p>
        <p className="leading-relaxed">{post.excerpt}</p>
      </div>
    </div>
  )
}
