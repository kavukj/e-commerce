import { useContext, useRef, useState } from 'react'
import './filter.css'
import { FilterContext } from '../../context/filterContext';

const Filter = () => {

    const { setCategory, setRating, setPrice, setSort, category, rating, price, sorting } = useContext(FilterContext);
    const timeoutRef = useRef(null);
    const [slider, setSliderValue] = useState(price)


    const handlePrice = (e) => {
        const value = e.target.value;
        setSliderValue(value);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout
        timeoutRef.current = setTimeout(() => {
            setPrice(value);  // Update state only after user stops sliding
        }, 300); 
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleRating = (e) => {
        setRating(parseInt(e.target.value))
    }

    const handleSorting = (e) => {
        setSort(e.target.value)
    }

    const handleResetFilters = () => {
        setCategory('all');
        setRating(0);
        setPrice(5000);
        setSort('asc');
    };

    return (
        <div className='filter-section'>
                <select className="category filter-dropdown" onChange={handleCategory} value={category}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>

                <select className='rating filter-dropdown' onChange={handleRating} value={rating}>
                    <option value="0">{`None`}</option>
                    <option value="2">{`More than 2`}</option>
                    <option value="3">{`More than 3`}</option>
                    <option value="4">{`More than 4`}</option>
                </select>
                <div>
                <label for='price-range' className='price-range'>Price: Rs 0-{slider}</label>
                <input
                    className="price-slider"
                    name = "price-range"
                    type="range"
                    min="200"
                    max="5000"
                    value={slider || 5000}
                    onChange={handlePrice}
                />
                </div>
            <select className="sortPrice filter-dropdown" onChange={handleSorting} value={sorting}>
                    <option value="asc">Price Low to High</option>
                    <option value="desc">Price High to Low</option>
                </select>
            <button className='resetFilter' onClick={handleResetFilters}>Reset Filters</button>
        </div>
    )
}

export default Filter;