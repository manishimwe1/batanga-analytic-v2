import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "TechCorp Rwanda",
    content:
      "Batanga Analytics revolutionized our data infrastructure. Their AI-powered insights helped us increase operational efficiency by 45% while significantly strengthening our security posture.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Uwimana",
    role: "Chief Executive Officer",
    company: "Digital Solutions Ltd",
    content:
      "The cybersecurity solutions provided by Batanga Analytics are world-class. We've maintained zero security incidents since implementation, giving us complete peace of mind.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Grace Mukamana",
    role: "Operations Director",
    company: "FinanceHub Africa",
    content:
      "Their analytics platform revealed insights we never knew existed in our data. The ROI has been exceptional, with data-driven decisions now at the core of our strategy.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
            <span className="block text-2xl md:text-3xl font-normal text-slate-600 mt-2">
              Real Results, Real Impact
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-indigo-600 opacity-50" />
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-indigo-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
