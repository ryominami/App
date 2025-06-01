'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Twitter, Clock, CheckCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'メール',
    description: 'お気軽にメールでご連絡ください',
    contact: 'contact@ai-video-creator.com',
    action: 'mailto:contact@ai-video-creator.com',
    color: 'text-ai-blue'
  },
  {
    icon: MessageCircle,
    title: 'LINE',
    description: 'LINEでのお問い合わせも可能です',
    contact: '@ai-video-creator',
    action: '#',
    color: 'text-green-500'
  },
  {
    icon: Twitter,
    title: 'Twitter DM',
    description: 'TwitterのDMでもご相談承ります',
    contact: '@ryo05m',
    action: 'https://twitter.com/ryo05m',
    color: 'text-blue-400'
  }
]

const responseInfo = [
  {
    icon: Clock,
    title: '初回返信',
    description: '24時間以内',
    detail: 'お問い合わせから24時間以内に初回返信いたします'
  },
  {
    icon: CheckCircle,
    title: 'お見積り',
    description: '48時間以内',
    detail: 'プロジェクト詳細確認後、48時間以内にお見積りをお送りします'
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-card border border-gray-200 dark:border-gray-700 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6">直接お問い合わせ</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : undefined}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex items-center space-x-4 p-4 bg-accent/50 hover:bg-accent rounded-lg transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-lg bg-background ${method.color}`}>
                <method.icon size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-ai-blue transition-colors">
                  {method.title}
                </h4>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                <p className="text-sm font-medium text-ai-blue">{method.contact}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Response Time */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-card border border-gray-200 dark:border-gray-700 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6">対応時間</h3>
        <div className="space-y-4">
          {responseInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-accent/50 rounded-lg"
            >
              <div className="p-2 rounded-lg bg-ai-blue/20 text-ai-blue">
                <info.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-foreground">{info.title}</h4>
                  <span className="text-sm font-semibold text-ai-blue">{info.description}</span>
                </div>
                <p className="text-sm text-muted-foreground">{info.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-card border border-gray-200 dark:border-gray-700 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">営業時間</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">平日</span>
            <span className="text-foreground">9:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">土日祝</span>
            <span className="text-foreground">メール対応のみ</span>
          </div>
          <div className="mt-4 p-3 bg-accent/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              ※緊急のご相談は営業時間外でも可能な限り対応いたします。
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-br from-ai-blue/10 to-creative-red/10 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center"
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">まずは無料相談から</h3>
        <p className="text-sm text-muted-foreground mb-4">
          プロジェクトの詳細やご予算について、お気軽にご相談ください。
          AI動画制作の可能性について詳しくご説明いたします。
        </p>
        <div className="text-xs text-muted-foreground">
          相談料無料 • 秘密保持契約対応 • オンライン面談可能
        </div>
      </motion.div>
    </div>
  )
}