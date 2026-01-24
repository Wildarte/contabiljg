import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, Clock, ArrowRight, Search,
  Tag, TrendingUp, FileText, Users
} from 'lucide-react';
import { Input } from "@/Components/ui/input";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";

const categories = [
  { name: 'Todas', value: 'all' },
  { name: 'Tributário', value: 'tributario' },
  { name: 'Trabalhista', value: 'trabalhista' },
  { name: 'Empresarial', value: 'empresarial' },
  { name: 'Legislação', value: 'legislacao' },
];

const news = [
  {
    id: 1,
    title: "Novas regras do eSocial entram em vigor em 2024",
    excerpt: "Empresas precisam se adequar às novas obrigações acessórias do eSocial. Confira as principais mudanças e prazos.",
    category: "trabalhista",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Simples Nacional: tabelas atualizadas para 2024",
    excerpt: "Receita Federal divulga novas faixas de faturamento e alíquotas do Simples Nacional. Veja como isso afeta sua empresa.",
    category: "tributario",
    date: "2024-01-10",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Prazo para declaração do IR começa em março",
    excerpt: "Prepare-se para a temporada de declaração do Imposto de Renda. Confira os documentos necessários.",
    category: "tributario",
    date: "2024-01-05",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Mudanças na CLT: o que muda para as empresas",
    excerpt: "Reforma trabalhista traz novas regras para contratação e demissão. Entenda os impactos.",
    category: "trabalhista",
    date: "2024-01-03",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "MEI: novo teto de faturamento aprovado",
    excerpt: "Microempreendedores Individuais terão novo limite de faturamento anual. Saiba se você se enquadra.",
    category: "empresarial",
    date: "2023-12-28",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "ICMS: estados anunciam novas alíquotas",
    excerpt: "Diversas unidades federativas alteraram suas alíquotas de ICMS. Confira as mudanças por estado.",
    category: "legislacao",
    date: "2023-12-20",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    featured: false
  }
];

const categoryColors = {
  tributario: 'bg-red-100 text-red-700',
  trabalhista: 'bg-blue-100 text-blue-700',
  empresarial: 'bg-emerald-100 text-emerald-700',
  legislacao: 'bg-purple-100 text-purple-700',
};

const categoryIcons = {
  tributario: TrendingUp,
  trabalhista: Users,
  empresarial: FileText,
  legislacao: Tag,
};

export default function Noticias() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

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
              <Newspaper className="w-4 h-4" />
              Notícias e Artigos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fique{' '}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                atualizado
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Acompanhe as principais novidades em legislação, contabilidade, 
              tributação e gestão empresarial.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                placeholder="Buscar notícia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-full whitespace-nowrap ${
                  selectedCategory === category.value 
                    ? 'bg-red-700 hover:bg-red-800' 
                    : 'hover:bg-red-50 hover:text-red-700 hover:border-red-200'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Destaques</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => {
                const CategoryIcon = categoryIcons[item.category];
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={categoryColors[item.category]}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString('pt-BR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime} de leitura
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{item.excerpt}</p>
                        <span className="inline-flex items-center gap-2 text-red-700 font-semibold group-hover:gap-3 transition-all">
                          Ler mais <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {regularNews.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Todas as Notícias</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((item, index) => {
                  const CategoryIcon = categoryIcons[item.category];
                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className={categoryColors[item.category]}>
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(item.date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors flex-grow">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                          <span className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm group-hover:gap-3 transition-all">
                            Ler mais <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </>
          )}

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-slate-600">Tente buscar por outro termo ou categoria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}