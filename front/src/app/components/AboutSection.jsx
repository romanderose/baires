import { useTheme } from "@/app/contexts/ThemeContext";

export function AboutSection() {
  const { theme } = useTheme();

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: 'calc(1rem + 20px)', paddingRight: '1rem' }}>
      <h2
        className="text-3xl font-bold mb-6 italic"
        style={{
          fontStyle: 'italic',
          marginLeft: '30px',
          color: theme === 'dark' ? 'white' : 'rgb(7, 21, 77)'
        }}
      >
        Sobre nosotros
      </h2>
      <p
        className="leading-relaxed"
        style={{
          marginLeft: '15px',
          marginRight: '15px',
          color: theme === 'dark' ? 'rgb(209, 213, 219)' : 'rgb(7, 21, 77)'
        }}
      >
        Baires Suspensión es una empresa dedicada a la venta de repuestos automotrices con más de 20 años de experiencia en el mercado.
        Nos especializamos en suspensión, frenos, embragues y distribución para toda la línea del automotor.
        Contamos con un amplio stock de productos de l marc e importadas, garantizando calidad y confiabilidad en cada compra.
        Nuestro equipo de profesionales está capacitado para asesorarte y encontrar el repuesto exacto que necesit tu vehículo.
        Trabajamos con tod marc modelos, tanto nacionales como importados, ofreciendo soluciones integrales para el mantenimiento y reparación de automóviles.
        La satisfacción de nuestros clientes es nuestra prioridad, por eso brindamos atención personalizada y asesoramiento técnico especializado.
        Contamos con un sistema de envíos a todo el país y atención en nuestro local comercial de lunes a sábado.
        Nos comprometemos a ofrecer los mejores precios del mercado sin sacrificar la calidad de nuestros productos.
        Consultanos por disponibilidad de stock y tiempos de entrega, estamos para ayudarte en todo momento.
        Confiá en Baires Suspensión para el cuidado y mantenimiento de tu vehículo.
      </p>
    </section>
  );
}
