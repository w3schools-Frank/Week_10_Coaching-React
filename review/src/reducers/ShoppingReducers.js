export const initialState = {
    name: '',
    price: 0,
    quantity: 0,
    total: 0,
    cart: []
}

export function shoppingReducer(state, action) {

    switch (action.type) {
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

            const newProduct = {
                name: state.name,
                price: state.price,
                quantity: state.quantity
            }

            //Figuring out new total
            const sum = state.price * state.quantity;
            newState.total = state.total + sum;

            newState.cart = [...state.cart, newProduct];

            return newState;
        }

        case 'REMOVE_PRODUCT_FROM_CART': {
            let newState = { ...state }

            const foundProduct = state.cart[action.index];

            //Remove from total
            const foundProductSum = foundProduct.price * foundProduct.quantity;
            newState.total = state.total - foundProductSum;

            newState.cart.splice(action.index, 1);

            return newState;
        }

        default:
            throw Error('You gave an invalid action');
    }
}