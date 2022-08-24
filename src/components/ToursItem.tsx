import {Card} from 'react-bootstrap'; 

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
     return (
        <Card></Card>
     )

}