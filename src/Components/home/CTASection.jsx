import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-900 to-slate-900" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Pronto para{' '}
              <span className="text-amber-400">transformar</span>{' '}
              a gestão contábil da sua empresa?
            </h2>
            
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Entre em contato agora e descubra como podemos ajudar sua empresa 
              a crescer de forma sustentável e em conformidade com a legislação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to={createPageUrl('Contato')}>
                <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 hover:text-red-900 px-8 py-6 text-lg rounded-xl shadow-xl font-semibold group">
                  Solicitar Proposta
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 hover:text-red-900 px-8 py-6 text-lg rounded-xl shadow-xl font-semibold group">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-red-100">
              <a href="tel:+551126212443" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                (11) 2621-2443
              </a>
              <a href="mailto:contadora.jgcontabilidade@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                contadora.jgcontabilidade@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}