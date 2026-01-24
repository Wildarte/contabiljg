import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/Components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "A JG Contabilidade transformou a gestão financeira da nossa empresa. Com o planejamento tributário que fizeram, conseguimos reduzir nossa carga fiscal em mais de 20%. Profissionais excepcionais!",
    author: "Roberto Silva",
    role: "CEO",
    company: "Tech Solutions Ltda",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    content: "Trabalho com a JG há mais de 10 anos e nunca tive problemas com o Fisco. Eles são extremamente organizados, pontuais e sempre me mantêm informado sobre todas as obrigações.",
    author: "Ana Carolina Mendes",
    role: "Diretora Financeira",
    company: "Grupo Mendes",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    content: "Quando abri minha empresa, não sabia nada sobre contabilidade. A equipe da JG me orientou em cada passo, desde a escolha do regime tributário até a primeira declaração. Recomendo demais!",
    author: "Marcos Oliveira",
    role: "Proprietário",
    company: "Oliveira Comércio",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    content: "O diferencial da JG é o atendimento humanizado. Eles realmente se importam com o sucesso dos clientes. Sempre disponíveis para tirar dúvidas e dar orientações valiosas.",
    author: "Fernanda Costa",
    role: "Gerente Administrativa",
    company: "Costa & Associados",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              clientes
            </span>{' '}
            dizem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior patrimônio. 
            Veja o que eles têm a dizer sobre nosso trabalho.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Quote className="w-8 h-8 text-red-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="w-12 h-12 rounded-full border-slate-200 hover:border-red-300 hover:bg-red-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-red-700 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="w-12 h-12 rounded-full border-slate-200 hover:border-red-300 hover:bg-red-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}