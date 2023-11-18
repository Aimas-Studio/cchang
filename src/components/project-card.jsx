import React, { forwardRef } from "react";

import "../css/project-card.css";
import RatingNumber from "./rating-number-container";

const ProjectCard = forwardRef(({ image, text, day, month, year, ratingValue, number }, ref) => {
  return (
    <div className="project-card-container" ref={ref}>
      <img 
        className="project-image"
        src={require(`../images/${image}.png`)} 
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
});

export default ProjectCard;