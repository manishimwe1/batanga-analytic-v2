"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="bg-yellow-500 py-12 relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-400/50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Kickstart Your Secure Digital Transformation Journey, Today!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3" asChild>
            <a href="mailto:batangaanalytics@gmail.com">Contact Us Now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
