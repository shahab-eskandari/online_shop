import {Card, Button} from 'react-bootstrap';
import {formatCurrency} from '../utilities/currencyFormatter';
import {useCart} from '../context/cardContext';

type TourItemProps = {
    id: string
    name: string
    discription: string
    starting: string 
    end: string 
    duration: number
    price: number
    imgUrl: string
}

export function ToursItem(props: TourItemProps) {
    const {
        getItemsQuantity, 
        increaseQuantity, 
        decreaseQuantity, 
        removeItem} = useCart();
    
    const quantity = getItemsQuantity(props.id) ; 
    
    return (
        <Card className='h-100'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                   <span className='fs-2'>{props.name}</span>
                   <span className='ms-2 text-muted'>{formatCurrency(props.price)}</span>               
                </Card.Title>
                <div className='mt-auto'>
                    {quantity===0 ? (
                        <Button 
                            className='w-100'
                            onClick={()=>increaseQuantity(props.id)}>
                            + Add to Cart
                        </Button>
                    ) : <div 
                            className='d-flex align-items-center flex-column' 
                            style={{gap:"0.5rem"}}
                        >
                            <div 
                                className='d-flex align-items-center justify-content-center'
                                style={{gap:"0.5rem"}}
                            >
                            <Button
                                onClick={()=>decreaseQuantity(props.id)}
                            >
                                -
                            </Button>
                            <div>
                                <span className='fs-3'>{quantity}</span> in cart
                            </div>
                            <Button
                                onClick={()=>increaseQuantity(props.id)}
                            >
                                +
                            </Button>                            
                            </div>
                        <Button 
                            variant="danger" 
                            size='sm'
                            onClick={()=>removeItem(props.id)}
                        >
                            Remove
                        </Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}