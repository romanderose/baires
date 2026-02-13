import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { products } from "@/app/data/products";

interface AdvancedSearchModalProps {
  onClose: () => void;
}

export function AdvancedSearchModal({ onClose }: AdvancedSearchModalProps) {
  const { theme } = useTheme();
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("Ninguna");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [categoria, setCategoria] = useState("Ninguna");

  // Obtener marcas únicas de los productos
  const marcas = ["Ninguna", ...Array.from(new Set(products.map(p => p.marca))), "Otra"];
  
  // Obtener categorías únicas
  const categorias = ["Ninguna", ...Array.from(new Set(products.map(p => p.categoria)))];

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (nombre.trim()) params.append('nombre', nombre.trim());
    if (marca && marca !== 'Ninguna') params.append('marca', marca);
    if (precioMin.trim()) params.append('precioMin', precioMin.trim());
    if (precioMax.trim()) params.append('precioMax', precioMax.trim());
    if (categoria && categoria !== 'Ninguna') params.append('categoria', categoria);
    
    params.append('advanced', 'true');
    
    window.location.href = `?${params.toString()}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '8px',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            textAlign: 'center',
            margin: '0 0 1.5rem 0'
          }}
        >
          Búsqueda personalizada
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Nombre */}
          <div>
            <label
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del producto"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Marca */}
          <div>
            <label
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Marca
            </label>
            <select
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1rem',
                boxSizing: 'border-box',
                cursor: 'pointer'
              }}
            >
              {marcas.map((m) => (
                <option key={m} value={m} style={{ backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Precio */}
          <div>
            <label
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Precio
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
              <input
                type="number"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                placeholder="Mínimo"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
                  color: theme === 'dark' ? 'white' : 'black',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  minWidth: 0
                }}
              />
              <span style={{ color: 'white', fontFamily: 'Arial, sans-serif', flexShrink: 0 }}>-</span>
              <input
                type="number"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                placeholder="Máximo"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
                  color: theme === 'dark' ? 'white' : 'black',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  minWidth: 0
                }}
              />
            </div>
          </div>

          {/* Categoría */}
          <div>
            <label
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Categoría
            </label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
                color: theme === 'dark' ? 'white' : 'black',
                fontFamily: 'Arial, sans-serif',
                fontSize: '1rem',
                boxSizing: 'border-box',
                cursor: 'pointer'
              }}
            >
              {categorias.map((c) => (
                <option key={c} value={c} style={{ backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                backgroundColor: 'rgb(100, 100, 100)',
                color: 'white',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(140, 140, 140)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(100, 100, 100)';
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleSearch}
              style={{
                flex: 1,
                backgroundColor: 'rgb(154, 113, 71)',
                color: 'white',
                padding: '0.75rem',
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
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}