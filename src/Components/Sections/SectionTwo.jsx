import React from 'react'
import dpCard1 from '../../Assets/dpcard1.jpg'
import dpCard2 from '../../Assets/dpcard2.jpg'
import dpCard3 from '../../Assets/dpcard3.jpg'
import dpCard4 from '../../Assets/dpCard7.jpg'
import dpCard5 from '../../Assets/dpCard8.jpg'
import dpCard6 from '../../Assets/dpcard6.jpg'
import { Typography } from '@mui/material';
import '../../CSS/SectionOne.css';


const SectionTwo = () => {
  return (
    <section className='container-2'>
      <div className='card'>
        <img src={dpCard1} alt="Deadpool-card1" />
        <Typography className='typography-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id!
        </Typography>
      </div>
      <div className='card'>
        <img src={dpCard2} alt="Deadpool-card2" />
        <Typography className='typography-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste!
        </Typography>
      </div>
      <div className='card'>
        <img src={dpCard3} alt="Deadpool-card3" />
        <Typography className='typography-2' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus illum. In, id dolores.
        </Typography>
      </div>
      <div className='card'>
        <img src={dpCard4} alt="Deadpool-card4" />
        <Typography className='typography-2' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, laboriosam eos?
        </Typography>
      </div>
      <div className='card'>
        <img src={dpCard5} alt="Deadpool-card5" />
        <Typography className='typography-2' >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, mollitia ipsum provident soluta incidunt inventore ipsam?
        </Typography>
      </div>
      <div className='card'>
        <img src={dpCard6} alt="Deadpool-card6" />
        <Typography className='typography-2' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur odit mollitia?
        </Typography>
      </div>

    </section>
  )
}

export default SectionTwo