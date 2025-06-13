
import AboutUsSection from "@/components/AboutUsSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import StatCard from "@/components/StatCard";

import CTASection from "@/components/CTASection";
import FeatureSections from "@/components/FeatureSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import { HeroSection } from "@/components/hero-section";
import Footer from "@/components/footer";
import { getHeroSection } from "@/sanity/getContent/homePage";

export default async function Home() {
  const HeroSectionContent = await getHeroSection()
  console.log(HeroSectionContent);
  
  return (
    <div className="flex min-h-screen flex-col ">

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection HeroSectionContent={HeroSectionContent} />

        {/* Stats Section */}
        <StatCard />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Service Section */}
        <FeatureSections />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

    </div>
  );
}
