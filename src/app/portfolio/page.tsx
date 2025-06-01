import { PortfolioGallery } from '@/components/portfolio-gallery'

export const metadata = {
  title: 'ポートフォリオ | AI動画クリエイター',
  description: 'AI技術を使用して制作した動画作品集。Runway、Pika Labs等の最新ツールで作成した多彩なジャンルの作品をご覧ください。',
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">作品</span>
            <span className="gradient-text">ポートフォリオ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            最新のAI技術を駆使して制作した多彩なジャンルの動画作品をご紹介します
          </p>
        </div>

        <PortfolioGallery />
      </div>
    </div>
  )
}