'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'AI動画制作の料金はどのくらいですか？',
    answer: '動画の長さ、複雑さ、使用するAIツールによって異なりますが、基本的な30秒の商品紹介動画で5万円〜、2-3分のプロモーション動画で15万円〜となります。詳細なお見積もりは無料でご提供いたします。',
  },
  {
    question: '制作期間はどのくらいかかりますか？',
    answer: '通常、簡単な動画であれば24-48時間、複雑な動画でも1-2週間程度で完成いたします。お急ぎの場合は追加料金で最短当日納品も可能です。',
  },
  {
    question: 'どのようなAIツールを使用していますか？',
    answer: 'Runway Gen-3、Pika Labs、Stable Video Diffusion、LumaAI、KlingAIなど、最新のAI動画生成ツールを用途に応じて使い分けています。常に新しいツールの検証も行っています。',
  },
  {
    question: '修正対応は可能ですか？',
    answer: 'はい、初回納品後3回まで無料で修正対応いたします。それ以降の修正については別途料金が発生する場合がございます。',
  },
  {
    question: '著作権はどうなりますか？',
    answer: '制作した動画の著作権は、料金お支払い完了後にお客様に帰属いたします。AI生成の特性上、類似する表現が生まれる可能性があることをご了承ください。',
  },
  {
    question: 'どのような形式で納品されますか？',
    answer: 'MP4形式（1080p/4K）での納品が基本となります。その他の形式やサイズが必要な場合はご相談ください。元素材やプロジェクトファイルの提供も可能です。',
  },
  {
    question: 'コンサルティングサービスの内容を教えてください',
    answer: 'AI動画制作の導入支援、ツールの選定・使い方指導、社内制作体制の構築サポートなどを行います。オンライン・オフライン問わず対応可能です。',
  },
  {
    question: '海外のクライアントでも対応可能ですか？',
    answer: '英語でのコミュニケーションも可能です。時差の関係でレスポンス時間が変わる場合がございますが、品質に変わりはございません。',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">よくあるご質問</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI動画制作に関してお客様からよくいただくご質問をまとめました。
            こちらで解決しない場合は、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <HelpCircle className="h-6 w-6 text-primary-500 mt-1" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">他にご質問はございませんか？</h3>
            <p className="text-muted-foreground mb-6">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@ryominami.com"
                className="btn-primary"
              >
                メールで質問する
              </a>
              <a
                href="https://twitter.com/ryo05m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                TwitterでDM
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}