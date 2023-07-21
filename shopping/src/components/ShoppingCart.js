import { useContext } from "react";
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
                    {cart.map((product, i) => (
                        <tr key={i}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><i class="fa-solid fa-trash" onClick={() => ctx.handlerRemoveProduct(i)}></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>Total: {ctx.sum}</div>
        </>
    )
}

export default ShoppingCart;