import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import { BlogPreview } from '@/components/sections/blog-preview'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PortfolioPreview />
      <BlogPreview />
      <CTASection />
    </div>
  )
}