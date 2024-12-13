import './productDetail.css'

const ProductDetail = ({isOpen, closeProductModal, item}) => {
    console.log(isOpen)
    if(!isOpen){
        return null;
    }
    return(
        <div className="product-container">
            <div className="product-detail">
                <a className='close-button' onClick={closeProductModal}>X</a>
                <div className='left-section'>
                    <div>
                        <img className='image' src={item.image} alt='product-image'></img>
                    </div>
                </div>
                <div className='right-section'>
                <div className='product-info'>
                    <div className='title'>{item.title}</div>
                    <div className='rating'>{item.rating.rate}<span className='product-category'>{` ( ${item.rating.count} reviews )`}</span></div>
                    <div className='info'><span className='heading'>Category: </span> {item.category}</div>
                    <div className='info'><span className='heading'>Seller: </span> Unknown Seller</div>
                    <div className='heading'>Description: </div>
                    <div className='description'>{item.description}</div>
                    <div className='price'>Rs. {item.price}</div>
                </div>
                <div className='button-container'>
                    <button className='button'>Add To Cart</button>
                    <button className='button'>Add To Wishlist</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;