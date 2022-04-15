import React from 'react';
import { Row } from 'react-bootstrap';
import breakfast1 from "../../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../../images/breakfast/breakfast6.png";
import BreakfastItems from './BreakfastItems';
const BreakFast = () => {

    const items = [
        { id: 1, name: 'Light menu 1', price: '$ 125', ratings: "4.5 stars", img: breakfast1 },
        { id: 2, name: 'Light menu 2', price: '$ 127', ratings: "5 stars", img: breakfast2 },
        { id: 3, name: 'Light menu 3', price: '$ 135', ratings: "4.5 stars", img: breakfast3 },
        { id: 4, name: 'Light menu 4', price: '$ 120', ratings: "4.3 stars", img: breakfast4 },
        { id: 5, name: 'Light menu 5', price: '$ 115', ratings: "4 stars", img: breakfast5 },
        { id: 6, name: 'Light menu 6', price: '$ 125', ratings: "4.5 stars", img: breakfast6 },
    ]
    return (
        <div>
            <h1 className='text-center text-warning fs-2'>Our Available Items Today</h1>
            <Row xs={1} md={2} lg={3} className="container g-4 mt-3 mx-auto">
                {
                    items.map(item => <BreakfastItems
                        key={item.id}
                        item={item}
                    ></BreakfastItems>)
                }
            </Row>

        </div>
    );
};

export default BreakFast;