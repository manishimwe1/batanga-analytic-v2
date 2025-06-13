'use client'

import { StatCardType } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatCard = ({statCardContent}:{statCardContent:StatCardType[] | undefined}) => {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section ref={statsRef} className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="initial"
          animate={statsInView ? "animate" : "initial"}
        >
          {statCardContent?.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              variants={scaleIn}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.h2
                className="text-4xl font-bold text-primary"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.h2>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatCard;
