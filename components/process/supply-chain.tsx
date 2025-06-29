"use client";

import { motion } from "framer-motion";
import {
  Award,
  Factory,
  Leaf,
  ShieldCheck,
  Sprout,
  Store,
  Sun,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    icon: Sprout,
    title: "Cultivation",
    description:
      "Herbs and aromatic plants are cultivated in carefully selected farms across all Egypt using traditional, chemical-free practices to preserve soil quality and crop purity.",
    image:
      "https://ik.imagekit.io/pcet3dvcu/484946734_623589443778884_7680816644550349773_n.jpg?updatedAt=1751040189874",
    stats: [
      { value: "100%", label: "Locally Grown" },
      { value: "95%", label: "Chemical-Free" },
    ],
    highlight: "Partnering with generations of experienced herb farmers.",
  },
  {
    icon: Sun,
    title: "Sun Drying",
    description:
      "Harvested herbs are naturally sun-dried on large woven trays (manakehel), using Egypt’s dry climate to retain natural oils, aroma, and vibrant color without artificial heat.",
    image:
      "https://ideogram.ai/assets/image/lossless/response/oXt9d_yMS-STfwadfQQEDw",
    stats: [
      { value: "The most accurate", label: "Drying Time" },
      { value: "Saturated", label: "Essential Oils Retained" },
    ],
    highlight: "Traditional solar drying by skilled local workers.",
  },
  {
    icon: Factory,
    title: "Sorting & Processing",
    description:
      "Dried herbs go through meticulous cleaning, sorting, and sieving in modern facilities equipped with stainless steel equipment and hygienic handling protocols, ready for export.",
    image:
      "https://ideogram.ai/assets/image/lossless/response/tHSt_CsRR4-haHRZxxXlSg",
    stats: [
      { value: "ISO 22000", label: "Food Safety Certified" },
      { value: "0%", label: "Preservatives Added" },
    ],
    highlight: "Clean rooms and food-grade machinery ensure quality.",
  },
  {
    icon: Truck,
    title: "Distribution & Export",
    description:
      "Packed herbs are transported in closed, temperature-aware trucks to major Egyptian ports. All logistics, documentation, and clearance are handled by our expert export team.",
    image:
      "https://ik.imagekit.io/pcet3dvcu/ChatGPT%20Image%2017%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2006_18_05%20%D9%85.png?updatedAt=1747495339304",
    stats: [
      { value: "100+", label: "Annual Shipments" },
      { value: "20+", label: "Export Countries" },
    ],
    highlight: "Smooth customs clearance and reliable global delivery.",
  },
  {
    icon: Store,
    title: "International Clients",
    description:
      "Our premium herbs and spices reach clients in Europe, Asia, and the Gulf, delivered with professional packaging that meets international quality and branding standards.",
    image: "https://retaj-herbs.com/wp-content/uploads/2023/07/Home_SE_R.webp",
    stats: [
      { value: "4.9", label: "Customer Ratings" },
      { value: "70%+", label: "Repeat Clients" },
    ],
    highlight: "Trusted supplier to global importers and manufacturers.",
  },
];

const sustainabilityFeatures = [
  { icon: Leaf, label: "Sustainable" },
  { icon: ShieldCheck, label: "Certified" },
  { icon: Users, label: "Community-Based" },
  { icon: Award, label: "Award-Winning" },
];

export function SupplyChain() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Decorative Circles Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-emerald-100 opacity-30"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-100 opacity-20"></div>
        <div className="absolute -bottom-48 left-1/4 w-72 h-72 rounded-full bg-emerald-100 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="text-emerald-600 font-medium tracking-wider text-sm">
              FARM TO TABLE
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 leading-tight">
            Our Sustainable{" "}
            <span className="text-emerald-600">Supply Chain</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Every step in our process is carefully monitored to ensure the
            highest quality and sustainability standards from seed to your
            doorstep.
          </p>

          {/* Sustainability badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-emerald-100"
              >
                <feature.icon className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Farms", value: "120+", icon: Sprout },
            { label: "Carbon Offset", value: "98%", icon: Leaf },
            { label: "Quality Score", value: "4.9/5", icon: Award },
            { label: "Satisfaction", value: "99.7%", icon: Users },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md border border-emerald-50 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Desktop view - Elegant flowing design */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-10 mb-28 ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-right pr-6" : "text-left pl-6"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-4 mb-5 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-lg">
                        <step.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                      {step.description}
                    </p>

                    {/* Feature callout badge */}
                    <div
                      className={`inline-flex items-center bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-5 shadow-sm ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <Leaf className="w-4 h-4 text-emerald-500 mr-2" />
                      <span className="text-sm font-medium text-emerald-700">
                        {step.highlight}
                      </span>
                    </div>

                    {/* Stats row */}
                    <div
                      className={`flex gap-6 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {step.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Side - Elegant treatment */}
                  <motion.div
                    className="w-72 h-72 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl transform rotate-3 shadow-xl"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 shadow-xl overflow-hidden">
                      <div className="absolute inset-2 overflow-hidden rounded-xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile view - Elegant vertical flow */}
        <div className="md:hidden space-y-12">
          <div className="absolute left-8 top-52 bottom-32 w-1 bg-gradient-to-b from-emerald-100 via-emerald-400 to-emerald-100"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-16"
            >
              <div className="absolute left-7 top-6 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 z-10"></div>

              <div className="relative bg-white rounded-xl shadow-xl p-6 border border-emerald-100">
                <div className="absolute -left-8 top-4 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold shadow-lg z-20">
                  {index + 1}
                </div>

                <div className="flex items-center gap-4 mb-4 pl-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 pl-4">{step.description}</p>

                {/* Feature highlight */}
                <div className="bg-emerald-50 rounded-lg p-3 mb-4 border-l-4 border-emerald-500">
                  <div className="flex items-center">
                    <Leaf className="w-5 h-5 text-emerald-500 mr-2" />
                    <span className="text-sm font-medium text-emerald-700">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Stats for mobile */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {step.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="bg-gray-50 rounded-lg p-3 text-center"
                    >
                      <div className="text-xl font-bold text-emerald-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center bg-white rounded-2xl shadow-xl p-8 border border-emerald-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Experience the Difference
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join us in our commitment to sustainability and quality. From farm
            to table, we ensure every step meets our exacting standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                Shop Our Products
              </button>
            </Link>

            <Link
              href={`https://wa.me/201222297357?text=${encodeURIComponent(
                "Hello! I'm interested in your products. Can you provide more information?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-emerald-600 border border-emerald-200 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 opacity-30"></div>
    </section>
  );
}
