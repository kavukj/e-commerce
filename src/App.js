

import { useEffect, useContext } from 'react';
import './App.css';
import axios from 'axios';
import { ProductContextProvider, ProductsContext } from './context/productContext';
import HomePage from './component/homePageComponent/homepage';

function App() {
  const {products, setProducts} = useContext(ProductsContext)

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products?limit=5').then((response)=>{
      setProducts(response.data)
    })
  }, [])

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
