import { useContext } from 'react';
import './ShoppingForm.css';
import { ShoppingContext } from '../context/ShoppingContext';

function ShoppingForm() {
    const ctx = useContext(ShoppingContext);

    return (
        <>
            <h2>Shop!</h2>
            <form onSubmit={(e) => ctx.handlerAddProduct(e)}>
                <label htmlFor="product">Product</label>
                <input id="product" type="text" defaultValue="" onChange={(e) => ctx.handlerChangeName(e.target.value)}/>

                <label htmlFor="price">Price</label>
                <input id="price" type="number" defaultValue="" onChange={(e) => ctx.handlerChangePrice(e.target.value)}/>

                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" defaultValue="" onChange={(e) => ctx.handlerChangeQuantity(e.target.value)}/>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default ShoppingForm;