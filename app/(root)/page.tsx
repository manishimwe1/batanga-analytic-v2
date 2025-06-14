
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import StatCard from "@/components/StatCard";

import CTASection from "@/components/CTASection";
import FeatureSections from "@/components/FeatureSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import { HeroSection } from "@/components/hero-section";
import { getAboutUs, getFeedback, getHeroSection, getServicesCard, getStatCard } from "@/sanity/getContent/homePage";
import { StatsSection } from "@/components/stats-section";

export default async function Home() {
  const HeroSectionContent = await getHeroSection()
  console.log(HeroSectionContent);
  const statCard = await getStatCard()
  console.log(statCard);
  const aboutUs = await getAboutUs()
  const services = await getServicesCard()
  console.log(services);
  const feedback = await getFeedback()
  console.log(feedback);
  
  return (
    <div className="flex min-h-screen flex-col ">

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection HeroSectionContent={HeroSectionContent} />

        {/* Stats Section */}
        <StatsSection statCardContent={statCard} />

        {/* About Us Section */}
        <AboutUsSection aboutUs={aboutUs!} />

        {/* Services Section */}
        <ServicesSection services={services} />

        {/* Featured Service Section */}
        <FeatureSections />

        {/* Testimonials Section */}
        <TestimonialsSection feedback={feedback}/>

        {/* CTA Section */}
        <CTASection />
      </main>

    </div>
  );
}
