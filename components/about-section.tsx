import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Globe, Zap } from "lucide-react"

const achievements = [
  { icon: <Users className="h-6 w-6" />, title: "250+ Enterprise Clients", desc: "Trusted by industry leaders" },
  { icon: <Award className="h-6 w-6" />, title: "15+ Years Experience", desc: "Proven track record" },
  { icon: <Globe className="h-6 w-6" />, title: "Global Presence", desc: "Serving clients worldwide" },
  { icon: <Zap className="h-6 w-6" />, title: "99.9% Uptime", desc: "Reliable service delivery" },
]

const highlights = [
  "ISO 27001 certified security practices",
  "24/7 expert support and monitoring",
  "Custom solutions for every industry",
  "Proven ROI with measurable results",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              About Batanga Analytics
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Leading Africa's
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Revolution
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 mb-8">
              <p>
                Based in Kigali, Rwanda, Batanga Analytics stands at the forefront of Africa's digital transformation,
                empowering organizations across the continent and beyond with cutting-edge data analytics and
                cybersecurity solutions.
              </p>
              <p>
                Our team of world-class data scientists, security experts, and AI specialists combines deep industry
                knowledge with innovative technology to deliver solutions that create measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Discover Our Story
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-4">
                        <div className="text-indigo-600">{achievement.icon}</div>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1">{achievement.title}</h3>
                      <p className="text-sm text-slate-600">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-indigo-100 mb-6">
                  Join hundreds of companies that trust us with their data and security needs.
                </p>
                <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-slate-50">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
