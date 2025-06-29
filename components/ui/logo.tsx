import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  isScrolled?: boolean;
}

export function Logo({ className, width = 40, height = 40, isScrolled = false }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={`rounded-md p-1.5 transition-colors duration-300 ${isScrolled ? 'bg-emerald-600 text-white' : 'bg-white/20 backdrop-blur-sm text-white'}`}>
        <Leaf className="w-5 h-5" />
      </div>
      <div className="font-bold text-lg tracking-tight">
        <span className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Egy</span>
        <span className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>Herbs</span>
      </div>
    </div>
  );
}