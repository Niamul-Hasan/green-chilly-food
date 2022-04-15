import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const LunchItems = ({ lunchItem }) => {
    const { img, name, ratings, price } = lunchItem;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} className='mx-auto img-fluid w-75' />
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price} </Card.Text>
                        <Card.Text><small>{ratings}</small> </Card.Text>
                        <Button variant="success">Check Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default LunchItems;