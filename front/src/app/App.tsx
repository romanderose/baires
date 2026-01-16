import { useState, useEffect } from 'react';
import { SplashScreen } from '@/app/components/SplashScreen';
import { MainMenu } from '@/app/components/MainMenu';

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
    <div className="fixed inset-0 bg-red-600 p-[15px]">
      <div className="w-full h-full bg-white" style={{ border: '15px solid rgb(0, 161, 255)' }}>
        <MainMenu />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Contenido principal se agregará aquí */}
        </main>
      </div>
    </div>
  );
}