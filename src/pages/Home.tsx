import toursData from '../data/tours.json';
import { ToursItem } from '../components/ToursItem';

export const Home = ()=>{
    return(
        <>
            <h1>All Avaiable Tours</h1>
            {toursData.map(item=>(
                <ToursItem {...item}></ToursItem>
            ))}
        </>
        
    )
}