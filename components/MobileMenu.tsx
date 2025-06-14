"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, useInView } from "framer-motion";

import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="border hover:scale-105 flex lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-6 w-full py-5">
          {["Home", "Services", "Industries", "Contact"].map((item, index) => (
              <Link
              key={item}
              href={
                  item === "Home" ? "/" : `${item.toLowerCase().replace(" ", "")}`
              }
              className="text-lg font-medium transition-colors w-full hover:text-primary "
              >
                <SheetClose className="w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full  rounded-lg bg-cyan-900 capitalize text-white text-lg p-3 hover:bg-sky-950 cursor-pointer"
              >
                {item}
              </motion.div>
            </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
