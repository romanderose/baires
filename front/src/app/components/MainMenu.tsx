import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoImage from "@/assets/5fb27b37a0b4968dac2d7246feac7e827a3958f1.png";
import { useTheme } from "@/app/contexts/ThemeContext";

export function MainMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Productos", href: "#productos" },
    { name: "Frenos", href: "#productos" },
    { name: "Embragues", href: "#productos" },
    { name: "Distribución", href: "#productos" },
  ];

  return (
    <nav
      className="w-full border-b-4 border-red-600 shadow-lg"
      style={{ backgroundColor: theme === 'light' ? 'rgb(11, 32, 110)' : 'rgb(7, 21, 77)' }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Logo centrado */}
          <div className="flex justify-center py-4">
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="object-contain"
              style={{ height: '176px', width: 'auto' }}
            />
          </div>

          {/* Botón selector de tema - Desktop */}
          <button
            onClick={toggleTheme}
            className="absolute top-1/2 -translate-y-1/2 right-8 p-2 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: theme === 'light' ? 'white' : 'rgb(25, 0, 51)',
            }}
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? (
              <Sun className="w-6 h-6" style={{ color: 'rgb(184, 134, 11)' }} />
            ) : (
              <Moon className="w-6 h-6" style={{ color: 'white' }} />
            )}
          </button>

          {/* Menu items */}
          <div className="flex items-center justify-center space-x-1 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2 text-white font-medium italic transition-all rounded"
                style={{
                  color: 'white',
                  textShadow: 'none',
                  WebkitTextStroke: '0',
                  fontStyle: 'italic',
                  fontSize: 'calc(1.75rem - 8px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgb(255, 0, 0)';
                  e.currentTarget.style.textShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.fontStyle = 'italic';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.textShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.fontStyle = 'italic';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4" style={{ height: '140px', paddingTop: '20px' }}>
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="object-contain"
              style={{ height: '144px', width: 'auto' }}
            />
          </div>

          {/* Hamburger button a la derecha */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/20">
            <div className="px-4 py-2 space-y-1">
              {/* Botón selector de tema - Mobile */}
              <div className="flex justify-center py-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-all hover:scale-110"
                  style={{
                    backgroundColor: theme === 'light' ? 'white' : 'rgb(25, 0, 51)',
                  }}
                  aria-label="Cambiar tema"
                >
                  {theme === 'light' ? (
                    <Sun className="w-6 h-6" style={{ color: 'rgb(184, 134, 11)' }} />
                  ) : (
                    <Moon className="w-6 h-6" style={{ color: 'white' }} />
                  )}
                </button>
              </div>

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-white font-medium italic transition-all rounded"
                  style={{
                    color: 'white',
                    textShadow: 'none',
                    WebkitTextStroke: '0',
                    fontStyle: 'italic',
                    fontSize: '1.75rem'
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.color = 'rgb(255, 0, 0)';
                    e.currentTarget.style.textShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.fontStyle = 'italic';
                  }}
                  onTouchEnd={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.fontStyle = 'italic';
                    }, 200);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}