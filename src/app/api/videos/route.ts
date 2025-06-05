import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    const files = await readdir(uploadDir)
    const videoFiles = files.filter(file => file.match(/\.(mp4|mov|webm|avi)$/i))
    const urls = videoFiles.map(file => `/uploads/${file}`)
    return NextResponse.json({ files: urls })
  } catch (e) {
    return NextResponse.json({ files: [] })
  }
}
