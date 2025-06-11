"use client"

import { Button } from "@/components/ui/button"
import { Database, Brain, Shield, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Data Analytics",
    description: "Transform your business with actionable insights",
    icon: <Database className="h-8 w-8 text-teal-600" />,
    bgColor: "bg-teal-700",
  },
  {
    title: "AI Solutions",
    description: "Leverage machine learning for business growth",
    icon: <Brain className="h-8 w-8 text-teal-600" />,
    bgColor: "bg-teal-700",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets from threats",
    icon: <Shield className="h-8 w-8 text-teal-600" />,
    bgColor: "bg-teal-700",
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure efficiently",
    icon: <Cloud className="h-8 w-8 text-teal-600" />,
    bgColor: "bg-teal-700",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bgColor} text-white p-6 rounded-lg cursor-pointer`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm mb-6 opacity-90">{service.description}</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
