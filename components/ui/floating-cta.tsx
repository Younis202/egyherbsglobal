'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface FloatingCTAProps {
  text?: string;
  href: string;
  position?: 'bottom' | 'top';
}

export function FloatingCTA({
  text = "Contact Us",
  href,
  position = 'bottom',
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set initial visibility
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed left-1/2 transform -translate-x-1/2 z-40 ${position === 'bottom' ? 'bottom-6' : 'top-24'}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <Link href={href}>
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-base"
        >
          {text}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </motion.div>
  );
}