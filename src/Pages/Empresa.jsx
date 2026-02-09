import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Award, Users, Target, Clock, Heart,
  CheckCircle2, Building2, Sparkles, TrendingUp
} from 'lucide-react';
import eduardoMendes from '../../Eduardo Mendes.png';
import jaquelineGarcia from '../../Jaqueline Garcia.png';
import neizeSilva from '../../Neize Silva.png';
import priscilaSantos from '../../Priscila Santos.png';
import tatianeTavares from '../../Tatiane Tavares .png';

const values = [
  {
    icon: Heart,
    title: "Ética",
    description: "Atuamos com transparência, honestidade e respeito em todas as relações profissionais."
  },
  {
    icon: Target,
    title: "Compromisso",
    description: "Dedicação total para alcançar os melhores resultados para nossos clientes."
  },
  {
    icon: TrendingUp,
    title: "Excelência",
    description: "Buscamos constantemente a melhoria contínua em tudo o que fazemos."
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Construímos relacionamentos duradouros baseados na confiança mútua."
  }
];

const timeline = [
  {
    year: "2000",
    title: "Início da Experiência Profissional",
    description: "Início da atuação na área contábil, construindo experiência prática no mercado."
  },
  {
    year: "2013",
    title: "Fundação do Escritório",
    description: "Criação oficial do escritório de contabilidade, com foco em atendimento profissional e personalizado."
  },
  {
    year: "2018",
    title: "Consolidação",
    description: "Estruturação dos processos internos e ampliação da carteira de clientes."
  },
  {
    year: "2023",
    title: "Inovação e Tecnologia",
    description: "Adoção de ferramentas digitais, automações e soluções modernas para melhorar a gestão contábil."
  },
  {
    year: "2026",
    title: "26 Anos de Experiência",
    description: "Mais de duas décadas de experiência em contabilidade, unindo tradição, conhecimento e inovação."
  },
];

const team = [
  {
    name: "Jaqueline Garcia",
    role: "Ceo contadora da empresa",
    image: jaquelineGarcia,
    crc: "CRC 00000/O-0"
  },
  {
    name: "Eduardo Mendes",
    role: "Analista fiscal",
    image: eduardoMendes,
    crc: "CRC 00000/O-0"
  },
  {
    name: "Neize Silva",
    role: "Analista do departamento pessoal",
    image: neizeSilva,
    crc: "CRC 00000/O-0"
  },
  {
    name: "Priscila Santos",
    role: "Analista contábil",
    image: priscilaSantos,
    crc: "CRC 00000/O-0"
  },
  {
    name: "Tatiane Tavares",
    role: "Assistente de contabilidade",
    image: tatianeTavares,
    crc: "CRC 00000/O-0"
  }
];

export default function Empresa() {
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
              <Building2 className="w-4 h-4" />
              Quem Somos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tradição e{' '}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                inovação
              </span>{' '}
              em contabilidade
            </h1>
            <p className="text-xl text-slate-400">
              Há mais de 25 anos transformando números em resultados para empresas de todos os portes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Com experiência desde 2000, a <strong className="text-slate-900">JG Contabilidade</strong> nasceu com a missão de 
                  oferecer serviços contábeis de excelência, combinando conhecimento técnico apurado 
                  com atendimento personalizado.
                </p>
                <p>
                  Ao longo de mais de duas décadas, construímos uma trajetória sólida baseada na 
                  confiança e no comprometimento com o sucesso dos nossos clientes. Nossa equipe 
                  é formada por profissionais altamente qualificados e em constante atualização.
                </p>
                <p>
                  Hoje, atendemos mais de 200 empresas de diversos segmentos, oferecendo soluções 
                  completas em contabilidade, consultoria tributária, departamento pessoal e 
                  gestão fiscal.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-red-700">25+</div>
                  <div className="text-sm text-slate-600">Anos</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-red-700">200+</div>
                  <div className="text-sm text-slate-600">Clientes</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-red-700">20+</div>
                  <div className="text-sm text-slate-600">Especialistas</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Equipe JG Contabilidade"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Certificada</div>
                      <div className="text-slate-600 text-sm">CRC Ativo e Regular</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
              <p className="text-slate-600">
                Fornecer soluções contábeis de excelência, contribuindo para o crescimento 
                sustentável dos nossos clientes através de um atendimento personalizado 
                e comprometido com resultados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
              <p className="text-slate-600">
                Ser reconhecida como referência em contabilidade empresarial, destacando-se 
                pela inovação, qualidade dos serviços e pela construção de relacionamentos 
                duradouros com nossos clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
              <p className="text-slate-600">
                Ética, transparência, compromisso com a excelência, respeito às pessoas, 
                inovação contínua e responsabilidade social são os pilares que guiam 
                todas as nossas ações.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-red-700" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Marcos da nossa história
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-10 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                    <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                      <div className="text-red-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className="hidden md:flex w-12 h-12 bg-red-600 rounded-full items-center justify-center flex-shrink-0 z-10 shadow-[0_10px_20px_rgba(220,38,38,0.35)]">
                    <div className="w-4 h-4 rounded-full bg-white/10 border-2 border-white" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              Nossa Equipe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Profissionais especializados
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Contamos com uma equipe de contadores e consultores experientes, todos
              registrados no CRC e em constante atualização profissional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.08)] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-lg font-bold text-slate-900">{member.name}</div>
                  <div className="text-slate-600 text-sm mb-2">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
