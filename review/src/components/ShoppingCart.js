import { useContext } from 'react';
import { ShoppingContext } from "../context/ShoppingContext";

function ShoppingCart() {

    const ctx = useContext(ShoppingContext);
    const { cart } = ctx;

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, idx) => (
                        <tr key={idx}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><i className="fa-solid fa-trash-can" onClick={() => ctx.handlerRemoveFromCart(idx)}></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total: {ctx.total}</p>
        </>
    )
}

export default ShoppingCart;