'use client';

import { Product } from '@/types/product';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, Check, Truck, Package, Calendar, Tag, Heart, RefreshCw, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative bg-emerald-50">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="h-full w-full"
              >
                <Image
                  src={product.url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <div className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                {product.category}
              </div>
              {product.isBestSeller && (
                <div className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  <span>Best Seller</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-6 flex flex-col">
            <DialogHeader>
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-bold text-gray-900">{product.name}</DialogTitle>
                  <Button 
                    variant="ghost"
                    size="icon"
                    className={`rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 italic mt-1">{product.botanicalName}</p>
              </motion.div>
            </DialogHeader>
            
            {/* Rating */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideUp} 
              className="flex items-center mt-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.rating} rating</span>
            </motion.div>

            {/* Price */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideUp} 
              className="mt-4"
            >
              <span className="text-2xl font-bold text-emerald-700">
                {product.price ? `$${product.price}` : "Request Quote"}
              </span>
              {product.comparePrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  ${product.comparePrice}
                </span>
              )}
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              className="mt-5"
            >
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                
                {/* Details Tab */}
                <TabsContent value="details" className="pt-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This premium quality {product.name.toLowerCase()} is sourced directly from Egypt's fertile lands, 
                    ensuring exceptional flavor and aroma for your culinary or medicinal needs. Our products undergo 
                    strict quality control to guarantee purity and potency.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="bg-emerald-100 p-1.5 rounded-full">
                        <Package className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="bg-emerald-100 p-1.5 rounded-full">
                        <RefreshCw className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>100% Pure</span>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Specifications Tab */}
                <TabsContent value="specifications" className="pt-4">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-medium block text-gray-700">Available Forms</span>
                        <span className="text-gray-500">{product.availableForms}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-medium block text-gray-700">Packing</span>
                        <span className="text-gray-500">{product.packing}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-medium block text-gray-700">Weight</span>
                        <span className="text-gray-500">{product.weight}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-medium block text-gray-700">Season</span>
                        <span className="text-gray-500">{product.season}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Shipping Tab */}
                <TabsContent value="shipping" className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-800">International Shipping</h4>
                        <p className="text-sm text-gray-600">Ships worldwide with tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-800">Bulk Orders</h4>
                        <p className="text-sm text-gray-600">Special rates available for bulk purchases</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            {/* Quantity Selector and Add to Cart */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideUp} 
              className="mt-auto pt-6"
            >
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                
                {/* Add to Cart Button */}
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </Button>
              </div>
              
              {/* Sample Request */}
              <Button 
                variant="outline" 
                className="w-full mt-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full"
              >
                Request Sample
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}