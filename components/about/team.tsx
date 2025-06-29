"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />

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
            <span className="text-emerald-600 font-medium">
              FOUNDER & VISION
            </span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Visionary Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The driving force behind Egy Herbs Global, bringing Egyptian herbs
            and spices to the world with passion and expertise.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="overflow-hidden border-0 shadow-xl group bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    width={600}
                    height={600}
                    src="https://ik.imagekit.io/pcet3dvcu/home/WhatsApp%20Image%202025-01-06%20at%2014.57.07_3e47265b.jpg?updatedAt=1736168485410"
                    alt="Mohamed Hawas"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Mohamed Hawas
                  </h3>
                  <p className="text-emerald-600 font-medium text-lg mb-6">
                    CEO & Founder
                  </p>
                  <p className="text-gray-600 mb-8">
                    With a deep passion for Egyptian herbs and extensive market
                    insight, Mohamed Hawas founded Egy Herbs Global to bring the
                    finest quality Egyptian herbs and spices to the global
                    market. His vision combines traditional agricultural wisdom
                    with modern business practices to create sustainable,
                    high-quality products that meet international standards.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
