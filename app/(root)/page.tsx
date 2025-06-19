import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import StatCard from "@/components/StatCard";

import CTASection from "@/components/CTASection";
import FeatureSections from "@/components/FeatureSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import { HeroSection } from "@/components/hero-section";
import {
  getAboutUs,
  getFeature,
  getFeedback,
  getHeroSection,
  getServicesCard,
  getStatCard,
} from "@/sanity/getContent/homePage";
export default async function Home() {
  const HeroSectionContent = await getHeroSection();
  const statCard = await getStatCard();
  const aboutUs = await getAboutUs();
  const services = await getServicesCard();
  const feedback = await getFeedback();
  const features = await getFeature();

  console.log(HeroSectionContent);
  
  
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
        <ServicesSection services={services} />

        {/* Featured Service Section */}
        <FeatureSections features={features}/>

        {/* Testimonials Section */}
        <TestimonialsSection feedback={feedback} />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
