'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, Search, Filter, ExternalLink } from 'lucide-react'
import { blogPosts, BlogPost } from '@/data/blog-posts'

const categories = ['全て', 'ツールレビュー', '業界分析', 'ツール比較', 'チュートリアル', '制作日記']

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('全て')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === '全て' || post.category === selectedCategory
    const searchMatch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8">
        {/* Search */}
        <div className="relative mb-6">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="記事を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 mb-4 px-4 py-2 bg-card border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <Filter size={16} />
          <span>カテゴリー</span>
        </button>

        {/* Category Filter */}
        <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
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
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-muted-foreground">
          {filteredPosts.length}件の記事が見つかりました
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-foreground">注目記事</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  if (post.isExternal) {
                    window.open(post.externalUrl, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = `/blog/${post.id}`
                  }
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs font-medium rounded-full">
                      <Tag size={12} className="mr-1" />
                      {post.category}
                    </span>
                    <span className="px-2 py-1 bg-creative-red text-white text-xs font-medium rounded">
                      注目
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-3 line-clamp-2 flex items-start gap-2">
                    <span>{post.title}</span>
                    {post.isExternal && (
                      <ExternalLink size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{post.publishedAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6 text-foreground">
            {featuredPosts.length > 0 ? 'その他の記事' : '記事一覧'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  if (post.isExternal) {
                    window.open(post.externalUrl, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = `/blog/${post.id}`
                  }
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs font-medium rounded-full">
                      <Tag size={12} className="mr-1" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-3 line-clamp-2 flex items-start gap-2">
                    <span>{post.title}</span>
                    {post.isExternal && (
                      <ExternalLink size={14} className="text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{post.publishedAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">
            検索条件に該当する記事が見つかりませんでした。
          </p>
          <button
            onClick={() => {
              setSelectedCategory('全て')
              setSearchQuery('')
            }}
            className="px-6 py-3 bg-ai-blue hover:bg-ai-blue/90 text-white rounded-lg font-medium transition-colors"
          >
            検索条件をリセット
          </button>
        </div>
      )}
    </div>
  )
}