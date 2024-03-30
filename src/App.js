import React, { useState } from 'react';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Books from './Books'; 
import Websites from './Websites'; 
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'books':
        return <Books />;
      case 'websites':
        return <Websites />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <NavBar onNavigate={navigate} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
