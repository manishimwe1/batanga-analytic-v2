'use client'
import { useInView, motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import  Link  from "next/link";

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
                        href="#"
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
                  <li>+250 783 749 339</li>
                  <li>batangaanalytics@gmail.com</li>
                </ul>
              ),
            },
            {
              title: "Follow Us",
              content: (
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href={social.href} className="hover:text-white">
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
          © 2025 Batanga Analytics Ltd. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
