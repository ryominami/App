import { VideoManager } from '@/components/video-manager'

export const metadata = {
  title: '動画アップロード | AI動画クリエイター',
  description: 'あなたの動画作品をアップロードして、ポートフォリオに追加してください。',
}

export default function UploadPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">動画</span>
            <span className="gradient-text">アップロード</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            あなたの素晴らしい動画作品をアップロードして、ポートフォリオに追加してください。
            <br />
            アップロードした動画は即座にポートフォリオページに表示されます。
          </p>
          
          {/* 使用方法 */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-hover p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">動画を選択</h3>
                <p className="text-sm text-muted-foreground">
                  MP4、MOV、AVI、WMV形式の動画ファイルをドラッグ&ドロップまたはクリックして選択
                </p>
              </div>
              
              <div className="card-hover p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">アップロード</h3>
                <p className="text-sm text-muted-foreground">
                  自動的にアップロードが開始され、プログレスバーで進行状況を確認できます
                </p>
              </div>
              
              <div className="card-hover p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-creative-red to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">公開完了</h3>
                <p className="text-sm text-muted-foreground">
                  アップロード完了後、動画一覧に表示され、プレビューやダウンロードが可能になります
                </p>
              </div>
            </div>
            
            {/* 注意事項 */}
            <div className="bg-accent/50 border border-accent rounded-xl p-6 text-left">
              <h4 className="font-semibold mb-3 text-accent-foreground">📝 アップロード時の注意事項</h4>
              <ul className="text-sm text-accent-foreground space-y-2">
                <li>• <strong>ファイルサイズ上限:</strong> 100MB以下</li>
                <li>• <strong>対応形式:</strong> MP4, MOV, AVI, WMV</li>
                <li>• <strong>推奨解像度:</strong> 1920x1080以上</li>
                <li>• <strong>著作権:</strong> アップロードする動画の著作権を持っていることを確認してください</li>
                <li>• <strong>内容:</strong> 不適切なコンテンツは削除される場合があります</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video Manager Component */}
        <div className="animate-fade-in-up">
          <VideoManager />
        </div>
      </div>
    </div>
  )
}