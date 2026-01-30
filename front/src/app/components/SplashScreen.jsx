import logoImage from "figma/5fb27b37a0b4968dac2d7246feac7e827a3958f1.png";

export function SplashScreen() {
  return (
    <div className="fixed inset-0" style={{ border: '4px solid rgb(255, 0, 0)' }}>
      <div className="w-full h-full flex items-center justify-center" style={{ border: '4px solid rgb(0, 161, 255)', backgroundColor: 'rgb(11, 32, 110)' }}>
        <div className="flex flex-col items-center">
          <img
            src={logoImage}
            alt="Baires Suspensión"
            className="w-auto h-48 sm-56 md-64 object-contain"
          />

          <div className="mt-3 text-center px-4" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic', color: 'white' }}>
            <p className="text-base sm-lg leading-relaxed">
              Suspensión, accesorios y repuestos para toda la línea del automotor.
            </p>
            <p className="text-base sm-lg leading-relaxed">
              Todas las marcas y modelos nacionales e importados.
            </p>
          </div>

          <div className="mt-6 w-[3cm] h-[0.5cm] bg-white/20 rounded-[10px] overflow-hidden">
            <div className="h-full bg-red-600 rounded-[10px] animate-[fillProgress_5s_ease-in-out_forwards]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
