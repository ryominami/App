'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-500/5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              AI動画制作のプロフェッショナル
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">AIと創造性の</span>
            <br />
            <span className="text-foreground">融合</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            最新のAI技術を駆使して、あなたのビジョンを魅力的な映像コンテンツに変換します。
            Runway、Pika Labsをはじめとする最先端ツールで、想像を超える動画を制作。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/portfolio" className="btn-primary group">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              作品を見る
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 glass-effect">
              {/* Placeholder for demo video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">
                    デモリール再生
                  </p>
                  <p className="text-sm text-muted-foreground">
                    最新のAI動画作品をご覧ください
                  </p>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-6 left-6 bg-card border border-border rounded-xl p-4 glass-effect"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">100+</div>
                <div className="text-xs text-muted-foreground">制作実績</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -bottom-6 right-6 bg-card border border-border rounded-xl p-4 glass-effect"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-500">24h</div>
                <div className="text-xs text-muted-foreground">最短納期</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}