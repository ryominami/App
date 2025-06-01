# AI動画管理ポートフォリオ

## 概要
最先端のAI技術を活用した動画制作・編集のポートフォリオサイトです。機械学習とクリエイティブを融合させた革新的な動画コンテンツを紹介します。

## 特徴
- **AI動画生成**: テキストプロンプトから自動で動画を生成
- **リアルタイム処理**: 顔認識・追跡システム
- **自動編集**: AIによるシーン検出とハイライト抽出
- **スタイル転送**: ディープラーニングによるアーティスティック変換
- **音声同期**: AIを使用したリップシンク生成
- **3D物体検出**: 空間での物体検出・追跡

## 技術スタック
- **フロントエンド**: Next.js 14, React 18, TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **AI技術**: TensorFlow, PyTorch, OpenCV, MediaPipe

## 開発環境のセットアップ

### 前提条件
- Node.js 18.0.0以上
- npm または yarn

### インストール
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド
```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## プロジェクト構成
```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # ヘッダーコンポーネント
│   ├── Hero.tsx           # ヒーローセクション
│   ├── VideoCard.tsx      # 動画カードコンポーネント
│   └── VideoGallery.tsx   # 動画ギャラリー
├── data/                  # サンプルデータ
│   └── videos.ts          # 動画データ
├── types/                 # TypeScript型定義
│   └── video.ts           # 動画型定義
└── README.md
```

## 使用しているAI技術
- **Diffusion Models**: 動画生成
- **Transformer**: 自然言語処理
- **CNN**: 画像・動画認識
- **GANs**: 生成モデル
- **YOLO**: リアルタイム物体検出
- **Neural Style Transfer**: スタイル変換
- **Wav2Lip**: 音声同期
- **PointNet**: 3D物体認識

## ライセンス
MIT License
