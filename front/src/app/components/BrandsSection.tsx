import { useTheme } from "@/app/contexts/ThemeContext";
import logo1 from "figma:asset/e3a8fdc85a5b11be108a4a24e7ac6c14d9a73cb7.png";
import logo2 from "figma:asset/2af4aeb883bf02eb8f6c556065f3e10b29c4fa88.png";
import logo3 from "figma:asset/9637ac1ce03530d63aa6d35e3b724e36ea114e8a.png";
import logo4 from "figma:asset/46334db3c52f2cee568ec062e1129fe57bb456a9.png";
import logo5 from "figma:asset/9dce137e92ba60ca9e6f67b407447f76598b5722.png";
import logo6 from "figma:asset/e668afc6bed5caab66307cde5549ff8cb7b10c83.png";
import logo7 from "figma:asset/603119052ba54a6d1e0dbb3549ee66ce3d0855c2.png";
import logo8 from "figma:asset/2a0fd6312a97ccd6f111046544561a40ac61c2e9.png";
import logo9 from "figma:asset/cfb1803b5bd7a5bf39a69015697056dbd886116a.png";
import logo10 from "figma:asset/04accf0e4330736044625d3b76b4ad0c172aba5d.png";
import logo11 from "figma:asset/5f478fdf451363a6b8c66e84c9f33c22cf72a372.png";
import logo12 from "figma:asset/6dcab172993f2787a79a3671aea315788426d8b2.png";
import logo13 from "figma:asset/ef65139d37d1eb342df602e5261ae301f9b86155.png";
import logo14 from "figma:asset/0f0b688b68d175c57f9edc5ffb8c0b32278127b7.png";
import logo15 from "figma:asset/0a6e922ae68aff793040bb7e51be681e12dea6cb.png";
import logo16 from "figma:asset/0ecca86cf39d24a951beea1414a44b822b5a03d7.png";
import logo17 from "figma:asset/c32a5106165fde2682375819e0fee16d12c365d9.png";
import logo18 from "figma:asset/b0c4b277d28296424b80447250f5e5e4f3339009.png";
import logo19 from "figma:asset/d0b1638b58da62f96b584ae69a28a30e0780cebf.png";
import logo20 from "figma:asset/91883c9d7522fe6d9ce46792d901859ceb416a7c.png";
import logo21 from "figma:asset/25429126c1e12735b7600dd1ee6540d0016b710b.png";
import logo22 from "figma:asset/c9df61b0de7ed1b446dc6f7e732ade8c49220528.png";
import logo23 from "figma:asset/e65e45cd8ae41fa0790b8131de046aa1e05855bc.png";
import logo24 from "figma:asset/4a83dec7957dbddc0abc3644ee63f8351e27f8b2.png";
import logo25 from "figma:asset/e237f841a748662e6066713a41f8a9fa0f64b30b.png";

interface BrandsSectionProps {
  onNavigate: (section: string) => void;
}

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25
];

// Duplicado para loop infinito sin saltos
const track = [...logos, ...logos];

export function BrandsSection({ onNavigate }: BrandsSectionProps) {
  const { theme } = useTheme();

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
          Trabajamos con una amplia variedad de marcas reconocidas del mercado del automotor. Ofrecemos repuestos, accesorios y autopartes compatibles con múltiples modelos y versiones, para que siempre encuentres una solución confiable y adecuada para tu vehículo.
        </p>

        {/* Cinta caminadora de logos */}
        <div
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '1.5rem',
            overflow: 'hidden'
          }}
        >
          <style>{`
            @keyframes brands-marquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'max-content',
              animation: 'brands-marquee 35s linear infinite'
            }}
          >
            {track.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Marca ${(index % logos.length) + 1}`}
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0,
                  marginRight: '40px'
                }}
              />
            ))}
          </div>
        </div>

        {/* Párrafo con botón integrado */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontStyle: 'italic', color: 'white', margin: 0, fontSize: '1rem' }}>
            Para conocer nuestros productos, haga
          </p>
          <button
            onClick={() => onNavigate('productos')}
            style={{
              backgroundColor: 'rgb(154, 113, 71)',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'normal',
              borderRadius: '5px',
              textTransform: 'none',
              transform: 'skewX(-10deg)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(194, 143, 91)';
              e.currentTarget.style.textTransform = 'uppercase';
              e.currentTarget.style.transform = 'skewX(0deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(154, 113, 71)';
              e.currentTarget.style.textTransform = 'none';
              e.currentTarget.style.transform = 'skewX(-10deg)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(194, 143, 91)';
              e.currentTarget.style.textTransform = 'uppercase';
              e.currentTarget.style.transform = 'skewX(0deg)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(154, 113, 71)';
              e.currentTarget.style.textTransform = 'none';
              e.currentTarget.style.transform = 'skewX(-10deg)';
            }}
          >
            click aquí
          </button>
        </div>
      </div>
    </section>
  );
}
