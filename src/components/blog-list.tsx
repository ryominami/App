'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react'

const categories = ['全て', 'ツールレビュー', '業界分析', 'ツール比較', 'チュートリアル', '制作日記']

const blogPosts = [
  {
    id: 1,
    title: 'Runway Gen-3 Alpha完全ガイド：最新AI動画生成の使い方と活用法',
    excerpt: 'RunwayのGen-3 Alphaの新機能と実際の制作ワークフローを詳しく解説。プロンプトのコツから品質向上テクニックまで包括的にカバーします。',
    category: 'ツールレビュー',
    readTime: '8分',
    publishedAt: '2025年5月28日',
    featured: true,
    tags: ['Runway', 'Gen-3', 'チュートリアル']
  },
  {
    id: 2,
    title: 'AI動画制作の料金相場2025年版：予算別プラン選択ガイド',
    excerpt: '企業向けAI動画制作の最新料金動向と、予算に応じた最適なプラン選択方法をご紹介します。実際のプロジェクト事例も交えて解説。',
    category: '業界分析',
    readTime: '6分',
    publishedAt: '2025年5月25日',
    featured: true,
    tags: ['料金', '業界動向', '企業向け']
  },
  {
    id: 3,
    title: 'Pika Labs vs Stable Video Diffusion：特徴比較と使い分け方法',
    excerpt: '人気のAI動画生成ツール2つを徹底比較。それぞれの強みと適用シーンを具体例とともに解説します。',
    category: 'ツール比較',
    readTime: '10分',
    publishedAt: '2025年5月22日',
    featured: true,
    tags: ['Pika Labs', 'Stable Video', '比較']
  },
  {
    id: 4,
    title: '初心者向けAI動画制作入門：必要なツールと基本ワークフロー',
    excerpt: 'AI動画制作を始めたい方向けの入門ガイド。必要なツール、基本的なワークフロー、最初の一歩について詳しく説明します。',
    category: 'チュートリアル',
    readTime: '12分',
    publishedAt: '2025年5月20日',
    featured: false,
    tags: ['初心者', '入門', 'ワークフロー']
  },
  {
    id: 5,
    title: 'Leonardo AI動画機能レビュー：クリエイターが知っておくべき新機能',
    excerpt: 'Leonardo AIの動画生成機能について詳細レビュー。他のツールとの違いや実際の制作での活用方法を解説。',
    category: 'ツールレビュー',
    readTime: '7分',
    publishedAt: '2025年5月18日',
    featured: false,
    tags: ['Leonardo AI', 'レビュー', '新機能']
  },
  {
    id: 6,
    title: 'AI動画制作プロジェクト完全記録：企業CM制作の舞台裏',
    excerpt: '実際の企業CM制作プロジェクトの全工程を公開。クライアントとのやり取りから完成まで、リアルな制作過程をお見せします。',
    category: '制作日記',
    readTime: '15分',
    publishedAt: '2025年5月15日',
    featured: false,
    tags: ['企業CM', 'プロジェクト', '制作過程']
  }
]

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
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 mb-4 px-4 py-2 bg-card border border-border rounded-lg"
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
                    : 'bg-card border border-border hover:border-ai-blue text-foreground'
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
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
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

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-3 line-clamp-2">
                    {post.title}
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
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs font-medium rounded-full">
                      <Tag size={12} className="mr-1" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-3 line-clamp-2">
                    {post.title}
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