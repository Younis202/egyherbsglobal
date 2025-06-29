import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useState, useEffect } from 'react';
import { ProductCard } from "./product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, Check, Grid3X3, Grid2X2, X, ArrowUpDown, SortAsc, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductGridProps {
  category: string;
}

const MemoizedProductCard = memo(ProductCard);

const ITEMS_PER_PAGE = 12;

export function ProductGrid({ category }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [gridColumns, setGridColumns] = useState(3);
  const [isFilterActive, setIsFilterActive] = useState(false);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilters, sortBy]);

  // Filter products based on category, search term, and active filters
  const filteredProducts = products
    .filter(product => 
      (category === 'all' || product.category.toLowerCase() === category.toLowerCase()) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeFilters.length === 0 || 
        (activeFilters.includes('bestSeller') ? product.isBestSeller : true) &&
        (activeFilters.includes('organic') ? product.isOrganic : true) &&
        (activeFilters.includes('topRated') ? product.rating >= 4.5 : true))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        default:
          return 0;
      }
    });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm('');
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'name': return 'Name (A-Z)';
      case 'nameDesc': return 'Name (Z-A)';
      case 'rating': return 'Rating (High-Low)';
      case 'newest': return 'Newest First';
      default: return 'Sort by';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search, Filter and Sort Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-1 flex flex-col sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 text-base bg-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 p-2">
            {/* Filter Button */}
            <DropdownMenu open={isFilterActive} onOpenChange={setIsFilterActive}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={activeFilters.length > 0 ? "default" : "outline"}
                  className={`px-4 h-10 ${activeFilters.length > 0 ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : ''}`}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilters.length > 0 && (
                    <Badge className="ml-2 bg-white text-emerald-600 hover:bg-white">{activeFilters.length}</Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Filter Products</h3>
                    {activeFilters.length > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearFilters}
                        className="h-8 text-xs text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                  <DropdownMenuItem 
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleFilter('bestSeller')}
                  >
                    <span>Best Sellers</span>
                    {activeFilters.includes('bestSeller') && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleFilter('organic')}
                  >
                    <span>Organic</span>
                    {activeFilters.includes('organic') && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleFilter('topRated')}
                  >
                    <span>Top Rated (4.5+)</span>
                    {activeFilters.includes('topRated') && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-4 h-10">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  {getSortLabel()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setSortBy('name')} className="flex items-center gap-2 cursor-pointer">
                  <SortAsc className="h-4 w-4" />
                  <span>Name (A-Z)</span>
                  {sortBy === 'name' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('nameDesc')} className="flex items-center gap-2 cursor-pointer">
                  <SortAsc className="h-4 w-4 transform rotate-180" />
                  <span>Name (Z-A)</span>
                  {sortBy === 'nameDesc' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('rating')} className="flex items-center gap-2 cursor-pointer">
                  <Star className="h-4 w-4" />
                  <span>Rating (High-Low)</span>
                  {sortBy === 'rating' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('newest')} className="flex items-center gap-2 cursor-pointer">
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Newest First</span>
                  {sortBy === 'newest' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Grid View Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  {gridColumns === 3 ? <Grid3X3 className="h-4 w-4" /> : <Grid2X2 className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setGridColumns(3)} className="flex items-center gap-2 cursor-pointer">
                  <Grid3X3 className="h-4 w-4" />
                  <span>3 Columns</span>
                  {gridColumns === 3 && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setGridColumns(2)} className="flex items-center gap-2 cursor-pointer">
                  <Grid2X2 className="h-4 w-4" />
                  <span>2 Columns</span>
                  {gridColumns === 2 && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.div>

      {/* Active filters display */}
      {activeFilters.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex flex-wrap gap-2 px-4 sm:px-6 lg:px-8"
        >
          {activeFilters.map(filter => (
            <Badge 
              key={filter} 
              variant="outline"
              className="py-1.5 px-3 rounded-full border-emerald-200 text-emerald-700 bg-emerald-50 flex items-center gap-1"
            >
              {filter === 'bestSeller' && 'Best Sellers'}
              {filter === 'organic' && 'Organic'}
              {filter === 'topRated' && 'Top Rated'}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => toggleFilter(filter)}
              />
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-xs text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 h-7 rounded-full"
          >
            Clear all
          </Button>
        </motion.div>
      )}

      {/* Results summary */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-sm">
          Showing <span className="font-medium text-gray-700">{paginatedProducts.length}</span> of <span className="font-medium text-gray-700">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Products Grid with staggered animation */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 px-4 sm:px-6 lg:px-8`}>
        <AnimatePresence mode="wait">
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="will-change-transform"
            >
              <MemoizedProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {paginatedProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 px-4"
        >
          <div className="bg-gray-50 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            We couldn't find any products matching your criteria. Try adjusting your search or filters.
          </p>
          <Button 
            onClick={clearFilters}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
          >
            Clear filters
          </Button>
        </motion.div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 mb-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-sm rounded-full px-5"
          >
            Previous
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => 
              page === 1 || 
              page === totalPages || 
              (page >= currentPage - 1 && page <= currentPage + 1)
            )
            .map((page, index, array) => (
              <React.Fragment key={page}>
                {index > 0 && array[index - 1] !== page - 1 && (
                  <Button variant="ghost" disabled className="text-sm">
                    ...
                  </Button>
                )}
                <Button
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={`text-sm rounded-full w-10 ${currentPage === page ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`}
                >
                  {page}
                </Button>
              </React.Fragment>
            ))
          }
          
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-sm rounded-full px-5"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}