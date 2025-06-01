'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, Calendar } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-32 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">あなたのアイデアを</span>
            <br />
            <span className="text-foreground">AI動画で実現しませんか？</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            どんな小さなアイデアでも、AI技術で魅力的な動画コンテンツに変換できます。
            まずはお気軽にご相談ください。
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary group">
              <Mail className="h-5 w-5" />
              無料相談を申し込む
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/portfolio" className="btn-secondary group">
              <MessageCircle className="h-5 w-5" />
              作品を見る
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Mail,
                title: 'メールでお問い合わせ',
                description: '24時間以内にご返信いたします',
                action: 'メール送信',
                href: '/contact',
              },
              {
                icon: MessageCircle,
                title: 'チャットで相談',
                description: 'リアルタイムでご質問にお答えします',
                action: 'チャット開始',
                href: '#',
              },
              {
                icon: Calendar,
                title: 'オンライン面談',
                description: '詳しい要件をお聞かせください',
                action: '面談予約',
                href: '/booking',
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Link href={option.href}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2 text-center h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                      <option.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {option.description}
                    </p>
                    <div className="text-primary-500 font-medium text-sm group-hover:gap-2 transition-all duration-200 flex items-center justify-center">
                      <span>{option.action}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Response Time Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-500">
              平均レスポンス時間: 2時間以内
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}