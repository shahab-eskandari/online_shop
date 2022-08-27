import { Stack, Button } from 'react-bootstrap';
import {useCart} from '../context/cardContext';
import toursData from '../data/tours.json'
import { formatCurrency } from '../utilities/currencyFormatter';

type CartItemProps={
    id: string
    quantity: number
}

export function CartItem({id, quantity}:CartItemProps){
    const {removeItem} = useCart(); 
    const item = toursData.find(item=>item.id===id)
    if (item==null) return null
    return( 
        <Stack 
        direction='horizontal' 
        gap={3}
        className='d-flex align-items-center'>
            <div>
                <div>
                    {item.name}{" "}
                    {quantity >= 1 && (
                        <span 
                            className='text-muted'
                            style={{fontSize:"0.7rem"}}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div 
                    style={{fontSize:"0.75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
                <div className='text-muted ms-auto'>
                    {formatCurrency(item.price * quantity) }
                </div>
                <Button 
                    variant="outline-danger"
                    size='sm'
                    onClick={()=>removeItem(item.id)}
                    >
                    &times;
                </Button>
            
        </Stack>
    )
}