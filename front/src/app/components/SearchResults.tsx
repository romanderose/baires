import { useTheme } from "@/app/contexts/ThemeContext";
import noResultsImage from "@/assets/f8ea3e6252b6caff05141d12290eecc23226012f.png";

interface SearchResultsProps {
  searchTerm: string;
}

export function SearchResults({ searchTerm }: SearchResultsProps) {
  const { theme } = useTheme();

  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'rgb(7, 21, 77)' : 'rgb(40, 80, 160)',
          borderRadius: '5px',
          padding: 'calc(2rem + 5px)'
        }}
      >
        <h2
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            marginLeft: '15px'
          }}
        >
          Resultados para: {searchTerm}
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            <img
              src={noResultsImage}
              alt="Sin resultados"
              className="max-w-[280px] md:max-w-[300px]"
              style={{
                width: '100%',
                height: 'auto',
                border: '2px solid rgb(255, 0, 0)'
              }}
            />
          </div>

          <p
            style={{
              fontFamily: 'Arial, sans-serif',
              fontStyle: 'italic',
              color: 'white',
              fontSize: '1rem',
              textAlign: 'center'
            }}
          >
            No se encontraron resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
