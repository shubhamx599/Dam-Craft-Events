import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Work from '../component/Work'
import Services from '../component/Service'
import EventDetails from '../partial/EventDetails'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:type" element={<EventDetails />} />

        </Routes>
    </div>
  )
}

export default Routing