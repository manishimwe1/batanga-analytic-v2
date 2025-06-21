"use client";
import { useInView, motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="w-full py-12 md:py-24 bg-primary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "About Us",
              content: (
                <p className="text-sm text-white/80">
                  Batanga Analytics Ltd delivers cutting-edge data analytics and
                  cybersecurity solutions to help businesses thrive in the
                  digital age.
                </p>
              ),
            },
            {
              title: "Services",
              content: (
                <ul className="space-y-2 text-sm text-white/80">
                  {[
                    "Data Analytics",
                    "Cybersecurity",
                    "AI Solutions",
                    "Cloud Services",
                  ].map((service, index) => (
                    <motion.li
                      key={service}
                      whileHover={{ x: 5, color: "#ffffff" }}
                    >
                      <Link
                        href="/services"
                        className="hover:text-white transition-colors"
                      >
                        {service}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Contact",
              content: (
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Kigali, Rwanda</li>
                  <li>support@batanganalytics.com</li>
                  <li>+250783749339</li>
                </ul>
              ),
            },
            {
              title: "Follow Us",
              content: (
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/niyomwungeri-pacifique-75b3a4322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    },
                    {
                      icon: Twitter,
                      href: "https://x.com/BatangaAnalytic?t=SzgiMc4kKd0XbPCd9raIOw&s=09",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/analy_tics22?igsh=YzljYTk1ODg3Zg==",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.icon.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-bold">{section.title}</h3>
              {section.content}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Batanga Analytics Ltd. All rights
          reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
