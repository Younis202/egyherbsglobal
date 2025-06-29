"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 opacity-50 blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-lg p-8 space-y-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
      >
        <div className="space-y-6">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-gray-900"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="transition-all duration-200 border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 hover:border-gray-300"
              placeholder="Your name"
            />
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-gray-900"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="transition-all duration-200 border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 hover:border-gray-300"
              placeholder="you@example.com"
            />
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-gray-900"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="transition-all duration-200 border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 hover:border-gray-300 resize-none"
              rows={5}
              placeholder="How can we help you?"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
          disabled={isSubmitting}
        >
          <span
            className={`transition-opacity duration-200 ${
              isSubmitting ? "opacity-0" : "opacity-100"
            }`}
          >
            Send Message
          </span>
          {isSubmitting && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2"
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
              Sending...
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
