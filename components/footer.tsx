"use client";

import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our newsletter.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  // Animation variants
  const hoverLinkVariants = {
    initial: { x: 0 },
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  // Links data
  const quickLinks = [
    { href: "/products", label: "Products" },
    { href: "/process", label: "Our Process" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const productLinks = [
    { href: "/products", label: "Herbs" },
    { href: "/products", label: "Spices" },
    { href: "/products", label: "Seeds" },
    { href: "/products", label: "Legumes" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/egy-herbs-global/",
    },
    { icon: Facebook, href: "https://www.facebook.com/egy.herbs.global" },
    { icon: Instagram, href: "https://www.instagram.com/egy.herbsglobal" },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("https://ik.imagekit.io/pcet3dvcu/home/pattern.png?updatedAt=1736259343720")',
            backgroundSize: "200px",
          }}
        />

        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        {/* Accent elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl" />

        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden"
        >
          <div className="bg-emerald-800/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-700/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-emerald-50 mb-2">
                  <span className="italic">Stay</span> Connected
                </h3>
                <p className="text-emerald-200/80 text-sm leading-relaxed">
                  Join our newsletter for exclusive offers and updates on our
                  latest premium Egyptian herbs and spices.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-emerald-800/50 border-emerald-600/30 text-emerald-50 placeholder:text-emerald-300/50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-950"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing
                    </span>
                  ) : (
                    <>
                      Subscribe <Send className="h-4 w-4 ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="block"
            >
              <div className="flex items-center gap-2">
                <Image
                  width={120}
                  height={120}
                  src="https://egyherbsglobal-770136110.imgix.net/global/2.png"
                  alt="Egy Herbs Global Logo"
                  className="h-12 w-auto"
                />
              </div>
            </motion.div>
            <p className="text-sm text-emerald-300/80 leading-relaxed">
              Premium quality Egyptian herbs, spices, and seeds sourced directly
              from the fertile lands of Egypt.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Link
                      href={social.href}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors p-2 bg-emerald-800/30 hover:bg-emerald-800/50 shadow-sm hover:shadow rounded-full inline-flex"
                      aria-label={Icon.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-emerald-200 mb-5 text-lg border-b border-emerald-700/50 pb-2 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={hoverLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-emerald-300/80 hover:text-emerald-200 transition-colors flex items-center group text-sm"
                  >
                    <Leaf className="w-3 h-3 mr-2 text-emerald-500 transition-transform group-hover:rotate-12" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-medium text-emerald-200 mb-5 text-lg border-b border-emerald-700/50 pb-2 font-serif">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={hoverLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-emerald-300/80 hover:text-emerald-200 transition-colors flex items-center group text-sm"
                  >
                    <Leaf className="w-3 h-3 mr-2 text-emerald-500 transition-transform group-hover:rotate-12" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-emerald-200 mb-5 text-lg border-b border-emerald-700/50 pb-2 font-serif">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:text-emerald-300 transition-colors" />
                <span className="text-sm text-emerald-300/80">
                  info@egyherbsglobal.com
                </span>
              </li>
              <li className="flex items-start group">
                <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:text-emerald-300 transition-colors" />
                <span className="text-sm text-emerald-300/80">
                  +20 122 229 7357
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:text-emerald-300 transition-colors" />
                <span className="text-sm text-emerald-300/80">
                  Egypt, Fayoum, Ibshaway – Al Nazla
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-emerald-700/30">
              <h4 className="font-medium text-emerald-200 mb-2 text-xs uppercase tracking-wider font-serif">
                Business Hours
              </h4>
              <p className="text-xs text-emerald-300/80">
                Sunday - Thursday: 9:00 AM - 5:00 PM
              </p>
              <p className="text-xs text-emerald-300/80">
                Friday - Saturday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-emerald-700/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-emerald-400/80">
            &copy; {new Date().getFullYear()} Egy Herbs Global. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Shipping Policy"].map(
              (item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-xs text-emerald-400/80 hover:text-emerald-300 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
