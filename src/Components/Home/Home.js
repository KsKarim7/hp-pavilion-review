import React from 'react';
import { Button, Container, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import pavilion from '../../images/pavi15.jfif'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Container className='bar'>
                <div className='info'>
                    <h2>Best Budget Gaming laptop you can get </h2>
                    <br />
                    <h3 className='laptop-name'>HP Pavilion Gaming Laptop - 15z-ec200 </h3>
                    <br />
                    <h6>
                        Here, you get all the specifications that you need in a gaming laptop.It comes with AMD Ryzen 5 processor, NVIDIA GeForce GTX 1650(4gb), 15.6 diagonal FHD 144Hz anti-glare display with 16gb ram and 1TB 7200rpm SATA wand 256gb PCle NVme M.2 SSD.
                    </h6>
                    <br />
                    <Button variant='dark'>See Live Demo</Button>
                </div>
                <div>
                    <img src={pavilion} alt="" />
                </div>
            </Container >
            <div className='review'>
                <h1>See all reviews here</h1>


            </div>
            <div>
                <Button onClick={() => navigate('/reviews')} className='btn' variant='dark'>See all Reviews here</Button>
            </div>
        </div >
    );
};

export default Home;