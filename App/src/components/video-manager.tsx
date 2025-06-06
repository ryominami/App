'use client';

import { useState } from 'react';
import { VideoUpload } from './video-upload';
import { Play, Trash2, Edit, Download } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  createdAt: Date;
}

export function VideoManager() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleUpload = async (file: File) => {
    // TODO: 実際のアップロード処理を実装
    const newVideo: Video = {
      id: Math.random().toString(36).substr(2, 9),
      title: file.name,
      url: URL.createObjectURL(file),
      createdAt: new Date(),
    };
    setVideos([...videos, newVideo]);
  };

  const handleDelete = (id: string) => {
    setVideos(videos.filter(video => video.id !== id));
    if (selectedVideo?.id === id) {
      setSelectedVideo(null);
    }
  };

  const handleDownload = (video: Video) => {
    const link = document.createElement('a');
    link.href = video.url;
    link.download = video.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* アップロードセクション */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold">動画アップロード</h2>
            <span className="px-3 py-1 bg-ai-blue/10 text-ai-blue text-sm font-medium rounded-full">
              {videos.length}件
            </span>
          </div>
          <VideoUpload onUpload={handleUpload} />
        </div>

        {/* 動画一覧セクション */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            {videos.length === 0 ? 'アップロード履歴' : `アップロード済み動画 (${videos.length}件)`}
          </h2>
          
          {videos.length === 0 ? (
            <div className="text-center py-12 bg-card border border-dashed border-border rounded-xl">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0v14a2 2 0 002 2h6a2 2 0 002-2V4M9 8v6m6-6v6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">まだ動画がありません</h3>
              <p className="text-muted-foreground">
                左側のアップロードエリアから動画をアップロードしてください
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto pr-2">
              {videos.map((video) => (
              <div
                key={video.id}
                className="card-hover p-6 border border-border rounded-xl bg-card transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="p-3 hover:bg-primary/10 rounded-full transition-all duration-200 group"
                    >
                      <Play className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </button>
                    <div>
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-gray-500">
                        {video.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDownload(video)}
                      className="p-2 hover:bg-blue-50 rounded-full transition-all duration-200 group"
                      title="ダウンロード"
                    >
                      <Download className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200 group">
                      <Edit className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleDelete(video.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-all duration-200 group"
                    >
                      <Trash2 className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 動画プレビュー */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-6 max-w-4xl w-full shadow-2xl animate-fade-in-up">
            <div className="video-container rounded-xl overflow-hidden mb-6">
              <video
                src={selectedVideo.url}
                controls
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{selectedVideo.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedVideo.createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleDownload(selectedVideo)}
                  className="btn-gradient px-6 py-3 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>ダウンロード</span>
                </button>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 