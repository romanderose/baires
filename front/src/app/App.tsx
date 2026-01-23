import { useState, useEffect } from "react";
import { SplashScreen } from "@/app/components/SplashScreen";
import { MainMenu } from "@/app/components/MainMenu";
import { Slider } from "@/app/components/Slider";
import { AboutSection } from "@/app/components/AboutSection";
import { Footer } from "@/app/components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

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
    <div className="fixed inset-0" style={{ border: '8px solid rgb(255, 0, 0)', backgroundColor: 'rgb(0, 161, 255)' }}>
      <div className="w-full h-full overflow-y-auto">
        <MainMenu />
        <Slider />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}