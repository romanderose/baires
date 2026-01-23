import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/5fb27b37a0b4968dac2d7246feac7e827a3958f1.png";

export function MainMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Productos", href: "#" },
    { name: "Frenos", href: "#" },
    { name: "Embragues", href: "#" },
    { name: "Distribución", href: "#" },
  ];

  return (
    <nav
      className="w-full border-b-4 border-red-600 shadow-lg"
      style={{ backgroundColor: "rgb(11, 32, 110)" }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo centrado */}
          <div className="flex justify-center py-6">
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Menu items */}
          <div className="flex items-center justify-center space-x-1 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="h-16 w-auto object-contain"
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
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-white text-sm font-medium hover:bg-white/10 rounded transition-colors"
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