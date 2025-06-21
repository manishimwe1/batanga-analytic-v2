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
import TrainingAcademy from "@/components/TrainingAcademy";
import { Button } from "@/components/ui/button";
export default async function Home() {
  const HeroSectionContent = await getHeroSection();
  const statCard = await getStatCard();
  const aboutUs = await getAboutUs();
  const services = await getServicesCard();
  const feedback = await getFeedback();
  const features = await getFeature();

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

        <FeatureSections features={features} />

        {/* training academy Section */}
        <TrainingAcademy />
        {/* Testimonials Section */}
        <TestimonialsSection feedback={feedback} />

        <div className="flex items-center w-full py-10 justify-center">
          <Button className="bg-yellow-500 text-black">Reques Demo</Button>
        </div>
        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
