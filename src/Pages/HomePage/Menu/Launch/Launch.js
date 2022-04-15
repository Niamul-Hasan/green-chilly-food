import React from 'react';
import { Row } from 'react-bootstrap';
import lunch1 from "../../../../images/lunch/lunch1.png";
import lunch2 from "../../../../images/lunch/lunch2.png";
import lunch3 from "../../../../images/lunch/lunch3.png";
import lunch4 from "../../../../images/lunch/lunch4.png";
import lunch5 from "../../../../images/lunch/lunch5.png";
import lunch6 from "../../../../images/lunch/lunch6.png";
import LunchItems from './LunchItems';

const Launch = () => {

    const lunchItems = [
        { id: 1, name: 'Light menu 1', price: '$ 125', ratings: "4.5 stars", img: lunch1 },
        { id: 2, name: 'Light menu 2', price: '$ 125', ratings: "4.5 stars", img: lunch2 },
        { id: 3, name: 'Light menu 3', price: '$ 125', ratings: "4.5 stars", img: lunch3 },
        { id: 4, name: 'Light menu 4', price: '$ 125', ratings: "4.5 stars", img: lunch4 },
        { id: 5, name: 'Light menu 5', price: '$ 125', ratings: "4.5 stars", img: lunch5 },
        { id: 6, name: 'Light menu 6', price: '$ 125', ratings: "4.5 stars", img: lunch6 },
    ]
    return (
        <div>
            <h1 className='text-center text-success fs-2'>Our Available Items Today</h1>
            <Row xs={1} md={2} lg={3} className="container g-4 mt-3 mx-auto">
                {
                    lunchItems.map(lunchItem => <LunchItems
                        key={lunchItem.id}
                        lunchItem={lunchItem}
                    ></LunchItems>)
                }
            </Row>
        </div>
    );
};

export default Launch;