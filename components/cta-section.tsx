import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies that trust Batanga Analytics for their data and security needs.
            Let's discuss how we can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-300 mb-4">Get in touch for detailed discussions</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="mailto:batangaanalytics@gmail.com">batangaanalytics@gmail.com</a>
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-300 mb-4">Speak directly with our experts</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              +250 783 749 339
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Schedule Meeting</h3>
            <p className="text-slate-300 mb-4">Book a consultation session</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Book Now
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
            asChild
          >
            <a href="mailto:batangaanalytics@gmail.com">
              Start Your Transformation Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>

          <div className="mt-8 flex items-center justify-center space-x-8 text-slate-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
              <span>Custom Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
