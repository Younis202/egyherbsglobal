"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/40" />

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-100/60 to-emerald-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-tr from-amber-100/50 to-orange-100/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-emerald-200/30 rounded-lg rotate-45 animate-bounce delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2,
            }}
            className="relative group"
          >
            {/* Main image container with sophisticated layering */}
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-emerald-100/40 via-green-100/30 to-amber-100/40 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Elegant frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/80 via-emerald-50/60 to-amber-50/40 rounded-2xl shadow-2xl backdrop-blur-sm" />

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/6.jpg?updatedAt=1747508121896"
                  alt="Egyptian herbs being harvested in golden sunlight"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />

                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60" />

                {/* Floating accent elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 right-6 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-8 left-8 w-6 h-6 bg-emerald-300/40 backdrop-blur-sm rounded-full shadow-lg"
                />
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-amber-200/40 to-yellow-300/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Elegant section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-8 group"
            >
              <motion.div
                className="h-px bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 shadow-sm"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span className="text-emerald-700 font-semibold tracking-wide text-sm uppercase relative">
                Our Story
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </span>
            </motion.div>

            {/* Stunning headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
                A Legacy of Egyptian
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                Herbal Excellence
              </span>
            </motion.h2>

            {/* Enhanced content paragraphs */}
            <div className="space-y-8">
              {[
                "Founded in 2010, Egy Herbs Global emerged from a deep appreciation for Egypt's rich botanical heritage. Our journey began in the fertile lands along the Nile Delta, where generations of farmers have cultivated the world's finest herbs and spices.",
                "What started as a small family operation has grown into a global enterprise, but our core values remain unchanged. We continue to work directly with local farmers, ensuring sustainable practices and fair compensation while delivering premium quality herbs to customers worldwide.",
                "Today, we're proud to be a leading exporter of Egyptian herbs, combining traditional farming wisdom with modern agricultural science to produce the highest quality products for our global partners.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-gray-700 text-lg leading-relaxed relative pl-6 border-l-2 border-gradient-to-b from-emerald-300 to-green-400"
                >
                  <span className="absolute left-0 top-0 w-2 h-2 bg-emerald-400 rounded-full -translate-x-1.5 mt-2" />
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Elegant call-to-action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Discover Our Journey</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50/20 to-transparent" />
    </section>
  );
}
