"use client"

import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { IndustryCard } from "@/components/industry-card";
import Link from "next/link";

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-batanga-darkblue to-batanga-oceanblue py-12 md:py-16 px-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Industry Transformation</h1>
          <p className="text-lg md:text-xl mb-4">
            Practical data solutions for every sector.
          </p>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <SectionTitle>Industry Solutions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
                alt="Healthcare Analytics"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-batanga-darkblue">Healthcare</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
                  <li>Predictive patient analytics</li>
                  <li>Clinical trial optimization</li>
                  <li>Personalized medicine</li>
                </ul>
                <Button
                  className="mt-4 bg-batanga-oceanblue hover:bg-batanga-darkblue"
                >
                  <Link href='/contact'>Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Financial Services Analytics"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-batanga-darkblue">Financial Services</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
                  <li>Risk analytics</li>
                  <li>Fraud detection</li>
                </ul>
                <Button
                  className="mt-4 bg-batanga-oceanblue hover:bg-batanga-darkblue"
                  onClick={() => window.location.href = "/contact"}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f"
                alt="Retail Analytics"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-batanga-darkblue">Retail & eCommerce</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
                  <li>Demand forecasting</li>
                  <li>Inventory management</li>
                </ul>
                <Button
                  className="mt-4 bg-batanga-oceanblue hover:bg-batanga-darkblue"
                  onClick={() => window.location.href = "/contact"}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle>Success Stories</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-lg font-bold mb-3 text-batanga-darkblue">Manufacturing Optimization</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Data-driven operational cost reduction through predictive analytics.
              </p>
              <Button variant="outline"
                className="border-batanga-oceanblue text-batanga-oceanblue hover:bg-batanga-oceanblue/10 mb-2"
                onClick={() => window.location.href = "/contact"}
              >
                View Case Study
              </Button>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-lg font-bold mb-3 text-batanga-darkblue">Financial Fraud Prevention</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Advanced analytics to dramatically reduce fraud incidents.
              </p>
              <Button variant="outline"
                className="border-batanga-oceanblue text-batanga-oceanblue hover:bg-batanga-oceanblue/10 mb-2"
                onClick={() => window.location.href = "/contact"}
              >
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Industries */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionTitle>More Industries</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-7">
            <IndustryCard
              title="Energy & Utilities"
              features={["Grid optimization", "Forecasting", "Maintenance"]}
            />
            <IndustryCard
              title="Transportation"
              features={["Route optimization", "Fleet management"]}
            />
            <IndustryCard
              title="Public Sector"
              features={["Service delivery", "Safety analytics"]}
            />
            <IndustryCard
              title="Telecommunications"
              features={["Churn prediction", "Network optimization"]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-6 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
            Ready to talk?
          </h2>
          <Button
            className="bg-batanga-darkblue hover:bg-batanga-oceanblue"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Our Experts
          </Button>
        </div>
      </section>
      
    
    </div>
  );
}
