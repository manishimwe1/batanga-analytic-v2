"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import { Database } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeatureType } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const FeatureSections = ({
  features,
}: {
  features: FeatureType[] | undefined;
}) => {
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true });

  return (
    <section ref={featuredRef} className="w-full flex flex-col gap-10 py-10">
      <div className="flex items-center justify-center ">
        <motion.div
          className="rounded-lg bg-muted px-3 py-1 text-sm "
          whileHover={{ scale: 1.05 }}
        >
          Featured Service
        </motion.div>
      </div>
      <Carousel className="w-full relative !px-0" plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}>
        <CarouselContent className="w-full !px-0  !ml-0">
          {features ? (
            features.map((feature, index) => (
              <CarouselItem className="w-full  !px-0" key={feature._id}>
                <div className="w-full space-y-4 ">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-2 items-center justify-center">
                    <motion.div
                      className="flex items-center justify-center w-full"
                      initial="initial"
                      animate={featuredInView ? "animate" : "initial"}
                      variants={fadeInLeft}
                    >
                      <motion.div
                        className="relative w-full max-w-md h-80 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Image
                          src={urlFor(feature.image.asset).url()}
                          alt="image"
                          fill
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="space-y-4  w-full flex flex-col items-center justify-center px-2 lg:px-4"
                      initial="initial"
                      animate={featuredInView ? "animate" : "initial"}
                      variants={fadeInRight}
                    >
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                        {feature.title}
                      </h2>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {feature.description}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
                      Learn More
                    </Button> */}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p>no feature found</p>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-yellow-500 text-black hover:bg-yellow-400 w-10 h-10 absolute left-0" />
        <CarouselNext className="hidden md:flex bg-yellow-500 text-black hover:bg-yellow-400 w-10 h-10 absolute  right-0" />
      </Carousel>
    </section>
  );
};

export default FeatureSections;
