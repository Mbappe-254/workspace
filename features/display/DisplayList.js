import { useSelector } from 'react-redux';
import { Col,Row } from 'reactstrap';
import AnimatedDisplay from './AnimatedDisplay';
import { SelectFeaturedCream } from '../icecreams/iceCreamSlice';
import { SelectFeaturedPromotion } from '../promotionSlice';
import {selectFeaturedPartner} from '../partners/partnernSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        SelectFeaturedCream(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
        
    console.log('display items',items);
    
    return (
        <Row>
            {items.map((item, idx) => {

                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;