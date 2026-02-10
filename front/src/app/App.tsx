import { useState, useEffect } from "react";
import { SplashScreen } from "@/app/components/SplashScreen";
import { MainMenu } from "@/app/components/MainMenu";
import { Slider } from "@/app/components/Slider";
import { AboutSection } from "@/app/components/AboutSection";
import { BrandsSection } from "@/app/components/BrandsSection";
import { ContactSection } from "@/app/components/ContactSection";
import { SearchResults } from "@/app/components/SearchResults";
import { Footer } from "@/app/components/Footer";
import { ThemeProvider, useTheme } from "@/app/contexts/ThemeContext";

function MainContent() {
  const { theme } = useTheme();

  // Leer parámetro de búsqueda de la URL
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get('search') || '';

  // Mostrar splash solo si NO hay búsqueda
  const [showSplash, setShowSplash] = useState(!searchTerm);

  useEffect(() => {
    if (showSplash && !searchTerm) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, [showSplash, searchTerm]);

  const resetToHome = () => {
    window.location.href = '/';
  };

  if (showSplash && !searchTerm) {
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
        <MainMenu onLogoClick={resetToHome} />
        <div 
          style={{ 
            backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'rgb(0, 161, 255)'
          }}
        >
          {searchTerm ? (
            <SearchResults searchTerm={searchTerm} />
          ) : (
            <>
              <Slider />
              <AboutSection />
              <BrandsSection />
              <ContactSection />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}