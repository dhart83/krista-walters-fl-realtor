import React from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Bio from '../components/Bio'
import LogoDisplay from '../components/LogoDisplay'
import ContactForm from '../components/ContactForm'

const Home = () => {
    return (
        <>
            <Hero />
            <div className='section'>
                <div className='container'>
                    <LogoDisplay />
                </div>
            </div>
            <div className='section' id='bio-section'>
                <div className='container'>
                    <Bio />
                </div>
            </div>
            <div className='section'>
                <div className='container'>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Home
