import Link from "next/link"
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Batanga Analytics</span>
                <div className="text-sm text-slate-400">Data • Security • Intelligence</div>
              </div>
            </div>

            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Leading provider of data analytics and cybersecurity solutions, empowering businesses across Africa and
              beyond to transform their data into actionable insights while maintaining enterprise-grade security.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Data Analytics",
                "Cybersecurity",
                "AI & Machine Learning",
                "Cloud Solutions",
                "Business Intelligence",
                "Data Governance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Kigali, Rwanda</div>
                  <div className="text-sm text-slate-400">East Africa Hub</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">+250 783 749 339</div>
                  <div className="text-sm text-slate-400">24/7 Support</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">batangaanalytics@gmail.com</div>
                  <div className="text-sm text-slate-400">Business Inquiries</div>
                </div>
              </div>
            </div>

            <Button
              className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full"
              asChild
            >
              <a href="mailto:batangaanalytics@gmail.com">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Batanga Analytics Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <Link key={link} href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
