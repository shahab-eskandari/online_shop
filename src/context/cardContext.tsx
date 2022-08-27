import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../components/Cart";
import {useLocalStorage} from '../hooks/useLocalStorage'

type cartContextProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: string
    quantity: number
}

type CartContext = { 
    getItemsQuantity: (id:string)=>number
    increaseQuantity: (id:string)=>void
    decreaseQuantity: (id:string)=>void
    removeItem: (id:string)=>void
    openCart: ()=>void
    closeCart:()=>void
    cartQuantity: number 
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext);

export function useCart () {
    return useContext(CartContext); 
}

export function CartContextProvider ({children}:cartContextProviderProps){

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart-data",[])
    const [isOpen, setIsOpen] = useState(false); 

    const cartQuantity = cartItems.reduce(
        (quantity, item)=>item.quantity+quantity,0
    )

    const openCart = ()=>setIsOpen(true); 

    const closeCart = ()=>setIsOpen(false); 

    function getItemsQuantity (id:string){
    return cartItems.find(item=>item.id === id)?.quantity || 0
    }

    function increaseQuantity(id:string){
        setCartItems(currentItems=>{
            if(currentItems.find(item=>item.id===id)==null){
                return [...currentItems,{id, quantity: 1}]
            }else{
                return currentItems.map(item=>{
                    if(item.id===id){
                        return {...item, quantity:item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseQuantity(id:string){
        setCartItems(currentItems=>{
            if(currentItems.find(item=>item.id===id)?.quantity === 1){
                return currentItems.filter(item=>item.id!==id)
            }else{
                return currentItems.map(item=>{
                    if(item.id===id){
                        return {...item, quantity:item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeItem (id:string){
        setCartItems(currentItems=>{
            return currentItems.filter(item=>item.id !== id)
        })
    }

    return(
        <CartContext.Provider value={{getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem, openCart, closeCart, cartQuantity, cartItems }}>
            {children}
            <Cart isOpen={isOpen}/>
        </CartContext.Provider>
    )
}