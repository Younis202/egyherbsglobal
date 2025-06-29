"use client";

export function LocationMap() {
  return (
    <div className="relative h-[400px] w-full bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6958.308905878982!2d30.64722039999999!3d29.3071447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14596300713e78a3%3A0x574e9f9db9954104!2sEgy%20Herbs%20Global!5e0!3m2!1sen!2seg!4v1750971424780!5m2!1sen!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
