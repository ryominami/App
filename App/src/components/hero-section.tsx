'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 via-transparent to-creative-red/10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">AIと創造性の融合</span>
            <br />
            <span className="text-foreground">次世代動画制作</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Runway、Pika Labs、Stable Video Diffusion等の最新AI技術を駆使し、
            <br className="hidden md:block" />
            あなたのビジョンを革新的な動画作品に変えます。
          </motion.p>

          {/* Demo video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="video-container bg-card border border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ai-blue/20 to-creative-red/20">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">デモリール再生</p>
                  <p className="text-white/80 text-sm">最新AI動画作品のショーケース</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-blue/80 hover:from-ai-blue/90 hover:to-ai-blue/70 text-white rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <span>作品を見る</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 hover:border-ai-blue hover:bg-ai-blue/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              お問い合わせ
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-ai-blue">50+</div>
              <div className="text-sm text-muted-foreground">制作作品</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-creative-red">10+</div>
              <div className="text-sm text-muted-foreground">AIツール</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-ai-blue">24h</div>
              <div className="text-sm text-muted-foreground">最短制作時間</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-creative-red">100%</div>
              <div className="text-sm text-muted-foreground">満足度</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-ai-blue rounded-full animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-6 h-6 bg-creative-red rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-ai-blue rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-60 right-16 w-5 h-5 bg-creative-red rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
    </section>
  )
}