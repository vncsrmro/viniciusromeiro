
import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, ChevronRight, Award, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRadius, setSelectedRadius] = useState('5km');

  // Mock data for autoescolas
  const autoescolas = [
    {
      id: 1,
      name: 'AutoEscola Central',
      distance: '2.1 km',
      rating: 4.8,
      reviews: 127,
      price: 'R$ 1.850',
      originalPrice: 'R$ 2.100',
      discount: 12,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH A', 'Renovação'],
      hasAdaptedCar: true,
      cashback: 8.5
    },
    {
      id: 2,
      name: 'Escola de Condutores Premium',
      distance: '3.8 km',
      rating: 4.9,
      reviews: 203,
      price: 'R$ 1.950',
      originalPrice: 'R$ 2.200',
      discount: 11,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH C', 'PCD'],
      hasAdaptedCar: true,
      cashback: 9.2
    },
    {
      id: 3,
      name: 'Auto Escola Rápida',
      distance: '1.5 km',
      rating: 4.7,
      reviews: 89,
      price: 'R$ 1.720',
      originalPrice: 'R$ 1.950',
      discount: 12,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH A'],
      hasAdaptedCar: false,
      cashback: 7.8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sua <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">CNH</span> mais perto de você
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Encontre as melhores autoescolas da sua região, compare preços e garanta sua habilitação com cashback garantido!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Digite sua localização..."
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select 
                className="h-12 px-4 border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none"
                value={selectedRadius}
                onChange={(e) => setSelectedRadius(e.target.value)}
              >
                <option value="1km">1 km</option>
                <option value="3km">3 km</option>
                <option value="5km">5 km</option>
                <option value="10km">10 km</option>
              </select>
              
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">CNH B</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">CNH A</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">Renovação</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">PCD</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">Promoções</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Por que escolher o AutoEscola+?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Garantia de Execução</h4>
              <p className="text-gray-600">Reembolso automático se a autoescola não entrar em contato em 48h</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Cashback Garantido</h4>
              <p className="text-gray-600">Receba até 10% de volta em todas as suas compras</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Autoescolas Verificadas</h4>
              <p className="text-gray-600">Todas as autoescolas são aprovadas pela nossa equipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoescolas em Destaque */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Autoescolas em Destaque</h3>
            <Link to="/autoescolas">
              <Button variant="outline" className="hover:bg-blue-50">
                Ver todas <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoescolas.map((autoescola) => (
              <Card key={autoescola.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="relative mb-4">
                    <img 
                      src={autoescola.image} 
                      alt={autoescola.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {autoescola.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                        -{autoescola.discount}%
                      </Badge>
                    )}
                    {autoescola.hasAdaptedCar && (
                      <Badge className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600">
                        PCD
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl">{autoescola.name}</CardTitle>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {autoescola.distance}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {autoescola.rating} ({autoescola.reviews})
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {autoescola.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">{autoescola.price}</span>
                        {autoescola.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{autoescola.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        +{autoescola.cashback}% cashback
                      </div>
                    </div>
                  </div>
                  
                  <Link to={`/autoescola/${autoescola.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para tirar sua CNH?</h3>
          <p className="text-xl mb-8 opacity-90">
            Encontre a autoescola perfeita para você em poucos cliques
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A+</span>
                </div>
                <span className="text-xl font-bold">AutoEscola+</span>
              </div>
              <p className="text-gray-400">
                A plataforma que conecta você às melhores autoescolas do Brasil
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Para Usuários</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cashback</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Para Autoescolas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cadastre-se</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Painel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campanhas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoEscola+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
