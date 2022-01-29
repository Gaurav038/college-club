import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import OurTeam from '../components/OurTeam/OurTeam'

function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <OurTeam />
            <Footer />
        </div>
    )
}

export default Home
