import "../css/rating-number.css";
import StaticRating from "./static-rating";


function RatingNumber({ ratingValue, number, starsFontSize }) {
  return (
    <div className='rating-container'>
        <StaticRating 
            rating={ratingValue}
            starsFontSize={starsFontSize}
        />
        <p className="small-number">
            ({number})
        </p>
    </div>
  );
}

export default RatingNumber;
