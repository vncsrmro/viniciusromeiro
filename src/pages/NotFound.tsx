import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-bold text-gray-300 mb-8">404</div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Página não encontrada
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Página Anterior
            </Button>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Páginas populares:</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/autoescolas">
                <Button variant="outline">
                  Encontrar Autoescolas
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;