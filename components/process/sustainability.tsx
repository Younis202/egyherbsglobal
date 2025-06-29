"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Droplets,
  Globe,
  Heart,
  Leaf,
  Recycle,
  Sun,
  Users,
  Wind,
} from "lucide-react";
import Image from "next/image";

const initiatives = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description:
      "Supporting organic farming practices that protect soil health and biodiversity",
    image: "https://www.hars.com.tr/upload/organiktarim-1162x700.jpg",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description:
      "Implementing zero-waste practices in processing and packaging",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Heart,
    title: "Fair Trade",
    description:
      "Ensuring fair compensation and working conditions for farmers",
    image:
      "https://ideogram.ai/assets/image/lossless/response/tHSt_CsRR4-haHRZxxXlSg",
  },
  {
    icon: Globe,
    title: "Carbon Neutral",
    description: "Working towards carbon neutrality across our operations",
    image:
      "https://ik.imagekit.io/pcet3dvcu/img_hero%20(1).jpg?updatedAt=1747504828274",
  },
];

const additionalInitiatives = [
  {
    icon: Droplets,
    title: "Water Conservation",
    value: "60%",
    description: "Reduction in water usage through advanced irrigation systems",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    value: "40%",
    description: "Of our energy needs met through solar power installations",
  },
  {
    icon: Wind,
    title: "Reduced Emissions",
    value: "30%",
    description: "Decrease in carbon emissions over the last five years",
  },
  {
    icon: Users,
    title: "Community Support",
    value: "1000+",
    description: "Farmers supported through our sustainable initiatives",
  },
];

export function Sustainability() {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/pcet3dvcu/home/pattern.png?updatedAt=1736259343720")',
          backgroundSize: "400px",
        }}
      />

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-800/50 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-700/30 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-400"></div>
            <span className="text-emerald-300 font-medium">SUSTAINABILITY</span>
            <div className="h-px w-12 bg-emerald-400"></div>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Our Commitment to the environment
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Our sustainability initiatives ensure a better future for our
            planet, communities, and customers. We believe that quality products
            and environmental responsibility go hand in hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-white/10 border-white/20 overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <initiative.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-emerald-100">{initiative.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Our Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalInitiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-emerald-300 mb-2">
                  {item.value}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-emerald-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Our sustainability journey is ongoing. We continuously seek new
              ways to reduce our environmental footprint while supporting the
              communities that make our business possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
