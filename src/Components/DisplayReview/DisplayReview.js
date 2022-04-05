import React from 'react';
import { Card } from 'react-bootstrap';
import "./DisplayReview.css"

const DisplayReview = (props) => {
    const { name, rating, reviews, picture } = props.review;
    return (
        <div>
            {/* <img src={picture} alt="" />
            <h5>Name:{name}</h5>
            <h6>Reviews:{reviews}</h6>
            <p>Rating:{rating}</p> */}

            <Card border='secondary' style={{ width: '30rem' }}>
                <Card.Img variant="top" />
                <Card.Body className='user'>
                    <img src={picture} alt="" />
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <div className='review'>
                            {reviews}

                        </div>
                    </Card.Text>
                    <Card.Title>Rating: {rating}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayReview;