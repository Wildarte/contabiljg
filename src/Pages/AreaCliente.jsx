import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, User, Mail, ArrowRight, Eye, EyeOff,
  Shield, FileText, HelpCircle, Phone
} from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const features = [
  {
    icon: FileText,
    title: "Documentos Online",
    description: "Acesse todos os seus documentos contábeis a qualquer momento"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados protegidos com criptografia de ponta"
  },
  {
    icon: HelpCircle,
    title: "Suporte Exclusivo",
    description: "Atendimento prioritário para clientes"
  }
];

export default function AreaCliente() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Área Restrita
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Portal do{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Cliente
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10">
              Acesse sua área exclusiva para visualizar documentos, relatórios contábeis, 
              demonstrações financeiras e muito mais.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support */}
            <div className="mt-10 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl">
              <div className="flex items-center gap-4">
                <Phone className="w-10 h-10 text-red-500" />
                <div>
                  <p className="text-slate-300 text-sm">Precisa de ajuda?</p>
                  <p className="text-white font-bold">(00) 0000-0000</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
              <div className="text-center mb-8">
                <img 
                  src="https://www.contabiljg.com.br/assets/imgs/logo.png" 
                  alt="JG Contabilidade"
                  className="h-16 mx-auto mb-6"
                />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Bem-vindo de volta</h2>
                <p className="text-slate-600">Entre com suas credenciais para acessar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-12 py-6 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Senha</Label>
                    <button type="button" className="text-sm text-red-700 hover:text-red-800">
                      Esqueceu a senha?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input 
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-12 pr-12 py-6 rounded-xl"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white py-6 rounded-xl text-lg group"
                >
                  Entrar
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-slate-600">
                  Ainda não é cliente?{' '}
                  <Link to={createPageUrl('Contato')} className="text-red-700 font-semibold hover:text-red-800">
                    Entre em contato
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}