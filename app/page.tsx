import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { PrimaryServices } from "@/components/primary-services"
import { DataAnalyticsSection } from "@/components/data-analytics-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <StatsSection />
      <PrimaryServices />
      <DataAnalyticsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
