import { useTheme } from "@/app/contexts/ThemeContext";
import { useState, FormEvent } from "react";

export function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    contact: false,
    message: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validar campos vacíos
    const newErrors = {
      name: formData.name.trim() === "",
      contact: formData.contact.trim() === "",
      message: formData.message.trim() === ""
    };
    
    setErrors(newErrors);
    
    // Si todos los campos están completos, enviar
    if (!newErrors.name && !newErrors.contact && !newErrors.message) {
      // Aquí iría la lógica de envío
      alert("Mensaje enviado correctamente");
      // Limpiar formulario
      setFormData({ name: "", contact: "", message: "" });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error al empezar a escribir
    if (value.trim() !== "") {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section className="max-w-7xl mx-auto pb-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div 
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: '2rem'
        }}
      >
        <h2 
          className="text-3xl font-bold mb-6 italic" 
          style={{ 
            fontStyle: 'italic', 
            marginLeft: '15px',
            color: 'white'
          }}
        >
          Contacto rápido
        </h2>
        
        <p 
          style={{ 
            fontStyle: 'italic',
            marginLeft: '15px',
            marginBottom: '1.5rem',
            color: 'white'
          }}
        >
          ¿En qué podemos ayudarte?
        </p>
        
        <form onSubmit={handleSubmit} style={{ marginLeft: '15px', marginRight: '15px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Nombre y apellido"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '5px',
                border: errors.name ? '2px solid rgb(239, 68, 68)' : 'none',
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: 'white',
                color: 'black'
              }}
            />
            {errors.name && (
              <p style={{ color: 'rgb(254, 202, 202)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Celular o e-mail"
              value={formData.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '5px',
                border: errors.contact ? '2px solid rgb(239, 68, 68)' : 'none',
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: 'white',
                color: 'black'
              }}
            />
            {errors.contact && (
              <p style={{ color: 'rgb(254, 202, 202)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '5px',
                border: errors.message ? '2px solid rgb(239, 68, 68)' : 'none',
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                resize: 'vertical',
                backgroundColor: 'white',
                color: 'black'
              }}
            />
            {errors.message && (
              <p style={{ color: 'rgb(254, 202, 202)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: theme === 'dark' ? 'rgb(50, 90, 180)' : 'rgb(11, 32, 110)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '5px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(0, 161, 255)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(50, 90, 180)' : 'rgb(11, 32, 110)';
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}