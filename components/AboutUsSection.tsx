'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Shield } from "lucide-react";
import { AboutUs } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection = ({aboutUs}:{aboutUs:AboutUs}) => {
  const {title,subTitle,addititionalContent,image} = aboutUs
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true })

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }
  return (
    <section ref={aboutRef} id="about" className="w-full py-12 md:py-24 px-3 lg:px-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial="initial"
                animate={aboutInView ? "animate" : "initial"}
                variants={fadeInLeft}
              >
                <motion.div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" whileHover={{ scale: 1.05 }}>
                  About Us
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
                  variants={fadeInUp}
                >
                 {title}
                </motion.h2>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  variants={fadeInUp}
                >
                  {subTitle}
                </motion.p>
                <motion.p className="max-w-[600px] text-muted-foreground" variants={fadeInUp}>
                  {addititionalContent}
                </motion.p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-5">
                  <Button className="bg-primary hover:bg-primary/90 text-white">

                  <Link href={'/services'} >Learn More About Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial="initial"
                animate={aboutInView ? "animate" : "initial"}
                variants={fadeInRight}
              >
                <motion.div
                  className="relative w-full max-w-md h-80 bg-gradient-to-br from-primary/10 to-cyan-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {
                    image ? (
                      <Image src={urlFor(image.asset).url()} alt={title} fill className="w-full h-full object-cover rounded-lg shadow-lg" />
                    ) : (
                      <div className="text-center space-y-4">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <Shield className="h-10 w-10 text-primary" />
                    </motion.div>
                    <p className="text-primary font-medium">Secure Digital Solutions</p>
                  </div>
                    )
                  }
                  
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
  )
}

export default AboutUsSection