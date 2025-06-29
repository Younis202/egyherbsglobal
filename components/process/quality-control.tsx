"use client";

import { motion } from "framer-motion";
import { Award, Check, Gauge, Microscope, ShieldCheck } from "lucide-react";
import Image from "next/image";

const qualitySteps = [
  {
    icon: Microscope,
    title: "Laboratory Testing",
    description:
      "Every batch undergoes rigorous testing for quality and purity",
    details: [
      "Microbiological analysis for safety",
      "Chemical composition testing",
      "Pesticide residue screening",
      "Heavy metal analysis",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict quality control measures throughout processing",
    details: [
      "Multiple inspection points",
      "Adherence to international standards",
      "Comprehensive documentation",
      "Regular audits and reviews",
    ],
  },
  {
    icon: Gauge,
    title: "Potency Analysis",
    description: "Regular testing to ensure optimal active compounds",
    details: [
      "Essential oil content measurement",
      "Active compound verification",
      "Flavor profile analysis",
      "Aroma intensity testing",
    ],
  },
  {
    icon: Award,
    title: "Coming Certification",
    description: "Meeting international quality standards",
    details: [
      "USDA Organic certification",
      "ISO 22000 compliance",
      "HACCP implementation",
      "Fair Trade certification",
    ],
  },
];

export function QualityControl() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-300 mt-3"></div>
              <span className="text-emerald-600 font-medium">
                QUALITY ASSURANCE
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive quality control process ensures that every
              product meets our exacting standards. From field to final
              packaging, we maintain rigorous testing and verification
              procedures.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="https://images.piclumen.com/normal/20250518/01/270e5319609542a1bc4b5a65208e80cf.webp"
                alt="Quality control laboratory"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">
                    Our Promise
                  </h3>
                  <p className="text-gray-900 font-medium">
                    "Quality is never an accident; it is always the result of
                    intelligent effort."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why Quality Matters
              </h3>
              <p className="text-gray-700 mb-4">
                The quality of herbs and spices directly impacts their flavor,
                aroma, and beneficial properties. Our meticulous quality control
                ensures you receive products with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maximum flavor intensity and authenticity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optimal levels of beneficial compounds</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consistent quality in every batch</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Safety and purity you can trust</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {qualitySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-emerald-600" />
                            </div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
