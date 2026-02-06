import { useState, useEffect, useRef } from "react";
import bairesSuspensionImg from "@/assets/f982c9b352a882c04c0b942189a1e67009400f7d.png";
import slide0 from "@/assets/03818d9729ea90fbf4fb8f9f6cb20d51a717475a.png";
import slide1 from "@/assets/d4389a8ed19bafede7466af23b89d3b4676b7e36.png";
import slide2 from "@/assets/9b6c62cb0afdc6050e488cea7e360b8a8ab03593.png";
import arrowIcon from "@/assets/18d4bb9bdaefa75f46d6589fef8388d2235a378c.png";
import { useTheme } from "@/app/contexts/ThemeContext";

export function Slider() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const slides = [
    { type: "image", content: bairesSuspensionImg },
    { type: "image", content: slide0 },
    { type: "image", content: slide1 },
    { type: "image", content: slide2 },
  ];
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection("right");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection("left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setDirection(index > currentSlide ? "right" : "left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-play cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Manejo de swipe en móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div className="p-[30px]" style={{ marginTop: '48px' }}>
      <div
        className="relative mx-auto h-96 flex items-center justify-center overflow-hidden rounded-[5px] border-2 border-red-600"
        style={{
          backgroundColor: theme === 'light' ? 'rgb(7, 21, 77)' : 'rgb(7, 21, 77)',
          maxWidth: "800px"
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out"
          style={{
            transform: isTransitioning
              ? direction === "right"
                ? "translateX(-100%)"
                : "translateX(100%)"
              : "translateX(0)"
          }}
        >
          {slides[currentSlide].type === "image" ? (
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={slides[currentSlide].content as string}
                alt="Baires Suspensión"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="text-4xl font-bold text-gray-600">
              {slides[currentSlide].content as string}
            </div>
          )}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src={arrowIcon}
            alt="Anterior"
            className="w-full h-full"
            style={{ transform: "rotate(270deg)" }}
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src={arrowIcon}
            alt="Siguiente"
            className="w-full h-full"
            style={{ transform: "rotate(90deg)" }}
          />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 rounded-full transition-colors"
                style={{
                  backgroundColor: index === currentSlide
                    ? (theme === 'dark' ? 'rgb(0, 161, 255)' : 'white')
                    : (theme === 'dark' ? 'rgba(0, 161, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)')
                }}
              />
            ))}
          </div>

          {/* Barra de loading lineal */}
          <div className="w-24 h-0.5 bg-white/30 rounded-full overflow-hidden">
            <div
              key={currentSlide}
              className="h-full bg-white rounded-full animate-progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}