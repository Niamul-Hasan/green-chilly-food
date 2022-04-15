import React from 'react';
import { Row } from 'react-bootstrap';
import dinner1 from "../../../../images/dinner/dinner1.png";
import dinner2 from "../../../../images/dinner/dinner2.png";
import dinner3 from "../../../../images/dinner/dinner3.png";
import dinner4 from "../../../../images/dinner/dinner4.png";
import dinner5 from "../../../../images/dinner/dinner5.png";
import dinner6 from "../../../../images/dinner/dinner6.png";
import DinnerItems from './DinnerItems';

const Dinner = () => {
    const dinnerItems = [
        { id: 1, name: 'light Dinner1', price: '$ 145', ratings: '5 stars', img: dinner1 },
        { id: 2, name: 'light Dinner2', price: '$ 155', ratings: '5 stars', img: dinner2 },
        { id: 3, name: 'light Dinner3', price: '$ 135', ratings: '5 stars', img: dinner3 },
        { id: 4, name: 'light Dinner4', price: '$ 145', ratings: '5 stars', img: dinner4 },
        { id: 5, name: 'light Dinner5', price: '$ 135', ratings: '5 stars', img: dinner5 },
        { id: 6, name: 'light Dinner6', price: '$ 125', ratings: '5 stars', img: dinner6 },
    ]
    return (
        <div>
            <h1 className='text-center text-info fs-2'>Our Available Items Today</h1>
            <Row xs={1} md={2} lg={3} className="container g-4 mt-3 mx-auto">
                {
                    dinnerItems.map(dinnerItem => <DinnerItems
                        key={dinnerItem.id}
                        dinnerItem={dinnerItem}
                    ></DinnerItems>)
                }
            </Row>
        </div>
    );
};

export default Dinner;