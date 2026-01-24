import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  { name: "CRC", description: "Conselho Regional de Contabilidade" },
  { name: "Sescon", description: "Sindicato das Empresas de Contabilidade" },
  { name: "CFC", description: "Conselho Federal de Contabilidade" },
  { name: "Fenacon", description: "Federação Nacional das Empresas de Contabilidade" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certificações e Registros
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Credenciamento e Conformidade
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-bold text-lg">{cert.name}</div>
                <div className="text-sm text-slate-500">{cert.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}