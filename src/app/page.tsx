import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { BlogPreview } from '@/components/blog-preview'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <PortfolioPreview />
      <BlogPreview />
      <CTASection />
    </div>
  )
}