import "../css/rating-number.css";
import StaticRating from "./static-rating";


function RatingNumber({ ratingValue, number }) {
  return (
    <div className='rating-container'>
        <StaticRating 
            rating={ratingValue}
        />
        <p className="small-number">
            ({number})
        </p>
    </div>
  );
}

export default RatingNumber;
