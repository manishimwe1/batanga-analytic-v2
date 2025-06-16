"use client";

import { ServicesType } from "@/types";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ServicesModel from "./ServicesModel";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServicesSection = ({
  services,
}: {
  services: ServicesType[] | undefined;
}) => {
  const [openModel, setopenModel] = useState(false);
  const [selectedServices, setselectedServices] = useState<
    ServicesType | undefined
  >();
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  return (
    <section
      ref={servicesRef}
      id="services"
      className="w-full py-12 md:py-24 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="initial"
          animate={servicesInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Our Services
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Primary Analytics Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={staggerContainer}
          initial="initial"
          animate={servicesInView ? "animate" : "initial"}
        >
          {services?.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card
                className={`transition-all hover:shadow-lg border-l-4 cursor-pointer  h-full group ${
                  index % 2 === 0 ? "border-l-blue-500" : "border-l-yellow-500"
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-1">
                    {service.cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {service.cardDescription}
                  </p>
                </CardContent>
                <CardFooter>
                  <motion.div
                    className="w-full"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-between  group-hover:bg-yellow-500 group-hover:text-primary text-black capitalize"
                      onClick={() => {
                        setselectedServices(service);
                        setopenModel(!openModel);
                      }}
                    >
                      {service.buttonText}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={
            servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              <Link href={"/services"}>View All Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <ServicesModel
        openModel={openModel}
        setIsOpen={setopenModel}
        services={selectedServices}
      />
    </section>
  );
};

export default ServicesSection;
