import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  const formData = await request.formData()
  const files = formData.getAll('files') as File[]

  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  await mkdir(uploadDir, { recursive: true })

  const saved: string[] = []

  for (const file of files) {
    if (file && typeof file.arrayBuffer === 'function') {
      const buffer = Buffer.from(await file.arrayBuffer())
      const filename = `${Date.now()}-${file.name}`
      await writeFile(path.join(uploadDir, filename), buffer)
      saved.push(`/uploads/${filename}`)
    }
  }

  return NextResponse.json({ files: saved })
}
