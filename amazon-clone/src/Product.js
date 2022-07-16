import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider";

function Product({id,title , image , price , rating }) {
    var stars = [];
    for(let i = 0; i < rating; i++){
        stars.push("⭐");
    }

    const [{basket} , dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image:image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                <p>{stars.map( (star) => <span>{star} </span>)}</p>
            </div>
        </div>

        <img src={image} />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
    )
}

export default Product