import { useTheme } from "@/app/contexts/ThemeContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo1 from "@/assets/46334db3c52f2cee568ec062e1129fe57bb456a9.png";
import logo2 from "@/assets/0a6e922ae68aff793040bb7e51be681e12dea6cb.png";
import logo3 from "@/assets/ef65139d37d1eb342df602e5261ae301f9b86155.png";
import logo4 from "@/assets/9dce137e92ba60ca9e6f67b407447f76598b5722.png";
import logo5 from "@/assets/d73f05640d51aa7ba4cb6f338bf3d814e62eea02.png";
import logo6 from "@/assets/603119052ba54a6d1e0dbb3549ee66ce3d0855c2.png";
import logo7 from "@/assets/91883c9d7522fe6d9ce46792d901859ceb416a7c.png";
import logo8 from "@/assets/04accf0e4330736044625d3b76b4ad0c172aba5d.png";
import logo9 from "@/assets/d787f1e09978c8c9dca3863946fde536a711d4d0.png";
import logo10 from "@/assets/25429126c1e12735b7600dd1ee6540d0016b710b.png";
import logo11 from "@/assets/8145902ff498eef5fb082ab4078c2c84d79d5b6d.png";
import logo12 from "@/assets/3dd9610edbff51e88f5ca8d7883ec8625b5d9c6c.png";
import logo13 from "@/assets/b0c4b277d28296424b80447250f5e5e4f3339009.png";
import logo14 from "@/assets/0ecca86cf39d24a951beea1414a44b822b5a03d7.png";
import logo15 from "@/assets/2a0fd6312a97ccd6f111046544561a40ac61c2e9.png";
import logo16 from "@/assets/cfb1803b5bd7a5bf39a69015697056dbd886116a.png";
import logo17 from "@/assets/c91af7acc171c671ba8d7817fecd1a4cd8593f3e.png";
import logo18 from "@/assets/5f478fdf451363a6b8c66e84c9f33c22cf72a372.png";
import logo19 from "@/assets/bfbb518c89b88d19a9dd996db711b6227d7bd213.png";
import logo20 from "@/assets/75e235c38c93f6343d00c659a3cdeb5824eb00f2.png";
import logo21 from "@/assets/70b5c632dbff79dbadfdb5a66d60906ab32d82af.png";
import logo22 from "@/assets/4a83dec7957dbddc0abc3644ee63f8351e27f8b2.png";
import logo23 from "@/assets/0f0b688b68d175c57f9edc5ffb8c0b32278127b7.png";
import logo24 from "@/assets/c32a5106165fde2682375819e0fee16d12c365d9.png";
import logo25 from "@/assets/6dcab172993f2787a79a3671aea315788426d8b2.png";

export function BrandsSection() {
  const { theme } = useTheme();
  const [currentGroup, setCurrentGroup] = useState(0);

  // Array de 25 logos ordenados
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25
  ];

  // Dividir en grupos de 5
  const groupSize = 5;
  const totalGroups = Math.ceil(logos.length / groupSize);
  const currentLogos = logos.slice(currentGroup * groupSize, (currentGroup + 1) * groupSize);

  const goToPrevious = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto pb-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)'
        }}
      >
        <h2
          className="text-3xl font-bold mb-6 italic"
          style={{
            fontStyle: 'italic',
            marginLeft: '15px',
            color: 'white'
          }}
        >
          Marcas con las que trabajamos
        </h2>
        <p
          className="leading-relaxed mb-6"
          style={{
            marginLeft: '15px',
            marginRight: '15px',
            color: 'white'
          }}
        >
          Trabajamos con una amplia variedad de marcas reconocidas del mercado automotor argentino. Ofrecemos repuestos, accesorios y autopartes compatibles con múltiples modelos y versiones, para que siempre encuentres una solución confiable y adecuada para tu vehículo.
        </p>

        {/* Mostrador de marcas */}
        <div style={{ marginLeft: '10px', marginRight: '10px', marginTop: '1.5rem' }}>
          {/* Desktop: 5 imágenes en línea horizontal */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '0' }}>
            {currentLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Marca ${currentGroup * groupSize + index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '5px'
                }}
              />
            ))}
          </div>

          {/* Mobile: 2 arriba, 1 central, 2 abajo */}
          <div className="md:hidden">
            {/* 2 arriba */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}>
              {currentLogos.slice(0, 2).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Marca ${currentGroup * groupSize + index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '5px'
                  }}
                />
              ))}
            </div>

            {/* 1 central al 100% */}
            {currentLogos[2] && (
              <img
                src={currentLogos[2]}
                alt={`Marca ${currentGroup * groupSize + 3}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '5px'
                }}
              />
            )}

            {/* 2 abajo */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}>
              {currentLogos.slice(3, 5).map((logo, index) => (
                <img
                  key={index + 3}
                  src={logo}
                  alt={`Marca ${currentGroup * groupSize + index + 4}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '5px'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Botonera de navegación */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={goToPrevious}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <span style={{ color: 'white', fontSize: '0.875rem' }}>
              {currentGroup + 1} / {totalGroups}
            </span>

            <button
              onClick={goToNext}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Botón "Conocé nuestros productos" */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button
              style={{
                backgroundColor: 'rgb(194, 143, 91)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Conocé nuestros productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}