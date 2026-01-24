import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511953600324"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696eabc3f819c40369eb7327/0377e516d_whats.png"
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>
  );
}