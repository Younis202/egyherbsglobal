'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
      <p className="mt-4 text-gray-600">
        We'd love to hear from you. Here's how you can reach us.
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-gray-600 flex-shrink-0" />
          <div className="ml-4">
            <p className="font-medium text-gray-900">Phone</p>
            <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-gray-600 flex-shrink-0" />
          <div className="ml-4">
            <p className="font-medium text-gray-900">Email</p>
            <p className="mt-1 text-gray-600">support@example.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-gray-600 flex-shrink-0" />
          <div className="ml-4">
            <p className="font-medium text-gray-900">Office</p>
            <p className="mt-1 text-gray-600">
              123 Business Street<br />
              Suite 100<br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}