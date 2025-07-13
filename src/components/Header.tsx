import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Início' },
    { to: '/autoescolas', label: 'Encontrar Autoescolas' },
    { to: '/como-funciona', label: 'Como Funciona' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A+</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              AutoEscola+
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors ${
                  isActive(item.to)
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-500">
              Cadastrar Autoescola
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(item.to)
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Entrar
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-green-500">
                  Cadastrar Autoescola
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;