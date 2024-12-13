import { useState, createContext } from "react";

export const ProductsContext = createContext(null);

export const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductsContext.Provider>
    )
}