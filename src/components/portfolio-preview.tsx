'use client'

import { motion } from 'framer-motion'
import { Play, Eye, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const portfolioItems = [
  {
    id: 1,
    title: 'AI Fashion Show',
    category: 'CM風',
    tool: 'Runway',
    duration: '0:45',
    views: '1.2K',
    thumbnail: '/api/placeholder/400/225',
    featured: true
  },
  {
    id: 2,
    title: 'Future City Timelapse',
    category: 'アート系',
    tool: 'Pika Labs',
    duration: '1:20',
    views: '890',
    thumbnail: '/api/placeholder/400/225',
    featured: true
  },
  {
    id: 3,
    title: 'Product Launch Video',
    category: '実写風',
    tool: 'Stable Video',
    duration: '0:30',
    views: '2.1K',
    thumbnail: '/api/placeholder/400/225',
    featured: false
  },
  {
    id: 4,
    title: 'Music Video Concept',
    category: 'MV風',
    tool: 'Runway',
    duration: '2:15',
    views: '3.5K',
    thumbnail: '/api/placeholder/400/225',
    featured: true
  },
  {
    id: 5,
    title: 'Abstract Motion Graphics',
    category: 'アート系',
    tool: 'Leonardo AI',
    duration: '1:00',
    views: '756',
    thumbnail: '/api/placeholder/400/225',
    featured: false
  },
  {
    id: 6,
    title: 'Brand Story Animation',
    category: 'CM風',
    tool: 'Pika Labs',
    duration: '1:30',
    views: '1.8K',
    thumbnail: '/api/placeholder/400/225',
    featured: false
  }
]

export function PortfolioPreview() {
  const featuredItems = portfolioItems.filter(item => item.featured)
  const regularItems = portfolioItems.filter(item => !item.featured)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">最新</span>
            <span className="gradient-text">作品ポートフォリオ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIツールを駆使して制作した多彩なジャンルの動画作品をご紹介します
          </p>
        </motion.div>

        {/* Featured works */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">注目作品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <h4 className="font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-2">
                    {item.title}
                  </h4>
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

        {/* Regular works */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">その他の作品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <h4 className="font-semibold text-foreground group-hover:text-ai-blue transition-colors mb-2">
                    {item.title}
                  </h4>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-blue/80 hover:from-ai-blue/90 hover:to-ai-blue/70 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>全ての作品を見る</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}