import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, FileText, Users, TrendingUp, Building2, ClipboardCheck,
  CheckCircle2, ArrowRight, Sparkles, ChevronDown, Phone, MessageCircle
} from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    id: 'contabilidade',
    icon: Calculator,
    title: "Contabilidade Empresarial",
    shortDesc: "Gestão contábil completa e estratégica para sua empresa",
    description: "Oferecemos serviços completos de contabilidade empresarial, com escrituração contábil precisa, elaboração de demonstrações financeiras e relatórios gerenciais que auxiliam na tomada de decisões estratégicas.",
    features: [
      "Escrituração contábil completa",
      "Balancetes mensais e anuais",
      "Demonstrações financeiras (DRE, Balanço)",
      "Livros contábeis obrigatórios",
      "LALUR e LACS",
      "Análise de indicadores financeiros",
      "Relatórios gerenciais personalizados",
      "Conciliação bancária e de contas"
    ],
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-50"
  },
  {
    id: 'tributaria',
    icon: FileText,
    title: "Consultoria Tributária",
    shortDesc: "Planejamento fiscal para redução legal de impostos",
    description: "Nossa consultoria tributária especializada desenvolve estratégias para otimização da carga fiscal da sua empresa, sempre dentro da legalidade, identificando oportunidades de economia e recuperação de créditos.",
    features: [
      "Planejamento tributário estratégico",
      "Escolha do melhor regime tributário",
      "Elisão fiscal legal e ética",
      "Recuperação de créditos tributários",
      "Revisão de procedimentos fiscais",
      "Análise de benefícios fiscais",
      "Defesas em processos administrativos",
      "Consultoria em operações especiais"
    ],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    id: 'pessoal',
    icon: Users,
    title: "Departamento Pessoal",
    shortDesc: "Gestão completa da folha de pagamento e obrigações trabalhistas",
    description: "Cuidamos de toda a rotina do departamento pessoal da sua empresa, desde a admissão até a rescisão, garantindo conformidade com a legislação trabalhista e cumprimento de todas as obrigações acessórias.",
    features: [
      "Admissões e rescisões",
      "Folha de pagamento mensal",
      "Férias e 13º salário",
      "FGTS e contribuições previdenciárias",
      "eSocial e DCTFWEB",
      "CAGED, RAIS e DIRF",
      "Homologações e cálculos trabalhistas",
      "Assessoria em questões trabalhistas"
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 'fiscal',
    icon: TrendingUp,
    title: "Gestão Fiscal",
    shortDesc: "Apuração de impostos e obrigações acessórias",
    description: "Realizamos toda a gestão fiscal da sua empresa, com apuração precisa de impostos, entrega pontual de declarações e acompanhamento constante da legislação para manter sua empresa em conformidade.",
    features: [
      "Apuração de impostos federais, estaduais e municipais",
      "SPED Fiscal e Contribuições",
      "EFD-Reinf e ECF",
      "Declarações acessórias",
      "Emissão e conferência de notas fiscais",
      "Parcelamentos e regularizações",
      "Acompanhamento de certidões negativas",
      "Análise de créditos de ICMS e PIS/COFINS"
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    id: 'abertura',
    icon: Building2,
    title: "Abertura de Empresas",
    shortDesc: "Assessoria completa para constituição empresarial",
    description: "Orientamos e executamos todo o processo de abertura da sua empresa, desde o planejamento societário até a obtenção de todas as licenças necessárias para início das atividades.",
    features: [
      "Consultoria sobre tipo societário",
      "Elaboração de contrato social",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrição estadual e municipal",
      "Alvará de funcionamento",
      "Licenças específicas do ramo",
      "Certificado digital"
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 'consultoria',
    icon: ClipboardCheck,
    title: "Consultoria Empresarial",
    shortDesc: "Assessoria estratégica para crescimento sustentável",
    description: "Oferecemos consultoria empresarial focada em resultados, com análise de indicadores, elaboração de relatórios gerenciais e orientação estratégica para o crescimento sustentável do seu negócio.",
    features: [
      "Análise de viabilidade econômica",
      "Indicadores de performance (KPIs)",
      "Relatórios gerenciais customizados",
      "Assessoria em captação de recursos",
      "Planejamento financeiro",
      "Análise de custos e margem",
      "Reestruturação empresarial",
      "Due diligence contábil"
    ],
    color: "from-slate-600 to-slate-700",
    bgColor: "bg-slate-100"
  }
];

export default function Servicos() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-800/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-800/30 text-red-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Nossos Serviços
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluções{' '}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                completas
              </span>{' '}
              em contabilidade
            </h1>
            <p className="text-xl text-slate-400">
              Oferecemos uma gama completa de serviços para atender todas as necessidades 
              contábeis, fiscais e trabalhistas da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-500 ${
                    expandedService === service.id ? 'shadow-2xl' : 'hover:shadow-lg'
                  }`}
                >
                  {/* Header */}
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600">{service.shortDesc}</p>
                      </div>

                      <button className={`w-10 h-10 rounded-full ${service.bgColor} flex items-center justify-center transition-transform ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="w-5 h-5 text-slate-700" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-slate-100">
                          <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                              <p className="text-slate-600 leading-relaxed mb-6">
                                {service.description}
                              </p>
                              <Link to={createPageUrl('Contato')}>
                                <Button className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl shadow-lg group`}>
                                  Solicitar Orçamento
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                            
                            <div className={`${service.bgColor} rounded-2xl p-6`}>
                              <h4 className="font-bold text-slate-900 mb-4">O que está incluso:</h4>
                              <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-800 via-red-900 to-slate-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de uma proposta personalizada?
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e receba uma proposta customizada para as necessidades da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contato')}>
                <Button size="lg" className="bg-white text-red-800 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl">
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-red-800 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  (11) 95360-0324
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}