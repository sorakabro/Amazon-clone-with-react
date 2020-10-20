import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
        
        const [{ basket }] = useStateValue();
        
        
        return (
        <div className="checkout"> 




        <div className="checkout__left">

        <img className="checkout__ad" src="https://m.media-amazon.com/images/G/02/cart/empty/kettle-desaturated._CB424695504_.svg" alt="checkout_pic"/>
        {basket?.length == 0 ? (
            <div>
                <h2>Your shopping Basket is empty</h2>
                <p>You have no items in your basket. To buy one: Go to the Home page and click on a product "Add to basket" next to an item you want.</p>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/* List out all of the Checkout Products*/}
                {basket?.map((item) =>(
                    <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image={item.image}
                    price = {item.price}
                    rating = {item.rating}
                    
                    />
                ))}
                
            </div>
        )}
        </div>
        {basket.length > 0 && (
           <div className="checkout__right">
               <h1>Subtotal</h1>
              {/*<Subtotal/> */} 
           </div> 
        )}
        </div>
    );
}

export default Checkout;
