import { BlogList } from '@/components/blog-list'

export const metadata = {
  title: 'ブログ | AI動画クリエイター',
  description: 'AI動画制作の最新情報、チュートリアル、業界分析などをお届けする専門ブログ。',
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">AI動画制作</span>
            <span className="gradient-text">ブログ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            最新のAI動画制作技術、ツールレビュー、業界分析、チュートリアルなどをお届けします
          </p>
        </div>

        <BlogList />
      </div>
    </div>
  )
}