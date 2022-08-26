import toursData from '../data/tours.json';
import { ToursItem } from '../components/ToursItem';
import { Row, Col } from 'react-bootstrap';

export const Home = ()=>{
    return(
        <>
            <h1>All Avaiable Tours</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {toursData.map(item=>(
                    <Col key={item.id}>
                        <ToursItem {...item}></ToursItem>
                    </Col>
                ))}
            </Row>
        </>
        
    )
}