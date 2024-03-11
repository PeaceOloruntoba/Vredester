import React from 'react'
import bgimg from '../assets/images/jumbotronbg.jpg'

export default function Jumbotron() {
  return (
    <div className='flex gap-8 bg-opacity-20 bg- dark:bg-[#060922]'>
      <img src={bgimg} alt="" classname='absolute ' />
    </div>
  )
}
