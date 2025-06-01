'use client'

import { Video, Brain, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Brain className="h-8 w-8 text-blue-600" />
              <Video className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">AI動画ポートフォリオ</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              ホーム
            </a>
            <a href="#videos" className="text-gray-700 hover:text-blue-600 font-medium">
              動画一覧
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              について
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              お問い合わせ
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                ホーム
              </a>
              <a href="#videos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                動画一覧
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                について
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}