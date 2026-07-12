"use client";

import { useEffect, useState } from "react";
import { X, Phone, MessageCircle } from "lucide-react";

export default function InquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("naksh_popup_closed")) return;

    const timer = setTimeout(() => setOpen(true), 20000);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("naksh_popup_closed", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={closePopup}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white p-8 shadow-2xl"
      >
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Need Help?
        </span>

        <h2 className="mt-5 text-3xl font-bold">
          Looking for a Laptop?
        </h2>

        <p className="mt-3 text-slate-600">
          Need Computer Repair, CCTV Installation, Printer Service or Networking
          Solutions? Our experts are ready to help.
        </p>

        <div className="mt-8 grid gap-3">
          <a
            href="https://wa.me/919924230096?text=Hi%2C%20I'm%20looking%20for%20computer%20products%20or%20services."
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>

          <a
            href="tel:+919924230096"
            className="flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold hover:bg-slate-100"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Fast Response • Genuine Products • Expert Support
        </p>
      </div>
    </div>
  );
}
