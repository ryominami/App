'use client'

import { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', name: '全て', count: 24 },
  { id: 'tutorials', name: 'チュートリアル', count: 8 },
  { id: 'tool-reviews', name: 'ツールレビュー', count: 6 },
  { id: 'industry-news', name: '業界ニュース', count: 5 },
  { id: 'techniques', name: 'テクニック', count: 4 },
  { id: 'business', name: 'ビジネス', count: 3 },
]

export function BlogFilters() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="記事を検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

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
    </div>
  )
}