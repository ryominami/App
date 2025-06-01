'use client'

import { useState } from 'react'
import { VideoCard } from './VideoCard'
import { sampleVideos } from '@/data/videos'
import { Filter, Search } from 'lucide-react'

export function VideoGallery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('全て')
  
  const categories = ['全て', 'AI生成', 'AI編集', 'ディープラーニング', 'コンピュータビジョン']
  
  const filteredVideos = sampleVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === '全て' || video.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <section id="videos" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI動画ポートフォリオ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新のAI技術を活用した動画制作・編集プロジェクトをご覧ください
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="動画を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              検索条件に一致する動画が見つかりませんでした。
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">{sampleVideos.length}</div>
            <div className="text-gray-600">動画プロジェクト</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">15+</div>
            <div className="text-gray-600">AI技術</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">10+</div>
            <div className="text-gray-600">開発ツール</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">4</div>
            <div className="text-gray-600">専門分野</div>
          </div>
        </div>
      </div>
    </section>
  )
}