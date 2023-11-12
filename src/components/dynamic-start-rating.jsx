import "../css/dynamic-rating.css";

function DynamicRating({ image, text, day, month, year, rating, number }) {
  return (
    <div className="dynamic-rating-container">
        <div class="star-rating">
        <input type="radio" id="5-stars" name="rating" value="5" />
        <label for="5-stars" class="star">&#9733;</label>
        <input type="radio" id="4-stars" name="rating" value="4" />
        <label for="4-stars" class="star">&#9733;</label>
        <input type="radio" id="3-stars" name="rating" value="3" />
        <label for="3-stars" class="star">&#9733;</label>
        <input type="radio" id="2-stars" name="rating" value="2" />
        <label for="2-stars" class="star">&#9733;</label>
        <input type="radio" id="1-star" name="rating" value="1" />
        <label for="1-star" class="star">&#9733;</label>
        </div>
    </div>
);
}
export default DynamicRating;
