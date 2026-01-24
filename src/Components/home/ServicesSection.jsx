import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, FileText, Users, TrendingUp, 
  Building2, ClipboardCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description: "Gestão contábil completa com relatórios precisos, balancetes, demonstrações financeiras e análise de indicadores para tomada de decisão.",
    features: ["Escrituração Contábil", "Balancetes Mensais", "Demonstrações Financeiras"],
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50"
  },
  {
    icon: FileText,
    title: "Consultoria Tributária",
    description: "Planejamento tributário estratégico para redução legal da carga fiscal, escolha do melhor regime e recuperação de créditos.",
    features: ["Planejamento Fiscal", "Elisão Tributária", "Recuperação de Créditos"],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão completa da folha de pagamento, admissões, rescisões, férias, 13º e todas as obrigações trabalhistas.",
    features: ["Folha de Pagamento", "Obrigações Trabalhistas", "eSocial"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50"
  },
  {
    icon: TrendingUp,
    title: "Gestão Fiscal",
    description: "Apuração de impostos, declarações acessórias, SPED Fiscal e Contribuições com total conformidade legal.",
    features: ["Apuração de Impostos", "SPED Fiscal", "Declarações Acessórias"],
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Building2,
    title: "Abertura de Empresas",
    description: "Assessoria completa para constituição empresarial, desde o planejamento societário até a obtenção de todos os registros.",
    features: ["Registro na Junta", "CNPJ e Inscrições", "Alvarás e Licenças"],
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50"
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Empresarial",
    description: "Análise de performance, indicadores de gestão, assessoria financeira e suporte para crescimento sustentável.",
    features: ["Análise de Indicadores", "Relatórios Gerenciais", "Assessoria Financeira"],
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-100"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Soluções Completas para{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Sua Empresa
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis, fiscais e trabalhistas 
            para garantir a saúde financeira e o crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: service.color.includes('red') ? '#dc2626' : service.color.includes('amber') ? '#d97706' : service.color.includes('blue') ? '#2563eb' : service.color.includes('emerald') ? '#059669' : service.color.includes('purple') ? '#7c3aed' : '#475569' }} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={createPageUrl('Servicos')}
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:text-red-700 transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to={createPageUrl('Servicos')}>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold rounded-xl hover:from-red-800 hover:to-red-900 transition-all shadow-lg shadow-red-900/20">
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}