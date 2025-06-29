"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    name: "Coming : USDA Organic",
    image:
      "https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2017%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2009_32_09%20%D9%85%20(1).png?updatedAt=1747507339854",
    description: "Certified organic products meeting USDA standards",
    benefits: [
      "No synthetic pesticides or fertilizers",
      "Non-GMO ingredients",
      "Environmentally sustainable practices",
      "Regular inspections and compliance",
    ],
  },
  {
    name: "Coming : Fair Trade Certified",
    image:
      "https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2017%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2009_32_09%20%D9%85%20(1).png?updatedAt=1747507339854",
    description: "Supporting fair wages and sustainable farming practices",
    benefits: [
      "Fair prices for farmers",
      "Safe working conditions",
      "Community development funds",
      "Environmental sustainability",
    ],
  },
  {
    name: "Coming : Non-GMO Project",
    image:
      "https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2017%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2009_32_09%20%D9%85%20(1).png?updatedAt=1747507339854",
    description: "Verified non-GMO ingredients and processes",
    benefits: [
      "Rigorous testing protocols",
      "Traceability throughout supply chain",
      "Transparency for consumers",
      "Protection of non-GMO food sources",
    ],
  },
];

export function Certifications() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />

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
              QUALITY ASSURANCE
            </span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards through internationally recognized
            certifications that validate our commitment to quality,
            sustainability, and ethical practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    width={400}
                    height={300}
                    src={cert.image}
                    alt={cert.name}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-emerald-600/90 text-white backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                      {cert.name}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <h4 className="text-sm font-medium text-emerald-600 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-emerald-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-700">
              These certifications are more than just logos—they represent our
              ongoing commitment to providing products that meet the highest
              standards of quality, sustainability, and ethical production. We
              regularly undergo rigorous inspections and audits to maintain
              these certifications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
