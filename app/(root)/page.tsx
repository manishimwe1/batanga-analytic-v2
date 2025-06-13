
import AboutUsSection from "@/components/AboutUsSection";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import StatCard from "@/components/StatCard";

import CTASection from "@/components/CTASection";
import FeatureSections from "@/components/FeatureSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import { HeroSection } from "@/components/hero-section";
import Footer from "@/components/footer";
import { getAboutUs, getHeroSection, getStatCard } from "@/sanity/getContent/homePage";

export default async function Home() {
  const HeroSectionContent = await getHeroSection()
  console.log(HeroSectionContent);
  const statCard = await getStatCard()
  console.log(statCard);
  const aboutUs = await getAboutUs()
  console.log(aboutUs);
  
  return (
    <div className="flex min-h-screen flex-col ">

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection HeroSectionContent={HeroSectionContent} />

        {/* Stats Section */}
        <StatCard statCardContent={statCard} />

        {/* About Us Section */}
        <AboutUsSection aboutUs={aboutUs!} />

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
