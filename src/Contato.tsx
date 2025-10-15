import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle, Shield, User } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você adicionaria a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua dos Esportes, 123", "Centro - São Paulo, SP", "CEP: 01234-567"]
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 3456-7890", "(11) 99999-9999", "Seg-Sex: 8h às 18h"]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@olhonolance.com", "suporte@olhonolance.com", "parceiros@olhonolance.com"]
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 9h às 15h", "Domingo: Fechado"]
    }
  ];

  const supportCategories = [
    {
      icon: MessageCircle,
      title: "Suporte Geral",
      description: "Dúvidas sobre leilões, contas e funcionamento da plataforma",
      responseTime: "Até 4 horas"
    },
    {
      icon: Shield,
      title: "Autenticação",
      description: "Questões sobre autenticidade e certificação de itens",
      responseTime: "Até 24 horas"
    },
    {
      icon: HelpCircle,
      title: "Ajuda Técnica",
      description: "Problemas com a plataforma, pagamentos ou bugs",
      responseTime: "Até 2 horas"
    },
    {
      icon: User,
      title: "Parcerias",
      description: "Interessado em se tornar um parceiro ou vendedor",
      responseTime: "Até 48 horas"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E53935] to-[#d32f2f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: '700' }}>
            Entre em Contato
          </h1>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
            Estamos aqui para ajudar! Fale conosco sobre qualquer dúvida, 
            sugestão ou problema que você possa ter.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#444444]">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#444444] mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#444444] mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#444444] mb-2">
                        Telefone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#444444] mb-2">
                        Categoria *
                      </label>
                      <Select value={formData.category} onValueChange={(value: string) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Suporte Geral</SelectItem>
                          <SelectItem value="authentication">Autenticação</SelectItem>
                          <SelectItem value="technical">Ajuda Técnica</SelectItem>
                          <SelectItem value="partnership">Parcerias</SelectItem>
                          <SelectItem value="complaint">Reclamação</SelectItem>
                          <SelectItem value="suggestion">Sugestão</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#444444] mb-2">
                      Assunto *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Resumo do seu contato"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#444444] mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva detalhadamente sua dúvida, problema ou sugestão..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#E53935] text-white hover:bg-[#d32f2f]"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <info.icon className="w-6 h-6 text-[#E53935] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-[#444444] mb-2" style={{ fontWeight: '600' }}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-[#666666] text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categorias de Suporte */}
        <div className="mt-16">
          <h2 className="text-[#444444] text-center mb-12" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Como Podemos Ajudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <category.icon className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
                  <h3 className="text-[#444444] mb-3" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    {category.title}
                  </h3>
                  <p className="text-[#666666] text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="text-xs text-[#E53935] bg-red-50 px-3 py-1 rounded-full inline-block">
                    Resposta: {category.responseTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16">
          <h2 className="text-[#444444] text-center mb-12" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#444444]">Como funciona a autenticação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">
                  Todos os itens passam por verificação com especialistas certificados 
                  e recebem certificado digital de autenticidade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#444444]">Quais são as taxas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">
                  Cobramos uma taxa de 5% sobre o valor final do leilão, 
                  dividida entre comprador e vendedor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#444444]">Como participar de um leilão?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">
                  Basta se cadastrar, fazer depósito caução e começar a dar lances 
                  nos itens de seu interesse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#444444]">Posso vender meus itens?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">
                  Sim! Entre em contato conosco para avaliar seu item e 
                  incluí-lo em nossos leilões.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-[#444444] text-center mb-8" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Nossa Localização
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-[#666666]">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Mapa interativo em breve</p>
                  <p className="text-sm">Rua dos Esportes, 123 - Centro, São Paulo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}