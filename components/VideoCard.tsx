import { Video } from '@/types/video'
import { Play, Clock, Tag, Brain } from 'lucide-react'

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI生成':
        return 'bg-blue-100 text-blue-800'
      case 'AI編集':
        return 'bg-green-100 text-green-800'
      case 'ディープラーニング':
        return 'bg-purple-100 text-purple-800'
      case 'コンピュータビジョン':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {video.duration}
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>
            {video.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {video.description}
        </p>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Brain className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">AI技術:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {video.aiTechniques.slice(0, 3).map((technique, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
              >
                {technique}
              </span>
            ))}
            {video.aiTechniques.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                +{video.aiTechniques.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {video.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
          {video.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
              +{video.tags.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{video.createdAt}</span>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            詳細を見る →
          </button>
        </div>
      </div>
    </div>
  )
}