import { ProductData } from "../../interfaces/allProducts";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from "./cartActionTypes";

export const addToCart = (product: ProductData) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}

export const removeFromCart = (productID: string) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productID,
    }
}

export const incrementProductQuantity = (productID: string) => {
    return {
        type: INCREMENT_PRODUCT_QUANTITY,
        payload: productID,
    }
}

export const decrementProductQuantity = (productID: string) => {
    return {
        type: DECREMENT_PRODUCT_QUANTITY,
        payload: productID,
    }
}


