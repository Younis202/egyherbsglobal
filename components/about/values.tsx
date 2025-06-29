"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Heart, Leaf, Scale, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description:
      "We're dedicated to delivering only the finest Egyptian herbs, carefully selected and processed to preserve their natural properties.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "Our commitment to sustainable farming practices ensures the preservation of Egypt's rich agricultural heritage for future generations.",
  },
  {
    icon: Scale,
    title: "Fair Trade Practices",
    description:
      "We believe in equitable partnerships with our farmers, ensuring fair compensation and sustainable livelihoods for local communities.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Supporting local farming communities through education, resources, and long-term partnerships is central to our mission.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We maintain complete transparency in our supply chain and uphold the highest standards of business ethics.",
  },
  {
    icon: Globe,
    title: "Global Responsibility",
    description:
      "As a global company, we're committed to promoting sustainable practices and positive impact across our international operations.",
  },
];

export function OurValues() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">OUR VALUES</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our values shape every decision we make and every relationship we
            build, from the fields of Egypt to your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
