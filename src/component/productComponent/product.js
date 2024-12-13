import { useEffect, useContext } from 'react';
import axios from 'axios';
import './product.css'
import { useState } from 'react';
import ProductDetail from './productDetail';

const Product = (props) => {
    const {item} = props;
    const [isOpen, setIsOpen] = useState(false);

    const openProductModal = () => {
        setIsOpen(true)
    }

    const closeProductModal = () => {
        setIsOpen(false)
    }

    return(
        <>
            <div className='product'>
                <img className='product-image' src = {`${item.image}`} />
                <a className='product-title' onClick={openProductModal}>{item.title}</a>
                <div className='product-price'>Rs. {item.price}</div>
                <div className='product-rating'>{item.rating.rate}<span className='product-category'>{` ( ${item.rating.count} reviews )`}</span></div>
                <button className='add-to-cart'>Add To Cart</button>
            </div>
            <ProductDetail item={item} isOpen={isOpen} closeProductModal={closeProductModal}></ProductDetail>
        </>
    )
}

export default Product;