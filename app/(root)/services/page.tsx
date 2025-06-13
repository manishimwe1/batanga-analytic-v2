
import { ServicesCard } from "@/components/services-card";
import { SectionTitle } from "@/components/ui/section-title";
import { Shield, Database, Server, Globe, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-batanga-darkblue to-batanga-oceanblue py-16 px-4">
        <div className="container mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Comprehensive analytics and cybersecurity solutions for your business needs
          </p>
        </div>
      </section>
      
      {/* Data Analytics Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle>Data Analytics Solutions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 border-t-4 border-batanga-skyblue shadow-sm">
              <Database className="h-10 w-10 text-batanga-oceanblue mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Strategy Consultancy</h3>
              <p className="text-gray-600 mb-4">Expert guidance on developing and implementing effective data strategies.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-t-4 border-batanga-skyblue shadow-sm">
              <Server className="h-10 w-10 text-batanga-oceanblue mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Building robust data pipelines and infrastructure for efficient data processing.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-t-4 border-batanga-skyblue shadow-sm">
              <Code className="h-10 w-10 text-batanga-oceanblue mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <p className="text-gray-600 mb-4">Advanced analytics and machine learning to extract valuable insights from your data.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cybersecurity Services with Image */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-batanga-darkblue mb-4">
                Cybersecurity and AI Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Protect your digital assets with our comprehensive cybersecurity services. We offer advanced threat detection,
                vulnerability assessments, and incident response to keep your business safe from cyber threats.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <Shield className="h-8 w-8 text-batanga-oceanblue mb-2" />
                  <h3 className="font-bold mb-1">Threat Protection</h3>
                  <p className="text-sm text-gray-600">Advanced solutions to identify and mitigate security threats.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <Globe className="h-8 w-8 text-batanga-oceanblue mb-2" />
                  <h3 className="font-bold mb-1">Network Security</h3>
                  <p className="text-sm text-gray-600">Secure your network infrastructure against unauthorized access.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Cybersecurity Protection" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Management */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle>Data Analytics Platforms</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ServicesCard
              title="Data Platform Development"
              items={[
                "Custom data warehouse design",
                "ETL pipeline development",
                "Data quality management",
                "Real-time analytics integration"
              ]}
            />
            <ServicesCard
              title="Platform Management"
              items={[
                "Ongoing platform maintenance",
                "Performance optimization",
                "Scalability solutions",
                "Cost management"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-8 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to transform your business with data?
          </h2>
          <Button className="bg-batanga-darkblue hover:bg-batanga-oceanblue">
            Get Started Today
          </Button>
        </div>
      </section>
      
     
    </div>
  );
}
