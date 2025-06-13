'use client'

import React, { useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView,motion } from 'framer-motion'

import { Button } from './ui/button'

const slideInFromBottom = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

const CTASection = () => {
  const ctaRef = useRef(null)

  const ctaInView = useInView(ctaRef, { once: true })

  return (
    <section ref={ctaRef} className="w-full py-12 md:py-24 bg-yellow-500 overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="initial"
              animate={ctaInView ? "animate" : "initial"}
              variants={slideInFromBottom}
            >
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  Kickstart Your Secure Digital Transformation Journey, Today!
                </motion.h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let our experts help you harness the power of data while keeping your business secure
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Contact Us Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
  )
}

export default CTASection