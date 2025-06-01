'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Eye, Clock, Filter } from 'lucide-react'

const categories = ['全て', 'CM風', 'MV風', 'アート系', '実写風']
const aiTools = ['全て', 'Runway', 'Pika Labs', 'Stable Video', 'Leonardo AI', 'Midjourney']

const portfolioItems = [
  {
    id: 1,
    title: 'AI Fashion Show',
    category: 'CM風',
    tool: 'Runway',
    duration: '0:45',
    views: '1.2K',
    featured: true,
    description: 'ファッションブランドのAI生成モデルを使用したショーケース動画'
  },
  {
    id: 2,
    title: 'Future City Timelapse',
    category: 'アート系',
    tool: 'Pika Labs',
    duration: '1:20',
    views: '890',
    featured: true,
    description: '未来都市の発展をAIで描いたアート作品'
  },
  {
    id: 3,
    title: 'Product Launch Video',
    category: '実写風',
    tool: 'Stable Video',
    duration: '0:30',
    views: '2.1K',
    featured: false,
    description: '新製品のプロモーション動画'
  },
  {
    id: 4,
    title: 'Music Video Concept',
    category: 'MV風',
    tool: 'Runway',
    duration: '2:15',
    views: '3.5K',
    featured: true,
    description: 'アーティストのミュージックビデオコンセプト'
  },
  {
    id: 5,
    title: 'Abstract Motion Graphics',
    category: 'アート系',
    tool: 'Leonardo AI',
    duration: '1:00',
    views: '756',
    featured: false,
    description: '抽象的なモーショングラフィックス作品'
  },
  {
    id: 6,
    title: 'Brand Story Animation',
    category: 'CM風',
    tool: 'Pika Labs',
    duration: '1:30',
    views: '1.8K',
    featured: false,
    description: 'ブランドストーリーを描いたアニメーション'
  },
  {
    id: 7,
    title: 'Digital Art Showcase',
    category: 'アート系',
    tool: 'Midjourney',
    duration: '0:50',
    views: '934',
    featured: false,
    description: 'デジタルアート作品のショーケース'
  },
  {
    id: 8,
    title: 'Corporate Presentation',
    category: '実写風',
    tool: 'Runway',
    duration: '2:00',
    views: '1.4K',
    featured: false,
    description: '企業プレゼンテーション動画'
  }
]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('全て')
  const [selectedTool, setSelectedTool] = useState('全て')
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = selectedCategory === '全て' || item.category === selectedCategory
    const toolMatch = selectedTool === '全て' || item.tool === selectedTool
    return categoryMatch && toolMatch
  })

  const featuredItems = filteredItems.filter(item => item.featured)
  const regularItems = filteredItems.filter(item => !item.featured)

  return (
    <div>
      {/* Filters */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 mb-4 px-4 py-2 bg-card border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <Filter size={16} />
          <span>フィルター</span>
        </button>

        <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">カテゴリー</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-ai-blue text-white'
                      : 'bg-card border border-gray-200 dark:border-gray-700 hover:border-ai-blue text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* AI Tool Filter */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">使用AIツール</h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map(tool => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTool === tool
                      ? 'bg-creative-red text-white'
                      : 'bg-card border border-gray-200 dark:border-gray-700 hover:border-creative-red text-foreground'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-muted-foreground">
          {filteredItems.length}件の作品が見つかりました
        </p>
      </div>

      {/* Featured Works */}
      {featuredItems.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-foreground">注目作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-ai-blue/20 to-creative-red/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-ai-blue text-white text-xs font-medium rounded">
                    注目
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-accent rounded text-xs">{item.category}</span>
                    <span className="text-ai-blue">{item.tool}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>制作時間: 2日</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Works */}
      {regularItems.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6 text-foreground">
            {featuredItems.length > 0 ? 'その他の作品' : '作品一覧'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-muted/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-accent rounded text-xs">{item.category}</span>
                    <span className="text-ai-blue">{item.tool}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>制作時間: 1日</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">
            選択された条件に該当する作品が見つかりませんでした。
          </p>
          <button
            onClick={() => {
              setSelectedCategory('全て')
              setSelectedTool('全て')
            }}
            className="px-6 py-3 bg-ai-blue hover:bg-ai-blue/90 text-white rounded-lg font-medium transition-colors"
          >
            フィルターをリセット
          </button>
        </div>
      )}
    </div>
  )
}