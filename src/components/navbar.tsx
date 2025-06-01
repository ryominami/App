'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Play } from 'lucide-react'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'ポートフォリオ', href: '/portfolio' },
  { name: 'ブログ', href: '/blog' },
  { name: 'サービス', href: '/services' },
  { name: 'プロフィール', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Play className="h-8 w-8 text-primary-500 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-200" />
            </div>
            <span className="text-xl font-bold gradient-text">
              Ryo Minami
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  pathname === item.href
                    ? 'text-primary-500'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              aria-label="テーマ切り替え"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-200"
              aria-label="メニュー"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200',
                    pathname === item.href
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}