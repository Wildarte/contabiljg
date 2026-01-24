import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: "25+",
    label: "Anos de Experiência",
    description: "No mercado contábil"
  },
  {
    icon: Users,
    value: "200+",
    label: "Clientes Ativos",
    description: "Empresas atendidas"
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    description: "Taxa de retenção"
  },
  {
    icon: TrendingUp,
    value: "15K+",
    label: "Declarações",
    description: "Entregues por ano"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
      backgroundImage: 'url(/stats-bg.png)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/85" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative text-center p-8 rounded-3xl border border-slate-800 hover:border-red-800/50 transition-colors bg-slate-900/50 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-red-800 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-900/30">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                
                <div className="text-slate-500 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
