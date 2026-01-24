import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Clock, HeadphonesIcon, Target, 
  CheckCircle2, Zap, Lock, BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados protegidos com as mais avançadas práticas de segurança e confidencialidade."
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Cumprimento rigoroso de todos os prazos fiscais e obrigações acessórias."
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Equipe especializada disponível para atender suas demandas com agilidade."
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Estratégias personalizadas para maximizar a eficiência fiscal da sua empresa."
  },
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    description: "Sistemas modernos e integrados para gestão contábil eficiente e automatizada."
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Análises detalhadas e dashboards para tomada de decisão estratégica."
  }
];

const checkpoints = [
  "Atendimento personalizado e humanizado",
  "Profissionais certificados pelo CRC",
  "Atualizações constantes sobre legislação",
  "Processos otimizados e automatizados",
  "Comunicação clara e transparente",
  "Preços justos e sem surpresas"
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Por que nos escolher
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A parceria que sua empresa{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                precisa
              </span>{' '}
              para crescer
            </h2>
            
            <p className="text-lg text-slate-600 mb-10">
              Com mais de 25 anos de experiência, a JG Contabilidade se destaca pela 
              excelência no atendimento e comprometimento com os resultados dos nossos clientes.
            </p>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {checkpoints.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Conformidade Garantida</div>
                <div className="text-slate-600">Sua empresa sempre em dia com o Fisco</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}