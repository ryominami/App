'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, Clock, MapPin, Phone } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'メール',
    description: '24時間以内にご返信',
    contact: 'contact@ryominami.com',
    action: 'メール送信',
    href: 'mailto:contact@ryominami.com',
  },
  {
    icon: MessageCircle,
    title: 'Twitter DM',
    description: 'お気軽にメッセージください',
    contact: '@ryo05m',
    action: 'DMを送る',
    href: 'https://twitter.com/ryo05m',
  },
  {
    icon: Calendar,
    title: 'オンライン面談',
    description: '詳細なご相談に対応',
    contact: '30分〜60分',
    action: '面談予約',
    href: '/booking',
  },
]

const businessHours = [
  { day: '月曜日 - 金曜日', hours: '9:00 - 18:00' },
  { day: '土曜日', hours: '10:00 - 16:00' },
  { day: '日曜日・祝日', hours: '休業' },
]

const responseInfo = [
  {
    icon: Clock,
    title: '初回レスポンス',
    description: '平均2時間以内',
  },
  {
    icon: Calendar,
    title: '詳細回答',
    description: '24時間以内',
  },
  {
    icon: Phone,
    title: 'お急ぎの場合',
    description: 'メールにて優先対応',
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">お問い合わせ方法</h2>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-200">
                    <method.icon className="h-6 w-6 text-primary-500" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary-500 transition-colors duration-200">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-primary-500">
                    {method.contact}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-muted-foreground group-hover:text-primary-500 transition-colors duration-200">
                    {method.action} →
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">営業時間</h2>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={schedule.day} className="flex justify-between items-center">
              <span className="text-muted-foreground">{schedule.day}</span>
              <span className={`font-medium ${
                schedule.hours === '休業' ? 'text-red-500' : 'text-foreground'
              }`}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-primary-500/10 rounded-lg">
          <p className="text-sm text-primary-500">
            💡 営業時間外でもメールでのお問い合わせは24時間受け付けております。
          </p>
        </div>
      </div>

      {/* Response Information */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">レスポンス時間</h2>
        <div className="space-y-4">
          {responseInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-accent-500/10 rounded-lg flex items-center justify-center">
                <info.icon className="h-4 w-4 text-accent-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location Info */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">拠点情報</h2>
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-primary-500 mt-1" />
          <div>
            <h3 className="font-medium mb-1">東京都</h3>
            <p className="text-sm text-muted-foreground">
              リモートワーク中心での活動となります。<br />
              オンライン面談やチャットでのコミュニケーションが可能です。
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}