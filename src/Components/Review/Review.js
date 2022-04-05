import useHook from '../../Hooks/CustomHooks';
import DisplayReview from '../DisplayReview/DisplayReview';
import "./Review.css"

const Review = () => {
    // const [review, setReview] = useState([]);

    // useEffect(() => {
    //     fetch('fakeData.json')
    //         .then(res => res.json())
    //         .then(data => setReview(data))
    // }, [])

    const [review, setReview] = useHook();
    return (
        <div>
            <h2 className='heading'>Review from our precious customers </h2>
            <div className='review-container'>
                {
                    review.map(displayReview => <DisplayReview
                        key={review.id}
                        review={displayReview}
                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default Review;