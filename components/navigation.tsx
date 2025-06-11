"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-teal-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-teal-700 rounded"></div>
              </div>
              <span className="text-lg font-bold">Batanga Analytics</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                Industries
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-300 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-teal-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300">
              Home
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300">
              Services
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300">
              Industries
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-yellow-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
