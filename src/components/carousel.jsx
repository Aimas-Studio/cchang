import React, { useRef, useEffect } from "react";
import ProjectCard from './project-card';
import "../css/carousel.css";

function Carousel() {
    const carouselInnerRef = useRef(null);
    const carouselItemRef = useRef(null);
    const carouselContRef = useRef(null);
    const projectCardRef = useRef(null);
    
    
  
    useEffect(() => {
      if (carouselInnerRef.current) {
        const carouselItems = carouselInnerRef.current.getElementsByClassName('carousel-item');
        if (carouselItems.length > 0) {
          carouselItemRef.current = carouselItems[0];
        }
      }
    }, []);
  
    const handleNextClick = () => {
      if (carouselInnerRef.current && carouselItemRef.current) {
        const carouselWidth = carouselInnerRef.current.scrollWidth;
        const cardWidth = carouselItemRef.current.offsetWidth;
        const scrollPosition = carouselInnerRef.current.scrollLeft;
        const carContWidth = carouselContRef.current.offsetWidth
        const projectCardWidth = projectCardRef.current.offsetWidth;
        const spaceBetween = (carContWidth - projectCardWidth * 3) /3;


        console.log(carContWidth);
        console.log(projectCardWidth);
        console.log(spaceBetween);
  
        if (scrollPosition < carouselWidth - cardWidth + spaceBetween) {
          carouselInnerRef.current.scrollLeft = scrollPosition + cardWidth + spaceBetween;
        }
      }
    };
  
    const handlePrevClick = () => {
      if (carouselInnerRef.current && carouselItemRef.current) {
        const cardWidth = carouselInnerRef.current.offsetWidth;
        const scrollPosition = carouselInnerRef.current.scrollLeft;
  
        if (scrollPosition > 0) {
          carouselInnerRef.current.scrollLeft = scrollPosition - cardWidth;
        }
      }
    };
  
  return (
    <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel" ref={carouselContRef}>
      <div className="carousel-inner" ref={carouselInnerRef}>
        <div className="carousel-item active" ref={carouselItemRef}>
            <ProjectCard
                image = 'constructor'
                text = 'Remodelación de las oficinas comerciales de Nissan en Cuba'
                day = '21'
                month = '03'
                year = '2022'
                ratingValue = '5'
                number = '24'
                ref={projectCardRef}
            />
        </div>
        <div className="carousel-item">
            <ProjectCard
                image = 'gente1'
                text = 'Remodelación de las oficinas comerciales de Nissan en Cuba'
                day = '21'
                month = '03'
                year = '2022'
                ratingValue = '5'
                number = '24'
            />
        </div>

        <div className="carousel-item">
            <ProjectCard
                image = 'gente2'
                text = 'Remodelación de las oficinas comerciales de Nissan en Cuba'
                day = '21'
                month = '03'
                year = '2022'
                ratingValue = '5'
                number = '24'
            />
        </div>

        <div className="carousel-item">
            <ProjectCard
                image = 'constructor'
                text = 'Remodelación de las oficinas comerciales de Nissan en Cuba'
                day = '21'
                month = '03'
                year = '2022'
                ratingValue = '5'
                number = '24'
            />
        </div>
        <div className="carousel-item">
            <ProjectCard
                image = 'gente1'
                text = 'Remodelación de las oficinas comerciales de Nissan en Cuba'
                day = '21'
                month = '03'
                year = '2022'
                ratingValue = '5'
                number = '24'
            />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default Carousel;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";
// import ProjectCard from "@/Components/ProjectCard";



// function Carrousel() {
//     return(
//         <>
            
//             <div className="flex">
//                 <div className="Projects Carrous mobContainer mobileHidden">
//                 <Swiper slidesPerView={3}   navigation={true} pagination={true}  modules={[Navigation]} className="mySwiper">
//                 {
//                     Projects.map(project => (
//                         <SwiperSlide key={project._id} className="slide">
//                             <div className="slideElement" key={project._id}>
//                                 <ProjectCard project={project} />
//                                 <button onClick={()=>handleClick(project._id)} className="siteButton whiteButton extraLarge">Ver Más</button>
//                             </div>
//                         </SwiperSlide>
//                     ))
//                 }
//                 </Swiper>

//                 </div>
//                 <div className="Projects mobContainer desktopHidden">
//                 {
//                     Projects.map(project => (
//                         <div key={project._id} className="slideElement">
//                             <ProjectCard project={project} />
//                             <button onClick={()=>handleClick(project._id)} className="siteButton whiteButton extraLarge">Ver Más</button>
//                         </div>
                    
//                     ))
//                 }

//                 </div>
                
//             </div>
//         </>
//     );
// }
// export default Carrousel;