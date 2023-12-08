import { React, useRef, useEffect } from "react";
import ProjectCard from './project-card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/carousel.css";

function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="Projects Carrous mobContainer mobileHidden">
      <Swiper
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        className="flex clearfix"
        ref={swiperRef}
      >
        <SwiperSlide key={1} className="slide my-swiper-slide" zoom={1}>
          <div className='slide-item'>
            <ProjectCard
              image='constructor'
              text='Remodelación de las oficinas comerciales de Nissan en Cuba'
              day='21'
              month='03'
              year='2022'
              ratingValue='5'
              number='24'
            />
            <Link to='/Detalles'>
              <button className="ver-mas-button-grey">
                VER MÁS 
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide key={2} className="slide my-swiper-slide">
          <div className='slide-item'>
            <ProjectCard
              image='gente1'
              text='Remodelación de las oficinas comerciales de Nissan en Cuba'
              day='21'
              month='03'
              year='2022'
              ratingValue='5'
              number='24'
            />
            <Link to='/Detalles'>
              <button className="ver-mas-button-grey">
                VER MÁS 
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide key={3} className="slide my-swiper-slide">
          <div className='slide-item'>
            <ProjectCard
              image='gente2'
              text='Remodelación de las oficinas comerciales de Nissan en Cuba'
              day='21'
              month='03'
              year='2022'
              ratingValue='5'
              number='24'
            />
            <Link to='/Detalles'>
              <button className="ver-mas-button-grey">
                VER MÁS 
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide key={4} className="slide my-swiper-slide">
          <div className='slide-item'>
            <ProjectCard
              image='constructor'
              text='Remodelación de las oficinas comerciales de Nissan en Cuba'
              day='21'
              month='03'
              year='2022'
              ratingValue='5'
              number='24'
            />
            <Link to='/Detalles'>
              <button className="ver-mas-button-grey">
                VER MÁS 
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide key={5} className="slide my-swiper-slide">
          <div className='slide-item'>
            <ProjectCard
              image='gente1'
              text='Remodelación de las oficinas comerciales de Nissan en Cuba'
              day='21'
              month='03'
              year='2022'
              ratingValue='5'
              number='24'
            />
            <Link to='/Detalles'>
              <button className="ver-mas-button-grey">
                VER MÁS 
              </button>
            </Link>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
}
export default Carousel;