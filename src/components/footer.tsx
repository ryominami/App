import Link from 'next/link'
import { Twitter, Youtube, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-blue to-creative-red rounded-lg"></div>
              <span className="font-bold text-xl">AI Video Creator</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              AI技術を駆使した革新的な動画制作で、あなたのクリエイティブなビジョンを現実にします。
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/ryo05m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-creative-red transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-creative-red transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-ai-blue transition-colors">
                  ポートフォリオ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-ai-blue transition-colors">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-ai-blue transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">サービス</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">AI動画制作</li>
              <li className="text-muted-foreground">コンサルティング</li>
              <li className="text-muted-foreground">ワークショップ</li>
              <li className="text-muted-foreground">オンライン講座</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 AI Video Creator. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with ❤️ using Next.js & AI
          </p>
        </div>
      </div>
    </footer>
  )
}