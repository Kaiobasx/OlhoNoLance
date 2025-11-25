import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Trophy, Users, Shield, Award, Star, Heart, Target, Zap } from "lucide-react";

export function About() {
  const stats = [
    { label: "Leilões Realizados", value: "5,000+", icon: Trophy },
    { label: "Usuários Ativos", value: "50K+", icon: Users },
    { label: "Taxa de Satisfação", value: "98%", icon: Star },
    { label: "Valor Transacionado", value: "R$ 10M+", icon: Award }
  ];

  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      description: "Ex-atleta profissional com 15 anos de experiência no mercado esportivo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marina Santos",
      role: "Diretora de Autenticação",
      description: "Especialista em autenticação de itens esportivos com certificação internacional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      role: "CTO",
      description: "Desenvolvedor sênior especializado em plataformas de leilão e blockchain",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Comunidade",
      description: "Especialista em relacionamento com colecionadores e comunidades esportivas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Todos os itens passam por rigoroso processo de autenticação por especialistas certificados."
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Compartilhamos a paixão pelo esporte e entendemos o valor emocional de cada item."
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Processo de leilão 100% transparente com histórico completo de lances."
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para garantir a melhor experiência de leilão."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E53935] to-[#d32f2f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6" style={{ fontSize: '3rem', fontWeight: '700' }}>
            Sobre o Olho no Lance!
          </h1>
          <p className="max-w-3xl mx-auto mb-8" style={{ fontSize: '1.25rem' }}>
            Somos a maior plataforma de leilões esportivos do Brasil, conectando colecionadores 
            aos itens mais raros e valiosos do mundo dos esportes.
          </p>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#E53935]"
          >
            Conheça Nossa História
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-sm">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
                <div className="text-[#444444] mb-2" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  {stat.value}
                </div>
                <p className="text-[#666666]">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nossa História */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#444444] mb-6" style={{ fontSize: '2rem', fontWeight: '600' }}>
                Nossa História
              </h2>
              <div className="space-y-4 text-[#666666]">
                <p>
                  O <strong>Olho no Lance!</strong> nasceu em 2020 da paixão de um grupo de colecionadores 
                  e ex-atletas que perceberam a necessidade de uma plataforma confiável e transparente 
                  para comercializar itens esportivos raros.
                </p>
                <p>
                  Começamos com apenas 50 usuários e hoje somos a maior comunidade de colecionadores 
                  esportivos do país. Nossa missão é preservar a história do esporte através de 
                  itens únicos e conectar pessoas que compartilham essa paixão.
                </p>
                <p>
                  Com tecnologia de ponta e uma equipe de especialistas em autenticação, garantimos 
                  que cada transação seja segura e cada item seja genuíno.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="História do Olho no Lance"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-16">
          <h2 className="text-[#444444] text-center mb-12" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
                  <h3 className="text-[#444444] mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#666666]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Equipe */}
        <div className="mb-16">
          <h2 className="text-[#444444] text-center mb-12" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-[#444444] mb-1" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    {member.name}
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-[#666666] text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processo de Autenticação */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                alt="Processo de Autenticação"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-[#444444] mb-6" style={{ fontSize: '2rem', fontWeight: '600' }}>
                Processo de Autenticação
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[#444444] mb-2" style={{ fontWeight: '600' }}>
                      Avaliação Inicial
                    </h3>
                    <p className="text-[#666666]">
                      Nossos especialistas fazem uma análise preliminar de todas as características do item.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-[#444444] mb-2" style={{ fontWeight: '600' }}>
                      Verificação Técnica
                    </h3>
                    <p className="text-[#666666]">
                      Utilizamos tecnologia avançada e conhecimento especializado para verificar autenticidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-[#444444] mb-2" style={{ fontWeight: '600' }}>
                      Certificação
                    </h3>
                    <p className="text-[#666666]">
                      Item aprovado recebe certificado digital de autenticidade com blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 bg-gray-50 rounded-lg">
          <h3 className="text-[#444444] mb-4" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Faça Parte da Nossa Comunidade
          </h3>
          <p className="text-[#666666] mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Junte-se a milhares de colecionadores e encontre os itens esportivos 
            mais raros e valiosos do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E53935] text-white hover:bg-[#d32f2f]">
              Começar a Participar
            </Button>
            <Button variant="outline" className="border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}