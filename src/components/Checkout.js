import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className='checkout'>
            <div className="checkout__left">

            
            <img 
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            className='checkout__ad' alt='' />

            {basket?.length===0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>
                        Your have no items in your basket. To buy one or 
                        more items, click "Add to basket" next to the item.
                    </p>
                </div>
            ):(
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {
                        basket?.map((item)=>
                       {    
                           console.log(item);
                           return (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        )})
                    }
                </div>
            )}
             </div>
             {
                 basket.length>0 && (
                     <div className="checkout__right">
                         <Subtotal />
                     </div>
                 )
             }
        </div>
    )
}

export default Checkout
