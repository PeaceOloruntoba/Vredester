import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <p className="text-lg">This is the HomePage</p>
      <Footer/>
    </div>
  )
}
