'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from '@/types/product';
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import { ProductDetailsModal } from './product-details-modal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="h-full"
      >
        <Card className="relative overflow-hidden group bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl h-full">
          {/* Image Container with Gradient Overlay */}
          <div className="aspect-square relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Image
              src={product.url}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              quality={90}
              priority={true}
            />
            
            {/* Floating Action Buttons */}
            <div className="absolute right-3 top-3 z-20 flex flex-col gap-2 transition-all duration-300">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowDetails(true)}
              >
                <Eye className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
              <Badge className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                {product.category}
              </Badge>
              {product.isBestSeller && (
                <Badge className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  <span>Best Seller</span>
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Title and Botanical Name */}
            <div className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900 mb-0.5 group-hover:text-emerald-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 italic line-clamp-1">{product.botanicalName}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-xs mb-4">
              <div className="text-gray-500">
                <span className="font-medium text-gray-700">Form:</span> {product.availableForms.split('-')[0]}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between mt-4">
              <div className="font-bold text-lg text-emerald-700">
                {product.price ? `$${product.price}` : "Request Quote"}
              </div>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm group-hover:shadow-md transition-all rounded-full px-4 py-1 text-sm font-medium"
                onClick={() => setShowDetails(true)}
              >
                Details
              </Button>
            </div>
          </div>
          
          {/* Bottom Shine Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
        </Card>
      </motion.div>

      <ProductDetailsModal 
        product={product}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}