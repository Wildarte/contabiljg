import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const faqs = [
  {
    question: "Quais documentos preciso para abrir uma empresa?",
    answer: "Para abrir uma empresa você precisa de: RG, CPF, comprovante de residência, definição do tipo societário, nome empresarial, atividades (CNAEs), capital social e endereço comercial. Nossa equipe orienta em todo o processo."
  },
  {
    question: "Como funciona o regime do Simples Nacional?",
    answer: "O Simples Nacional é um regime tributário simplificado para micro e pequenas empresas com faturamento anual de até R$ 4,8 milhões. Unifica o pagamento de diversos impostos em uma única guia (DAS) com alíquotas progressivas."
  },
  {
    question: "Qual a diferença entre contador e técnico em contabilidade?",
    answer: "O contador possui formação superior em Ciências Contábeis e pode realizar todas as atividades contábeis, incluindo auditorias e perícias. O técnico em contabilidade tem formação de nível médio e atua sob supervisão de um contador."
  },
  {
    question: "Com que frequência recebo os relatórios contábeis?",
    answer: "Emitimos balancetes mensais, demonstrações financeiras trimestrais e relatórios gerenciais conforme a necessidade do cliente. Todos os documentos ficam disponíveis em nossa plataforma online."
  },
  {
    question: "Vocês atendem empresas de fora da cidade?",
    answer: "Sim! Atendemos empresas de todo o Brasil através de nossa plataforma digital. Todos os processos podem ser realizados online, com documentos digitais e reuniões por videoconferência."
  },
  {
    question: "Como funciona o eSocial e quais são as obrigações?",
    answer: "O eSocial é o sistema de escrituração digital das obrigações fiscais, previdenciárias e trabalhistas. Inclui informações sobre admissões, demissões, folha de pagamento, segurança do trabalho, entre outras. Cuidamos de todas essas obrigações."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Dúvidas Frequentes
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Perguntas{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                frequentes
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Confira as respostas para as dúvidas mais comuns sobre nossos serviços 
              e processos contábeis.
            </p>

            <Link to={createPageUrl('Contato')}>
              <Button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-6 rounded-xl">
                <MessageCircle className="mr-2 w-5 h-5" />
                Ainda tem dúvidas? Fale conosco
              </Button>
            </Link>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-red-200 shadow-lg' 
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}