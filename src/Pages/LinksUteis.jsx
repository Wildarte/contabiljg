import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, FileText, Table2, Lightbulb, FileCheck, Link2, 
  ClipboardList, Building, ExternalLink, Search, Landmark,
  Briefcase, Shield, Calculator, Users, Globe
} from 'lucide-react';
import { Input } from "@/Components/ui/input";

const categories = [
  {
    title: "Ferramentas Contábeis",
    icon: Calculator,
    color: "from-red-500 to-red-600",
    links: [
      { name: "Agenda de Obrigações", description: "Agendas estaduais, federal e trabalhistas", url: "https://sitecontabil.com.br/agendas_obrigacoes/", icon: Calendar },
      { name: "Modelos de Documentos", description: "Contratos, procurações, atas e documentos", url: "https://sitecontabil.com.br/modelos_contrato.htm", icon: FileText },
      { name: "Tabelas Práticas", description: "Simples Nacional e documentos contábeis", url: "https://sitecontabil.com.br/tabelas_praticas", icon: Table2 },
      { name: "Certidões Negativas", description: "Certidões estaduais, federal e municipais", url: "https://sitecontabil.com.br/certidoes_negativas", icon: FileCheck },
      { name: "Facilitador Contábil", description: "Links variados de utilidade contábil", url: "https://sitecontabil.com.br/facilitador_contabil", icon: Link2 },
      { name: "Formulários Diversos", description: "Formulários da Receita Federal e INSS", url: "https://sitecontabil.com.br/formularios/", icon: ClipboardList },
    ]
  },
  {
    title: "Órgãos Governamentais",
    icon: Landmark,
    color: "from-blue-500 to-blue-600",
    links: [
      { name: "Receita Federal", description: "Portal da Receita Federal do Brasil", url: "http://receita.economia.gov.br/", icon: Landmark },
      { name: "Simples Nacional", description: "Portal do Simples Nacional", url: "http://www8.receita.fazenda.gov.br/simplesnacional/", icon: Calculator },
      { name: "Governo Federal", description: "Portal do Governo Federal", url: "http://www.brasil.gov.br/", icon: Globe },
      { name: "Previdência Social", description: "Portal da Previdência", url: "http://www.previdencia.gov.br/", icon: Shield },
      { name: "Ministério do Trabalho", description: "Portal do Trabalho", url: "http://trabalho.gov.br/portal-mte/", icon: Briefcase },
      { name: "Sintegra", description: "Sistema Integrado de Informações", url: "http://www.sintegra.gov.br/", icon: FileCheck },
    ]
  },
  {
    title: "Empreendedorismo",
    icon: Briefcase,
    color: "from-emerald-500 to-emerald-600",
    links: [
      { name: "Portal do Empreendedor", description: "MEI - Microempreendedor Individual", url: "http://www.portaldoempreendedor.gov.br/", icon: Users },
      { name: "Sebrae", description: "Serviço de Apoio às Micro e Pequenas Empresas", url: "http://www.sebrae.com.br/sites/PortalSebrae", icon: Briefcase },
      { name: "Instituições Financeiras", description: "Bancos e linhas de crédito", url: "https://sitecontabil.com.br/instituicoes_financeiras", icon: Building },
      { name: "Dicas de Marketing", description: "Textos motivacionais e dicas", url: "https://www.sitecontabil.com.br/dicas_marketing/", icon: Lightbulb },
    ]
  },
  {
    title: "Serviços Úteis",
    icon: Globe,
    color: "from-purple-500 to-purple-600",
    links: [
      { name: "Cartório 24 Horas", description: "Serviços de cartório online", url: "https://www.cartorio24horas.com.br/", icon: FileText },
      { name: "CRCs Estaduais", description: "Conselhos Regionais de Contabilidade", url: "https://sitecontabil.com.br/materias/crc-s-estaduais", icon: Shield },
      { name: "Tributos em Atraso", description: "Cálculo de tributos atrasados", url: "https://sitecontabil.com.br/consultas/calculos.html", icon: Calculator },
      { name: "Emissão de Notas Fiscais", description: "Links para emissão de NF", url: "https://sitecontabil.com.br/consultas/notafiscal.htm", icon: FileCheck },
    ]
  }
];

export default function LinksUteis() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(category => ({
    ...category,
    links: category.links.filter(link => 
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.links.length > 0);

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
              <Link2 className="w-4 h-4" />
              Links Úteis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Recursos para{' '}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                facilitar
              </span>{' '}
              seu trabalho
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Acesso rápido às principais ferramentas, órgãos governamentais e recursos úteis 
              para a gestão da sua empresa.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                placeholder="Buscar link..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.links.map((link, linkIndex) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <link.icon className="w-6 h-6" style={{ color: category.color.includes('red') ? '#dc2626' : category.color.includes('blue') ? '#2563eb' : category.color.includes('emerald') ? '#059669' : '#7c3aed' }} />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                              {link.name}
                              <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-slate-600 text-sm">{link.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-slate-600">Tente buscar por outro termo</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}