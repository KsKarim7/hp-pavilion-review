import React from 'react';
import { Button, Container, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useHook from '../../Hooks/CustomHooks';
import pavilion from '../../images/pavi15.jfif'
import DisplayReview from '../DisplayReview/DisplayReview';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [review, setReview] = useHook();

    return (
        <div>
            <Container className='bar'>
                <div className='info'>
                    <h2>HP Budget Gaming Laptop</h2>
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

            <div>
                <div className='review-section'>
                    <h1>Some reviews from our beloved customer</h1>
                    <div className='review-part'>
                        {
                            review.slice(0, 3).map(displayReview => <DisplayReview
                                key={review.id}
                                review={displayReview}
                            ></DisplayReview>)
                        }

                    </div>


                </div>
                <div className='review-button'>
                    <Button onClick={() => navigate('/reviews')} className='btn' variant='dark'>See all Reviews here</Button>
                </div>
            </div>
        </div >
    );
};

export default Home;