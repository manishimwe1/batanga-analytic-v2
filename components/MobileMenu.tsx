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
import { Navlink } from "@/constant";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();
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
        <nav className="flex flex-col  items-start gap-2">
          {Navlink.map((item, index) => {
            const isActive = item.link === pathname;
            return (
              <motion.div
                className={cn("border w-full flex items-start rounded-md py-1 px-4",isActive && " bg-blue-100 w-full")}
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                  <Link
                    href={item.link}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-blue-700",
                      isActive && "text-blue-500"
                    )}
                  >
                      <SheetClose className="items-start">
                    {item.label}
                </SheetClose>
                  </Link>
              </motion.div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
