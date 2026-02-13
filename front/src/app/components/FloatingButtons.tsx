import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import chatbotIcon from "figma:asset/1b031dea1342a4adc9e229c14eea4d9442c56244.png";
import whatsappIcon from "figma:asset/d0462e29fe08137d3d29bfd75bcf9b0e200f8835.png";

export function FloatingButtons() {
  const { theme } = useTheme();
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  const whatsappUrl = "https://wa.me/5491112345678";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 9998
      }}
    >
      {/* Botón Chatbot */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transition: 'transform 0.2s ease',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <img
          src={chatbotIcon}
          alt="Chatbot"
          style={{
            width: '48px',
            height: '48px',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Botón WhatsApp */}
      <div style={{ position: 'relative' }}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s ease',
            textDecoration: 'none',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            setShowWhatsappTooltip(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            setShowWhatsappTooltip(false);
          }}
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            style={{
              width: '56px',
              height: '56px',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Tooltip de WhatsApp */}
        {showWhatsappTooltip && (
          <div
            style={{
              position: 'absolute',
              right: 'calc(100% + 12px)',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontFamily: 'Arial, sans-serif',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            Ir a WhatsApp
          </div>
        )}
      </div>
    </div>
  );
}