import React from 'react';
import { Search, Shield, Award, CreditCard, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const ComoFunciona = () => {
  const steps = [
    {
      number: 1,
      title: 'Busque autoescolas',
      description: 'Use nossos filtros para encontrar autoescolas próximas a você',
      icon: Search,
      color: 'bg-blue-500'
    },
    {
      number: 2,
      title: 'Compare preços e avaliações',
      description: 'Veja avaliações reais e compare preços transparentes',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      number: 3,
      title: 'Escolha seu pacote',
      description: 'Selecione o pacote que melhor se adequa às suas necessidades',
      icon: CheckCircle,
      color: 'bg-purple-500'
    },
    {
      number: 4,
      title: 'Pague com segurança',
      description: 'Pagamento protegido com parcelamento disponível',
      icon: CreditCard,
      color: 'bg-orange-500'
    },
    {
      number: 5,
      title: 'Receba cashback',
      description: 'Após concluir o processo, receba até 10% de volta',
      icon: Award,
      color: 'bg-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Garantia de Execução',
      description: 'Se a autoescola não entrar em contato em 48h, você recebe reembolso automático',
      icon: Shield
    },
    {
      title: 'Cashback Garantido',
      description: 'Receba de volta até 10% do valor pago após avaliar a autoescola',
      icon: Award
    },
    {
      title: 'Autoescolas Verificadas',
      description: 'Todas as autoescolas passam por verificação rigorosa da nossa equipe',
      icon: CheckCircle
    },
    {
      title: 'Suporte 24/7',
      description: 'Nossa equipe está sempre disponível para ajudar você',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Como <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Funciona</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra como é simples e seguro contratar sua CNH através do AutoEscola+. 
            Um processo transparente, rápido e com garantia total.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            5 Passos Simples
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-2 bg-gray-100 text-gray-600">
                    Passo {step.number}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gray-300 ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Por que escolher o AutoEscola+?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Como funciona o cashback?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Após concluir seu processo de CNH e avaliar a autoescola, você recebe automaticamente 
                  o cashback em sua conta. O valor varia de 5% a 10% dependendo do pacote escolhido.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E se a autoescola não entrar em contato?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Temos uma garantia de 48 horas. Se a autoescola não entrar em contato nesse prazo, 
                  você recebe reembolso automático de 100% do valor pago.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Posso parcelar o pagamento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Oferecemos parcelamento em até 12x no cartão de crédito, além da opção 
                  de pagamento por etapas do processo de CNH.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>As autoescolas são confiáveis?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todas as autoescolas passam por um processo rigoroso de verificação, incluindo 
                  documentação, licenças e avaliação da estrutura física.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Encontre a autoescola perfeita para você em poucos cliques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/autoescolas">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Encontrar Autoescolas
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;