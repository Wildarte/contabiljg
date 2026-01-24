import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, FileText, Table2, Lightbulb, 
  FileCheck, Link2, ClipboardList, Building, 
  ExternalLink 
} from 'lucide-react';

const quickLinks = [
  {
    icon: Calendar,
    title: "Agenda de Obrigações",
    description: "Agendas estaduais, federal e trabalhistas",
    url: "https://sitecontabil.com.br/agendas_obrigacoes/",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FileText,
    title: "Modelos de Documentos",
    description: "Contratos, procurações, atas e documentos",
    url: "https://sitecontabil.com.br/modelos_contrato.htm",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Table2,
    title: "Tabelas Práticas",
    description: "Simples Nacional e documentos contábeis",
    url: "https://sitecontabil.com.br/tabelas_praticas",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Lightbulb,
    title: "Dicas de Marketing",
    description: "Textos motivacionais e dicas empresariais",
    url: "https://www.sitecontabil.com.br/dicas_marketing/",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: FileCheck,
    title: "Certidões Negativas",
    description: "Certidões estaduais, federal e municipais",
    url: "https://sitecontabil.com.br/certidoes_negativas",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Link2,
    title: "Facilitador Contábil",
    description: "Links variados de utilidade contábil",
    url: "https://sitecontabil.com.br/facilitador_contabil",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: ClipboardList,
    title: "Formulários Diversos",
    description: "Formulários da Receita Federal e INSS",
    url: "https://sitecontabil.com.br/formularios/",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Building,
    title: "Instituições Financeiras",
    description: "Bancos e linhas de crédito empresarial",
    url: "https://sitecontabil.com.br/instituicoes_financeiras",
    color: "from-slate-600 to-slate-700"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function QuickLinksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
            <Link2 className="w-4 h-4" />
            Links Úteis
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Recursos para{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              facilitar
            </span>{' '}
            seu trabalho
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Acesse rapidamente as principais ferramentas e recursos que você precisa 
            para manter sua empresa organizada e em dia.
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-slate-600 text-sm flex-grow">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Outros Links Importantes
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Receita Federal", url: "http://receita.economia.gov.br/" },
              { name: "Simples Nacional", url: "http://www8.receita.fazenda.gov.br/simplesnacional/" },
              { name: "Portal do Empreendedor", url: "http://www.portaldoempreendedor.gov.br/" },
              { name: "Sebrae", url: "http://www.sebrae.com.br/sites/PortalSebrae" },
              { name: "Ministério do Trabalho", url: "http://trabalho.gov.br/portal-mte/" },
              { name: "Previdência Social", url: "http://www.previdencia.gov.br/" },
              { name: "Sintegra", url: "http://www.sintegra.gov.br/" },
              { name: "Cartório 24 Horas", url: "https://www.cartorio24horas.com.br/" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-red-500" />
                <span className="group-hover:underline">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}