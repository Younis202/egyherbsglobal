'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Sprout, HandHeart } from "lucide-react";

export function Mission() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">OUR MISSION</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Purpose and Promise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to sharing Egypt's finest herbs with the world while preserving traditional farming practices and supporting local communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 text-center h-full border-0 shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted source of premium Egyptian herbs, setting the standard for quality, sustainability, and ethical business practices.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 text-center h-full border-0 shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional Egyptian herbs while promoting sustainable agriculture and empowering local farming communities through fair trade practices.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 text-center h-full border-0 shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Promise</h3>
              <p className="text-gray-600">
                To maintain the highest standards of quality and integrity in every aspect of our business, from cultivation to delivery.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
