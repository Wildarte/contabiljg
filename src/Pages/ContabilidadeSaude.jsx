import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { 
  Stethoscope, CheckCircle2, Phone, Mail, MapPin,
  TrendingDown, Shield, Clock, Users, FileText, 
  Calculator, UserCheck, Briefcase, Heart, Target, Eye,
  MessageCircle, ArrowRight
} from 'lucide-react';

export default function ContabilidadeSaude() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/contabilidade-saude-bg.png)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-red-950/90" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-700/20 text-red-300 px-4 py-2 rounded-full mb-6">
                <Stethoscope className="w-4 h-4" />
                <span className="text-sm font-semibold">Especialistas em Contabilidade Médica</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Cuidando da Saúde
                <span className="text-red-500"> Financeira</span> do Seu Negócio
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Contabilidade especializada para médicos, clínicas e profissionais da área da saúde. 
                Economia tributária e tranquilidade para você focar nos pacientes.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white text-lg px-8 py-6 rounded-xl">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Especialista
                  </Button>
                </a>
                <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-slate-100 text-lg px-8 py-6 rounded-xl">
                    <Phone className="w-5 h-5 mr-2" />
                    (11) 2621-2443
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Fundada em 2013</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Empresa Familiar</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-3xl transform rotate-6" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="space-y-4">
                    {[
                      { icon: TrendingDown, text: "Redução de impostos dentro da lei" },
                      { icon: Shield, text: "Segurança fiscal garantida" },
                      { icon: Clock, text: "Cumprimento de prazos" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                        <div className="w-12 h-12 rounded-xl bg-red-700 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Especialistas em Contabilidade para a Área Médica
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                A JG Contabilidade é um escritório contábil especializado no atendimento a médicos, 
                clínicas, consultórios e profissionais da área da saúde.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Atuamos de forma consultiva, ajudando nossos clientes a:
              </p>

              <div className="space-y-4">
                {[
                  "Reduzir impostos dentro da lei",
                  "Manter a regularidade fiscal",
                  "Tomar decisões financeiras mais seguras"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-700 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-red-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">2013</div>
                <div className="text-slate-600">Fundada</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                <div className="text-slate-600">Familiar</div>
              </div>

              <div className="bg-red-700 text-white rounded-2xl p-6 shadow-lg col-span-2">
                <Stethoscope className="w-8 h-8 mb-4" />
                <div className="text-lg font-semibold">Especialização Médica</div>
                <p className="text-red-100 text-sm mt-2">
                  Conhecimento técnico aliado à prática do dia a dia médico
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa Especialização */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossa Especialização</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Atendimento focado em profissionais e empresas da área da saúde
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UserCheck, title: "Médicos PF e PJ", desc: "Atendimento especializado" },
              { icon: Briefcase, title: "Clínicas Médicas", desc: "Gestão completa" },
              { icon: Heart, title: "Profissionais da Saúde", desc: "Consultoria dedicada" },
              { icon: FileText, title: "MEI Médico", desc: "Quando aplicável" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-200"
              >
                <div className="w-14 h-14 bg-red-700 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-red-950 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <Target className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-slate-200">
                Oferecer serviços contábeis de excelência, garantindo segurança, economia tributária 
                e tranquilidade aos profissionais da saúde.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <Eye className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-slate-200">
                Ser referência em contabilidade médica consultiva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <Heart className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-400" />
                  Ética e transparência
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-400" />
                  Atualização constante
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-400" />
                  Atendimento humanizado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-400" />
                  Responsabilidade
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Serviços Especializados</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluções completas para sua prática médica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Contabilidade Empresarial",
                icon: Calculator,
                items: ["Escrituração contábil", "Balancetes e demonstrações", "Análise de resultados", "Contabilidade consultiva"]
              },
              {
                title: "Gestão Tributária",
                icon: FileText,
                items: ["Apuração de impostos", "Emissão de guias", "Obrigações acessórias", "Planejamento tributário"]
              },
              {
                title: "Departamento Pessoal",
                icon: Users,
                items: ["Folha de pagamento", "Admissões e demissões", "Encargos trabalhistas", "eSocial e FGTS"]
              },
              {
                title: "Abertura de Empresas",
                icon: Briefcase,
                items: ["Abertura de empresa", "Alterações contratuais", "Regularização fiscal", "Baixa de empresas"]
              },
              {
                title: "MEI e Profissionais",
                icon: UserCheck,
                items: ["Regularização MEI", "Declaração Anual", "IR Pessoa Física", "Assessoria individual"]
              },
              {
                title: "Consultoria Médica",
                icon: Stethoscope,
                items: ["Planejamento tributário", "Análise financeira", "Redução de custos", "Suporte especializado"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-transparent hover:border-red-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-slate-600">
              O que nos torna únicos no mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, text: "Especializada na área médica" },
              { icon: Heart, text: "Atendimento personalizado" },
              { icon: Shield, text: "Uso de tecnologia moderna" },
              { icon: MessageCircle, text: "Comunicação clara e acessível" },
              { icon: TrendingDown, text: "Redução de riscos fiscais" },
              { icon: Calculator, text: "Solução na redução de impostos" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-700" />
                </div>
                <span className="font-semibold text-slate-900">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Por Que Escolher a JG Contabilidade?
              </h2>
              <div className="space-y-4">
                {[
                  "Segurança fiscal garantida",
                  "Economia de impostos dentro da lei",
                  "Organização financeira completa",
                  "Cumprimento rigoroso de prazos",
                  "Tranquilidade para focar nos pacientes"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-700 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-700 to-red-800 rounded-3xl p-10 text-white"
            >
              <Stethoscope className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">O Contador como Médico das Empresas</h3>
              <p className="text-red-100 mb-6">
                Assim como um médico cuida da saúde dos pacientes, nós cuidamos da saúde financeira 
                do seu negócio com dedicação e expertise.
              </p>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">25+ Anos</div>
                <div className="text-red-100">De experiência cuidando de empresas médicas</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos Cuidar da Saúde Financeira do Seu Negócio?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Entre em contato e agende uma análise contábil personalizada
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white text-lg px-8 py-6 rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-red-700 hover:bg-slate-100 text-lg px-8 py-6 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar Agora
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Telefone</div>
                  <a href="tel:+551126212443" className="text-slate-300 hover:text-white">
                    (11) 2621-2443
                  </a>
                  <br />
                  <a href="tel:+5511953600324" className="text-slate-300 hover:text-white">
                    (11) 95360-0324
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">E-mail</div>
                  <a href="mailto:contadora.jgcontabilidade@gmail.com" className="text-slate-300 hover:text-white break-all">
                    contadora.jgcontabilidade@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Localização</div>
                  <div className="text-slate-300">São Paulo/SP</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Calendar = Clock;
