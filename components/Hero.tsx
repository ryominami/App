import { Brain, Sparkles, Video } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Brain className="h-12 w-12 text-blue-600 animate-pulse" />
          <Sparkles className="h-8 w-8 text-yellow-500" />
          <Video className="h-10 w-10 text-purple-600" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI技術で創る
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            動画ポートフォリオ
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          最先端のAI技術を活用した動画制作・編集のポートフォリオサイトです。
          機械学習とクリエイティブを融合させた革新的な動画コンテンツをご紹介します。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            動画を見る
          </button>
          <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300">
            詳しく見る
          </button>
        </div>
      </div>
    </section>
  )
}