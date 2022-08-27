import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/cardContext";
import {CartItem} from "./CartItem";
import toursData from '../data/tours.json';
import {formatCurrency} from '../utilities/currencyFormatter'

type CartProps = {
    isOpen: boolean
}

export function Cart({isOpen}:CartProps){
    const {closeCart, cartItems} = useCart(); 
    return(
        <Offcanvas
            placement="end" 
            show={isOpen} 
            onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={4}>
                    {cartItems.map(item=>(
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div className="fs-5 fw-bold ms-auto">
                        Total:{' '}
                        {formatCurrency(
                            cartItems.reduce((total,cartItem)=>{
                            const item = toursData.find(item=>item.id===cartItem.id);
                            return total + (item?.price || 0) * cartItem.quantity
                            } , 0 ) 
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>

        </Offcanvas>
    )
}