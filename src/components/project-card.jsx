import "../css/project-card.css";
import RatingNumber from "./rating-number-container";

function ProjectCard({ image, text, day, month, year, ratingValue, number }) {
  return (
    <div className="project-card-container">
      <img 
        className="project-image"
        src={image} 
        alt="Project Image"
      />
      <div className="project-info-container">
        <p className='project-text'>
          {text}
        </p>
        <div className="project-footer">
          
          <p className="footer-date">
            {day}-{month}-{year}
          </p>
          
          <RatingNumber
            ratingValue={ratingValue}
            number={number}

          />            
        
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
