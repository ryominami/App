import { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { FAQSection } from '@/components/contact/faq-section'

export const metadata: Metadata = {
  title: 'お問い合わせ | AI Video Creator - Ryo Minami',
  description: 'AI動画制作のご相談やお見積もり依頼はこちらから。24時間以内にご返信いたします。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">お問い合わせ</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              AI動画制作に関するご相談やお見積もり依頼など、
              お気軽にお問い合わせください。24時間以内にご返信いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}