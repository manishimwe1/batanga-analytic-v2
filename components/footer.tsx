import Link from "next/link"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Batanga Analytics Ltd delivers cutting‑edge data analytics and cybersecurity solutions to help businesses
              thrive in the digital age.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:text-yellow-300">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-300">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="text-sm opacity-90 space-y-1">
              <p>Kigali, Rwanda</p>
              <p>+250 783 749 339</p>
              <p>batangaanalytics@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-yellow-300">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-600 mt-8 pt-8 text-center text-sm opacity-75">
          © 2024 Batanga Analytics Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
