import React from 'react'
import imgsp1 from '../imgsplide/imgsp1.jpg'
import imgsp2 from '../imgsplide/imgsp2.jpg'
import imgsp3 from '../imgsplide/imgsp3.jpg'
import imgsp4 from '../imgsplide/imgsp4.jpg'
import '../TotalCss/total.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue'; 
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { useState } from 'react'
const Head = () => {
    const [missions, setMissions] = useState([
        {  id: 1, image: imgsp1 },
        {  id: 2, image: imgsp4 },
        {  id: 3, image: imgsp3 },
        {  id: 4, image: imgsp2 },
      ]);
  return (
    <div className='head-container'>
    <Splide aria-label="My Favorite Images" className='splide' >
        {missions.map(mission => (
          <SplideSlide key={mission.id}>
            <div className='div1'>
              <img className='img' src={mission.image} alt={mission.name} />
            </div>
          </SplideSlide>
        ))}
        
      </Splide>

    </div>
  )
}

export default Head
