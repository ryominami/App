'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'

export function BlogPreview() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">最新の</span>
            <span className="gradient-text">ブログ記事</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI動画制作の最新トレンドとテクニック、業界情報をお届けします
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-ai-blue/10 text-ai-blue text-xs font-medium rounded-full">
                    <Tag size={12} className="mr-1" />
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-1 bg-creative-red text-white text-xs font-medium rounded">
                      注目
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

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

              {/* Footer */}
              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm text-ai-blue hover:text-ai-blue/80 transition-colors"
                >
                  続きを読む
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 hover:border-ai-blue hover:bg-ai-blue/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>全ての記事を見る</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}