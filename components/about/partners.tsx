"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FlaskConical, HandCoins, LeafyGreen, Shield } from "lucide-react";

// Partnership categories instead of specific organizations
const partnershipTypes = [
  {
    title: "Certification Partners",
    icon: <Shield className="w-10 h-10 text-emerald-600" />,
    description:
      "Internationally recognized certification bodies that verify our organic practices and quality standards.",
    benefit: "Ensuring our products meet the highest global organic standards.",
  },
  {
    title: "Sustainability Allies",
    icon: <LeafyGreen className="w-10 h-10 text-emerald-600" />,
    description:
      "Global initiatives that promote environmental responsibility and sustainable agricultural practices.",
    benefit:
      "Developing innovative approaches to reduce our ecological footprint.",
  },
  {
    title: "Research Collaborators",
    icon: <FlaskConical className="w-10 h-10 text-emerald-600" />,
    description:
      "Agricultural research centers focused on sustainable farming innovation and development.",
    benefit: "Pioneering new methods for sustainable and efficient farming.",
  },
  {
    title: "Ethical Trade Networks",
    icon: <HandCoins className="w-10 h-10 text-emerald-600" />,
    description:
      "Organizations committed to ensuring fair compensation and proper working conditions.",
    benefit: "Creating equitable value chains that benefit all stakeholders.",
  },
];

export function Partners() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              COLLABORATIVE ECOSYSTEM
            </span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Partnership Network
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We thrive through strategic alliances that enhance our commitment to
            quality, sustainability, and ethical practices in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="p-3 rounded-lg bg-emerald-50 mr-4">
                    {partner.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {partner.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 flex-grow">
                  {partner.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-emerald-600 flex items-center">
                    <span className="mr-2">●</span>
                    {partner.benefit}
                  </p>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            "Together with our network of partners across various domains, we're
            committed to creating a more sustainable future for agriculture
            while delivering premium organic products."
          </p>

          <div className="mt-10">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 font-medium">
              Learn About Our Standards
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
