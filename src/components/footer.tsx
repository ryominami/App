import Link from 'next/link'
import { Twitter, Youtube, Instagram, Mail, Play } from 'lucide-react'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/ryo05m',
    icon: Twitter,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Email',
    href: 'mailto:contact@ryominami.com',
    icon: Mail,
  },
]

const footerNavigation = {
  main: [
    { name: 'ポートフォリオ', href: '/portfolio' },
    { name: 'ブログ', href: '/blog' },
    { name: 'サービス', href: '/services' },
    { name: 'プロフィール', href: '/about' },
  ],
  services: [
    { name: 'AI動画制作', href: '/services#video-production' },
    { name: 'コンサルティング', href: '/services#consulting' },
    { name: 'ワークショップ', href: '/services#workshop' },
    { name: 'オンライン講座', href: '/services#courses' },
  ],
  resources: [
    { name: 'AIツール比較', href: '/blog/ai-tools' },
    { name: 'チュートリアル', href: '/blog/tutorials' },
    { name: '業界ニュース', href: '/blog/news' },
    { name: 'FAQ', href: '/faq' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Play className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-bold gradient-text">
                  Ryo Minami
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                AI動画制作のプロフェッショナル。最新のAI技術を活用した映像コンテンツ制作とコンサルティングを提供しています。
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary-500 hover:text-white transition-all duration-200 group"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">メインページ</h3>
              <ul className="space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">サービス</h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">リソース</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ryo Minami. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 text-sm"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 text-sm"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}