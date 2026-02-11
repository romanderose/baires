import { useTheme } from "@/app/contexts/ThemeContext";
import { useCart } from "@/app/contexts/CartContext";

export function CartSection() {
  const { theme } = useTheme();
  const { items, getTotalPrice } = useCart();

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
        Tu carrito
      </h1>

      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '8px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        {items.length === 0 ? (
          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.125rem',
              color: 'white',
              textAlign: 'center',
              padding: '2rem'
            }}
          >
            Tu carrito está vacío
          </p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1rem',
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h3
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: 'white',
                      margin: '0 0 0.5rem 0'
                    }}
                  >
                    {item.nombre}
                  </h3>
                  
                  <p
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '0.875rem',
                      color: 'white',
                      margin: 0
                    }}
                  >
                    Cantidad: {item.quantity}
                  </p>
                  
                  <p
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '0.875rem',
                      color: 'white',
                      margin: 0
                    }}
                  >
                    Precio unitario: ${item.precio.toLocaleString('es-AR')}
                  </p>
                </div>
                
                <div>
                  <p
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'white',
                      margin: 0
                    }}
                  >
                    ${(item.precio * item.quantity).toLocaleString('es-AR')}
                  </p>
                </div>
              </div>
            ))}
            
            <div
              style={{
                borderTop: '2px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '1.5rem',
                marginTop: '1rem'
              }}
            >
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'right',
                  margin: '0 0 1.5rem 0'
                }}
              >
                Total: ${getTotalPrice().toLocaleString('es-AR')}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{
                    backgroundColor: 'rgb(154, 113, 71)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1.125rem',
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
                  Finalizar compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
