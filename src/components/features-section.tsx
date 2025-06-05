'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Palette, Users, Star, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI技術の専門性',
    description: '最新のAI動画生成ツールを熟知し、それぞれの特性を活かした最適な制作手法を提供',
    color: 'text-ai-blue'
  },
  {
    icon: Zap,
    title: '高速制作',
    description: 'AI技術により従来の制作時間を大幅短縮。アイデアから完成まで最短24時間で対応',
    color: 'text-creative-red'
  },
  {
    icon: Palette,
    title: '多様なスタイル',
    description: 'CM風、MV風、アート系、実写風など、幅広いジャンルの動画制作に対応',
    color: 'text-ai-blue'
  },
  {
    icon: Users,
    title: 'カスタムソリューション',
    description: 'お客様の要望に応じたオーダーメイドの動画制作と、継続的なサポート体制',
    color: 'text-creative-red'
  },
  {
    icon: Star,
    title: '高品質保証',
    description: '細部までこだわった品質管理と、満足いただけるまでの修正対応',
    color: 'text-ai-blue'
  },
  {
    icon: Lightbulb,
    title: '革新的アイデア',
    description: 'AI技術の可能性を最大限活用した、従来にない創造的な映像表現を実現',
    color: 'text-creative-red'
  }
]

export function FeaturesSection() {
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
            <span className="gradient-text">AI動画制作の</span>
            <span className="text-foreground">専門性</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            最新のAI技術と豊富な経験により、従来の動画制作の常識を覆す
            革新的なソリューションを提供します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-card border border-gray-200 dark:border-gray-700 rounded-xl hover:border-ai-blue/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-background to-accent group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-ai-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-8 text-foreground">使用AIツール</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-card border border-gray-200 dark:border-gray-700 rounded-lg">
              <span className="font-medium">Runway</span>
            </div>
            <div className="px-6 py-3 bg-card border border-gray-200 dark:border-gray-700 rounded-lg">
              <span className="font-medium">Pika Labs</span>
            </div>
            <div className="px-6 py-3 bg-card border border-gray-200 dark:border-gray-700 rounded-lg">
              <span className="font-medium">Stable Video Diffusion</span>
            </div>
            <div className="px-6 py-3 bg-card border border-gray-200 dark:border-gray-700 rounded-lg">
              <span className="font-medium">Leonardo AI</span>
            </div>
            <div className="px-6 py-3 bg-card border border-gray-200 dark:border-gray-700 rounded-lg">
              <span className="font-medium">Midjourney</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}