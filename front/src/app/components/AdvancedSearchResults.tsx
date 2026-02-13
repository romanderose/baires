import { useTheme } from "@/app/contexts/ThemeContext";
import { products } from "@/app/data/products";

interface AdvancedSearchResultsProps {
  onNavigate: (section: string, productId?: number) => void;
  filters: {
    nombre?: string;
    marca?: string;
    precioMin?: string;
    precioMax?: string;
    categoria?: string;
  };
}

export function AdvancedSearchResults({ onNavigate, filters }: AdvancedSearchResultsProps) {
  const { theme } = useTheme();

  // Filtrar productos según los criterios
  const filteredProducts = products.filter((product) => {
    // Filtro por nombre
    if (filters.nombre && !product.nombre.toLowerCase().includes(filters.nombre.toLowerCase())) {
      return false;
    }

    // Filtro por marca
    if (filters.marca && filters.marca !== 'Ninguna' && product.marca !== filters.marca) {
      return false;
    }

    // Filtro por precio mínimo
    if (filters.precioMin) {
      const min = parseFloat(filters.precioMin);
      if (!isNaN(min) && product.precio < min) {
        return false;
      }
    }

    // Filtro por precio máximo
    if (filters.precioMax) {
      const max = parseFloat(filters.precioMax);
      if (!isNaN(max) && product.precio > max) {
        return false;
      }
    }

    // Filtro por categoría
    if (filters.categoria && filters.categoria !== 'Ninguna' && product.categoria !== filters.categoria) {
      return false;
    }

    return true;
  });

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)'
        }}
      >
        <h1 
          style={{ 
            fontFamily: 'Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem',
            marginLeft: '15px'
          }}
        >
          Resultados de: búsqueda personalizada
        </h1>

        {filteredProducts.length === 0 ? (
          <p 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.25rem',
              color: 'white',
              textAlign: 'center',
              padding: '2rem',
              margin: 0
            }}
          >
            No se encontraron productos que coincidan con los criterios de búsqueda.
          </p>
        ) : (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: '1.5rem',
              padding: '0 15px'
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxSizing: 'border-box',
                  maxWidth: '100%'
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
                    fontWeight: '400',
                    color: 'white',
                    margin: 0
                  }}
                >
                  {product.nombre}
                </h3>
                
                <p
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    color: 'white',
                    margin: 0
                  }}
                >
                  ${product.precio.toLocaleString('es-AR')}
                </p>

                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    margin: '0.25rem 0'
                  }}
                />

                <button
                  onClick={() => onNavigate('producto', product.id)}
                  style={{
                    backgroundColor: 'rgb(154, 113, 71)',
                    color: 'white',
                    padding: '0.625rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '500',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}