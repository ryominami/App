'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react'

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Runway Gen-3の新機能徹底解説',
    excerpt: 'Runway Gen-3に追加された最新機能について詳しく解説。実際の使用例とともに、制作効率を向上させるテクニックを紹介します。',
    category: 'ツールレビュー',
    readTime: '5分',
    publishedAt: '2024年5月15日',
    tags: ['Runway', 'AI動画', 'チュートリアル'],
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'AI動画制作の料金設定ガイド',
    excerpt: 'AI動画制作の適正価格について解説。制作時間、品質、使用ツールに応じた料金設定の考え方を詳しく説明します。',
    category: 'ビジネス',
    readTime: '8分',
    publishedAt: '2024年5月12日',
    tags: ['料金', 'ビジネス', 'AI動画'],
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'プロンプトエンジニアリングの基礎',
    excerpt: 'AI動画生成で高品質な結果を得るためのプロンプト作成術。効果的なキーワードの選び方から応用テクニックまで解説。',
    category: 'チュートリアル',
    readTime: '10分',
    publishedAt: '2024年5月8日',
    tags: ['プロンプト', 'テクニック', 'AI'],
    image: '/api/placeholder/400/250',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function BlogPreview() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">最新記事</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI動画制作に関する最新情報、テクニック、業界動向を定期的に発信しています。
            初心者から上級者まで役立つ情報をお届けします。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post) => (
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
                      {post.tags.map((tag) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog" className="btn-primary group">
            全ての記事を見る
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}