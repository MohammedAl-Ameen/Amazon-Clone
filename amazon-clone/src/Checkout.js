import React from 'react';
import './Checkout.css'; 
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className='cheackout'>
            <div className='checkout_left'>
                <img 
                className='cheackout_ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                alt='ad'
                />

                <div>
                    <h2 className='cheackout_title'>
                        Your Shopping Basket
                    </h2>
                    {/*Basket */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout