import { useTheme } from "@/app/contexts/ThemeContext";
import { products } from "@/app/data/products";

interface ProductsSectionProps {
  onNavigate: (section: string, productId?: number) => void;
}

export function ProductsSection({ onNavigate }: ProductsSectionProps) {
  const { theme } = useTheme();

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <h1 
        style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '2rem'
        }}
      >
        Sección: Productos
      </h1>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
              borderRadius: '8px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <img
              src={product.imagen}
              alt={product.nombre}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            
            <h3
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                flexGrow: 1
              }}
            >
              {product.nombre}
            </h3>
            
            <p
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'white',
                margin: 0
              }}
            >
              ${product.precio.toLocaleString('es-AR')}
            </p>
            
            <button
              onClick={() => onNavigate('producto-detalle', product.id)}
              style={{
                backgroundColor: 'rgb(154, 113, 71)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(194, 143, 91)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(154, 113, 71)';
              }}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
