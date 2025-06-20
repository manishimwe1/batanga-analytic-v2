"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { Database } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { Navlink } from "@/constant";
import { usePathname } from "next/navigation";
import { link } from "fs";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname()
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur overflow-hidden supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className=" w-[80px] h-[60px] relative ">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            className="object-contain w-auto transition-transform scale-125 "
            fill
            priority
            quality={100}
          />
          </div>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {Navlink.map((item, index) => {
            const isActive = item.link === pathname 
            return(
              <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.link}
                className={cn("text-sm font-medium transition-colors hover:text-blue-700",isActive && 'text-blue-500')}
              >
                {item.label}
              </Link>
            </motion.div>
            )
})}
        </nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>
              <Link href={'/started'}>Get Started</Link>
            </Button>
          </motion.div>

          <MobileMenu />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
