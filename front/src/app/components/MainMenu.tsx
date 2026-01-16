export function MainMenu() {
  return (
    <nav className="w-full border-b-4 border-red-600 shadow-lg" style={{ backgroundColor: 'rgb(11, 32, 110)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="text-white text-2xl font-bold tracking-wide">
              Baires Suspensión
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white text-lg font-medium px-6 py-2 border-2 border-red-500 rounded" style={{ backgroundColor: 'rgba(11, 32, 110, 0.7)' }}>
              Menú principal
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}