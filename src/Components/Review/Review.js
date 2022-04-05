import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h2>Customer Reviews will be shown here</h2>
            {
                review.map(displayReview => <DisplayReview
                    key={review.id}
                    review={displayReview}
                ></DisplayReview>)
            }
        </div>
    );
};

export default Review;