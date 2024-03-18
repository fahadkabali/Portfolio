import React from 'react'
import "./testmonials.css"
import Image1 from '../../assets/avataricon.jpg'
import Image3 from '../../assets/avataricon.jpg';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


export default function Testmonials() {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Abraham Salmon",
      subtitle: "Managing Director Agri-works Innovations Uganda Ltd",
      comment:
        "Fahad embodies unparalleled innovation and expertise, seamlessly integrating advanced technologies into their visionary software solutions. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "Chagara Emmanuel",
      subtitle: "CEO Milima Security",
      comment:
        "Impressed by Fahad's ability to adapt and learn quickly – that's a key strength in today's dynamic environment.. Good luck! 👍",
    },
  ];  
  return (
     <section className="testimonials container section" >
      <h2 className="section_title">Clients & Reviews</h2>
      <Swiper className="testimonials_container grid"
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}
      >
        {data.map(({id,image,title,subtitle,comment}) =>{
          return(
            <SwiperSlide className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="profile" className='thumb' />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
     </section>
  )
}
