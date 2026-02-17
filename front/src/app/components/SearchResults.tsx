import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { products } from "@/app/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SearchResultsProps {
  searchTerm: string;
  onNavigate: (section: string, productId?: number) => void;
}

export function SearchResults({ searchTerm, onNavigate }: SearchResultsProps) {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Buscar productos
  const searchResults = products.filter(product => {
    const search = searchTerm.toLowerCase();
    return (
      product.nombre.toLowerCase().includes(search) ||
      product.marca.toLowerCase().includes(search) ||
      product.categoria.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = searchResults.slice(startIndex, endIndex);

  const hasResults = searchResults.length > 0;

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)',
          minHeight: '800px',
          display: 'flex',
          flexDirection: 'column'
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
          <>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                gap: '1.5rem',
                padding: '0 15px',
                flex: '1 0 auto'
              }}
              className="products-grid"
            >
              <style>{`
                @media (min-width: 1024px) {
                  .products-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
                @media (max-width: 1023px) and (min-width: 640px) {
                  .products-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                  }
                }
                @media (max-width: 639px) {
                  .products-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                  }
                }
                @media (max-width: 450px) {
                  .products-grid {
                    padding: 0 5px !important;
                    gap: 0.75rem !important;
                  }
                  .products-grid > div {
                    padding: 0.75rem !important;
                  }
                  .products-grid img {
                    height: 150px !important;
                  }
                }
              `}</style>
              {currentProducts.map((product) => (
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

            {/* Paginación */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  style={{
                    backgroundColor: currentPage === 1 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '5px',
                    padding: '0.5rem',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentPage === 1 ? 0.5 : 1,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== 1) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== 1) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                >
                  <ChevronLeft style={{ width: '20px', height: '20px' }} />
                </button>

                <span style={{ color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                  Página {currentPage} de {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    backgroundColor: currentPage === totalPages ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '5px',
                    padding: '0.5rem',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== totalPages) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== totalPages) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                >
                  <ChevronRight style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
            )}
          </>
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