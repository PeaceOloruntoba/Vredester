import React from 'react'
import Jumbotron from './components/Homepage/Jumbotron'
import Services from './components/Homepage/Services'
import About from './components/Homepage/About'

export default function HomePage() {
  return (
    <div>
      <Jumbotron />
      <Services />
      <About/>
      <Choice />
    </div>
  )
}
