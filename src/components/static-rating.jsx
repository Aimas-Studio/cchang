import "../css/static-rating.css";

function StaticRating( { rating, starsFontSize } ) {
  return (
        <div 
            className={`Stars ${starsFontSize}`}
            style={{ '--rating': rating }} 
            aria-label={`Rating of this product is ${rating} out of 5.`}
        >
        </div>
    );
  }
export default StaticRating;
