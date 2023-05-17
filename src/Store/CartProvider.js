/*import React from 'react';
import CartContext from './CartContext';
import {useReducer} from 'react';

const defaultCartSate={
    products:[],
    totalAmount: 0
};

const cartReducer=(state,action)=>{
    
    if(action.type==="Add"){
        
        const existingCartItemIndex=state.products.findIndex(
            product=> product.id=== action.product.id
        );
        const existingCartItem =state.products[existingCartItemIndex]
        
        let updatedItems;
        const updatedTotalAmount=state.totalAmount + action.product.price * action.product.amount;

        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.product.amount
            }
            updatedItems=[...state.products];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else{
            updatedItems=state.products.concat(action.product);
        }
        
        return{
            products: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if(action.type==='Remove'){
        const existingCartItemIndex=state.products.findIndex(
            product=> product.id=== action.id
        );
        const existingItem=state.products[existingCartItemIndex];
        
        const updatedTotalAmount=state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems=state.products.filter(product=>product.id !== action.id);
        }else{
            const updatedItem={...existingItem,amount: existingItem.amount -1}
            updatedItems=[...state.products];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return {
            products: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
   
    return defaultCartSate;
}

const CartProvider=(props)=>{

    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartSate);

    const addItemHandler=product=>{
        dispatchCartAction({type:'Add',product: product});
    };
    const removeItemHandler=id=>{
        dispatchCartAction({type:'Remove',id: id});
    };

    const cartContext={
        products:cartState.products,
        totalAmount:cartState.totalAmount,
        addProduct: addItemHandler,
        removeProduct: removeItemHandler
    };
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;*/


import React from "react";
import CartContext from './CartContext';
import {useReducer} from 'react';

const defaultCartSate={
    products:[],
    totalAmount: 0
};

const cartReducer=(state,action)=>{
    
    if(action.type==="Add"){
        
        const existingCartItemIndex=state.products.findIndex(
            product=> product.id=== action.product.id
        );
        const existingCartItem =state.products[existingCartItemIndex]
        
        let updatedItems;
        const updatedTotalAmount=state.totalAmount + action.product.price * action.product.amount;

        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.product.amount
            }
            updatedItems=[...state.products];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else{
            updatedItems=state.products.concat(action.product);
        }
        
        return{
            products: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if(action.type==='Remove'){
        const existingCartItemIndex=state.products.findIndex(
            product=> product.id=== action.id
        );
        const existingItem=state.products[existingCartItemIndex];
        
        const updatedTotalAmount=state.totalAmount - existingItem.price;
        let updatedItems;
        updatedItems=state.products.filter(product=>product.id !== action.id);
     
       /* if(existingItem.amount===1){
            updatedItems=state.products.filter(product=>product.id !== action.id);
        }else{
            const updatedItem={...existingItem,amount: existingItem.amount -1}
            updatedItems=[...state.products];
            updatedItems[existingCartItemIndex]=updatedItem;
        }*/
        return {
            products: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    
    return defaultCartSate;
}

const CartProvider=(props)=>{
    
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartSate);

    const addItemHandler=product=>{
        dispatchCartAction({type:'Add',product: product});
    };
    const removeItemHandler=id=>{
        dispatchCartAction({type:'Remove',id: id});
    };
  
    const cartContext={
        products:cartState.products,
        totalAmount:cartState.totalAmount,
        addProduct: addItemHandler,
        removeProduct: removeItemHandler,
        
    };
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;

