import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useCart } from "@/app/contexts/CartContext";
import { useToast } from "@/app/contexts/ToastContext";
import { products } from "@/app/data/products";

interface ProductDetailsProps {
  productId: number;
  onBack: () => void;
}

export function ProductDetails({ productId, onBack }: ProductDetailsProps) {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const product = products.find(p => p.id === productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return null;
  }

  const currentImage = product.imagenes[selectedImageIndex];

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        <h1 
          style={{ 
            fontFamily: 'Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            marginLeft: '15px'
          }}
        >
          Detalles del producto
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 15px' }}>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '600px',
              width: '100%'
            }}
          >
            {/* Contenedor de imagen con thumbnails */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {/* Columna de thumbnails */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.imagenes.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.nombre} - Vista ${index + 1}`}
                    onClick={() => setSelectedImageIndex(index)}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: selectedImageIndex === index 
                        ? '2px solid white' 
                        : '2px solid rgba(255, 255, 255, 0.3)',
                      opacity: selectedImageIndex === index ? 1 : 0.6,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedImageIndex !== index) {
                        e.currentTarget.style.opacity = '0.8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedImageIndex !== index) {
                        e.currentTarget.style.opacity = '0.6';
                      }
                    }}
                  />
                ))}
              </div>

              {/* Imagen principal */}
              <img
                src={currentImage}
                alt={product.nombre}
                style={{
                  flex: 1,
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.875rem',
                  fontWeight: '500',
                  color: 'white',
                  margin: 0,
                  marginBottom: '1rem'
                }}
              >
                {product.nombre}
              </h2>
              
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1rem',
                  color: 'white',
                  margin: 0,
                  marginBottom: '1rem'
                }}
              >
                {product.descripcion}
              </p>
              
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.125rem',
                  color: 'white',
                  margin: 0
                }}
              >
                <span style={{ fontWeight: '500' }}>Marca:</span>{' '}
                <span style={{ fontStyle: 'italic' }}>{product.marca}</span>
              </p>
              
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  color: 'white',
                  margin: 0
                }}
              >
                ${product.precio.toLocaleString('es-AR')}
              </p>
              
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.125rem',
                  color: 'white',
                  margin: 0
                }}
              >
                <span style={{ fontWeight: '500' }}>Estado:</span>{' '}
                <span style={{ fontStyle: 'italic' }}>{product.estado}</span>
              </p>
              
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1.125rem',
                  color: 'white',
                  margin: 0
                }}
              >
                <span style={{ fontWeight: '500' }}>Categoría:</span>{' '}
                <span style={{ fontStyle: 'italic' }}>{product.categoria}</span>
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
                    onClick={() => {
                      addToCart(product);
                      showToast(product.nombre);
                    }}
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
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <p
          onClick={onBack}
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            color: 'white',
            cursor: 'pointer',
            textDecoration: 'underline',
            transition: 'opacity 0.3s ease',
            margin: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Volver
        </p>
      </div>
    </section>
  );
}