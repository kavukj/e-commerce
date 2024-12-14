import { useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import './homepage.css'
import { ProductsContext } from '../../context/productContext';
import Product from '../productComponent/product';
import Filter from '../filterComponent/filter';
import { FilterContext } from '../../context/filterContext';
import { useState } from 'react';

const HomePage = () => {
    const { products, setProducts } = useContext(ProductsContext)
    const { category, rating, price, sorting } = useContext(FilterContext)
    const [ limit, setLimit ] = useState(4)
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        console.log(price)
        setLoading(true)
        const fetchProducts = async () => {
            try {

                const endpoint = 
                    category === 'all' 
                    ? `https://fakestoreapi.com/products?limit=${limit}` 
                    : `https://fakestoreapi.com/products/category/${category}?limit${limit}`;
                const response = await axios.get(endpoint);

                //Filter rating and price
                const filteredProducts = response.data.filter((item) => {
                    return parseInt(item.rating.rate) >= parseInt(rating) && item.price <= price
                })

                setProducts(filteredProducts)

            // Error Handling
            } catch (error) { 
                console.error('Error fetching products:', error);
                setProducts([]);
            }
            finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [category, limit, rating , price]);

    const sortedProducts = useMemo(() => {
        if (sorting === 'asc') {
            return [...products].sort((itemA, itemB) => itemA.price - itemB.price);
        } else if (sorting === 'desc') {
            return [...products].sort((itemA, itemB) => itemB.price - itemA.price);
        }
        return products;
    }, [products, sorting]);

    const handleShowMore = () => {
        setLimit(limit + 4)
    }

    return(
        <>
            <div className='navbar'>
                        E-Commerce Dashboard
                    </div>
            {loading ?
            <div className='loading-container'>Loading</div>
             :
                <div>
                    <div className='filter'>
                        <Filter/>
                    </div>
                    <div className="container">
                        <div className='product-section'>
                            { sortedProducts.map((item, index) => <Product item={item} key={index}/> )}
                        </div>
                    </div>
                    <button className='showMore' onClick={handleShowMore}>Show more</button>
                </div>
            }
        </>
    )
}

export default HomePage;