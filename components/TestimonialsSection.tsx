'use client'

import React, { useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView,motion } from 'framer-motion'
import { Award, Shield, Star, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  }

const TestimonialsSection = () => {
  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true })

  return (
    <section ref={testimonialsRef} className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="initial"
              animate={testimonialsInView ? "animate" : "initial"}
              variants={fadeInUp}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Testimonials
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from organizations that have transformed their businesses with our solutions
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Tabs defaultValue="enterprise" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                  <TabsTrigger value="midmarket">Mid-Market</TabsTrigger>
                  <TabsTrigger value="startup">Startups</TabsTrigger>
                </TabsList>
                <TabsContent value="enterprise" className="mt-6">
                  <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="initial"
                    animate={testimonialsInView ? "animate" : "initial"}
                  >
                    {[
                      {
                        icon: Users,
                        company: "Global Corp",
                        industry: "Financial Services",
                        testimonial:
                          "Batanga Analytics transformed our data infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings. Their cybersecurity solutions have been instrumental in protecting our sensitive financial data.",
                        role: "CFO",
                        rating: 5,
                      },
                      {
                        icon: Award,
                        company: "Tech Innovations",
                        industry: "Technology",
                        testimonial:
                          "The AI solutions provided by Batanga Analytics have revolutionized our product development cycle. We've been able to reduce time-to-market by 30% while improving product quality through data-driven insights.",
                        role: "CTO",
                        rating: 5,
                      },
                      {
                        icon: Shield,
                        company: "HealthCare Plus",
                        industry: "Healthcare",
                        testimonial:
                          "In the healthcare industry, data security is paramount. Batanga Analytics has provided us with robust cybersecurity solutions that ensure our patient data remains protected while allowing us to leverage analytics for improved patient outcomes.",
                        role: "CISO",
                        rating: 4,
                      },
                    ].map((testimonial, index) => (
                      <motion.div key={index} variants={scaleIn}>
                        <Card className="relative h-full group hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <motion.div
                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <testimonial.icon className="h-6 w-6 text-primary" />
                              </motion.div>
                              <div>
                                <CardTitle className="group-hover:text-primary transition-colors">
                                  {testimonial.company}
                                </CardTitle>
                                <CardDescription>{testimonial.industry}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">"{testimonial.testimonial}"</p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 + 0.5 }}
                                >
                                  <Star className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : ""}`} />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                {/* Similar structure for other tabs */}
              </Tabs>
            </motion.div>
          </div>
        </section>
  )
}

export default TestimonialsSection