export interface Video {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  duration: string
  category: 'AI生成' | 'AI編集' | 'ディープラーニング' | 'コンピュータビジョン'
  tags: string[]
  createdAt: string
  aiTechniques: string[]
  tools: string[]
}