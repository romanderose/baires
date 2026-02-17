import { useState, useEffect } from "react";
import { SplashScreen } from "@/app/components/SplashScreen";
import { MainMenu } from "@/app/components/MainMenu";
import { Slider } from "@/app/components/Slider";
import { AboutSection } from "@/app/components/AboutSection";
import { BrandsSection } from "@/app/components/BrandsSection";
import { ContactSection } from "@/app/components/ContactSection";
import { SearchResults } from "@/app/components/SearchResults";
import { AdvancedSearchResults } from "@/app/components/AdvancedSearchResults";
import { ProductsSection } from "@/app/components/ProductsSection";
import { ProductDetails } from "@/app/components/ProductDetails";
import { CategorySection } from "@/app/components/CategorySection";
import { CartSection } from "@/app/components/CartSection";
import { Footer } from "@/app/components/Footer";
import { FloatingButtons } from "@/app/components/FloatingButtons";
import { ThemeProvider, useTheme } from "@/app/contexts/ThemeContext";
import { CartProvider } from "@/app/contexts/CartContext";
import { ToastProvider } from "@/app/contexts/ToastContext";

function MainContent() {
  const { theme } = useTheme();

  // Leer parámetro de búsqueda de la URL
  const searchParams = new URLSearchParams(window.location.search);
  const initialSearchTerm = searchParams.get('search') || '';
  const isAdvancedSearch = searchParams.get('advanced') === 'true';
  const initialSection = searchParams.get('section') || '';

  // Obtener filtros de búsqueda avanzada
  const advancedFilters = {
    nombre: searchParams.get('nombre') || undefined,
    marca: searchParams.get('marca') || undefined,
    precioMin: searchParams.get('precioMin') || undefined,
    precioMax: searchParams.get('precioMax') || undefined,
    categoria: searchParams.get('categoria') || undefined,
  };

  // Estado de navegación
  const [currentSection, setCurrentSection] = useState<string>(
    initialSection || (isAdvancedSearch ? 'busqueda-avanzada' : (initialSearchTerm ? 'busqueda' : 'home'))
  );
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [previousSection, setPreviousSection] = useState<string>('home');

  // Mostrar splash solo si NO hay búsqueda inicial ni sección inicial
  const [showSplash, setShowSplash] = useState(!initialSearchTerm && !isAdvancedSearch && !initialSection);

  useEffect(() => {
    if (showSplash && !initialSearchTerm && !isAdvancedSearch && !initialSection) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSplash, initialSearchTerm, isAdvancedSearch, initialSection]);

  const resetToHome = () => {
    setCurrentSection('home');
    setSelectedProductId(null);
    setSearchTerm('');
    setShowSplash(true);
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleNavigate = (section: string, productId?: number) => {
    // Limpiar parámetro de búsqueda de la URL cuando se navega
    if (window.location.search) {
      window.history.pushState({}, '', window.location.pathname);
    }

    if ((section === 'producto-detalle' || section === 'producto') && productId) {
      setPreviousSection(currentSection);
      setSelectedProductId(productId);
      setCurrentSection('producto-detalle');
    } else {
      setCurrentSection(section);
      setSelectedProductId(null);
    }
  };

  const handleBack = () => {
    setCurrentSection(previousSection);
    setSelectedProductId(null);
  };

  if (showSplash && !initialSearchTerm && !isAdvancedSearch && !initialSection) {
    return <SplashScreen />;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: '8px solid rgb(255, 0, 0)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', height: '100%', overflowY: 'auto', backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'rgb(0, 161, 255)' }}>
        <MainMenu onLogoClick={resetToHome} onNavigate={handleNavigate} />
        <div
          style={{
            backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'rgb(0, 161, 255)'
          }}
        >
          {currentSection === 'busqueda' && searchTerm ? (
            <SearchResults searchTerm={searchTerm} onNavigate={handleNavigate} />
          ) : currentSection === 'busqueda-avanzada' ? (
            <AdvancedSearchResults filters={advancedFilters} onNavigate={handleNavigate} />
          ) : currentSection === 'producto-detalle' && selectedProductId ? (
            <ProductDetails productId={selectedProductId} onBack={handleBack} />
          ) : currentSection === 'carrito' ? (
            <CartSection />
          ) : currentSection === 'productos' ? (
            <ProductsSection onNavigate={handleNavigate} />
          ) : currentSection === 'frenos' ? (
            <CategorySection category="Frenos" onNavigate={handleNavigate} />
          ) : currentSection === 'embragues' ? (
            <CategorySection category="Embragues" onNavigate={handleNavigate} />
          ) : currentSection === 'distribucion' ? (
            <CategorySection category="Distribución" onNavigate={handleNavigate} />
          ) : (
            <>
              <Slider />
              <AboutSection />
              <BrandsSection onNavigate={handleNavigate} />
              <ContactSection />
            </>
          )}
        </div>
        <FloatingButtons />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ToastProvider>
          <MainContent />
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}