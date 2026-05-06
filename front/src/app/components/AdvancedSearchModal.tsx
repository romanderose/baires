import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";

interface AdvancedSearchModalProps {
  onClose: () => void;
}

const FABRICANTES = [
  "", "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Citroën", "Dodge",
  "Fiat", "Ford", "Honda", "Hyundai", "Jeep", "Kia", "Mazda",
  "Mercedes-Benz", "Mitsubishi", "Nissan", "Peugeot", "Renault",
  "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"
];

const MODELOS: Record<string, string[]> = {
  "Alfa Romeo": ["147", "156", "159", "Giulia", "Stelvio"],
  "Audi": ["A1", "A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "TT"],
  "BMW": ["116i", "118i", "120i", "316i", "318i", "320i", "328i", "X1", "X3", "X5"],
  "Chevrolet": ["Agile", "Aveo", "Captiva", "Classic", "Cobalt", "Corsa", "Cruze", "Montana", "Onix", "S10", "Spin", "Tracker"],
  "Citroën": ["Berlingo", "C3", "C4", "C4 Cactus", "Jumper", "Xsara Picasso"],
  "Dodge": ["Journey", "Neon", "RAM 700", "RAM 1500"],
  "Fiat": ["Cronos", "Doblò", "Fiorino", "Idea", "Linea", "Mobi", "Palio", "Punto", "Siena", "Strada", "Toro", "Uno"],
  "Ford": ["EcoSport", "Edge", "Escape", "Explorer", "F-150", "Fiesta", "Focus", "Fusion", "Ka", "Kuga", "Mondeo", "Mustang", "Ranger", "Territory"],
  "Honda": ["Accord", "City", "Civic", "CR-V", "Fit", "HR-V", "Jazz", "WR-V"],
  "Hyundai": ["Accent", "Creta", "Elantra", "Getz", "i10", "i20", "i30", "Santa Fe", "Sonata", "Tucson"],
  "Jeep": ["Cherokee", "Compass", "Grand Cherokee", "Renegade", "Wrangler"],
  "Kia": ["Carnival", "Cerato", "Picanto", "Rio", "Seltos", "Sorento", "Sportage", "Stonic"],
  "Mazda": ["2", "3", "6", "CX-3", "CX-5", "CX-9", "MX-5"],
  "Mercedes-Benz": ["A 180", "A 200", "C 180", "C 200", "C 250", "E 200", "E 250", "GLA", "GLC", "GLE", "Sprinter", "Vito"],
  "Mitsubishi": ["ASX", "Eclipse Cross", "L200", "Lancer", "Outlander", "Pajero"],
  "Nissan": ["Frontier", "Kicks", "March", "Murano", "Note", "Pathfinder", "Sentra", "Tiida", "X-Trail"],
  "Peugeot": ["2008", "207", "208", "3008", "301", "307", "308", "408", "5008", "Partner"],
  "Renault": ["Captur", "Clio", "Duster", "Fluence", "Kangoo", "Koleos", "Logan", "Master", "Megane", "Oroch", "Sandero", "Symbol"],
  "Subaru": ["Forester", "Impreza", "Legacy", "Outback", "XV"],
  "Suzuki": ["Alto", "Baleno", "Jimny", "S-Cross", "Swift", "Vitara"],
  "Toyota": ["Corolla", "Etios", "Fortuner", "Hilux", "Land Cruiser", "Prius", "RAV4", "SW4", "Yaris"],
  "Volkswagen": ["Amarok", "Gol", "Golf", "Jetta", "Passat", "Polo", "Saveiro", "Tiguan", "Vento", "Virtus"],
  "Volvo": ["S60", "S90", "V40", "V60", "XC40", "XC60", "XC90"],
};

const VERSIONES = [
  "", "Base", "Comfort", "Comfortline", "Confortline", "Easy",
  "Elegance", "Full", "GL", "GLS", "GLX", "GT", "GTS", "Highline",
  "Limited", "Luxury", "Premium", "Sport", "Sportline", "Trendline",
  "XL", "XLS", "XLT"
];

const ANIOS: string[] = ["", ...Array.from({ length: 2026 - 1990 + 1 }, (_, i) => String(2026 - i))];

const MOTORES = [
  "", "1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "2.2", "2.4",
  "2.5", "3.0", "3.5", "4.0", "1.4 Turbo", "1.5 Turbo", "1.6 Turbo",
  "2.0 Turbo", "2.5 Turbo", "1.9 TDI", "2.0 TDI", "2.2 TDI",
  "2.5 TDI", "3.0 TDI", "Diesel 2.0", "Diesel 2.5", "Diesel 3.0",
  "Híbrido", "Eléctrico"
];

export function AdvancedSearchModal({ onClose }: AdvancedSearchModalProps) {
  const { theme } = useTheme();

  // Campos base
  const [nombre, setNombre] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  // Checkbox vehículo
  const [buscarPorVehiculo, setBuscarPorVehiculo] = useState(false);
  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [version, setVersion] = useState("");
  const [anio, setAnio] = useState("");
  const [motor, setMotor] = useState("");

  const modelosDisponibles = fabricante ? (MODELOS[fabricante] ?? []) : [];

  const handleFabricanteChange = (val: string) => {
    setFabricante(val);
    setModelo("");
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (nombre.trim()) params.append('nombre', nombre.trim());
    if (precioMin.trim()) params.append('precioMin', precioMin.trim());
    if (precioMax.trim()) params.append('precioMax', precioMax.trim());
    if (buscarPorVehiculo) {
      if (fabricante) params.append('fabricante', fabricante);
      if (modelo) params.append('modelo', modelo);
      if (version) params.append('version', version);
      if (anio) params.append('anio', anio);
      if (motor) params.append('motor', motor);
    }
    params.append('advanced', 'true');
    window.location.href = `?${params.toString()}`;
  };

  // Estilos reutilizables
  const fieldStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1rem',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '0.875rem',
    color: 'white',
    marginBottom: '0.5rem',
    display: 'block',
  };

  const optionStyle = {
    backgroundColor: theme === 'dark' ? 'rgb(20, 45, 110)' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
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
          maxHeight: '90vh',
          overflowY: 'auto',
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
            textAlign: 'center',
            margin: '0 0 1.5rem 0'
          }}
        >
          Búsqueda personalizada
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* A) Nombre del producto */}
          <div>
            <label style={labelStyle}>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
              placeholder="Ingrese el nombre del producto"
              style={fieldStyle}
            />
          </div>

          {/* B) Checkbox Buscar por vehículo */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                color: 'white',
                userSelect: 'none',
              }}
            >
              <input
                type="checkbox"
                checked={buscarPorVehiculo}
                onChange={(e) => setBuscarPorVehiculo(e.target.checked)}
                style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'rgb(154, 113, 71)' }}
              />
              Buscar por vehículo
            </label>

            {/* Subformulario — solo visible con checkbox activo */}
            {buscarPorVehiculo && (
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '0.875rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Fabricante */}
                <div>
                  <label style={labelStyle}>Fabricante</label>
                  <select
                    value={fabricante}
                    onChange={(e) => handleFabricanteChange(e.target.value)}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                  >
                    {FABRICANTES.map((f) => (
                      <option key={f || '__none__'} value={f} style={optionStyle}>
                        {f || "Seleccione fabricante"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Modelo */}
                <div>
                  <label style={labelStyle}>Modelo</label>
                  <select
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    disabled={!fabricante}
                    style={{ ...fieldStyle, cursor: fabricante ? 'pointer' : 'not-allowed', opacity: fabricante ? 1 : 0.5 }}
                  >
                    <option value="" style={optionStyle}>
                      {fabricante ? "Seleccione modelo" : "Seleccione fabricante primero"}
                    </option>
                    {modelosDisponibles.map((m) => (
                      <option key={m} value={m} style={optionStyle}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Versión */}
                <div>
                  <label style={labelStyle}>Versión</label>
                  <select
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                  >
                    {VERSIONES.map((v) => (
                      <option key={v || '__none__'} value={v} style={optionStyle}>
                        {v || "Seleccione versión"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Año */}
                <div>
                  <label style={labelStyle}>Año</label>
                  <select
                    value={anio}
                    onChange={(e) => setAnio(e.target.value)}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                  >
                    {ANIOS.map((a) => (
                      <option key={a || '__none__'} value={a} style={optionStyle}>
                        {a || "Seleccione año"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Motor */}
                <div>
                  <label style={labelStyle}>Motor</label>
                  <select
                    value={motor}
                    onChange={(e) => setMotor(e.target.value)}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                  >
                    {MOTORES.map((m) => (
                      <option key={m || '__none__'} value={m} style={optionStyle}>
                        {m || "Seleccione motor"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* C) Precio */}
          <div>
            <label style={labelStyle}>Precio</label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
              <input
                type="number"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                placeholder="Mínimo"
                style={{ ...fieldStyle, flex: 1, minWidth: 0 }}
              />
              <span style={{ color: 'white', fontFamily: 'Arial, sans-serif', flexShrink: 0 }}>-</span>
              <input
                type="number"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                placeholder="Máximo"
                style={{ ...fieldStyle, flex: 1, minWidth: 0 }}
              />
            </div>
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
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(140, 140, 140)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(100, 100, 100)'; }}
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
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(194, 143, 91)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(154, 113, 71)'; }}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
