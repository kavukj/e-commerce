import './filter.css'

const Filter = () => {

    const handlePrice = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className='filter-section'>
            <select className="category filter-dropdown">
                <option>All</option>
                <option>Men's Clothing</option>
                <option>Women's Clothing</option>
                <option>Jewelery</option>
                <option>Electronics</option>
            </select>

            <select className='rating filter-dropdown'>
                <option>{`< 2`}</option>
                <option>{`2 to 3`}</option>
                <option>{`3 to 4`}</option>
                <option>{`4 >`}</option>
            </select>

            <input className='price' type='range' min='200' max='5000' defaultValue='5000' name='price-range' onChange={handlePrice} />
        </div>
    )
}

export default Filter;