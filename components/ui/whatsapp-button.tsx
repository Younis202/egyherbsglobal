"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showOnMobile?: boolean;
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your products. Can you provide more information?",
  position = "bottom-right",
  showOnMobile = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial visibility
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${`+201222297357`.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-50 ${
        !showOnMobile ? "hidden md:block" : ""
      }`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring opacity-70"></span>

        {/* Button */}
        <motion.div
          className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
