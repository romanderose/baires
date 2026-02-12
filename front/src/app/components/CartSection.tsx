import { useTheme } from "@/app/contexts/ThemeContext";
import { useCart } from "@/app/contexts/CartContext";
import { useState } from "react";

export function CartSection() {
  const { theme } = useTheme();
  const { items, decrementItem, removeItem, clearCart, getTotalPrice } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFinalizePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
    }, 5000);
  };

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
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <button
                      onClick={() => decrementItem(item.id)}
                      disabled={item.quantity <= 1}
                      style={{
                        backgroundColor: item.quantity <= 1 ? 'rgb(100, 100, 100)' : 'rgb(154, 113, 71)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        width: '24px',
                        height: '24px',
                        cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: item.quantity <= 1 ? 0.5 : 1
                      }}
                    >
                      –
                    </button>
                    
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
                  </div>
                  
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
                  
                  <button
                    onClick={() => {
                      if (confirm('Confirma que quieres eliminar el producto del carrito.')) {
                        removeItem(item.id);
                      }
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      color: 'rgb(255, 100, 100)',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontFamily: 'Arial, sans-serif',
                      textDecoration: 'underline',
                      padding: 0,
                      marginTop: '0.5rem',
                      transition: 'all 0.25s ease',
                      transform: 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(255, 150, 150)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(255, 100, 100)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.color = 'rgb(255, 150, 150)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onTouchEnd={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.color = 'rgb(255, 100, 100)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }, 200);
                    }}
                  >
                    Eliminar
                  </button>
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
                  onClick={handleFinalizePurchase}
                  disabled={isProcessing}
                  style={{
                    backgroundColor: 'rgb(154, 113, 71)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                    fontSize: '1.125rem',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '500',
                    transition: 'background-color 0.3s ease',
                    width: 'fit-content',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isProcessing) {
                      e.currentTarget.style.backgroundColor = 'rgb(194, 143, 91)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isProcessing) {
                      e.currentTarget.style.backgroundColor = 'rgb(154, 113, 71)';
                    }
                  }}
                >
                  {isProcessing && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '0%',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        animation: 'fillBar 5s linear forwards',
                        zIndex: 0
                      }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    {isProcessing ? 'Procesando...' : 'Finalizar compra'}
                  </span>
                </button>
                <style>
                  {`
                    @keyframes fillBar {
                      from { width: 0%; }
                      to { width: 100%; }
                    }
                  `}
                </style>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}