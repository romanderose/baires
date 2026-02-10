interface SearchResultsProps {
  searchTerm: string;
}

export function SearchResults({ searchTerm }: SearchResultsProps) {
  return (
    <section className="max-w-7xl mx-auto py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <h1 
        style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem'
        }}
      >
        Resultados para: {searchTerm}
      </h1>
      
      <p 
        style={{ 
          fontFamily: 'Arial, sans-serif',
          fontStyle: 'italic',
          color: 'white',
          fontSize: '1rem'
        }}
      >
        No se encontraron resultados
      </p>
    </section>
  );
}
