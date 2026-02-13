import { useEffect } from "react";
import { Check } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";

interface ToastProps {
  onClose: () => void;
}

export function Toast({ onClose }: ToastProps) {
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
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        zIndex: 10000,
        border: '2px solid rgba(255, 255, 255, 0.2)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1rem'
      }}
    >
      <Check style={{ width: '20px', height: '20px', color: 'rgb(34, 197, 94)' }} />
      <span>Producto agregado al carrito</span>
    </div>
  );
}
