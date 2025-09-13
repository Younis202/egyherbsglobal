'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { MapPin, Star } from "lucide-react";

export function ProductFilters() {
  const destinations = [
    { name: 'Germany', rating: 4.8, description: 'Ancient spices & herbs' },
    { name: 'India', rating: 4.9, description: 'Premium quality spices' },
    { name: 'Türkiye', rating: 4.7, description: 'Ceylon specialties' },
    { name: 'Morocco', rating: 4.6, description: 'Exotic blends' }
  ];

  return (
    <Card className="p-6 sticky top-24">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-medium text-base">Top Destinations</h3>
        </div>
        
        <div className="space-y-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0">
                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm text-gray-900">
                    {destination.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Featured Region</span>
          </div>
          <p className="text-xs text-emerald-700">
            Discover premium spices from the most renowned spice-growing regions worldwide.
          </p>
        </div>
      </motion.div>
    </Card>
  );
}
