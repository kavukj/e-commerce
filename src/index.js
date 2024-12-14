import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './context/productContext';
import { FilterContextWrapper } from './context/filterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextWrapper>
        <App />
      </FilterContextWrapper>
    </ProductContextProvider>
  </React.StrictMode>
);

