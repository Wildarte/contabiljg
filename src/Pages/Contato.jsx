import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  Building2, CheckCircle2, Loader2
} from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "11 2621-2443",
    subinfo: "Seg - Sex: 08:00 - 18:00",
    href: "tel:+551126212443",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "contadora.jgcontabilidade@gmail.com",
    subinfo: "Respondemos em até 24h",
    href: "mailto:contadora.jgcontabilidade@gmail.com",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua Pastoril de Itapetinga, 275",
    subinfo: "Jardim Danfer, São Paulo/SP - CEP: 03729-000",
    href: "https://maps.google.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "11 95360-0324",
    subinfo: "Atendimento rápido",
    href: "https://wa.me/5511953600324",
    color: "from-green-500 to-green-600"
  }
];

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('company', formData.company);
    payload.append('service', formData.service);
    payload.append('message', formData.message);
    payload.append('_captcha', 'false');
    payload.append('_subject', 'Novo contato pelo site');

    try {
      await fetch('https://formsubmit.co/ajax/contadora.jgcontabilidade@gmail.com', {
        method: 'POST',
        body: payload,
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Mail className="w-4 h-4" />
              Fale Conosco
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entre em{' '}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                contato
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              Estamos prontos para atender você e sua empresa. Escolha a melhor forma de contato 
              ou preencha o formulário abaixo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.title === 'WhatsApp' || item.title === 'Endereço' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700 font-medium">{item.info}</p>
                  <p className="text-slate-500 text-sm">{item.subinfo}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Solicite uma Proposta
              </h2>
              <p className="text-slate-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-green-700">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="(00) 00000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input 
                        id="company"
                        name="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select 
                      value={formData.service}
                      onValueChange={(value) => setFormData({...formData, service: value})}
                    >
                      <SelectTrigger className="rounded-xl py-6 bg-transparent">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-slate-200 shadow-lg">
                        <SelectItem value="contabilidade" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Contabilidade Empresarial
                        </SelectItem>
                        <SelectItem value="tributaria" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Consultoria Tributária
                        </SelectItem>
                        <SelectItem value="pessoal" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Departamento Pessoal
                        </SelectItem>
                        <SelectItem value="fiscal" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Gestão Fiscal
                        </SelectItem>
                        <SelectItem value="abertura" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Abertura de Empresa
                        </SelectItem>
                        <SelectItem value="consultoria" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Consultoria Empresarial
                        </SelectItem>
                        <SelectItem value="outro" className="data-[highlighted]:bg-slate-100 data-[state=checked]:bg-slate-100">
                          Outro
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Conte-nos mais sobre sua necessidade..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white py-6 rounded-xl text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5987654321!2d-46.52345678!3d-23.52987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Pastoril%20de%20Itapetinga%2C%20275%20-%20Jardim%20Danfer%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003729-000!5e0!3m2!1spt-BR!2sbr!4v1737635000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Horário de Atendimento</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-slate-600">Segunda a Sexta</span>
                    <span className="font-semibold text-slate-900">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-600">Sábado, Domingo e Feriados</span>
                    <span className="text-slate-500">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <Building2 className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Atendimento Imediato?</h3>
                <p className="text-slate-300 mb-6">
                  Se preferir, entre em contato diretamente pelo WhatsApp para um atendimento mais rápido.
                </p>
                <a 
                  href="https://wa.me/5511953600324"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-6 rounded-xl text-lg">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
