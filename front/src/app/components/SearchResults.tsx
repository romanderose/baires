import { useTheme } from "@/app/contexts/ThemeContext";
import { useCart } from "@/app/contexts/CartContext";
import { products } from "@/app/data/products";
import noResultsImage from "@/assets/f8ea3e6252b6caff05141d12290eecc23226012f.png";

interface SearchResultsProps {
  searchTerm: string;
  onNavigate: (section: string, productId?: number) => void;
}

export function SearchResults({ searchTerm, onNavigate }: SearchResultsProps) {
  const { theme } = useTheme();
  const { addToCart } = useCart();

  // Buscar productos
  const searchResults = products.filter(product => {
    const search = searchTerm.toLowerCase();
    return (
      product.nombre.toLowerCase().includes(search) ||
      product.marca.toLowerCase().includes(search) ||
      product.categoria.toLowerCase().includes(search) ||
      product.estado.toLowerCase().includes(search)
    );
  });

  const hasResults = searchResults.length > 0;

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)'
        }}
      >
        <h2
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            marginLeft: '15px'
          }}
        >
          Resultados para: {searchTerm}
        </h2>

        {hasResults ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              padding: '0 15px'
            }}
          >
            {searchResults.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
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

                <div
                  style={{
                    borderTop: '2px solid rgba(255, 255, 255, 0.2)',
                    marginTop: '0.5rem',
                    paddingTop: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                        transition: 'background-color 0.3s ease',
                        width: 'fit-content'
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            gap: '1rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}>
              <img
                src={noResultsImage}
                alt="Sin resultados"
                className="max-w-[280px] md:max-w-[300px]"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Arial, sans-serif',
                fontStyle: 'italic',
                color: 'white',
                fontSize: '1rem',
                textAlign: 'center'
              }}
            >
              No se encontraron resultados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}