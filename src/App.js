

import { useEffect, useContext } from 'react';
import './App.css';
import axios from 'axios';
import { ProductContextProvider, ProductsContext } from './context/productContext';
import HomePage from './component/homePageComponent/homepage';

function App() {

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
