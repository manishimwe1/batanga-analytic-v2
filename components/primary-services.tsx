"use client"

import { Button } from "@/components/ui/button"
import { Database, BarChart3, Brain } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Database className="h-12 w-12 text-teal-600" />,
    title: "Advanced Data Analytics",
    description:
      "Transform raw data into meaningful insights that drive strategic decision‑making and operational efficiency.",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-teal-600" />,
    title: "Performance Tracking",
    description:
      "Monitor key performance indicators in real‑time to optimize business processes and identify opportunities.",
  },
  {
    icon: <Brain className="h-12 w-12 text-teal-600" />,
    title: "AI Solutions",
    description:
      "Leverage machine learning algorithms to automate processes, predict trends, and enhance customer experiences.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function PrimaryServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Primary Analytics Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">View All Services</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
