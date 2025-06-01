'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowRight, Eye, Clock } from 'lucide-react'

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'AI Fashion Collection CM',
    category: 'コマーシャル',
    tool: 'Runway Gen-3',
    duration: '30秒',
    thumbnail: '/api/placeholder/600/400',
    description: '最新のファッションコレクションを紹介するAI生成動画。モデルの動きから背景まで全てAIで制作。',
    tags: ['Fashion', 'Commercial', 'Runway'],
  },
  {
    id: 2,
    title: 'Cyberpunk Music Video',
    category: 'ミュージックビデオ',
    tool: 'Pika Labs',
    duration: '3分',
    thumbnail: '/api/placeholder/600/400',
    description: 'サイバーパンクな世界観を表現したミュージックビデオ。ネオンライトと未来都市を表現。',
    tags: ['Music Video', 'Cyberpunk', 'Pika'],
  },
  {
    id: 3,
    title: '自然ドキュメンタリー',
    category: 'ドキュメンタリー',
    tool: 'Stable Video',
    duration: '2分',
    thumbnail: '/api/placeholder/600/400',
    description: '幻想的な自然風景を表現したドキュメンタリー風映像。時間の流れを美しく表現。',
    tags: ['Nature', 'Documentary', 'Stable Video'],
  },
  {
    id: 4,
    title: 'プロダクト紹介動画',
    category: 'プロダクト',
    tool: 'Runway Gen-3',
    duration: '45秒',
    thumbnail: '/api/placeholder/600/400',
    description: '新製品の魅力を伝える高品質なプロダクト動画。商品の特徴を効果的にアピール。',
    tags: ['Product', 'Commercial', 'Runway'],
  },
  {
    id: 5,
    title: 'アート映像作品',
    category: 'アート',
    tool: 'Multiple Tools',
    duration: '1分30秒',
    thumbnail: '/api/placeholder/600/400',
    description: 'アーティスティックな表現を追求した実験的映像作品。複数のAIツールを組み合わせて制作。',
    tags: ['Art', 'Experimental', 'Mixed'],
  },
  {
    id: 6,
    title: '教育コンテンツ',
    category: '教育',
    tool: 'Pika Labs',
    duration: '5分',
    thumbnail: '/api/placeholder/600/400',
    description: '分かりやすく魅力的な教育動画コンテンツ。複雑な概念を視覚的に分かりやすく説明。',
    tags: ['Education', 'Tutorial', 'Pika'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function PortfolioPreview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">最新作品</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            AI技術を駆使して制作した多様なジャンルの動画作品をご紹介します。
            各作品は異なるAIツールと手法で制作されています。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 card-hover">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-500 font-medium">
                      {item.tool}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Eye className="h-4 w-4" />
                      <span>プレビュー</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/portfolio" className="btn-primary group">
            全ての作品を見る
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}