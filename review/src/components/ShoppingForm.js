import { useContext } from 'react';
import { ShoppingContext } from '../context/ShoppingContext';
import './ShoppingForm.css';

function ShoppingForm() {

    const ctx = useContext(ShoppingContext);

    return (
        <>
            <form onSubmit={(e) => ctx.handlerAddToCart(e)}>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name' 
                    type='text' 
                    defaultValue='' 
                    onChange={(e) => ctx.handlerChangeName(e.target.value)} 
                />

                <label htmlFor="price">Price</label>
                <input 
                    id='price' 
                    type='number' 
                    defaultValue={0} 
                    onChange={(e) => ctx.handlerChangePrice(e.target.value)} 
                />

                <label htmlFor="quantity">Quantity</label>
                <input 
                    id='quantity' 
                    type='number' 
                    defaultValue={0}
                    onChange={(e) => ctx.handlerChangeQuantity(e.target.value)} 
                />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default ShoppingForm;