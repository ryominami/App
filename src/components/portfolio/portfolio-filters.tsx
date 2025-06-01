'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', name: '全て', count: 25 },
  { id: 'commercial', name: 'コマーシャル', count: 8 },
  { id: 'music-video', name: 'ミュージックビデオ', count: 5 },
  { id: 'documentary', name: 'ドキュメンタリー', count: 4 },
  { id: 'product', name: 'プロダクト', count: 6 },
  { id: 'art', name: 'アート', count: 3 },
  { id: 'education', name: '教育', count: 2 },
]

const tools = [
  { id: 'all', name: '全ツール' },
  { id: 'runway', name: 'Runway Gen-3' },
  { id: 'pika', name: 'Pika Labs' },
  { id: 'stable-video', name: 'Stable Video' },
  { id: 'multiple', name: '複数ツール' },
]

const sortOptions = [
  { id: 'newest', name: '新しい順' },
  { id: 'oldest', name: '古い順' },
  { id: 'popular', name: '人気順' },
  { id: 'alphabetical', name: 'アルファベット順' },
]

export function PortfolioFilters() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeTool, setActiveTool] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          カテゴリー
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105',
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              )}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tools & Sort */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Tools */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            使用AIツール
          </h3>
          <select
            value={activeTool}
            onChange={(e) => setActiveTool(e.target.value)}
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {tools.map((tool) => (
              <option key={tool.id} value={tool.id}>
                {tool.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            並び順
          </h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {(activeCategory !== 'all' || activeTool !== 'all') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-2 pt-4 border-t border-border"
        >
          <span className="text-sm text-muted-foreground">フィルター:</span>
          {activeCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 bg-primary-500/10 text-primary-500 text-xs px-2 py-1 rounded-md">
              {categories.find(c => c.id === activeCategory)?.name}
              <button
                onClick={() => setActiveCategory('all')}
                className="hover:bg-primary-500/20 rounded-full p-0.5"
              >
                ×
              </button>
            </span>
          )}
          {activeTool !== 'all' && (
            <span className="inline-flex items-center gap-1 bg-accent-500/10 text-accent-500 text-xs px-2 py-1 rounded-md">
              {tools.find(t => t.id === activeTool)?.name}
              <button
                onClick={() => setActiveTool('all')}
                className="hover:bg-accent-500/20 rounded-full p-0.5"
              >
                ×
              </button>
            </span>
          )}
          <button
            onClick={() => {
              setActiveCategory('all')
              setActiveTool('all')
            }}
            className="text-xs text-muted-foreground hover:text-foreground ml-2"
          >
            すべてクリア
          </button>
        </motion.div>
      )}
    </div>
  )
}