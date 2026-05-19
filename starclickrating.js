


console.log('Look at this');
console.log(3.5);
console.log('front' + 'loaded' + 'thats me')
console.log('Codecademy'.toUpperCase())
console.log(' Remove whitespace '.trim())


const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {   
        const starValue = index + 1;
        return (
            <button
            key={starValue}
            className={starValue <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}        
            onMouseLeave={() => setHover(0)}
            >
                <span className="star">&#9733;</span>       
            </button>
        );      

})}
        </div>
    );
};

