import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-white text-center tracking-wide">
        NotesApp
      </h1>
      <p className="text-white text-center text-sm mt-2">
        Built with React
      </p>
    </header>
  );
}

export default Header;
