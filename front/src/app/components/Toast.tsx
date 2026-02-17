import { useEffect } from "react";
import { Check, X } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

interface ToastProps {
  productName: string;
  onClose: () => void;
}

export function Toast({ productName, onClose }: ToastProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1rem',
        minWidth: '280px',
        pointerEvents: 'auto',
        position: 'relative'
      }}
    >
      <Check style={{ width: '20px', height: '20px', color: 'rgb(34, 197, 94)', flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{productName} agregado al carrito</span>
      <button
        onClick={onClose}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7,
          transition: 'opacity 0.2s ease',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.7';
        }}
        aria-label="Cerrar"
      >
        <X style={{ width: '16px', height: '16px' }} />
      </button>
    </div>
  );
}