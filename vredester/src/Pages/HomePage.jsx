import React from 'react'
import Jumbotron from './components/Homepage/Jumbotron'
import About from './components/Homepage/About'
import Choice from './components/Homepage/Choice'
import Span from './components/Homepage/Span'
import Services from '../components/Services'

export default function HomePage() {
  return (
    <div>
      <Jumbotron />
      <Services />
      <About/>
      <Choice />
      <Span />
    </div>
  )
}
