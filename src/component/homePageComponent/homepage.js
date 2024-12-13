import { useEffect, useContext } from 'react';
import axios from 'axios';
import './homepage.css'
import { ProductsContext } from '../../context/productContext';
import Product from '../productComponent/product';
import Filter from '../filterComponent/filter';

const HomePage = () => {
    const {products, setProducts} = useContext(ProductsContext)

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products').then((response)=>{
        setProducts(response.data)
        })
    }, [])

    return(
        <>
            <div className='navbar'>
                E-Commerce Dashboard
            </div>
            <div className='filter'>
                <Filter/>
            </div>
            <div className="container">
                <div className='product-section'>
                    { products.map((item) => <Product item={item} /> )}
                </div>
            </div>
        </>
    )
}

export default HomePage;