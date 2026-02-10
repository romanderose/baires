import { useTheme } from "@/app/contexts/ThemeContext";
import { products } from "@/app/data/products";

interface ProductDetailsProps {
  productId: number;
  onBack: () => void;
}

export function ProductDetails({ productId, onBack }: ProductDetailsProps) {
  const { theme } = useTheme();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return null;
  }

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
        Detalles del producto
      </h1>

      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '8px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '600px'
        }}
      >
        <img
          src={product.imagen}
          alt={product.nombre}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              margin: 0
            }}
          >
            {product.nombre}
          </h2>
          
          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.125rem',
              color: 'white',
              margin: 0
            }}
          >
            <strong>Marca:</strong> {product.marca}
          </p>
          
          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 'bold',
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
            <strong>Estado:</strong> {product.estado}
          </p>
          
          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.125rem',
              color: 'white',
              margin: 0
            }}
          >
            <strong>Categoría:</strong> {product.categoria}
          </p>
          
          <button
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
              marginTop: '1rem'
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

      <p
        onClick={onBack}
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1rem',
          color: 'white',
          marginTop: '1.5rem',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
        Volver
      </p>
    </section>
  );
}
