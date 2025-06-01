import { Metadata } from 'next'
import { BlogGrid } from '@/components/blog/blog-grid'
import { BlogFilters } from '@/components/blog/blog-filters'

export const metadata: Metadata = {
  title: 'ブログ | AI Video Creator - Ryo Minami',
  description: 'AI動画制作に関する最新情報、テクニック、ツールレビューなどを発信しています。',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">ブログ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              AI動画制作の最新情報、実践的なテクニック、ツールレビューなどを定期的に発信しています。
              初心者から上級者まで役立つ情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilters />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid />
        </div>
      </section>
    </div>
  )
}