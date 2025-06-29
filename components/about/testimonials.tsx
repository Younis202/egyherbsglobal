"use client";

import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The quality of their herbs is unmatched. You can taste the difference in every dish. Their commitment to sustainability and ethical sourcing makes them our preferred supplier.",
  },
  {
    quote:
      "Their commitment to sustainability sets them apart. A true leader in responsible sourcing and environmental stewardship in the herb and spice industry.",
  },
  {
    quote:
      "Working with Egy Herbs Global has transformed our supply chain. Exceptional quality, reliable delivery, and outstanding customer service make them a valued partner.",
  },
  {
    quote:
      "The authenticity of their Egyptian herbs brings a genuine taste of the region to our products. Their attention to detail in cultivation and processing is evident in every batch.",
  },
];

export function Testimonials() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
        style={{
          backgroundImage:
            'url("https://ik.imagekit.io/pcet3dvcu/home/pattern-light.png?updatedAt=1736259343720")',
        }}
      />

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
            <span className="text-emerald-600 font-medium">TESTIMONIALS</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our valued customers and partners about their experience
            working with Egy Herbs Global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-8 h-full border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                <Quote className="w-10 h-10 text-emerald-600 mb-6" />
                <p className="text-gray-600 mb-6 italic flex-grow">
                  "{testimonial.quote}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div style={{ opacity, y }} className="mt-16 text-center">
          <p className="text-lg text-emerald-600 font-medium">
            Join our growing list of satisfied partners worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
