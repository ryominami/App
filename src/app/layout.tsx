import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})

export const metadata: Metadata = {
  title: 'AI動画クリエイター | プロフェッショナルサイト',
  description: 'AI動画制作のプロフェッショナル。Runway、Pika Labs等の最新AIツールを使用した高品質な動画制作サービスを提供。',
  keywords: 'AI動画制作, Runway, Pika Labs, 動画クリエイター, AI動画生成',
  authors: [{ name: 'Ryo' }],
  openGraph: {
    title: 'AI動画クリエイター | プロフェッショナルサイト',
    description: 'AI動画制作のプロフェッショナル。最新AIツールを使用した高品質な動画制作サービス。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ryo05m',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}