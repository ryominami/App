'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Upload, X, CheckCircle, AlertCircle, FileVideo, File } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  deadline: string
  description: string
  files: File[]
}

interface UploadedFile {
  file: File
  preview?: string
  type: 'video' | 'image' | 'document'
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    deadline: '',
    description: '',
    files: []
  })
  
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    const newFiles: UploadedFile[] = []
    
    Array.from(files).forEach(file => {
      // Validate file type and size
      const isVideo = file.type.startsWith('video/')
      const isImage = file.type.startsWith('image/')
      const isDocument = file.type.includes('pdf') || file.type.includes('doc') || file.type.includes('txt')
      
      if (!isVideo && !isImage && !isDocument) {
        alert(`${file.name} は対応していないファイル形式です。`)
        return
      }

      // Check file size (max 50MB for videos, 10MB for others)
      const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024
      if (file.size > maxSize) {
        alert(`${file.name} のファイルサイズが大きすぎます。`)
        return
      }

      const fileType: 'video' | 'image' | 'document' = isVideo ? 'video' : isImage ? 'image' : 'document'
      
      const uploadedFile: UploadedFile = {
        file,
        type: fileType
      }

      // Create preview for images and videos
      if (isImage || isVideo) {
        const reader = new FileReader()
        reader.onload = (e) => {
          uploadedFile.preview = e.target?.result as string
          setUploadedFiles(prev => [...prev, uploadedFile])
        }
        reader.readAsDataURL(file)
      } else {
        newFiles.push(uploadedFile)
      }
    })

    if (newFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newFiles])
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your API
      console.log('Form data:', formData)
      console.log('Uploaded files:', uploadedFiles)
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          deadline: '',
          description: '',
          files: []
        })
        setUploadedFiles([])
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card border border-gray-200 dark:border-gray-700 rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">お問い合わせフォーム</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              お名前 <span className="text-creative-red">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
              placeholder="山田 太郎"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              メールアドレス <span className="text-creative-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
              placeholder="example@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              会社名・団体名
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
              placeholder="株式会社○○"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              電話番号
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
              placeholder="03-1234-5678"
            />
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              ご希望サービス <span className="text-creative-red">*</span>
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
            >
              <option value="">選択してください</option>
              <option value="video-production">AI動画制作</option>
              <option value="consulting">コンサルティング</option>
              <option value="workshop">ワークショップ</option>
              <option value="course">オンライン講座</option>
              <option value="other">その他</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              ご予算
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
            >
              <option value="">選択してください</option>
              <option value="under-50000">5万円未満</option>
              <option value="50000-100000">5万円〜10万円</option>
              <option value="100000-300000">10万円〜30万円</option>
              <option value="300000-500000">30万円〜50万円</option>
              <option value="over-500000">50万円以上</option>
              <option value="negotiable">要相談</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              希望納期
            </label>
            <select
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors"
            >
              <option value="">選択してください</option>
              <option value="urgent">急ぎ（1週間以内）</option>
              <option value="2weeks">2週間以内</option>
              <option value="1month">1ヶ月以内</option>
              <option value="flexible">柔軟に対応可能</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            プロジェクト詳細 <span className="text-creative-red">*</span>
          </label>
          <textarea
            name="description"
            required
            rows={6}
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-700 rounded-lg focus:border-ai-blue focus:ring-1 focus:ring-ai-blue transition-colors resize-none"
            placeholder="制作したい動画の内容、用途、参考動画、特別な要望などを詳しくお聞かせください。"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            参考ファイル（動画・画像・資料）
          </label>
          <div
            className={`file-upload border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              isDragOver ? 'border-ai-blue bg-ai-blue/5' : 'border-gray-200 dark:border-gray-700 hover:border-ai-blue/50'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-foreground font-medium mb-2">
              ファイルをドロップするか、クリックして選択
            </p>
            <p className="text-sm text-muted-foreground">
              動画（50MB以下）、画像・資料（10MB以下）<br />
              対応形式: MP4, MOV, AVI, JPG, PNG, PDF, DOC, TXT
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="video/*,image/*,.pdf,.doc,.docx,.txt"
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-medium text-foreground">アップロード済みファイル:</h4>
              {uploadedFiles.map((uploadedFile, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                  <div className="flex items-center space-x-3">
                    {uploadedFile.type === 'video' && <FileVideo size={20} className="text-ai-blue" />}
                    {uploadedFile.type === 'image' && uploadedFile.preview && (
                      <img src={uploadedFile.preview} alt="preview" className="w-8 h-8 object-cover rounded" />
                    )}
                    {uploadedFile.type === 'document' && <File size={20} className="text-muted-foreground" />}
                    <div>
                      <p className="text-sm font-medium text-foreground">{uploadedFile.file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-destructive/20 rounded transition-colors"
                  >
                    <X size={16} className="text-destructive" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-blue/80 hover:from-ai-blue/90 hover:to-ai-blue/70 disabled:from-muted disabled:to-muted text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:scale-100"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle size={20} />
                <span>送信完了</span>
              </>
            ) : submitStatus === 'error' ? (
              <>
                <AlertCircle size={20} />
                <span>送信エラー</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>送信する</span>
              </>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-center text-sm text-green-600 mt-2">
              お問い合わせありがとうございました。24時間以内にご返信いたします。
            </p>
          )}
          
          {submitStatus === 'error' && (
            <p className="text-center text-sm text-destructive mt-2">
              送信に失敗しました。しばらく後にもう一度お試しください。
            </p>
          )}
        </div>
      </form>
    </motion.div>
  )
}