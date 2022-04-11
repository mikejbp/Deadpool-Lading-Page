
import React from 'react'
import imageSec from '../../Assets/pngegg.png'
import '../../CSS/SectionOne.css'
import { Typography } from '@mui/material';


const SectionOne = () => {

  return (
    
    <section className='container'>
      
      <div>
        <Typography className='typography' variant='h4'> 
          El mercenario bocazas por excelencia...
        </Typography>
        <Typography className='typography'variant='h4'>
          El antihéroe más incorrecto
        </Typography>
      </div>
      <div>
        <img src={imageSec} alt="Deadpool" />
      </div>
    </section>
  )
};

export default SectionOne;