"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { HeroSectionType } from "@/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

import { motion } from "framer-motion";
import { BarChart3, Loader2 } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

export function HeroSection({
  HeroSectionContent,
}: {
  HeroSectionContent: HeroSectionType | undefined;
}) {
  return (
    <>
      {HeroSectionContent ? (
        <section className="w-full bg-gradient-to-r from-primary/90 to-cyan-600 py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ">
              <motion.div
                className="space-y-4  flex flex-col items-center justify-center md:justify-start"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {HeroSectionContent.title}
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {HeroSectionContent.subTitle}
                </motion.p>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=""
                  >
                    <Button
                      size="lg"
                      className="bg-yellow-500 text-black hover:bg-yellow-400"
                      onClick={() =>
                        //@ts-ignore
                        (window.location = "mailto:batangaanalytics@gmail.com")
                      }
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 100, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="relative w-full max-w-md h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="text-center space-y-4 shadow-md shadow-blue-400 cursor-pointer w-full h-[400px] overflow-hidden rounded-xl relative">
                    <motion.div className="w-full  mx-auto bg-white/20  flex items-center justify-center  ">
                      <Image
                        src={urlFor(HeroSectionContent.mainImage.asset).url()}
                        alt="image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.p
                      className="text-white/80 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    ></motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <Loader2 className="animate-spin" />
        </div>
      )}
    </>
  );
}
