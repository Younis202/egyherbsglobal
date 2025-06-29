"use client";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export function BestSellers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const bestSellers = products.filter((product) => product.isBestSeller);

  const updateScrollState = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
      setMaxScroll(
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Update scroll position after scrolling
      setTimeout(updateScrollState, 400);
    }
  };

  return (
    <section
      id="bestsellers"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Elegant decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100/80 to-transparent" />

      <div className="absolute -top-16 -right-16 w-96 h-96 bg-emerald-50/70 rounded-full blur-xl" />
      <div className="absolute bottom-24 -left-24 w-96 h-96 bg-amber-50/50 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-teal-50/30 rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300"></div>
            <span className="text-emerald-700 font-medium flex items-center text-sm tracking-wider">
              <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
              CUSTOMER FAVORITES
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 relative inline-block font-serif">
            Our Best Sellers
            <motion.div
              className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            Discover our most treasured herbs and spices, carefully selected for
            their exceptional quality, rich aroma, and authentic Egyptian
            heritage.
          </p>
        </motion.div>

        <div className="relative mt-8">
          <Button
            variant="outline"
            size="icon"
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full h-10 w-10 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 backdrop-blur-sm ${
              scrollPosition <= 10
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100"
            }`}
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl"
          >
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={updateScrollState}
            >
              {bestSellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="flex-none w-[280px] sm:w-[320px] snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Elegant scroll indicator */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-2">
              <div className="h-0.5 bg-gray-200 rounded-full w-40 overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500"
                  style={{
                    width: `${(scrollPosition / maxScroll) * 100}%`,
                    display: maxScroll > 0 ? "block" : "none",
                  }}
                />
              </div>
            </div>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full h-10 w-10 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 backdrop-blur-sm ${
              scrollPosition >= maxScroll - 10
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100"
            }`}
            onClick={() => scroll("right")}
            disabled={scrollPosition >= maxScroll - 10}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/products">
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-0 h-12 rounded-full text-sm font-medium transition-all duration-300 hover:scale-102 group shadow-sm"
            >
              Explore All Products
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Elegant testimonial badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -bottom-12 right-12 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block border border-gray-50"
        >
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-gray-700 text-sm italic font-light leading-relaxed">
            "The quality of these Egyptian herbs is truly exceptional. You can
            taste the authenticity in every dish — it's like bringing the
            essence of Egypt into my kitchen."
          </p>
        </motion.div>

        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute -bottom-6 left-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full p-4 shadow-lg hidden lg:flex items-center gap-2 border border-amber-200/50"
        >
          <Award className="h-5 w-5 text-amber-600" />
          <span className="text-amber-800 font-medium text-sm">
            Quality Award 2024
          </span>
        </motion.div>
      </div>
    </section>
  );
}
