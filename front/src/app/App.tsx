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
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div 
      className="fixed inset-0" 
      style={{ 
        border: '8px solid rgb(255, 0, 0)', 
        backgroundColor: theme === 'light' ? 'rgb(0, 161, 255)' : 'rgb(7, 21, 77)'
      }}
    >
      <div className="w-full h-full overflow-y-auto">
        <MainMenu />
        <div 
          style={{ 
            backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'transparent'
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