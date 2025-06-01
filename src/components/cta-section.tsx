'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-ai-blue/10 via-background to-creative-red/10 rounded-2xl overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-blue/5 to-transparent"></div>
          
          <div className="relative z-10 text-center py-16 px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="text-foreground">あなたのビジョンを</span>
              <br />
              <span className="gradient-text">AI動画で実現しませんか？</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              最新のAI技術とクリエイティブな発想で、従来では不可能だった映像表現を実現します。
              <br className="hidden md:block" />
              お気軽にご相談ください。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-blue/80 hover:from-ai-blue/90 hover:to-ai-blue/70 text-white rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>無料相談を始める</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 hover:border-ai-blue hover:bg-ai-blue/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>メールで問い合わせ</span>
              </Link>
            </motion.div>

            {/* Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center p-6 bg-card/50 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-ai-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ai-blue">24h</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">迅速対応</h3>
                <p className="text-sm text-muted-foreground">お問い合わせから24時間以内に初回返信</p>
              </div>

              <div className="text-center p-6 bg-card/50 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-creative-red/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-creative-red">∞</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">修正無制限</h3>
                <p className="text-sm text-muted-foreground">満足いただけるまで何度でも修正対応</p>
              </div>

              <div className="text-center p-6 bg-card/50 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-ai-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ai-blue">100%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">満足保証</h3>
                <p className="text-sm text-muted-foreground">お客様満足度100%を目指したサポート</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-ai-blue/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-creative-red/10 rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </section>
  )
}