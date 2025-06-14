"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { Database } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Database className="h-6 w-6 text-white" />
          </motion.div>
          <span className="text-xl font-bold text-primary">
            Batanga Analytics
          </span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "Services", "Industries", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `${item.toLowerCase().replace(" ", "")}`
                }
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="outline" className="hidden md:flex">
            Log In
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>Get Started</Button>
          </motion.div>
          
              <MobileMenu />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
