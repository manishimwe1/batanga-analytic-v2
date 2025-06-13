'use client'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-batanga-skyblue/10 to-batanga-darkblue/30">
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-8 md:p-12 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-batanga-darkblue mb-2 text-center">
            Let's Connect
          </h1>
          <p className="mt-2 text-gray-700 mb-6 text-center leading-relaxed">
            Thank you for your interest in Batanga Analytics!<br />
            Whether you want to discuss a project, ask a question, or collaborate, our team is always happy to help.<br />
            Please reach out to us through your preferred channel below—we'll respond promptly and look forward to building something great together.
          </p>
          <div className="w-full space-y-6 mb-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-batanga-oceanblue" />
              <a
                href="mailto:batangaanalytics@gmail.com"
                className="hover:text-batanga-oceanblue break-words"
              >
                batangaanalytics@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-batanga-oceanblue" />
              <a
                href="tel:+250783749339"
                className="hover:text-batanga-oceanblue"
              >
                +250 783 749 339
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-batanga-oceanblue" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div className="flex gap-6 justify-center mt-6 mb-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/niyomwungeri-pacifique-75b3a4322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-batanga-darkblue hover:text-batanga-oceanblue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/analy_tics22?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-batanga-darkblue hover:text-batanga-oceanblue transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/BatangaAnalytic?t=SzgiMc4kKd0XbPCd9raIOw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-batanga-darkblue hover:text-batanga-oceanblue transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
          <Button
            className="mt-6 w-full bg-batanga-oceanblue hover:bg-batanga-darkblue text-white font-semibold"
            //@ts-ignore
            onClick={() => window.location = "mailto:batangaanalytics@gmail.com"}
          >
            Send Us a Message
          </Button>
        </div>
      </div>
    </div>
  );
}
