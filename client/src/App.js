import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Logo from './assets/Krista Walters.png'

const App = () => {
    const brand = {
        link: '/',
        img: Logo,
        alt: 'Brand Logo'
    }
    const links = {
        Home: '/',
        About: '#bio-section',
        Contact: './contact'
    }

    return (
        <>
            <GlobalStyle />
            <Navbar brand={brand} links={links} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
