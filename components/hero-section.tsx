import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Shield, BarChart3 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-sm font-medium">Advanced Analytics & Cybersecurity Platform</span>
            <div className="ml-2 px-2 py-1 bg-emerald-400/20 rounded-full text-xs font-semibold text-emerald-300">
              2025
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              With Intelligent Data
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlock unprecedented insights from your data while maintaining enterprise-grade security. Our AI-powered
            platform delivers actionable intelligence that drives growth and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
              asChild
            >
              <a href="mailto:batangaanalytics@gmail.com">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <BarChart3 className="h-6 w-6" />, title: "Real-time Analytics", desc: "Live data insights" },
              { icon: <Shield className="h-6 w-6" />, title: "Enterprise Security", desc: "Bank-grade protection" },
              { icon: <Sparkles className="h-6 w-6" />, title: "AI-Powered", desc: "Machine learning driven" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">{feature.icon}</div>
                <div className="text-left">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="text-sm text-slate-400">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
