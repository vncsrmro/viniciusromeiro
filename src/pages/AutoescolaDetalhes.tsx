
import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Users, Car, Phone, Mail, Shield, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const AutoescolaDetalhes = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const autoescola = {
    id: 1,
    name: 'AutoEscola Central',
    distance: '2.1 km',
    rating: 4.8,
    reviews: 127,
    responseTime: '2h',
    students: 450,
    hasAdaptedCar: true,
    address: 'Rua das Flores, 123 - Centro, São Paulo - SP',
    phone: '(11) 9999-9999',
    email: 'contato@autoescolacentral.com.br',
    description: 'A AutoEscola Central é uma instituição consolidada no mercado de ensino de direção, com mais de 20 anos de experiência. Nossos instrutores são altamente qualificados e nossa frota é moderna e bem conservada.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    specialties: ['CNH B', 'CNH A', 'Renovação', 'Reciclagem'],
    packages: [
      {
        id: 1,
        name: 'CNH B - Básico',
        price: 1850,
        originalPrice: 2100,
        discount: 12,
        cashback: 8.5,
        description: 'Pacote completo para CNH categoria B',
        includes: [
          'Curso teórico completo',
          '25 aulas práticas',
          'Exame médico',
          'Taxas do DETRAN',
          'Material didático'
        ]
      },
      {
        id: 2,
        name: 'CNH B - Premium',
        price: 2200,
        originalPrice: 2500,
        discount: 12,
        cashback: 10.0,
        description: 'Pacote premium com aulas extras e suporte VIP',
        includes: [
          'Curso teórico completo',
          '35 aulas práticas',
          'Exame médico',
          'Taxas do DETRAN',
          'Material didático premium',
          'Suporte WhatsApp 24h',
          'Simulado online ilimitado'
        ],
        popular: true
      },
      {
        id: 3,
        name: 'CNH A + B',
        price: 2800,
        originalPrice: 3200,
        discount: 12,
        cashback: 12.0,
        description: 'Pacote combo para CNH A e B',
        includes: [
          'Curso teórico completo',
          '25 aulas práticas carro',
          '20 aulas práticas moto',
          'Exame médico',
          'Taxas do DETRAN',
          'Material didático',
          'Equipamentos de segurança'
        ]
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excelente autoescola! Instrutores muito pacientes e qualificados. Consegui passar de primeira no exame.',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      date: '2024-01-10',
      comment: 'Muito boa! O atendimento é excepcional e os carros são novos e bem conservados.',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 4,
      date: '2024-01-08',
      comment: 'Recomendo! Processo bem organizado e preço justo. Só demorou um pouco mais do que esperava.',
      avatar: '/placeholder.svg'
    }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      {/* Breadcrumb/Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/autoescolas">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Autoescolas
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={autoescola.images[0]}
              alt={autoescola.name}
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {autoescola.images.slice(1, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${autoescola.name} ${index + 2}`}
                className="w-full h-36 object-cover rounded-xl"
              />
            ))}
            <div className="relative">
              <img
                src={autoescola.images[3]}
                alt={`${autoescola.name} 4`}
                className="w-full h-36 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">+5 fotos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{autoescola.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {autoescola.distance}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Responde em {autoescola.responseTime}
                      </div>
                    </div>
                    <p className="text-gray-600">{autoescola.address}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center justify-end mb-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xl font-bold">{autoescola.rating}</span>
                      <span className="text-gray-600 ml-1">({autoescola.reviews} avaliações)</span>
                    </div>
                    <div className="flex items-center justify-end space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {autoescola.students} alunos
                      </div>
                      {autoescola.hasAdaptedCar && (
                        <div className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          Carro adaptado
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {autoescola.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{autoescola.description}</p>

                <div className="flex items-center space-x-4 mt-6">
                  <Button variant="outline" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {autoescola.phone}
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="packages" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="packages">Pacotes</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                <TabsTrigger value="about">Sobre</TabsTrigger>
              </TabsList>
              
              <TabsContent value="packages" className="space-y-4">
                {autoescola.packages.map((pkg) => (
                  <Card key={pkg.id} className={`${pkg.popular ? 'ring-2 ring-blue-500' : ''} ${selectedPackage === pkg.id ? 'ring-2 ring-green-500' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {pkg.name}
                            {pkg.popular && <Badge className="bg-blue-500">Mais Popular</Badge>}
                          </CardTitle>
                          <p className="text-gray-600 mt-1">{pkg.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold text-green-600">
                              R$ {pkg.price.toLocaleString()}
                            </span>
                            {pkg.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                R$ {pkg.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-blue-600 font-medium">
                            +{pkg.cashback}% cashback = R$ {(pkg.price * pkg.cashback / 100).toFixed(0)} de volta
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">O que inclui:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {pkg.includes.map((item, index) => (
                              <li key={index} className="flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-end">
                          <Button 
                            onClick={() => setSelectedPackage(pkg.id)}
                            className={`w-full ${selectedPackage === pkg.id ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-blue-600 to-green-500'}`}
                          >
                            {selectedPackage === pkg.id ? 'Selecionado' : 'Selecionar Pacote'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{autoescola.rating}</div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600">{autoescola.reviews} avaliações</p>
                        
                        <div className="mt-4 space-y-2">
                          {ratingDistribution.map((item) => (
                            <div key={item.stars} className="flex items-center space-x-2 text-sm">
                              <span className="w-8">{item.stars}★</span>
                              <Progress value={item.percentage} className="flex-1" />
                              <span className="w-8 text-gray-600">{item.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} alt={review.name} />
                              <AvatarFallback>{review.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star} 
                                    className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="about">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Sobre a AutoEscola Central</h3>
                    <p className="text-gray-700 mb-6">
                      {autoescola.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Informações de Contato</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            {autoescola.address}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-gray-500" />
                            {autoescola.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-gray-500" />
                            {autoescola.email}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Diferenciais</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-2 text-blue-500" />
                            Mais de 20 anos de experiência
                          </div>
                          <div className="flex items-center">
                            <Car className="w-4 h-4 mr-2 text-blue-500" />
                            Frota moderna e bem conservada
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-blue-500" />
                            Instrutores qualificados
                          </div>
                          <div className="flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-500" />
                            Garantia de satisfação
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Finalizar Compra</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedPackage ? (
                  <div className="space-y-4">
                    {(() => {
                      const pkg = autoescola.packages.find(p => p.id === selectedPackage);
                      return (
                        <>
                          <div>
                            <h4 className="font-semibold">{pkg.name}</h4>
                            <p className="text-sm text-gray-600">{pkg.description}</p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-green-600">
                              R$ {pkg.price.toLocaleString()}
                            </span>
                            {pkg.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                R$ {pkg.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          
                          <div className="text-sm text-blue-600 font-medium">
                            Cashback: R$ {(pkg.price * pkg.cashback / 100).toFixed(0)}
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                            Comprar Agora
                          </Button>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-600 mb-4">Selecione um pacote para continuar</p>
                    <Button variant="outline" disabled>
                      Selecione um Pacote
                    </Button>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Garantia de execução</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Cashback garantido</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Dúvidas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Entre em contato diretamente com a autoescola
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoescolaDetalhes;
