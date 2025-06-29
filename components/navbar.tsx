"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Home,
  Info,
  Mail,
  Menu,
  Package,
  ShoppingCart,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// Define interface for dropdown items
interface DropdownItem {
  href: string;
  label: string;
}

// Define interface for navigation links
interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  {
    href: "/products",
    label: "Products",
    icon: Package,
    dropdown: [
      { href: "/products", label: "Herbs" },
      { href: "/products", label: "Spices" },
      { href: "/products", label: "Seeds" },
      { href: "/products", label: "Legumes" },
    ],
  },
  { href: "/process", label: "Process", icon: Workflow },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (href: string) => {
    if (activeDropdown === href) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(href);
    }
  };

  return (
    <>
      <nav
        className={`fixed py-1 top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={150}
                height={150}
                src={
                  isScrolled || isOpen
                    ? "https://egyherbsglobal-770136110.imgix.net/global/1.png"
                    : "https://egyherbsglobal-770136110.imgix.net/global/2.png"
                }
                alt="Logo"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(link.href)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-full text-base transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-emerald-600 text-white"
                          : isScrolled
                          ? "text-gray-700 hover:bg-emerald-50"
                          : "text-white hover:bg-white/20"
                      }`}
                      aria-expanded={activeDropdown === link.href}
                    >
                      <link.icon className="h-4 w-4 mr-1" />
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                          activeDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-full text-base transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-emerald-600 text-white"
                          : isScrolled
                          ? "text-gray-700 hover:bg-emerald-50"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      <link.icon className="h-4 w-4 mr-1" />
                      <span>{link.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <Button
                className={`px-5 py-2 rounded-full text-base transition-all duration-300 ${
                  isScrolled
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white text-emerald-700 hover:bg-white/90"
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || isOpen ? "text-gray-900" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.href} className="rounded-lg overflow-hidden">
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.href)}
                            className={`flex items-center justify-between w-full p-3 ${
                              pathname === link.href
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            aria-expanded={activeDropdown === link.href}
                          >
                            <div className="flex items-center">
                              <link.icon className="h-5 w-5 mr-2" />
                              <span className="text-base">{link.label}</span>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-300 ${
                                activeDropdown === link.href ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === link.href && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-gray-50 pl-10 pr-4"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsOpen(false);
                                    }}
                                    className="block py-2 text-sm text-gray-600 hover:text-emerald-600"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center p-3 ${
                            pathname === link.href
                              ? "bg-emerald-50 text-emerald-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <link.icon className="h-5 w-5 mr-2" />
                          <span className="text-base">{link.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/products"
                    className="w-full p-3 mt-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center text-base"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 z-40"
        />
      )}
    </>
  );
}
