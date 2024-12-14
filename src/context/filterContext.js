import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export const FilterContextWrapper = (props) => {
    const [ rating, setRating]  = useState(0);
    const [ price, setPrice ] = useState(5000);
    const [ category, setCategory ] = useState('all');
    const [ sorting, setSort ] = useState('asc');

    return(
        <FilterContext.Provider value={{category, setCategory, price, setPrice, rating, setRating, sorting, setSort}}>
            {props.children}
        </FilterContext.Provider>
    )
}