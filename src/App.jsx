import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component

import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import SuperDetailedView from './SuperDetailedView';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Route components with Routes */}
        <Route path="/" element={<PokemonList />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/pokemon/:id/:info" element={<SuperDetailedView />} />
      </Routes>
    </Router>
  );
}

export default App;