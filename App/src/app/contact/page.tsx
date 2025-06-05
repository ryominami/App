import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import { FAQ } from '@/components/faq'

export const metadata = {
  title: 'お問い合わせ | AI動画クリエイター',
  description: 'AI動画制作のご相談・お見積りはこちら。無料相談も承っております。',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">お問い合わせ</span>
            <span className="gradient-text">・ご相談</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI動画制作に関するご質問やプロジェクトのご相談など、
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQ />
        </div>
      </div>
    </div>
  )
}