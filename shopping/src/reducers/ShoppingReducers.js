import { ShoppingContext } from "../context/ShoppingContext";

export const initialState = {
    quantity: 0,
    name: '',
    price: 0.00,
    sum: 0.00,
    cart: []
}

export function shoppingReducer(state, action) {
    const { type } = action;

    switch (type) {
        case 'SET_NAME': {
            return { ...state, name: action.name }
        }

        case 'SET_PRICE': {
            return { ...state, price: action.price }
        }

        case 'SET_QUANTITY': {
            return { ...state, quantity: action.quantity }
        }

        case 'ADD_PRODUCT_TO_CART': {
            let newState = { ...state };

            let newProduct = {
                name: state.name,
                price: state.price,
                quantity: state.quantity
            }

            const sum = state.price * state.quantity;
            newState.sum = state.sum + sum;

            newState.cart = [...state.cart, newProduct];
            return newState;
        }

        case 'REMOVE_PRODUCT_FROM_CART': {
            let newState = { ...state }

            const foundProduct = newState.cart.findIndex(action.index);
            const sum = foundProduct.price * foundProduct.quantity;

            newState.sum = state.sum - sum;

            newState.cart.splice(action.index, 1);

            console.log(newState.cart);
            return newState;
        }

        default:
            throw Error('You gave an unknown action', type);
    }

    
}