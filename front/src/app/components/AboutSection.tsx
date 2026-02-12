import { useTheme } from "@/app/contexts/ThemeContext";
import aboutImage from "@/assets/f7e54600acdf3cc2217c9a85144f6e4558b0909c.png";

export function AboutSection() {
  const { theme } = useTheme();

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: '2rem'
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
          Sobre nosotros
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          <div className="md:hidden w-full">
            <img
              src={aboutImage}
              alt="Baires Suspensión - Instalaciones y servicios"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px'
              }}
            />
          </div>
          <p
            className="leading-relaxed flex-1"
            style={{
              marginLeft: '15px',
              marginRight: '15px',
              color: 'white'
            }}
          >
            Baires Suspensión es una empresa dedicada a la venta de repuestos automotrices con más de 20 años de experiencia en el mercado.
            Contamos con un amplio stock de productos de las mejores marcas nacionales e importadas, garantizando calidad y confiabilidad en cada compra.
            Nuestro equipo de profesionales está capacitado para asesorarte y encontrar el repuesto exacto que necesitás para tu vehículo.
            La satisfacción de nuestros clientes es nuestra prioridad, por eso brindamos atención personalizada y asesoramiento técnico especializado.
            Contamos con un sistema de envíos a domicilio y atención en nuestro local comercial de lunes a sábado.
            Consultanos por disponibilidad de stock y tiempos de entrega, estamos para ayudarte en todo momento.
            Confiá en Baires Suspensión para el cuidado y mantenimiento de tu vehículo.
          </p>
          <div className="hidden md:block md:w-1/3">
            <img
              src={aboutImage}
              alt="Baires Suspensión - Instalaciones y servicios"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}