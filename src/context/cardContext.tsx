import { createContext, ReactNode, useContext, useState } from "react";

type cartContextProviderProps = {
    children: ReactNode
}

type CardItem = {
    id: string
    quantity: number
}

type CartContext = { 
    getItemsQuantity: (id:string)=>number
    increaseQuantity: (id:string)=>void
    decreaseQuantity: (id:string)=>void
    removeItem: (id:string)=>void
}

const CartContext = createContext({} as CartContext);

const [cartItems, setCartItems] = useState<CardItem[]>([])

function getItemsQuantity (id:string){
    return cartItems.find(item=>item.id === id)?.quantity || 0
}

function increaseQuantity(id:string){
    setCartItems(currentItems=>{
        if(currentItems.find(item=>item.id===id)==null){
            return [...cartItems,{id, quantity: 1}]
        }else{
            return currentItems.map(item=>{
                if(item.id===id){
                    return {...item, quantity:item.quantity+1}
                }else{
                    return item
                }
            })
        }
    })
}

export function useCard () {
    return useContext(CartContext); 
}

export function CartContextProvider ({children}:cartContextProviderProps){
    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}