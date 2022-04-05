import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='card'>
            <>
                <Card border="primary" style={{ width: '50rem' }}>
                    <Card.Header>What is context api? </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: '50rem' }}>
                    <Card.Header>What is semantic tag?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />











            </>
        </div>
    );
};

export default Blogs;