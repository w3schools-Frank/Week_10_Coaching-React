import { createContext, useReducer } from 'react';
import { shoppingReducer, initialState } from '../reducers/ShoppingReducers';

export const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {

    const [state, dispatch] = useReducer(shoppingReducer, initialState);

    const handlerChangeName = (value) => {
        dispatch({ type: 'SET_NAME', name: value})
    }

    const handlerChangePrice = (value) => {
        dispatch({ type: 'SET_PRICE', price: value})
    }

    const handlerChangeQuantity = (value) => {
        dispatch({ type: 'SET_QUANTITY', quantity: value })
    }

    const handlerAddToCart = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_PRODUCT_TO_CART' })
    }

    const handlerRemoveFromCart = (index) => {
        dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', index: index })
    }

    const context = {
        name: state.name,
        price: state.price,
        quantity: state.quantity,
        total: state.total,
        cart: state.cart,
        handlerChangeName,
        handlerChangePrice,
        handlerChangeQuantity,
        handlerAddToCart,
        handlerRemoveFromCart
    }

    return (
        <ShoppingContext.Provider value={context}>
            { children }
        </ShoppingContext.Provider>
    )
}