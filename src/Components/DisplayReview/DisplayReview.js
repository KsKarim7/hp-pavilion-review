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

            <Card className='card' style={{ width: '17rem' }}>
                <Card.Img className='user' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <p>Rating: {rating}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayReview;