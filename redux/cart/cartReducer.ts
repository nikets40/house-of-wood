import { ProductData } from "../../interfaces/allProducts";
import { CartState } from "../../interfaces/reduxInterfaces";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from "./cartActionTypes";


const intitalState: CartState = {
    products: [],
}

const cartReducer = (state = intitalState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART: return addProductToCart(state, action.payload);
        case REMOVE_FROM_CART: return removeProductFromCart(state, action.payload);
        case INCREMENT_PRODUCT_QUANTITY: return incrementProductQuantity(state, action.payload);
        case DECREMENT_PRODUCT_QUANTITY: return decrementProductQuantity(state, action.payload);
    }
}

const addProductToCart = (state: CartState, product: ProductData) => {
    const products = [...state.products];
    for(var i =0; i< products.length; i++){
        if(products[i].id === product.id){
            console.log("product already in cart");
            
            products[i].cartQuantity += 1;
            return {
                ...state,
                products: products
            }
        }
    }
    return {
        ...state,
        products: [...state.products, product]
    }
}

const removeProductFromCart = (state: CartState, productID: string) => {
    return {
        ...state,
        products: state.products.filter(product => product.id !== productID)
    }
}

const incrementProductQuantity = (state: CartState, productID: string) => {
    const products = [...state.products];
    for(var i =0; i< products.length; i++){
        if(products[i].id === productID){
            products[i].cartQuantity += 1;
            return {
                ...state,
                products: products
            }
        }
    }
}

const decrementProductQuantity = (state: CartState, productID: string) => {
    const products = [...state.products];
    for(var i =0; i< products.length; i++){
        if(products[i].id === productID){
            products[i].cartQuantity -= 1;
            return {
                ...state,
                products: products
            }
        }
    }
}

export default cartReducer;