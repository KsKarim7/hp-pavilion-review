import { useEffect, useState } from "react"

const useHook = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return [review, setReview];
}

export default useHook;