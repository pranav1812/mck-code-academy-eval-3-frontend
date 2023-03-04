import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './Components';
import GlobalContextProvider from './Contexts';
import { ErrorScreen, Home, EventScreen } from './Pages';

function App() {
  const [themeColor, setThemeColor] = useState('#000000');
  return (
    <div className="App" style={{ '--theme-color': themeColor }}>
      <Navbar />
      <div className="main">
        <Router>
          <GlobalContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="event/:index" element={<EventScreen />} />
              <Route path="error/:errorCode?" element={<ErrorScreen />} />
            </Routes>
          </GlobalContextProvider>
        </Router>
      </div>
      <Footer setThemeColor={setThemeColor} />
    </div>
  );
}

export default App;
