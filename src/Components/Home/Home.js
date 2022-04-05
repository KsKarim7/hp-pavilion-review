import React from 'react';
import { Button, Container, } from 'react-bootstrap';
import pavilion from '../../images/pavilion.webp'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container className='bar'>
                <div className='info'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ea enim nulla, eos tenetur non fugit ad molestiae doloremque? Officiis autem facilis consectetur? Illum architecto at odio non. Sequi, tenetur?</h4>
                    <br />
                    <Button variant='dark'>See Live Demo</Button>
                </div>
                <div>
                    <img src={pavilion} alt="" />
                </div>
            </Container>
            <div className='review'>
                <h1>See all reviews here</h1>


            </div>
            <div>
                <Button className='btn' variant='dark'>See all Reviews here</Button>
            </div>
        </div>
    );
};

export default Home;