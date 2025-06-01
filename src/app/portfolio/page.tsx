import { Metadata } from 'next'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { PortfolioFilters } from '@/components/portfolio/portfolio-filters'

export const metadata: Metadata = {
  title: 'ポートフォリオ | AI Video Creator - Ryo Minami',
  description: 'AI動画制作の作品集。Runway、Pika Labs、Stable Video Diffusionを使用した多様なジャンルの動画作品をご覧ください。',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">ポートフォリオ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              AI技術を駆使して制作した動画作品の数々をご紹介します。
              各作品は異なるAIツールと手法で制作され、多様な表現が可能であることを示しています。
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilters />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  )
}