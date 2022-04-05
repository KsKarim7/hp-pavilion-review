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
                            A react structure which enables us to exchange unique information and helps in solving prop-drilling from all levels of our application is called Context Api.It is the way to create global variable. Here, context provides a way to pass data through the component tree from parent to child component. As a result props don't need to be passed manually at each level.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: '50rem' }}>
                    <Card.Header>What is semantic tag?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Semantic tag is a tag clearly describes its meaning in a machine-readable way and also to both the browser and the developer.
                            It makes the the HTML code look more meaningful and easier to read.At your first glance to HTML code you will understand the tags , what are they about. The semantic element added in HTML5 are: article tag, aside tag, details tag,figcaption tag, figure tag, footer tag, header tag, main tag, mark tag, nav tag, section tag, summary tag, time tag.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />











            </>
        </div>
    );
};

export default Blogs;