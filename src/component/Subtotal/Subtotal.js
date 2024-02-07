import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import {getBasketTotal} from '../Reeducer/Reducer';
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='Subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
          <>
          <p>
            {/* part of the homework */}
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox'/>This order contains a gift
            </small>
          </>
        )}
          decimalScale={2}
          value={getBasketTotal(basket)} // part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
