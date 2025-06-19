"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { HeroSectionType } from "@/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

import { motion } from "framer-motion";
import { BarChart3, Loader2 } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export function HeroSection({
  HeroSectionContent,
}: {
  HeroSectionContent: HeroSectionType | undefined;
}) {
  return (
    <>
      {HeroSectionContent ? (
        <section className="w-full h-full container px-4 md:px-6 md:mt-5  ">
          <div className=" h-full w-full bg-[#212529] pt-12 pb-4 md:pt-24 overflow-hidden rounded-lg mt-4 flex flex-col ">
            <div className="flex flex-col justify-between gap-6 lg:gap-12 items-center h-full ">
              <motion.div
                className="space-y-4  flex flex-col items-center justify-center md:justify-start"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.p
                  className="text-yellow-400 text-sm font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  🚀 Data science company
                </motion.p>
                <motion.h1
                  className="text-white text-center leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {HeroSectionContent.title}
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-4 md:mb-0"
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
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center w-full mt-10 px-2 lg:px-20"
              initial={{ opacity: 0, x: 100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="relative border-spacing-2 w-full h-[200px] lg:h-[400px] bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <video
                    src={HeroSectionContent.videoUrl}
                    className="object-fill object-center w-full rounded-xl  h-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false} // set to true if you want controls
                    // poster={HeroSectionContent.mainVideo.poster} // if you have a poster image
                  />
              </motion.div>
            </motion.div>
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
