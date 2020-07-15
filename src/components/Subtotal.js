import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='subtotal'>
             <h1>Subtotal</h1>
             <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>Subtotal ({basket.length} items) : <strong>{`${value}`}</strong></p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains
                    </small>
                    </>
                )}

                decimalScale={2}
                displayType={'text'}
                value={getBasketTotal(basket)}
                thousandSeparator={true}
                prefix={'$'}
             />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
