'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

interface VideoUploadProps {
  onUpload: (file: File) => void;
}

export function VideoUpload({ onUpload }: VideoUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    setErrorMessage('');
    
    if (rejectedFiles.length > 0) {
      setUploadStatus('error');
      setErrorMessage('対応していないファイル形式です。MP4, MOV, AVI, WMVのみ対応しています。');
      return;
    }

    const file = acceptedFiles[0];
    if (!file) return;

    // ファイルサイズチェック (100MB制限)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      setUploadStatus('error');
      setErrorMessage('ファイルサイズが大きすぎます。100MB以下のファイルを選択してください。');
      return;
    }

    if (file.type.startsWith('video/')) {
      setUploadedFile(file);
      setUploadStatus('uploading');
      setUploadProgress(0);
      
      // 模擬的なアップロード進行状況
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setUploadStatus('success');
            onUpload(file);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    } else {
      setUploadStatus('error');
      setErrorMessage('動画ファイルを選択してください。');
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.wmv']
    },
    maxFiles: 1,
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
    setUploadStatus('idle');
    setUploadProgress(0);
    setErrorMessage('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div
        {...getRootProps()}
        className={`file-upload p-8 rounded-xl text-center cursor-pointer transition-all animate-fade-in-up
          ${isDragActive ? 'dragover' : ''}
          ${uploadedFile && uploadStatus === 'success' ? 'border-green-400 bg-green-50' : ''}
          ${uploadStatus === 'error' ? 'border-red-400 bg-red-50' : ''}`}
      >
        <input {...getInputProps()} />
        {!uploadedFile ? (
          <div className="space-y-4">
            <Upload className={`w-12 h-12 mx-auto transition-colors animate-float
              ${isDragActive ? 'text-ai-blue' : 'text-muted-foreground'}`} />
            <div className="space-y-2">
              <p className="text-lg font-semibold text-foreground">
                動画ファイルをドラッグ＆ドロップ
              </p>
              <p className="text-sm text-muted-foreground">
                またはクリックしてファイルを選択
              </p>
              <p className="text-xs text-muted-foreground">
                対応形式: MP4, MOV, AVI, WMV（最大100MB）
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {uploadStatus === 'success' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {uploadStatus === 'uploading' && (
                  <div className="w-5 h-5 border-2 border-ai-blue border-t-transparent rounded-full animate-spin" />
                )}
                <div className="text-left">
                  <p className="text-sm font-medium truncate max-w-xs">
                    {uploadedFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="p-2 hover:bg-red-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-red-500" />
              </button>
            </div>
            
            {uploadStatus === 'uploading' && (
              <div className="space-y-2">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-ai-blue to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  アップロード中... {uploadProgress}%
                </p>
              </div>
            )}
            
            {uploadStatus === 'success' && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">アップロード完了</span>
              </div>
            )}
          </div>
        )}
      </div>
      
      {errorMessage && (
        <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg animate-fade-in-up">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}
    </div>
  );
} 