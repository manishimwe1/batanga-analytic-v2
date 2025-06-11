import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Shield, Brain, Cloud, BarChart3, Lock, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Transform raw data into strategic insights with our cutting-edge analytics platform.",
    features: ["Real-time Dashboards", "Predictive Modeling", "Custom Reporting", "Data Visualization"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity Suite",
    description: "Comprehensive security solutions protecting your digital assets from evolving threats.",
    features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI & Machine Learning",
    description: "Leverage artificial intelligence to automate processes and enhance decision-making.",
    features: ["ML Algorithms", "Process Automation", "Intelligent Insights", "Predictive Analytics"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and migration services for modern business operations.",
    features: ["Cloud Migration", "Infrastructure Scaling", "Cost Optimization", "Multi-cloud Support"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Intelligence",
    description: "Comprehensive BI solutions driving strategic business decisions and growth.",
    features: ["KPI Tracking", "Performance Analytics", "Strategic Insights", "Executive Dashboards"],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Data Governance",
    description: "Advanced data protection, privacy, and compliance solutions for sensitive information.",
    features: ["Data Encryption", "Access Control", "Privacy Compliance", "Audit Trails"],
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-50",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Solutions for
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Modern Enterprises
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From data analytics to cybersecurity, we provide end-to-end solutions that drive growth, enhance security,
            and accelerate digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-3 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Explore All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
