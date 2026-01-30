import { useState, useEffect } from "react";
import { SplashScreen } from "@/app/components/SplashScreen";
import { MainMenu } from "@/app/components/MainMenu";
import { Slider } from "@/app/components/Slider";
import { AboutSection } from "@/app/components/AboutSection";
import { Footer } from "@/app/components/Footer";
import { ThemeProvider, useTheme } from "@/app/contexts/ThemeContext";

function MainContent() {
  const [showSplash, setShowSplash] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const resetToHome = () => {
    setShowSplash(true);
  };

  if (showSplash) {
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
          <Slider />
          <AboutSection />
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