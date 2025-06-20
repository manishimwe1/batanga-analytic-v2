"use client";

import { useInView, motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

const TrainingAcademy = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Training academy
                </motion.div> */}
        <h2 className="text-xl lg:text-2xl font-bold tracking-tighter text-center text-primary">
          Batanga Analytics training Academy
        </h2>
      </div>
      <div className="p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Educating Africa’s Cybersecurity and Data Analytics Leaders
        </h2>

        {/* Summary */}
        <p className="text-gray-700 mb-4">
          Batanga Analytics Ltd is building a premier academy to train African
          students and professionals in cybersecurity and data analytics —
          equipping them with world-class skills to solve local and global
          challenges.
        </p>

        {!expanded ? (
          <Button
            onClick={() => setExpanded(true)}
            className="bg-blue-900 text-white hover:bg-blue-800"
          >
            Read More
          </Button>
        ) : (
          <div className="mt-4 space-y-6 text-gray-800">
            {/* Problem */}
            <section>
              <h3 className="font-semibold text-lg mb-1">
                The Problem We Are Solving
              </h3>
              <p>
                Many government and private institutions in Rwanda and across
                Africa continue to outsource cybersecurity and data analytics
                services to providers abroad, particularly in India and the
                United States. This not only leads to high costs but also limits
                the development of local talent and capacity. Batanga Analytics
                Ltd is committed to solving this by establishing a world-class
                training academy that builds high-level skills right here in
                Africa. Our mission is to prepare students, graduates, and young
                professionals to deliver global-standard cybersecurity and data
                solutions — locally.
              </p>
            </section>

            {/* Vision */}
            <section>
              <h3 className="font-semibold text-lg mb-1">Our Vision</h3>
              <p>
                To become Africa’s most advanced and trusted training academy in
                cybersecurity and data analytics. We aim to build a new
                generation of professionals who can match or exceed the skills
                of experts from Europe, America, or Asia — and deliver
                meaningful impact in both public and private sectors
              </p>
            </section>

            {/* Why Us */}
            <section>
              <h3 className="font-semibold text-lg mb-1">
                Why Our Academy is Different
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Courses designed by Indian professionals with global project
                  experience
                </li>
                <li>
                  Solutions validated by Rwanda Development Board, outperforming
                  Cisco ISE
                </li>
                <li>
                  Track record with top institutions like National Bank of
                  Rwanda
                </li>
                <li>Hands-on, project-based training with expert mentorship</li>
                <li>
                  Certificates that reflect real capability — not just
                  attendance
                </li>
              </ul>
            </section>

            {/* Programs */}
            <section>
              <h3 className="font-semibold text-lg mb-1">Programs We Offer</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Cybersecurity Track</h4>
                  <ul className="list-disc pl-5">
                    <li>Foundations of Privileged Access Management (PAM)</li>
                    <li>Enterprise Identity and Access Management (IAM)</li>
                    <li>Zero Trust Architecture</li>
                    <li>Cybersecurity Compliance and Governance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Data Analytics Track</h4>
                  <ul className="list-disc pl-5">
                    <li>Power BI and Excel for Analysts</li>
                    <li>Python for Data Science</li>
                    <li>Applied Machine Learning</li>
                    <li>AI for Business Insights</li>
                  </ul>
                </div>
              </div>
              <p className="mt-2">
                <strong>Capstone Labs:</strong> Real-world guided projects to
                apply knowledge.
              </p>
            </section>

            {/* Who Can Enroll */}
            <section>
              <h3 className="font-semibold text-lg mb-1">Who Can Enroll</h3>
              <ul className="list-disc pl-5">
                <li>
                  University and TVET students in ICT, computer science, or
                  engineering
                </li>
                <li>Self-taught learners seeking formal recognition</li>
                <li>Final-year students preparing for employment</li>
                <li>Junior professionals looking to specialize</li>
              </ul>
            </section>

            {/* Certification */}
            <section>
              <h3 className="font-semibold text-lg mb-1">
                Certification That Matters
              </h3>
              <p>
                Batanga Academy graduates receive a Certificate of Excellence —
                backed by rigorous practical training, mentorship, and
                real-world project delivery. We aim to make our certification
                the gold standard in Africa.
              </p>
            </section>

            {/* Impact Plan */}
            <section>
              <h3 className="font-semibold text-lg mb-1">
                Our Three-Year Impact Plan
              </h3>
              <ul className="list-disc pl-5">
                <li>Certify 2,000 professionals by 2028</li>
                <li>
                  Establish Batanga Academy as a regional center of excellence
                </li>
                <li>Partner with international accreditation bodies</li>
                <li>
                  Strengthen local cybersecurity and analytics talent pipelines
                </li>
              </ul>
            </section>

            {/* Partnerships */}
            <section>
              <h3 className="font-semibold text-lg mb-1">
                Institutional and Academic Partnerships
              </h3>
              <p>
                We welcome partnerships with governments, universities, TVETs,
                NGOs, and private sector tech firms to reshape Africa’s digital
                future.
              </p>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-2">
                Applications for the {new Date().getFullYear()} cohort are now open.
              </p>
              <p className="">
              <Link href={'/started'} className="text-blue-800 underline underline-offset-4 mr-2">Apply Now</Link>
                or email us on{" "}
                <a
                  href="mailto:academy@batangaanalytics.com"
                  className="text-blue-800 underline"
                >
                  academy@batangaanalytics.com
                </a>
              </p>
            </section>
            <div className="w-full flex items-center justify-center">
              <Button
                onClick={() => setExpanded(!expanded)}
                className="bg-blue-900 text-white hover:bg-blue-800"
              >
                Read less
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingAcademy;
