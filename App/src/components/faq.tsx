'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: 'AI動画制作の料金はどのくらいかかりますか？',
    answer: 'プロジェクトの規模や内容により異なりますが、一般的には5万円〜50万円程度です。短編動画（30秒程度）は5万円〜、本格的なプロモーション動画は20万円〜となります。詳細なお見積りは無料でご提供いたします。'
  },
  {
    question: '制作期間はどのくらいですか？',
    answer: 'AIツールを活用することで従来より大幅に短縮できます。シンプルな動画は1〜3日、複雑な内容でも1〜2週間程度で完成します。急ぎの案件についてもご相談ください。'
  },
  {
    question: 'どのようなジャンルの動画が制作可能ですか？',
    answer: 'CM風、MV風、アート系、実写風、アニメーション風など幅広いジャンルに対応しています。Runway、Pika Labs、Stable Video Diffusion等の特性を活かし、最適なツールを選択して制作いたします。'
  },
  {
    question: '修正は何回まで可能ですか？',
    answer: '基本的に修正回数に制限は設けておりません。お客様にご満足いただけるまで調整いたします。ただし、大幅な内容変更の場合は追加料金が発生する場合があります。'
  },
  {
    question: '著作権はどうなりますか？',
    answer: '制作した動画の著作権は基本的にお客様に帰属します。ただし、使用するAIツールの利用規約に準拠する必要があります。商用利用についても事前にご相談ください。'
  },
  {
    question: 'AIツールだけでなく従来の映像制作も可能ですか？',
    answer: 'はい、従来の映像制作技術とAI技術を組み合わせたハイブリッド制作も承っております。プロジェクトの要件に応じて最適な手法をご提案いたします。'
  },
  {
    question: 'データの納品形式は選べますか？',
    answer: 'MP4、MOV、AVI等の一般的な形式に対応しております。解像度も4K、FHD、HD等お客様のご要望に応じて調整可能です。YouTubeやSNS向けの最適化も承ります。'
  },
  {
    question: 'まずは相談だけでも可能ですか？',
    answer: 'もちろんです。初回相談は無料で承っております。プロジェクトの内容やご予算、AI動画制作の可能性について詳しくご説明いたします。お気軽にお問い合わせください。'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-card border border-gray-200 dark:border-gray-700 rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
        よくあるご質問
      </h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left bg-accent/50 hover:bg-accent transition-colors flex items-center justify-between"
            >
              <span className="font-medium text-foreground">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-muted-foreground" />
              </motion.div>
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
                  <div className="px-6 py-4 bg-background text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          その他のご質問がございましたら、お気軽にお問い合わせください。
        </p>
        <a
          href="mailto:contact@ai-video-creator.com"
          className="inline-flex items-center px-6 py-3 bg-ai-blue hover:bg-ai-blue/90 text-white rounded-lg font-medium transition-colors"
        >
          その他のご質問をする
        </a>
      </div>
    </motion.div>
  )
}