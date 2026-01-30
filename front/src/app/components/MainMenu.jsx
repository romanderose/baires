import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoImage from "figma/6f6533c56c5c671e2060e1881d36cff10645dfc6.png";
import { useTheme } from "@/app/contexts/ThemeContext";

// Componente de lupa personalizado con círculo inclinado a la derecha
const SearchIcon = ({ style }) => (
  <svg
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Círculo inclinado hacia la derecha */}
    <circle cx="12" cy="10" r="7" transform="rotate(20 12 10)" />
    {/* Mango inclinado hacia abajo a la izquierda */}
    <path d="M17 15 l5 5" />
  </svg>
);

export function MainMenu({ onLogoClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Productos", href: "#" },
    { name: "Frenos", href: "#" },
    { name: "Embragues", href: "#" },
    { name: "Distribución", href: "#" },
  ];

  return (
    <nav
      style={{
        backgroundColor: theme === 'light' ? 'rgb(40, 80, 160)' : 'rgb(7, 21, 77)',
        width: '100%',
        borderBottom: '4px solid rgb(255, 0, 0)',
        position: 'relative',
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div style={{ paddingTop: '16px', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Logo centrado */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="cursor-pointer"
              style={{ height: '123px', width: 'auto', display: 'block' }}
              onClick={onLogoClick}
            />
          </div>

          {/* Botón selector de tema deslizante - Desktop */}
          <div style={{ position: 'absolute', top: '16px', right: '20px' }}>
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: theme === 'light' ? 'rgb(200, 200, 200)' : 'rgb(60, 80, 120)',
                width: '56px',
                height: '28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
              }}
              aria-label="Cambiar tema"
            >
              <div
                style={{
                  backgroundColor: theme === 'light' ? 'white' : 'rgb(80, 100, 140)',
                  width: '28px',
                  height: '28px',
                  position: 'absolute',
                  left: theme === 'light' ? '0px' : '28px',
                  top: '0px',
                  borderRadius: '9999px',
                  transition: 'left 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4" style={{ color: 'rgb(184, 134, 11)' }} />
                ) : (
                  <Moon className="w-4 h-4" style={{ color: 'white' }} />
                )}
              </div>
            </button>
          </div>

          {/* Buscador - Desktop */}
          <div style={{ paddingTop: '32px', paddingBottom: '32px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '400px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="text"
                placeholder="¿Qué está buscando?"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgb(200, 200, 200)',
                  outline: 'none',
                  transform: 'skewX(-10deg)',
                  flex: '1',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              />
              <button
                style={{
                  backgroundColor: 'rgb(200, 200, 200)',
                  transform: 'skewX(-10deg)',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  flexShrink: '0',
                }}
              >
                <SearchIcon style={{ color: 'black', width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div style={{ paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'white',
                  fontStyle: 'italic',
                  fontSize: 'calc(1.75rem - 8px)',
                  padding: '8px 24px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgb(255, 0, 0)';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1)';
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
        <div style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo a la izquierda */}
          <div style={{ flexShrink: '0' }}>
            <img
              src={logoImage}
              alt="Baires Suspensión"
              className="cursor-pointer"
              style={{ height: 'auto', width: 'auto', maxHeight: '80px', display: 'block' }}
              onClick={onLogoClick}
            />
          </div>

          {/* Hamburger button a la derecha */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: 'white',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px' }}>
              {/* Botón selector de tema deslizante - Mobile */}
              <div style={{ paddingTop: '12px', paddingBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={toggleTheme}
                  style={{
                    backgroundColor: theme === 'light' ? 'rgb(200, 200, 200)' : 'rgb(60, 80, 120)',
                    width: '56px',
                    height: '28px',
                    position: 'relative',
                    borderRadius: '9999px',
                    transition: 'all 0.3s',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label="Cambiar tema"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div
                    style={{
                      backgroundColor: theme === 'light' ? 'white' : 'rgb(80, 100, 140)',
                      width: '28px',
                      height: '28px',
                      position: 'absolute',
                      left: theme === 'light' ? '0px' : '28px',
                      top: '0px',
                      borderRadius: '9999px',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {theme === 'light' ? (
                      <Sun className="w-4 h-4" style={{ color: 'rgb(184, 134, 11)' }} />
                    ) : (
                      <Moon className="w-4 h-4" style={{ color: 'white' }} />
                    )}
                  </div>
                </button>
              </div>

              {/* Botón de lupa o Buscador - Mobile */}
              {!mobileSearchOpen ? (
                <div style={{ paddingTop: '8px', paddingBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={() => setMobileSearchOpen(true)}
                    style={{
                      backgroundColor: 'rgb(200, 200, 200)',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                    aria-label="Buscar"
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <SearchIcon style={{ color: 'black', width: '20px', height: '20px' }} />
                  </button>
                </div>
              ) : (
                <div style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="¿Qué está buscando?"
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid rgb(200, 200, 200)',
                        outline: 'none',
                        transform: 'skewX(-10deg)',
                        flex: '1',
                        padding: '8px 16px',
                        borderRadius: '4px',
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: 'rgb(200, 200, 200)',
                        transform: 'skewX(-10deg)',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        flexShrink: '0',
                      }}
                    >
                      <SearchIcon style={{ color: 'black', width: '20px', height: '20px' }} />
                    </button>
                  </div>
                </div>
              )}

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    color: 'white',
                    fontStyle: 'italic',
                    fontSize: '1.75rem',
                    padding: '12px',
                    display: 'block',
                    transition: 'all 0.3s',
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.color = 'rgb(255, 0, 0)';
                    e.currentTarget.style.transform = 'scale(1.15)';
                  }}
                  onTouchEnd={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1)';
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
