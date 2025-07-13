
import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, SlidersHorizontal, Car, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const Autoescolas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 3000]);

  const autoescolas = [
    {
      id: 1,
      name: 'AutoEscola Central',
      distance: '2.1 km',
      rating: 4.8,
      reviews: 127,
      price: 1850,
      originalPrice: 2100,
      discount: 12,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH A', 'Renovação'],
      hasAdaptedCar: true,
      cashback: 8.5,
      responseTime: '2h',
      students: 450,
      description: 'Tradição e qualidade no ensino de direção há mais de 20 anos.'
    },
    {
      id: 2,
      name: 'Escola de Condutores Premium',
      distance: '3.8 km',
      rating: 4.9,
      reviews: 203,
      price: 1950,
      originalPrice: 2200,
      discount: 11,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH C', 'PCD'],
      hasAdaptedCar: true,
      cashback: 9.2,
      responseTime: '1h',
      students: 680,
      description: 'Especializada em CNH para pessoas com deficiência.'
    },
    {
      id: 3,
      name: 'Auto Escola Rápida',
      distance: '1.5 km',
      rating: 4.7,
      reviews: 89,
      price: 1720,
      originalPrice: 1950,
      discount: 12,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH A'],
      hasAdaptedCar: false,
      cashback: 7.8,
      responseTime: '3h',
      students: 320,
      description: 'Processo ágil com foco na aprovação rápida.'
    },
    {
      id: 4,
      name: 'AutoEscola Moderna',
      distance: '4.2 km',
      rating: 4.6,
      reviews: 156,
      price: 2100,
      originalPrice: 2400,
      discount: 12,
      image: '/placeholder.svg',
      specialties: ['CNH B', 'CNH C', 'CNH D'],
      hasAdaptedCar: true,
      cashback: 10.0,
      responseTime: '1h',
      students: 520,
      description: 'Frota moderna e instrutores altamente qualificados.'
    }
  ];

  const filteredAutoescolas = autoescolas.filter(autoescola => 
    autoescola.price >= priceRange[0] && autoescola.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A+</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                AutoEscola+
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Digite sua localização..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Tipo de CNH" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cnh-a">CNH A</SelectItem>
                <SelectItem value="cnh-b">CNH B</SelectItem>
                <SelectItem value="cnh-c">CNH C</SelectItem>
                <SelectItem value="cnh-d">CNH D</SelectItem>
                <SelectItem value="cnh-e">CNH E</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="h-12"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filtros
            </Button>
            
            <Button className="h-12 bg-gradient-to-r from-blue-600 to-green-500">
              <Search className="w-5 h-5 mr-2" />
              Buscar
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Faixa de Preço</h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={3000}
                      min={1000}
                      step={50}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>R$ {priceRange[0]}</span>
                      <span>R$ {priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Recursos</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="adapted" />
                      <label htmlFor="adapted" className="text-sm">Carro Adaptado (PCD)</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="promo" />
                      <label htmlFor="promo" className="text-sm">Em Promoção</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parcel" />
                      <label htmlFor="parcel" className="text-sm">Parcelamento</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Avaliação</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Mínimo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.5">4.5+ estrelas</SelectItem>
                      <SelectItem value="4.0">4.0+ estrelas</SelectItem>
                      <SelectItem value="3.5">3.5+ estrelas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {filteredAutoescolas.length} autoescolas encontradas
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Ordenar por:</span>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Relevância" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevância</SelectItem>
                      <SelectItem value="price-low">Menor preço</SelectItem>
                      <SelectItem value="price-high">Maior preço</SelectItem>
                      <SelectItem value="rating">Melhor avaliação</SelectItem>
                      <SelectItem value="distance">Distância</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Autoescolas List */}
          <div className="flex-1 space-y-6">
            {filteredAutoescolas.map((autoescola) => (
              <Card key={autoescola.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="relative w-full md:w-80 h-48 flex-shrink-0">
                      <img 
                        src={autoescola.image} 
                        alt={autoescola.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {autoescola.discount && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          -{autoescola.discount}%
                        </Badge>
                      )}
                      {autoescola.hasAdaptedCar && (
                        <Badge className="absolute top-2 right-2 bg-blue-500">
                          PCD
                        </Badge>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{autoescola.name}</h3>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {autoescola.distance}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{autoescola.rating}</span>
                            <span className="text-gray-600 ml-1">({autoescola.reviews} avaliações)</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{autoescola.description}</p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {autoescola.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Responde em {autoescola.responseTime}
                        </div>
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
                      
                      {/* Price and Actions */}
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-3xl font-bold text-green-600">
                              R$ {autoescola.price.toLocaleString()}
                            </span>
                            {autoescola.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                R$ {autoescola.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-blue-600 font-medium">
                            +{autoescola.cashback}% cashback = R$ {(autoescola.price * autoescola.cashback / 100).toFixed(0)} de volta
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline" size="lg">
                            Ver Detalhes
                          </Button>
                          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500">
                            Comprar Pacote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autoescolas;
