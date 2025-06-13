'use client'

import React, { useRef } from 'react'
import { Button } from './ui/button'
import { motion, useInView } from "framer-motion";
import { Database } from 'lucide-react';

const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

const FeatureSections = () => {
  const featuredRef = useRef(null)
  const featuredInView = useInView(featuredRef, { once: true })


  return (
    <section ref={featuredRef} className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="flex items-center justify-center"
                initial="initial"
                animate={featuredInView ? "animate" : "initial"}
                variants={fadeInLeft}
              >
                <motion.div
                  className="relative w-full max-w-md h-80 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <div className="relative text-center space-y-4 text-white">
                    <motion.div
                      className="font-mono text-xs opacity-60"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {"> analyzing data..."}
                    </motion.div>
                    <motion.div
                      className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Database className="h-8 w-8" />
                    </motion.div>
                    <motion.div
                      className="font-mono text-xs opacity-60"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      {"> insights generated"}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial="initial"
                animate={featuredInView ? "animate" : "initial"}
                variants={fadeInRight}
              >
                <motion.div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" whileHover={{ scale: 1.05 }}>
                  Featured Service
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Data Analytics Solutions
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive data analytics solutions help businesses extract maximum value from their data
                  assets. From data collection and processing to advanced analytics and visualization, we provide
                  end-to-end services tailored to your specific needs.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Learn More</Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
  )
}

export default FeatureSections