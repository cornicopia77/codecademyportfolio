
import './StarRating.css';
import 'web.css';
import React, { useState } from 'react';
 
 const StarRating = () => {
     const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);
 
     return (
         <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        key={starValue}
                        type="button"
                        className={starValue <= (hover || rating) ? 'on' : 'off'}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
         </div>
     );
 };

export default StarRating;
 
 
