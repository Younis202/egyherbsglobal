"use client";

import { motion } from "framer-motion";
import { Award, ChevronDown, Shield, Users } from "lucide-react";

export function ContactHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/pcet3dvcu/contact/s5.jpg?updatedAt=1726262945202")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Animated Accent Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-emerald-400"></div>
            <span className="mx-4 text-emerald-300 text-base font-medium flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Get in Touch
            </span>
            <div className="h-px w-16 bg-emerald-400"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-emerald-400">& </span>
            Support
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or services? We're here to help.
            Reach out to our team and we'll get back to you shortly.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center"
            >
              <Award className="w-5 h-5 mr-2 text-emerald-400" />
              <span className="text-lg">15+ Years of Excellence</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center"
            >
              <Shield className="w-5 h-5 mr-2 text-emerald-400" />
              <span className="text-lg">Certified Quality</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToNextSection}
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
