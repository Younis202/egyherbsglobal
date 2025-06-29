'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are your business hours?</AccordionTrigger>
              <AccordionContent>
                We are open Monday through Friday from 9:00 AM to 6:00 PM EST. Our customer service team is available during these hours to assist you with any questions or concerns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order ships, you will receive a confirmation email with tracking information. You can use this tracking number to monitor your shipment's progress through our delivery partner's website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for all unused products in their original packaging. Please contact our customer service team to initiate a return. Shipping costs for returns are the responsibility of the customer unless the item was received damaged or incorrect.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view shipping options and rates during checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                You can reach our customer support team through multiple channels: email at support@example.com, phone at 1-800-123-4567, or by filling out the contact form above. We aim to respond to all inquiries within 24 business hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}