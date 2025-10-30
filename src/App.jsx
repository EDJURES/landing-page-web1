/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</Router>
);
}*/
// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import './styles/globals.css'; // Estilos globales (opcional si usas Tailwind)

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;