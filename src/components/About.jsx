import React from 'react'
import img2 from '../img/img2.png'
import img1 from '../img/img1.png'
import '../TotalCss/total.css'
const About = () => {
  return (
    <div className='about'>
<img src={img2} className='img2'></img>
<img src={img1} className='img1'></img>
<div className='text'>Mağazamız 2024 cü ilin əvvəllərində öz fəaliyyətinə başlamış və hal-hazırdada fəaliyyətini davam etdirməkdədir.Mağazamız Bakı şəhərində yerləşir və daxilində istədiyiniz çeşid məhsulu tapmaq imkanınız var.Xaricə və Ölkədaxili çatdırılma mövcuddur.<u><p className='under'>© ToyShop by Nəzərov</p></u> </div>
   </div>
  )
}

export default About;