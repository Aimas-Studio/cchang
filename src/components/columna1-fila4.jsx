import RatingNumber from "./rating-number-container";

function Col1Row4({text}) {
    return (
        <div className="backmenu-container">
            <img className='remod-image' src={require(`../images/constructor.png`)} />

            <div className="valoracion">
                <p className="bold valoracion-text"> {text} </p>
                <RatingNumber ratingValue='4' number='24' starsFontSize='starsFontSize' />
            </div>
        </div>
    );
}

export default Col1Row4;
