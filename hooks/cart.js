import React, {useContext, useState} from 'react';

const CartContext = React.createContext();

export const useCart = ()=>{
    return useContext(CartContext);
}

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    const addToCart = (item)=>
        setCart([{...item, quantity: 1}, ...cart]);

    return <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;