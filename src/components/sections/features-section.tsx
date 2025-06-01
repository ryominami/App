'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Users, Trophy, Clock, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI動画制作の専門性',
    description: 'Runway、Pika Labs、Stable Video Diffusionなど最新のAIツールを駆使した高品質な動画制作',
  },
  {
    icon: Zap,
    title: '圧倒的な制作スピード',
    description: '従来の制作期間を大幅に短縮。24時間以内での納品も可能な高速制作フロー',
  },
  {
    icon: Users,
    title: 'カスタマイズ対応',
    description: 'お客様のブランドや目的に合わせた完全オーダーメイドの動画コンテンツ制作',
  },
  {
    icon: Trophy,
    title: '豊富な実績',
    description: '100件以上の制作実績と高いクライアント満足度。企業からクリエイターまで幅広く対応',
  },
  {
    icon: Clock,
    title: '迅速なレスポンス',
    description: '24時間以内の初回レスポンス。プロジェクトの進行状況を随時共有',
  },
  {
    icon: Lightbulb,
    title: '技術指導・コンサル',
    description: 'AI動画制作の技術指導やワークショップ、企業向けコンサルティングも提供',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function FeaturesSection() {
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
            <span className="gradient-text">なぜ選ばれるのか</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI動画制作のパイオニアとして、最新技術と豊富な経験を活かし、
            お客様の期待を超える動画コンテンツを提供します。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-2xl mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-primary-500/5 rounded-2xl blur-xl group-hover:bg-primary-500/10 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '100+', label: '制作実績' },
            { value: '24h', label: '最短納期' },
            { value: '98%', label: '満足度' },
            { value: '10+', label: '対応ツール' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}