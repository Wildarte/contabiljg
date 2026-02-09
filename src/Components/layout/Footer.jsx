import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Phone, Mail, MapPin, Clock, 
  Instagram,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696eabc3f819c40369eb7327/0fb056d95_logo.png" 
                alt="JG Contabilidade"
                className="h-16 mb-6 brightness-0 invert"
              />
              <p className="text-slate-400 mb-6 leading-relaxed">
                Somos uma empresa de prestação de serviços de contabilidade, 
                constituída por profissionais com larga experiência nas áreas 
                Contábil, Tributária, Fiscal e Trabalhista.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="https://www.instagram.com/_jgcontabilidade/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-700 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Início', href: 'Home' },
                  { name: 'Empresa', href: 'Empresa' },
                  { name: 'Serviços', href: 'Servicos' },
                  { name: 'Notícias', href: 'Noticias' },
                  { name: 'Contato', href: 'Contato' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={createPageUrl(link.href)}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                {[
                  'Contabilidade Empresarial',
                  'Consultoria Tributária',
                  'Departamento Pessoal',
                  'Gestão Fiscal',
                  'Abertura de Empresas',
                  'Consultoria Empresarial',
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      to={createPageUrl('Servicos')}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+551126212443" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>11 2621-2443</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contadora.jgcontabilidade@gmail.com" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>contadora.jgcontabilidade@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                  <span>Rua Pastoril de Itapetinga, 275<br />Jardim Danfer, São Paulo/SP<br />CEP: 03729-000</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <Clock className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                  <span>Seg - Sex: 08:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} JG Contabilidade. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
