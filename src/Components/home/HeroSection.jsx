import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.04),transparent_50%)]" />
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] w-2 h-2 bg-red-400/40 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[15%] w-2 h-2 bg-amber-400/40 rounded-full"
        />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 padding-top-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4" />
              <span>+25 Anos de Experiência no Mercado</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6">
              A contabilidade certa para quem cuida de vidas
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Cuidamos da gestão tributária, fiscal e trabalhista da sua clínica ou consultório, 
              para você pagar menos impostos, evitar riscos e focar no que realmente importa: seus pacientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl('Contato')}>
                <Button size="lg" className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-900/30 font-semibold group">
                  Fale com um Especialista
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Servicos')}>
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl font-semibold">
                  Conheça Nossos Serviços
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">CRC Ativo</div>
                  <div className="text-slate-600 text-sm">Registro Verificado</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">200+ Clientes</div>
                  <div className="text-slate-600 text-sm">Empresas Atendidas</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-slate-50">
                    <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
                    <div className="text-slate-600 text-sm">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-red-50">
                    <div className="text-4xl font-bold text-red-700 mb-2">200+</div>
                    <div className="text-slate-600 text-sm">Clientes Ativos</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-amber-50">
                    <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
                    <div className="text-slate-600 text-sm">Satisfação</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-slate-50">
                    <div className="text-4xl font-bold text-slate-900 mb-2">24h</div>
                    <div className="text-slate-600 text-sm">Suporte Rápido</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Avaliação dos Clientes</span>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-4 shadow-xl"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}