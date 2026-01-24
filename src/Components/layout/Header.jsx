import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/Components/ui/button";
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const navigation = [
  { name: 'Início', href: 'Home' },
  { name: 'Empresa', href: 'Empresa' },
  { name: 'Área Médica', href: 'ContabilidadeSaude' },
  { 
    name: 'Serviços', 
    href: 'Servicos',
    submenu: [
      { name: 'Contabilidade', href: 'Servicos' },
      { name: 'Consultoria Tributária', href: 'Servicos' },
      { name: 'Departamento Pessoal', href: 'Servicos' },
      { name: 'Abertura de Empresas', href: 'Servicos' },
    ]
  },
  { name: 'Notícias', href: 'Noticias' },
  { name: 'Contato', href: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    const currentPath = location.pathname.toLowerCase();
    return currentPath.includes(href.toLowerCase());
  };

  const isMedicalPage = location.pathname.toLowerCase().includes('contabilidade-saude');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isMedicalPage
          ? 'bg-white shadow-md py-3'
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="/logo.png"
                alt="JG Contabilidade"
                className="h-14 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                item.submenu ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isScrolled
                          ? 'text-slate-900 hover:text-red-700 hover:bg-red-50'
                          : 'text-slate-900 hover:text-red-700 hover:bg-red-50'
                      }`}>
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white border border-slate-100 shadow-xl rounded-xl p-2">
                      {item.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.name} asChild>
                          <Link 
                            to={createPageUrl(subitem.href)}
                            className="w-full px-4 py-3 rounded-lg text-slate-700 hover:text-red-700 hover:bg-red-50 cursor-pointer transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-red-700 bg-red-50'
                        : 'text-slate-900 hover:text-red-700 hover:bg-red-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+551126212443" className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <Phone className="w-4 h-4" />
                11 2621-2443
              </a>
              <a href="https://wa.me/5511953600324" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-6 rounded-xl shadow-lg shadow-red-900/20">
                  Falar com especialista
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg text-slate-900 ${
                mobileMenuOpen ? 'opacity-0 pointer-events-none' : ''
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-60 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-12">
                  <img 
                    src="/logo.png"
                    alt="JG Contabilidade"
                    className="h-12"
                  />
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="w-6 h-6 text-slate-900" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={createPageUrl(item.href)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-red-700 bg-red-50'
                          : 'text-slate-700 hover:text-red-700 hover:bg-red-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <a 
                    href="https://wa.me/5511953600324"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-6 rounded-xl">
                      Falar com especialista
                    </Button>
                  </a>
                  
                  <a 
                    href="tel:+551126212443"
                    className="flex items-center justify-center gap-2 mt-4 text-slate-600"
                  >
                    <Phone className="w-5 h-5" />
                    11 2621-2443
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
