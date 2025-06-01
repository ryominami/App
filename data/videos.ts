import { Video } from '@/types/video'

export const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'AIによる自動動画生成デモ',
    description: 'テキストプロンプトから自動で動画を生成するAIシステムのデモンストレーション',
    thumbnailUrl: 'https://via.placeholder.com/400x225/3B82F6/ffffff?text=AI%E5%8B%95%E7%94%BB%E7%94%9F%E6%88%90',
    videoUrl: '#',
    duration: '2:30',
    category: 'AI生成',
    tags: ['機械学習', 'テキストto動画', 'ジェネレーティブAI'],
    createdAt: '2024-01-15',
    aiTechniques: ['Diffusion Models', 'Transformer', 'GANs'],
    tools: ['Runway ML', 'Stable Video Diffusion', 'Custom PyTorch']
  },
  {
    id: '2',
    title: 'リアルタイム顔認識・追跡システム',
    description: 'OpenCVとディープラーニングを使用したリアルタイム顔認識・追跡システム',
    thumbnailUrl: 'https://via.placeholder.com/400x225/8B5CF6/ffffff?text=%E9%A1%94%E8%AA%8D%E8%AD%98AI',
    videoUrl: '#',
    duration: '1:45',
    category: 'コンピュータビジョン',
    tags: ['顔認識', 'リアルタイム処理', 'OpenCV'],
    createdAt: '2024-01-20',
    aiTechniques: ['CNN', 'YOLO', 'Face Detection'],
    tools: ['OpenCV', 'MediaPipe', 'TensorFlow']
  },
  {
    id: '3',
    title: 'AI動画編集アシスタント',
    description: '自動シーン検出とハイライト抽出を行うAI動画編集アシスタントの機能紹介',
    thumbnailUrl: 'https://via.placeholder.com/400x225/10B981/ffffff?text=AI%E7%B7%A8%E9%9B%86',
    videoUrl: '#',
    duration: '3:15',
    category: 'AI編集',
    tags: ['自動編集', 'シーン検出', 'ハイライト抽出'],
    createdAt: '2024-02-01',
    aiTechniques: ['Scene Classification', 'Audio Analysis', 'Motion Detection'],
    tools: ['FFmpeg', 'scikit-learn', 'Librosa']
  },
  {
    id: '4',
    title: 'ニューラルスタイル転送動画',
    description: 'ディープラーニングによるアーティスティックスタイル転送を動画に適用したデモ',
    thumbnailUrl: 'https://via.placeholder.com/400x225/F59E0B/ffffff?text=%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E8%BB%A2%E9%80%81',
    videoUrl: '#',
    duration: '2:00',
    category: 'ディープラーニング',
    tags: ['スタイル転送', 'ニューラルネットワーク', 'アート'],
    createdAt: '2024-02-10',
    aiTechniques: ['Neural Style Transfer', 'CNN', 'Perceptual Loss'],
    tools: ['PyTorch', 'VGG-19', 'Custom Architecture']
  },
  {
    id: '5',
    title: '音声同期リップシンク生成',
    description: 'AI技術を使用して音声に合わせたリアルな口の動きを生成するシステム',
    thumbnailUrl: 'https://via.placeholder.com/400x225/EF4444/ffffff?text=%E3%83%AA%E3%83%83%E3%83%97%E3%82%B7%E3%83%B3%E3%82%AF',
    videoUrl: '#',
    duration: '2:45',
    category: 'AI生成',
    tags: ['音声同期', 'フェイシャルアニメーション', 'ディープフェイク'],
    createdAt: '2024-02-15',
    aiTechniques: ['Wav2Lip', 'Audio-Visual Sync', 'Face Reenactment'],
    tools: ['Wav2Lip', 'DLib', 'OpenCV']
  },
  {
    id: '6',
    title: '3D物体検出・追跡システム',
    description: 'ディープラーニングを活用した3D空間での物体検出・追跡システムのデモ',
    thumbnailUrl: 'https://via.placeholder.com/400x225/6366F1/ffffff?text=3D%E7%89%A9%E4%BD%93%E6%A4%9C%E5%87%BA',
    videoUrl: '#',
    duration: '3:30',
    category: 'コンピュータビジョン',
    tags: ['3D検出', '物体追跡', 'ポイントクラウド'],
    createdAt: '2024-03-01',
    aiTechniques: ['PointNet', '3D CNN', 'SLAM'],
    tools: ['PCL', 'Open3D', 'ROS']
  }
]