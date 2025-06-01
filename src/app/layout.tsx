import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Video Creator | Ryo Minami',
  description: 'AI動画クリエイター Ryo Minamiのプロフェッショナルサイト。最新のAI動画制作技術とポートフォリオを紹介。',
  keywords: 'AI動画生成, AI動画クリエイター, Runway, Pika Labs, 動画制作, プロンプトエンジニアリング',
  authors: [{ name: 'Ryo Minami' }],
  creator: 'Ryo Minami',
  openGraph: {
    title: 'AI Video Creator | Ryo Minami',
    description: 'AI動画クリエイター Ryo Minamiのプロフェッショナルサイト',
    url: 'https://ryominami.com',
    siteName: 'AI Video Creator',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Creator | Ryo Minami',
    description: 'AI動画クリエイター Ryo Minamiのプロフェッショナルサイト',
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}