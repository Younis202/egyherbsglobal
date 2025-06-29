"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Leaf,
  MessageCircle,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Array of hero background images
  const backgroundImages = [
    "https://egyherbsglobal-770136110.imgix.net/home/hero.png",
    "https://ideogram.ai/assets/image/lossless/response/2y1vOvrFT6uZ2LShnVSmAg",
    "https://ideogram.ai/assets/progressive-image/balanced/response/ik1BSSbVQwWBKYCx-cZNyw",
  ];

  useEffect(() => {
    setIsMounted(true);
    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(imageInterval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  // WhatsApp contact link
  const whatsappUrl = `https://wa.me/201234567890?text=${encodeURIComponent(
    "Hello! I'm interested in your premium Egyptian herbs and spices. Could you provide more information?"
  )}`;

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-emerald-900">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image Layers */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: activeImage === index ? 1 : 0 }}
          >
            <Image
              src={image}
              alt="Egyptian herbs and spices"
              fill
              priority={index === 0}
              className="object-cover object-center"
            />

            {/* Elegant Multi-layer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/50 to-transparent" />

            {/* Subtle Texture Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23ffffff" fill-opacity="0.05"/%3E%3C/svg%3E")',
                backgroundSize: "8px 8px",
              }}
            />

            {/* Left Side Highlight */}
            <div className="absolute left-0 h-full w-1/3 bg-gradient-to-r from-emerald-300/5 to-transparent" />

            {/* Bottom Vignette */}
            <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-emerald-950/70 to-transparent" />

            {/* Top Subtle Vignette */}
            <div className="absolute top-0 h-20 w-full bg-gradient-to-b from-emerald-950/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Floating Elements - More refined */}
      {isMounted && (
        <>
          <motion.div
            className="absolute top-1/3 left-12 w-56 h-56 bg-emerald-400/15 rounded-full blur-[100px] z-1"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-12 w-72 h-72 bg-amber-300/10 rounded-full blur-[120px] z-1"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Additional subtle accent light */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-40 h-40 bg-emerald-200/5 rounded-full blur-[80px] z-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top Badge with subtle glow */}
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 border border-emerald-400/30 shadow-sm shadow-emerald-300/10">
            <Award className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-emerald-50 text-xs font-medium">
              Premium Egyptian Quality
            </span>
          </div>

          {/* Main Heading with enhanced text treatment */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-white drop-shadow-sm">
              Nature's Finest
            </span>
            <span className="block text-white drop-shadow-sm">
              Egyptian Treasures
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base text-emerald-50/90 mb-6 max-w-xl leading-relaxed font-light">
            Discover the authentic flavors and healing properties of premium
            Egyptian herbs and spices, carefully harvested from the fertile
            lands of the Nile Valley.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-wrap gap-3">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full shadow-lg shadow-emerald-700/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm font-medium">
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="text-emerald-50 border-emerald-400/30 bg-emerald-700/20 hover:bg-emerald-700/30 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm shadow-emerald-900/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                Contact via WhatsApp
              </Button>
            </Link>
          </div>

          {/* Trust Indicators with subtle glow */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-700/30 backdrop-blur-sm p-1.5 rounded-full border border-emerald-400/20 shadow-sm shadow-emerald-400/5">
                <Leaf className="h-4 w-4 text-emerald-300" />
              </div>
              <span className="text-emerald-50/90 text-xs">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-emerald-700/30 backdrop-blur-sm p-1.5 rounded-full border border-emerald-400/20 shadow-sm shadow-emerald-400/5">
                <Shield className="h-4 w-4 text-emerald-300" />
              </div>
              <span className="text-emerald-50/90 text-xs">
                Premium Quality
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-emerald-700/30 backdrop-blur-sm p-1.5 rounded-full border border-emerald-400/20 shadow-sm shadow-emerald-400/5">
                <Award className="h-4 w-4 text-emerald-300" />
              </div>
              <span className="text-emerald-50/90 text-xs">
                Organic & Conventional
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with subtle glow */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-2 rounded-full bg-emerald-700/30 backdrop-blur-sm hover:bg-emerald-600/40 transition-all duration-300 border border-emerald-400/30 shadow-sm shadow-emerald-400/10"
        >
          <ChevronDown className="h-5 w-5 text-emerald-100" />
        </motion.div>
      </div>

      {/* Image Pagination with active state glow */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-1.5">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-8 h-0.5 rounded-full transition-all duration-500 ${
              activeImage === index
                ? "bg-emerald-300 shadow-sm shadow-emerald-300/50"
                : "bg-emerald-50/20 hover:bg-emerald-50/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
