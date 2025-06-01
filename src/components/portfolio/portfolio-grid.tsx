'use client'

import { motion } from 'framer-motion'
import { Play, Clock, Eye, ExternalLink } from 'lucide-react'

// Extended portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'AI Fashion Collection CM',
    category: 'commercial',
    tool: 'Runway Gen-3',
    duration: '30秒',
    views: '15.2K',
    thumbnail: '/api/placeholder/600/400',
    description: '最新のファッションコレクションを紹介するAI生成動画。モデルの動きから背景まで全てAIで制作。高級感のある仕上がりで、ブランドイメージを効果的に表現しました。',
    tags: ['Fashion', 'Commercial', 'Runway'],
    featured: true,
    createdAt: '2024-05-01',
  },
  {
    id: 2,
    title: 'Cyberpunk Music Video',
    category: 'music-video',
    tool: 'Pika Labs',
    duration: '3分',
    views: '28.7K',
    thumbnail: '/api/placeholder/600/400',
    description: 'サイバーパンクな世界観を表現したミュージックビデオ。ネオンライトと未来都市の表現により、楽曲の世界観を視覚化。',
    tags: ['Music Video', 'Cyberpunk', 'Pika'],
    featured: true,
    createdAt: '2024-04-28',
  },
  {
    id: 3,
    title: '自然ドキュメンタリー',
    category: 'documentary',
    tool: 'Stable Video',
    duration: '2分',
    views: '12.1K',
    thumbnail: '/api/placeholder/600/400',
    description: '幻想的な自然風景を表現したドキュメンタリー風映像。時間の流れを美しく表現し、自然の神秘性を演出。',
    tags: ['Nature', 'Documentary', 'Stable Video'],
    featured: false,
    createdAt: '2024-04-25',
  },
  {
    id: 4,
    title: 'プロダクト紹介動画',
    category: 'product',
    tool: 'Runway Gen-3',
    duration: '45秒',
    views: '9.8K',
    thumbnail: '/api/placeholder/600/400',
    description: '新製品の魅力を伝える高品質なプロダクト動画。商品の特徴を効果的にアピールし、購買意欲を促進。',
    tags: ['Product', 'Commercial', 'Runway'],
    featured: false,
    createdAt: '2024-04-22',
  },
  {
    id: 5,
    title: 'アート映像作品',
    category: 'art',
    tool: 'Multiple Tools',
    duration: '1分30秒',
    views: '6.5K',
    thumbnail: '/api/placeholder/600/400',
    description: 'アーティスティックな表現を追求した実験的映像作品。複数のAIツールを組み合わせて制作した前衛的な作品。',
    tags: ['Art', 'Experimental', 'Mixed'],
    featured: false,
    createdAt: '2024-04-20',
  },
  {
    id: 6,
    title: '教育コンテンツ',
    category: 'education',
    tool: 'Pika Labs',
    duration: '5分',
    views: '18.3K',
    thumbnail: '/api/placeholder/600/400',
    description: '分かりやすく魅力的な教育動画コンテンツ。複雑な概念を視覚的に分かりやすく説明し、学習効果を向上。',
    tags: ['Education', 'Tutorial', 'Pika'],
    featured: false,
    createdAt: '2024-04-18',
  },
  {
    id: 7,
    title: 'コーポレート動画',
    category: 'commercial',
    tool: 'Runway Gen-3',
    duration: '2分',
    views: '11.4K',
    thumbnail: '/api/placeholder/600/400',
    description: '企業の理念と価値観を表現したコーポレート動画。信頼感のある映像で企業ブランドを効果的にアピール。',
    tags: ['Corporate', 'Branding', 'Runway'],
    featured: false,
    createdAt: '2024-04-15',
  },
  {
    id: 8,
    title: 'ゲーム予告編',
    category: 'commercial',
    tool: 'Multiple Tools',
    duration: '1分',
    views: '22.6K',
    thumbnail: '/api/placeholder/600/400',
    description: 'インディーゲームの予告編映像。ゲームの世界観とアクション要素を効果的に表現し、プレイヤーの関心を引きつけ。',
    tags: ['Gaming', 'Trailer', 'Mixed'],
    featured: true,
    createdAt: '2024-04-12',
  },
  {
    id: 9,
    title: '料理番組オープニング',
    category: 'commercial',
    tool: 'Pika Labs',
    duration: '15秒',
    views: '8.9K',
    thumbnail: '/api/placeholder/600/400',
    description: '料理番組のオープニング映像。食材の美しさと調理過程を魅力的に表現し、視聴者の食欲をそそる演出。',
    tags: ['Food', 'TV', 'Pika'],
    featured: false,
    createdAt: '2024-04-10',
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

export function PortfolioGrid() {
  return (
    <div className="space-y-12">
      {/* Featured Works */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary-500 rounded-full" />
          注目作品
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {portfolioItems
            .filter(item => item.featured)
            .map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 card-hover">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-16 w-16 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-accent-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      注目作品
                    </div>
                    
                    {/* Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.duration}
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {item.views}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary-500 font-medium">
                        {item.tool}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary-500 transition-colors duration-200" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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
      </div>

      {/* All Works */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary-500 rounded-full" />
          全作品
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  
                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {item.views}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-500 font-medium">
                      {item.tool}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary-500 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}