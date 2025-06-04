'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [message, setMessage] = useState('')
  const [videos, setVideos] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  const fetchVideos = async () => {
    const res = await fetch('/api/videos')
    if (res.ok) {
      const data = await res.json()
      setVideos(data.files)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!files || files.length === 0) return
    const data = new FormData()
    Array.from(files).forEach(file => data.append('files', file))
    setUploading(true)
    setMessage('')
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: data,
    })
    if (res.ok) {
      setMessage('アップロード完了')
      setFiles(null)
      fetchVideos()
    } else {
      setMessage('アップロードに失敗しました')
    }
    setUploading(false)
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold mb-6">動画アップロード</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={e => setFiles(e.target.files)}
            className="block w-full text-sm"
          />
          <button
            type="submit"
            disabled={uploading}
            className="px-6 py-3 bg-ai-blue text-white rounded-lg disabled:opacity-50"
          >
            {uploading ? 'アップロード中...' : 'アップロード'}
          </button>
          {message && <p className="mt-2 text-foreground">{message}</p>}
        </form>

        {videos.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">アップロード済み動画</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((src, idx) => (
                <video key={idx} src={src} controls className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
