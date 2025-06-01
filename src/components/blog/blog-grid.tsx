'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag, Clock, User } from 'lucide-react'

// Extended blog data
const blogPosts = [
  {
    id: 1,
    title: 'Runway Gen-3の新機能徹底解説',
    excerpt: 'Runway Gen-3に追加された最新機能について詳しく解説。実際の使用例とともに、制作効率を向上させるテクニックを紹介します。',
    content: 'Runway Gen-3の詳細な内容がここに入ります...',
    category: 'ツールレビュー',
    readTime: '5分',
    publishedAt: '2024年5月15日',
    author: 'Ryo Minami',
    tags: ['Runway', 'AI動画', 'チュートリアル'],
    image: '/api/placeholder/400/250',
    featured: true,
  },
  {
    id: 2,
    title: 'AI動画制作の料金設定ガイド',
    excerpt: 'AI動画制作の適正価格について解説。制作時間、品質、使用ツールに応じた料金設定の考え方を詳しく説明します。',
    content: '料金設定についての詳細な内容...',
    category: 'ビジネス',
    readTime: '8分',
    publishedAt: '2024年5月12日',
    author: 'Ryo Minami',
    tags: ['料金', 'ビジネス', 'AI動画'],
    image: '/api/placeholder/400/250',
    featured: false,
  },
  {
    id: 3,
    title: 'プロンプトエンジニアリングの基礎',
    excerpt: 'AI動画生成で高品質な結果を得るためのプロンプト作成術。効果的なキーワードの選び方から応用テクニックまで解説。',
    content: 'プロンプトエンジニアリングの詳細...',
    category: 'チュートリアル',
    readTime: '10分',
    publishedAt: '2024年5月8日',
    author: 'Ryo Minami',
    tags: ['プロンプト', 'テクニック', 'AI'],
    image: '/api/placeholder/400/250',
    featured: true,
  },
  {
    id: 4,
    title: 'Pika Labs vs Runway: どちらを選ぶべきか',
    excerpt: '2つの主要AI動画ツールを徹底比較。それぞれの特徴、得意分野、価格を詳しく分析し、用途別の選び方を解説します。',
    content: 'ツール比較の詳細な内容...',
    category: 'ツールレビュー',
    readTime: '12分',
    publishedAt: '2024年5月5日',
    author: 'Ryo Minami',
    tags: ['Pika Labs', 'Runway', '比較'],
    image: '/api/placeholder/400/250',
    featured: false,
  },
  {
    id: 5,
    title: 'AI動画制作の未来展望',
    excerpt: 'AI動画技術の現在と未来について考察。今後期待される技術進歩と業界への影響について詳しく解説します。',
    content: '未来展望についての詳細...',
    category: '業界ニュース',
    readTime: '7分',
    publishedAt: '2024年5月1日',
    author: 'Ryo Minami',
    tags: ['未来', 'AI技術', '業界動向'],
    image: '/api/placeholder/400/250',
    featured: false,
  },
  {
    id: 6,
    title: '効果的な動画マーケティング戦略',
    excerpt: 'AI動画を活用したマーケティング戦略について解説。SNS別の最適化方法から効果測定まで実践的なノウハウを紹介。',
    content: 'マーケティング戦略の詳細...',
    category: 'ビジネス',
    readTime: '9分',
    publishedAt: '2024年4月28日',
    author: 'Ryo Minami',
    tags: ['マーケティング', 'SNS', '戦略'],
    image: '/api/placeholder/400/250',
    featured: false,
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

export function BlogGrid() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="space-y-16">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary-500 rounded-full" />
            注目記事
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 card-hover h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 bg-accent-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        注目記事
                      </div>
                      
                      {/* Read Time */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-primary-500 font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{post.publishedAt}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Author & Tags */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-primary-500 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                          <span>続きを読む</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      )}

      {/* Regular Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary-500 rounded-full" />
          最新記事
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 card-hover h-full">
                  {/* Image */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-3 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More */}
                    <div className="flex items-center text-primary-500 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                      <span>続きを読む</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}